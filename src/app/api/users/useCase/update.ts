import { UserRepository } from "../repository";

// TODO: Fix type
export async function update(id: string, values: any) {
  // TODO: inject dependency
  const repository = new UserRepository();
  const user = await repository.update(id, values);

  // TODO: Create specific error
  if (!user) throw new Error("User not found");

  return user;
}
