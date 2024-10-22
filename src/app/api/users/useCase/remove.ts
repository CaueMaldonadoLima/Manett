import { UserRepository } from "../repository";

export async function remove(id: string) {
  // TODO: inject dependency
  const repository = new UserRepository();
  const user = await repository.remove(id);

  // TODO: Create specific error
  if (!user) throw new Error("User not found");

  return user;
}
