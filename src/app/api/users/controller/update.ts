import { z } from "zod";
import useCase from "../useCase";
import { lucia } from "@/lib/auth";
import {
  InputParseError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../../errors";

const schema = z.object({
  id: z.string().trim().min(1),
  user: z.any(), // TODO: Fix type
});

export async function update(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to update user info");

  const { session } = await lucia.validateSession(sessionId);

  const { data, error } = schema.safeParse(input);

  if (error) throw new InputParseError("Invalid input", { cause: error });
  // TODO: move to useCase layer
  if (session?.userId !== data.id)
    throw new UnauthorizedError("Cannot update other user's data");

  const result = await useCase.update(data.id, data.user);
  return result;
}
