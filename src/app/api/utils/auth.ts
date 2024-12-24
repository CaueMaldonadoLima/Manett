import { lucia } from "@/lib/auth";
import { UnauthenticatedError } from "@/app/api/errors";
import { cookies } from "next/headers";
import { hash } from "@node-rs/argon2";

export async function hashPassword(password: string) {
  return await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
}

export async function validateSession(sessionId: string) {
  try {
    const { session } = await lucia.validateSession(sessionId);
    if (!session) throw new UnauthenticatedError("Invalid session");
    return session;
  } catch (error) {
    throw new UnauthenticatedError(
      "Must be logged in to access this resource",
      { cause: error },
    );
  }
}

export function getSessionId() {
  return cookies().get(lucia.sessionCookieName)?.value;
}
