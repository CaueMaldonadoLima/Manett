import useCase from "@/app/api/auth/useCase";
import { cookies } from "next/headers";

export async function signInEmail() {
  const emptyCookie = await useCase.signOut();

  cookies().set(emptyCookie.name, emptyCookie.value, emptyCookie.attributes);

  return emptyCookie;
}
