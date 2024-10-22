import { NotFoundError } from "../../errors";
import { UserRepository } from "../repository";

// TODO: Fix type
export async function update(id: string, values: any) {
  // TODO: inject dependency
  const repository = new UserRepository();
  const user = await repository.update(id, values);

  if (!user) throw new NotFoundError("User not found");

  return user;
}
