import { z } from "zod";
import useCase from "@/app/api/bank-accounts/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";
import { insertBankAccountSchema } from "../schema";

const schema = insertBankAccountSchema
  .pick({
    title: true,
    description: true,
    iconName: true,
    balance: true,
  })
  .partial()
  .extend({ id: z.string().trim().min(10) })
  .strict();

export async function update(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to update bank account");

  const data = util.validateInput(input, schema);

  return await useCase.update(data, sessionId);
}
