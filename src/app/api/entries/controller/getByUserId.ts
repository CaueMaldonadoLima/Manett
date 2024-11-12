import { z } from "zod";
import useCase from "@/app/api/entries/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";

const schema = z
  .object({
    userId: z.string().trim().min(1),
  })
  .strict();

export async function getByUserId(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to get entry info");

  const data = util.validateInput(input, schema);

  return await useCase.getByUserId(data.userId, sessionId);
}
