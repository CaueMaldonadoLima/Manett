import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/categories/repository";
import util from "@/app/api/utils";

export async function remove(id: string, sessionId: string) {
  const session = await util.validateSession(sessionId);

  const category = await repository.remove(id);

  if (!category) throw new NotFoundError("Category not found");
  if (session.userId !== category.userId)
    throw new UnauthorizedError("Cannot delete other user's categories");

  return category;
}
