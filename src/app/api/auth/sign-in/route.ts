import { users } from "@/app/api/users/schema";
import { lucia } from "@/lib/auth";
import { db } from "@/lib/db";
import { verify } from "@node-rs/argon2";
import { eq, and } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { accounts, Provider } from "../schema";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const [user] = await db
    .select({
      id: users.id,
      email: users.email,
      username: users.username,
      password: accounts.credential,
    })
    .from(users)
    .leftJoin(accounts, eq(users.id, accounts.userId))
    .where(
      and(eq(users.email, email), eq(accounts.provider, Provider.password)),
    );

  if (!user) return Response.json({ status: 404, message: "User not found" });

  const isValidPassword = await verify(user.password ?? "", password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  if (!validPassword)
    return Response.json({ status: 401, message: "Wrong credentials" });

  // create cookie
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
