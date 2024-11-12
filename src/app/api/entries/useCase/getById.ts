import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/entries/repository";
import util from "@/app/api/utils";

export async function getById(id: string, sessionId: string) {
  const session = await util.validateSession(sessionId);

  const entry = await repository.getById(id);

  if (!entry) throw new NotFoundError("Entry not found");
  if (session.userId !== entry.userId)
    throw new UnauthorizedError("Cannot get other user's entries");

  return entry;
}
