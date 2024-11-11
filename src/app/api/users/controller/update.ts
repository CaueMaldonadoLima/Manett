import { z } from "zod";
import useCase from "@/app/api/users/useCase";
import { lucia } from "@/lib/auth";
import {
  InputParseError,
  UnauthenticatedError,
  UnauthorizedError,
} from "@/app/api/errors";
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

  const { session } = await lucia.validateSession(sessionId);

  const { data, error } = schema.safeParse(input);

  if (error) throw new InputParseError("Invalid input", { cause: error });
  if (session?.userId !== data.id)
    throw new UnauthorizedError("Cannot update other user's data");

  const result = await useCase.update(data.id, data);
  return result;
}
