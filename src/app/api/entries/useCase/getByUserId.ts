import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/entries/repository";
import util from "@/app/api/utils";

export async function getByUserId(userId: string, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session.userId !== userId)
    throw new UnauthorizedError("Cannot get other user's entries");

  const entries = await repository.getByUserId(userId);

  if (!entries || entries.length == 0)
    throw new NotFoundError("No entries found");

  return entries;
}
