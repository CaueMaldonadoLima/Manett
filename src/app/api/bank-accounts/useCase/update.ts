import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/bank-accounts/repository";
import util from "@/app/api/utils";
import { BankAccount } from "../schema";

export async function update(data: Partial<BankAccount>, sessionId: string) {
  const session = await util.validateSession(sessionId);

  const bankAccount = await repository.update(data.id!, data);

  if (!bankAccount) throw new NotFoundError("Bank account not found");
  if (session.userId !== bankAccount.userId)
    throw new UnauthorizedError("Cannot update other user's bank accounts");

  return bankAccount;
}
