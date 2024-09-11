import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { googleAuth, lucia } from "@/lib/auth";
import { db } from "@/lib/db";
import { users } from "@/app/api/users/schema";
import { eq } from "drizzle-orm";
import { generateIdFromEntropySize } from "lucia";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("google_oauth_state")?.value ?? null;
  const codeVerifier = cookies().get("google_code_verifier")?.value ?? null;

  if (!code || !state || !storedState || state !== storedState || !codeVerifier)
    return new Response("error", {
      status: 400,
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
      .select()
      .from(users)
      .where(eq(users.googleId, googleUser.sub))
      .limit(1);

    // user exists
    if (user) {
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

      return NextResponse.redirect("http://localhost:3000/");
    }

    // user does not exist or does not have google linked

    // check for account with same email
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, googleUser.email))
      .limit(1);

    // user exists but didnt have google login
    if (existingUser) {
      await db
        .update(users)
        .set({ googleId: googleUser.sub })
        .where(eq(users.id, existingUser.id));
    } else {
      const userId = generateIdFromEntropySize(10); // 16 characters long

      await db.insert(users).values({
        id: userId,
        googleId: googleUser.sub,
        firstName: googleUser.given_name,
        lastName: googleUser.family_name,
        email: googleUser.email,
      });
    }

    return NextResponse.redirect("http://localhost:3000/");
  } catch (e) {
    if (e instanceof OAuth2RequestError) {
      return new Response("invalid code", {
        status: 400,
      });
    }

    return new Response(null, {
      status: 500,
    });
  }
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
