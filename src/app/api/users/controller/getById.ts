import { z } from "zod";
import useCase from "../useCase";
import { lucia } from "@/lib/auth";
import {
  InputParseError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../../errors";

const schema = z.string().trim().min(1);

export async function getById(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to get user info");

  const { session } = await lucia.validateSession(sessionId);

  const { data, error } = schema.safeParse(input);

  if (error) throw new InputParseError("Invalid input", { cause: error });
  // TODO: move to useCase layer
  if (session?.userId !== data)
    throw new UnauthorizedError("Cannot get other user's data");

  const result = await useCase.getById(data);
  return result;
}
