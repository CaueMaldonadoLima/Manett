import repository from "@/app/api/auth/repository";
import util from "@/app/api/utils";
import { NotFoundError, UnauthorizedError } from "../../errors";

type SigninData = {
  email: string;
  password: string;
};

export async function signInEmail(data: SigninData) {
  // get user data
  const userAccount = await repository.account.getByEmail(data.email);
  if (!userAccount) throw new NotFoundError("User not found");

  // verify password
  const isValidPassword = util.verifyPassword(
    userAccount.credential,
    data.password,
  );
  if (!isValidPassword) throw new UnauthorizedError("Wrong credentials");

  // create session
  const cookie = await repository.session.create({
    userId: userAccount.userId,
    email: userAccount.email,
  });

  const { credential, ...user } = userAccount;

  return { cookie, user };
}
