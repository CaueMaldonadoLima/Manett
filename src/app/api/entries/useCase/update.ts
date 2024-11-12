import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/entries/repository";
import util from "@/app/api/utils";
import { Entry } from "../schema";

export async function update(data: Partial<Entry>, sessionId: string) {
  const session = await util.validateSession(sessionId);

  const entry = await repository.update(data.id!, data);

  if (!entry) throw new NotFoundError("Entry not found");
  if (session.userId !== entry.userId)
    throw new UnauthorizedError("Cannot update other user's entries");

  return entry;
}
