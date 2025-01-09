import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/bank-accounts/repository";
import util from "@/app/api/utils";

export async function getById(id: string, sessionId: string) {
  const session = await util.validateSession(sessionId);

  const bankAccount = await repository.getById(id);

  if (!bankAccount) throw new NotFoundError("Bank account not found");
  if (session.userId !== bankAccount.userId)
    throw new UnauthorizedError("Cannot get other user's bank accounts");

  return bankAccount;
}
