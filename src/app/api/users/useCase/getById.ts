import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import { UserRepository } from "@/app/api/users/repository";
import util from "@/app/api/utils";

export async function getById(id: string, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session.userId !== id)
    throw new UnauthorizedError("Cannot get other user's data");

  const repository = new UserRepository();
  const user = await repository.getById(id);

  if (!user) throw new NotFoundError("User not found");

  return user;
}
