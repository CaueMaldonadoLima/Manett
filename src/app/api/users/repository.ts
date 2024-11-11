import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { User, users } from "@/app/api/users/schema";

export class UserRepository {
  async getById(id: string): Promise<User | undefined> {
    try {
      const [result] = await db.select().from(users).where(eq(users.id, id));
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, values: Partial<User>): Promise<User | undefined> {
    try {
      const [result] = await db
        .update(users)
        .set(values)
        .where(eq(users.id, id))
        .returning();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<User | undefined> {
    try {
      const [result] = await db
        .delete(users)
        .where(eq(users.id, id))
        .returning();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
