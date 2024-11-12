import { z } from "zod";
import useCase from "@/app/api/entries/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";
import { insertEntrySchema } from "../schema";

const schema = insertEntrySchema
  .pick({
    title: true,
    description: true,
    value: true,
    type: true,
    date: true,
    categoryId: true,
    bankAccountId: true,
  })
  .partial()
  .extend({ id: z.string().trim().min(10) })
  .strict();

export async function update(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to update entry");

  const data = util.validateInput(input, schema);
  const entry = { ...data, value: data.value?.toString() };

  return await useCase.update(entry, sessionId);
}
