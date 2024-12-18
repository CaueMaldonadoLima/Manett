import { UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/categories/repository";
import util from "@/app/api/utils";
import { CreateCategory } from "../schema";

export async function create(data: CreateCategory, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session.userId !== data.userId)
    throw new UnauthorizedError("Cannot create categories for another user");

  const category = await repository.create(data);

  return category;
}
