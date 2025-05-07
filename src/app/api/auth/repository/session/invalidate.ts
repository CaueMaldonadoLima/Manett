import { lucia } from "@/lib/auth";
import { Cookie } from "lucia";

export async function invalidate(sessionId: string): Promise<Cookie> {
  await lucia.invalidateSession(sessionId);
  return lucia.createBlankSessionCookie();
}
