import { lucia } from "@/lib/auth";
import { Cookie } from "lucia";

export async function create({
  userId,
  email,
}: {
  userId: string;
  email: string;
}): Promise<Cookie> {
  const session = await lucia.createSession(userId, { email });
  const sessionCookie = lucia.createSessionCookie(session.id);
  return sessionCookie;
}
