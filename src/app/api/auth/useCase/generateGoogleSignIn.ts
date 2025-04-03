import { googleAuth } from "@/lib/auth";
import { generateCodeVerifier, generateState } from "arctic";

export async function generateGoogleSignIn() {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await googleAuth.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  return { state, codeVerifier, url };
}
