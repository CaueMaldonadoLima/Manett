import { NotFoundError } from "@/app/api/errors";
import { UserRepository } from "@/app/api/users/repository";
import { User } from "@/app/api/users/schema";

export async function update(id: string, values: Partial<User>) {
  const repository = new UserRepository();
  const user = await repository.update(id, values);

  if (!user) throw new NotFoundError("User not found");

  return user;
}
