import { users } from "@/app/api/users/schema";
import { lucia } from "@/lib/auth";
import { db } from "@/lib/db";
import { verify } from "@node-rs/argon2";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = (
    await db
      .select({
        id: users.id,
        email: users.email,
        username: users.username,
        password: users.password,
      })
      .from(users)
      .where(eq(users.email, email))
      .limit(1)
  )[0];

  // TODO: Add error
  if (!user) return;

  const validPassword = await verify(user.password ?? "", password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  // TODO: Add error
  if (!validPassword) return;

  const session = await lucia.createSession(user.id, {
    email: user.email,
    username: user.username,
  });

  const sessionCookie = lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  redirect("/");
}
