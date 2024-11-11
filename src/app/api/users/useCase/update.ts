import { NotFoundError, UnauthorizedError } from "@/app/api/errors";
import { UserRepository } from "@/app/api/users/repository";
import { User } from "@/app/api/users/schema";
import util from "@/app/api/utils";

export async function update(data: Partial<User>, sessionId: string) {
  const session = await util.validateSession(sessionId);

  if (session.userId !== data.id)
    throw new UnauthorizedError("Cannot update other user's data");

  const repository = new UserRepository();
  const user = await repository.update(data.id, data);

  if (!user) throw new NotFoundError("User not found");

  return user;
}
