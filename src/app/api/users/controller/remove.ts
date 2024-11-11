import { z } from "zod";
import useCase from "@/app/api/users/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";

const schema = z.string().trim().min(1);

export async function remove(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to delete user info");

  const data = util.validateInput(input, schema);

  return await useCase.remove(data, sessionId);
}
