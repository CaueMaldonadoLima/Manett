import { NotFoundError } from "../../errors";
import { UserRepository } from "../repository";

export async function getById(id: string) {
  // TODO: inject dependency
  const repository = new UserRepository();
  const user = await repository.getById(id);

  if (!user) throw new NotFoundError("User not found");

  return user;
}
