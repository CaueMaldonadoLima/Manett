import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { googleAuth, lucia } from "@/lib/auth";
import { db } from "@/lib/db";
import { users } from "@/app/api/users/schema";
import { eq, and, or, sql } from "drizzle-orm";
import { generateIdFromEntropySize } from "lucia";
import { accounts, Provider } from "../../schema";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("google_oauth_state")?.value ?? null;
  const codeVerifier = cookies().get("google_code_verifier")?.value ?? null;

  if (!code || !state || !storedState || state !== storedState || !codeVerifier)
    return Response.json({
      status: 400,
      message: "Problem with google auth setup",
    });

  try {
    const tokens = await googleAuth.validateAuthorizationCode(
      code,
      codeVerifier,
    );

    const response = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      },
    );

    const googleUser: GoogleUser = await response.json();

    // get account by googleId
    const [user] = await db
      .select({
        id: users.id,
        email: users.email,
        username: users.username,
        providers: sql`ARRAY_AGG(accounts.provider) AS providers`, // creates array of providers
      })
      .from(accounts)
      .leftJoin(users, eq(users.id, accounts.userId))
      .where(
        or(
          and(
            eq(accounts.provider, Provider.google),
            eq(accounts.credential, googleUser.sub),
          ),
          and(
            eq(accounts.provider, Provider.password),
            eq(users.email, googleUser.email),
          ),
        ),
      )
      .groupBy(users.id);

    // user does not exist
    if (!user) {
      const userId = generateIdFromEntropySize(10); // 16 characters long
      await db.insert(users).values({
        id: userId,
        firstName: googleUser.given_name,
        lastName: googleUser.family_name,
        email: googleUser.email,
      });

      await createAccount(userId, googleUser);
    }
    // user exists but does not have google provider
    else if (!(user.providers as Array<Provider>).includes(Provider.google)) {
      await createAccount(user.id as string, googleUser);
    }
    // user exists but does not have google provider
    else if (!new Set(user.providers as Array<Provider>).has(Provider.google)) {
      console.log("b");
      console.log(user);
      const accountId = generateIdFromEntropySize(10); // 16 characters long
      const account = {
        id: accountId,
        userId: user.id as string,
        provider: Provider.google,
        credential: googleUser.sub,
      };
      await db.insert(accounts).values(account);
    }
    // user exists but does not have google provider
    else if (!new Set(user.providers as Array<Provider>).has(Provider.google)) {
      console.log("b");
      console.log(user);
      const accountId = generateIdFromEntropySize(10); // 16 characters long
      const account = {
        id: accountId,
        userId: user.id as string,
        provider: Provider.google,
        credential: googleUser.sub,
      };
      await db.insert(accounts).values(account);
    }

    const session = await lucia.createSession(user.id as string, {
      email: user.email,
      username: user.username,
    });
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    const session = await lucia.createSession(user.id as string, {
      email: user.email,
      username: user.username,
    });
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    const session = await lucia.createSession(user.id as string, {
      email: user.email,
      username: user.username,
    });
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    const operation = !!user ? "in" : "up";
    return Response.json({
      status: operation === "in" ? 200 : 201,
      message: `Signed ${operation} successfully`,
    });
  } catch (e) {
    if (e instanceof OAuth2RequestError)
      return Response.json({ status: 400, message: "Invalid code" });

    return Response.json({
      status: 500,
      message: "Something went wrong with google login",
    });
  }
}

async function createAccount(userId: string, googleUser: GoogleUser) {
  const accountId = generateIdFromEntropySize(10); // 16 characters long
  const account = {
    id: accountId,
    userId,
    provider: Provider.google,
    credential: googleUser.sub,
  };
  return await db.insert(accounts).values(account);
}

export type GoogleUser = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
};
