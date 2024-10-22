import { NotFoundError } from "../../errors";
import { UserRepository } from "../repository";

export async function remove(id: string) {
  // TODO: inject dependency
  const repository = new UserRepository();
  const user = await repository.remove(id);

  if (!user) throw new NotFoundError("User not found");

  return user;
}
