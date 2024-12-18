import { UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/bank-accounts/repository";
import util from "@/app/api/utils";
import { CreateBankAccount } from "../schema";

export async function create(data: CreateBankAccount, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session.userId !== data.userId)
    throw new UnauthorizedError("Cannot create bank account for another user");

  const bankAccount = await repository.create(data);

  return bankAccount;
}
