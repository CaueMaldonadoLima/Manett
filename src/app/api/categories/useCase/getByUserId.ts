import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/categories/repository";
import util from "@/app/api/utils";

export async function getByUserId(userId: string, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session.userId !== userId)
    throw new UnauthorizedError("Cannot get other user's categories");

  const categories = await repository.getByUserId(userId);

  if (!categories || categories.length == 0)
    throw new NotFoundError("No categories found");

  return categories;
}
