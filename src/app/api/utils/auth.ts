import { lucia } from "@/lib/auth";
import { UnauthenticatedError } from "@/app/api/errors";
import { cookies, type UnsafeUnwrappedCookies } from "next/headers";

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
  return (cookies() as unknown as UnsafeUnwrappedCookies).get(lucia.sessionCookieName)?.value;
}
