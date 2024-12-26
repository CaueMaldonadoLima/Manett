import { z } from "zod";
import useCase from "@/app/api/auth/useCase";
import util from "@/app/api/utils";
import { cookies } from "next/headers";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signInEmail(input: z.infer<typeof schema>) {
  const data = util.validateInput(input, schema);
  const { cookie, ...result } = await useCase.signInEmail(data);

  cookies().set(cookie.name, cookie.value, cookie.attributes);

  return result;
}
