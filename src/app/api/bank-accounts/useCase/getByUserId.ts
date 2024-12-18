import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/bank-accounts/repository";
import util from "@/app/api/utils";

export async function getByUserId(userId: string, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session.userId !== userId)
    throw new UnauthorizedError("Cannot get other user's bank accounts");

  const bankAccount = await repository.getByUserId(userId);

  if (!bankAccount || bankAccount.length == 0)
    throw new NotFoundError("No bank accounts found");

  return bankAccount;
}
