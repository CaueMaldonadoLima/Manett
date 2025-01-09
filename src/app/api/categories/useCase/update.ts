import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import repository from "@/app/api/categories/repository";
import util from "@/app/api/utils";
import { Category } from "../schema";

export async function update(data: Partial<Category>, sessionId: string) {
  const session = await util.validateSession(sessionId);

  const category = await repository.update(data.id!, data);

  if (!category) throw new NotFoundError("Category not found");
  if (session.userId !== category.userId)
    throw new UnauthorizedError("Cannot update other user's categories");

  return category;
}
