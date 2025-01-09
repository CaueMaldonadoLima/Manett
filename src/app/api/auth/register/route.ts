import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { users } from "@/app/api/users/schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { lucia } from "@/lib/auth";
import { accounts, Provider } from "../schema";

export async function POST(request: Request) {
  const { email, password, firstName, lastName } = await request.json();

  const [sameEmailUser] = await db
    .select({
      id: users.id,
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (sameEmailUser)
    return Response.json({
      status: 409,
      message: "User with this email already exists",
    });

  const userId = generateIdFromEntropySize(10); // 16 characters long
  const user = {
    id: userId,
    email: email,
    firstName: firstName,
    lastName: lastName,
  };
  await db.insert(users).values(user);

  // create account
  const accountId = generateIdFromEntropySize(10); // 16 characters long
  const hashedPassword = await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const account = {
    id: accountId,
    userId: userId,
    provider: Provider.password,
    credential: hashedPassword,
  };
  await db.insert(accounts).values(account);

  // create session
  const session = await lucia.createSession(userId, { email });
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  redirect("/");
}
