import { UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/entries/repository";
import util from "@/app/api/utils";
import { CreateEntry } from "../schema";

export async function create(data: CreateEntry, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session.userId !== data.userId)
    throw new UnauthorizedError("Cannot create entries for another user");

  const entry = await repository.create(data);

  return entry;
}
