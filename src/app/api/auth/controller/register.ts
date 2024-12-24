import { insertUserSchema } from "@/app/api/users/schema";
import { Provider } from "@/app/api/auth/schema";
import { cookies } from "next/headers";
import { z } from "zod";
import useCase from "@/app/api/auth/useCase";
import util from "@/app/api/utils";

const providerEnum = Object.values(Provider) as [Provider, ...Provider[]];

const schema = insertUserSchema
  .strict()
  .omit({ id: true, createdAt: true, updatedAt: true })
  .extend({
    provider: z.enum(providerEnum),
    credential: z.string().min(8),
  });

export async function register(input: z.infer<typeof schema>) {
  const data = util.validateInput(input, schema);

  const registerData = {
    ...data,
    userId: util.generateId(),
    accountId: util.generateId(),
  };

  const { cookie, ...result } = await useCase.register(registerData);

  cookies().set(cookie.name, cookie.value, cookie.attributes);

  return result;
}
