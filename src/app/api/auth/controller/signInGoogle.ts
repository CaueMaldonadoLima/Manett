import useCase from "@/app/api/auth/useCase";
import { cookies } from "next/headers";

export async function signInGoogle() {
  const { state, codeVerifier, url } = await useCase.generateGoogleSignIn();
  const googleCookieAttributes = {
    secure: true,
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10,
  };

  cookies().set("google_oauth_state", state, googleCookieAttributes);
  cookies().set("google_code_verifier", codeVerifier, googleCookieAttributes);

  return url;
}
