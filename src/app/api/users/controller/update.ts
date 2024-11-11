import { z } from "zod";
import useCase from "@/app/api/users/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";
import { insertUserSchema } from "@/app/api/users/schema";

const schema = insertUserSchema
  .pick({
    firstName: true,
    lastName: true,
    username: true,
  })
  .partial()
  .extend({ id: z.string().trim().min(10) });

export async function update(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to update user info");

  const data = util.validateInput(input, schema);

  return await useCase.update(data, sessionId);
}
