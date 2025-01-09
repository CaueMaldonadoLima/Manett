import { users } from "@/app/api/users/schema";
import { db, Redis } from "@/lib/db";
import { eq } from "drizzle-orm";
import { type Adapter, type DatabaseSession, type DatabaseUser } from "lucia";

export class RedisAdapter implements Adapter {
  sessionStorage: Redis;

  constructor(session: Redis) {
    this.sessionStorage = session;
  }

  async getUserSessions(userId: string): Promise<DatabaseSession[]> {
    const sessionKeys = await this.sessionStorage.smembers(
      `user_sessions:${userId}`,
    );

    const pipeline = this.sessionStorage.pipeline();
    sessionKeys.forEach((key) => pipeline.get<DatabaseSession>(key));
    const sessions = await pipeline.exec();

    return sessions.filter((s) => s !== null) as DatabaseSession[];
  }

  async setSession(session: DatabaseSession): Promise<void> {
    const redisKey = `session:${session.id}`;
    const expiresAt = calculateExpiration(session.expiresAt);

    // Set session with TTL
    await this.sessionStorage.set(redisKey, session, {
      ex: expiresAt,
    });

    // Add session ID to the user's session set
    await this.sessionStorage.sadd(`user_sessions:${session.userId}`, redisKey);
  }

  async updateSessionExpiration(
    sessionId: string,
    expiresAt: Date,
  ): Promise<void> {
    const redisKey = `session:${sessionId}`;
    const newExpiresAt = calculateExpiration(expiresAt);

    await this.sessionStorage.expire(redisKey, newExpiresAt);
  }

  async deleteSession(sessionId: string): Promise<void> {
    const redisKey = `session:${sessionId}`;

    await this.sessionStorage.del(redisKey);
  }

  async deleteUserSessions(userId: string): Promise<void> {
    const sessionKeys = await this.sessionStorage.smembers(
      `user_sessions:${userId}`,
    );

    const pipeline = this.sessionStorage.pipeline();
    sessionKeys.forEach((key) => pipeline.del(key));
    await pipeline.exec();

    await this.sessionStorage.del(`user_sessions:${userId}`);
  }

  deleteExpiredSessions(): Promise<void> {
    throw new Error(
      "Method not implemented, sessions are deleted automatically",
    );
  }

  async getSessionAndUser(
    sessionId: string,
  ): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]> {
    const redisKey = `session:${sessionId}`;
    const session = await this.sessionStorage.get<DatabaseSession>(redisKey);

    // No session found
    if (!session) return [null, null];

    // convert session expiresAt to date
    session.expiresAt = new Date(session.expiresAt);

    // TODO: user repository
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))
      .then((rows) => rows[0] || null);

    return [
      session,
      {
        id: user.id,
        attributes: {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
        },
      },
    ];
  }
}
export function calculateExpiration(expiresAt: Date) {
  return Math.floor((expiresAt.getTime() - Date.now()) / 1000);
}
