import { lucia } from "@/lib/auth";
import { UnauthenticatedError } from "@/app/api/errors";
import { cookies } from "next/headers";

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
