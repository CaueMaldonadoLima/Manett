import { NotFoundError } from "@/app/api/errors";
import { UserRepository } from "@/app/api/users/repository";

export async function getById(id: string) {
  const repository = new UserRepository();
  const user = await repository.getById(id);

  if (!user) throw new NotFoundError("User not found");

  return user;
}
