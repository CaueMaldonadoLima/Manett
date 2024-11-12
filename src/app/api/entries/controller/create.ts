import { z } from "zod";
import useCase from "@/app/api/entries/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";
import { insertEntrySchema } from "../schema";

const schema = insertEntrySchema
  .strict()
  .omit({ id: true, createdAt: true, updatedAt: true });

export async function create(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to create entry");

  const data = util.validateInput(input, schema);
  const entry = {
    ...data,
    id: util.generateId(),
    value: data.value.toString(),
  };

  return await useCase.create(entry, sessionId);
}
