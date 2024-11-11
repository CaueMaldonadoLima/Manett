import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import { UserRepository } from "@/app/api/users/repository";
import util from "@/app/api/utils";

export async function remove(id: string, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session?.userId !== id)
    throw new UnauthorizedError("Cannot delete other user's account");

  const repository = new UserRepository();
  const user = await repository.remove(id);

  if (!user) throw new NotFoundError("User not found");

  return user;
}
