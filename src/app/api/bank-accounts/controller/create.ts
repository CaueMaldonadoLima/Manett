import { z } from "zod";
import useCase from "@/app/api/bank-accounts/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";
import { insertBankAccountSchema } from "../schema";

const schema = insertBankAccountSchema
  .strict()
  .omit({ id: true, createdAt: true, updatedAt: true });

export async function create(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to create bank account");

  const data = util.validateInput(input, schema);
  const bankAccount = {
    ...data,
    id: util.generateId(),
  };

  return await useCase.create(bankAccount, sessionId);
}
