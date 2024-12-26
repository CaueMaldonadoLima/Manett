import repository from "@/app/api/auth/repository";
import util from "@/app/api/utils";
import { NotFoundError, UnauthorizedError } from "../../errors";

type SigninData = {
  email: string;
  password: string;
};

export async function signInEmail(data: SigninData) {
  // get user data
  const user = await repository.account.getByEmail(data.email);
  if (!user) throw new NotFoundError("User not found");

  // verify password
  const isValidPassword = util.verifyPassword(user.credential, data.password);
  if (!isValidPassword) throw new UnauthorizedError("Wrong credentials");

  // create session
  const cookie = await repository.session.create({
    userId: user.id,
    email: user.email,
  });

  return { cookie, user };
}
