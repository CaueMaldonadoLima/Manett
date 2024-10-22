import { Lucia } from "lucia";
import { Google } from "arctic";
import { RedisAdapter } from "./adapters/redisAdapter";
import { redis } from "../db";

type DatabaseUserAttributes = {
  firstName: string;
  lastName: string;
  username: string | null;
};

const adapter = new RedisAdapter(redis);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => ({
    firstName: attributes.firstName,
    lastName: attributes.lastName,
    username: attributes.username,
  }),
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

export const googleAuth = new Google(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  "http://localhost:3000/api/auth/google/callback",
);
