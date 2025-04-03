import { CreateAccount, Provider } from "@/app/api/auth/schema";
import { UniqueConstraintError } from "@/app/api/errors";
import { CreateUser } from "@/app/api/users/schema";
import userRepository from "@/app/api/users/repository";
import repository from "@/app/api/auth/repository";
import util from "@/app/api/utils";

type RegisterData = Omit<CreateUser, "id"> & {
  provider: Provider;
  credential: string;
  userId: string;
  accountId: string;
};

export async function register(data: RegisterData) {
  // check same email
  const duplicateEmail = await userRepository.getByEmail(data.email);
  if (duplicateEmail)
    throw new UniqueConstraintError("User with this email already exists");

  // check same username
  if (data.username !== undefined && data.username !== null) {
    const duplicateUsername = await userRepository.getByUsername(data.username);
    if (duplicateUsername)
      throw new UniqueConstraintError("User with this username already exists");
  }

  // create user
  const userData: CreateUser = {
    id: data.userId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    username: data.username,
  };
  const user = await userRepository.create(userData);

  // create account
  const password = await util.hashPassword(data.credential);
  const accountData: CreateAccount = {
    id: data.accountId,
    userId: user!.id,
    provider: data.provider,
    credential: password,
  };
  const account = await repository.account.create(accountData);
  const { credential, ...cleanAccount } = account;

  // create session
  const cookie = await repository.session.create({
    userId: user!.id,
    email: user!.email,
  });

  return { user, cleanAccount, cookie };
}
