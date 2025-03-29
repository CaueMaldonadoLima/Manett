import { CreateUser } from "@/app/api/users/schema";
import { googleAuth } from "@/lib/auth";
import repository from "@/app/api/auth/repository";
import userRepository from "@/app/api/users/repository";
import axios from "axios";
import util from "@/app/api/utils";
import { CreateAccount, Provider } from "../schema";

type GoogleCallbackData = {
  code: string;
  verifier: string;
};

type GoogleUser = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
};

export async function processGoogleSignIn(data: GoogleCallbackData) {
  const tokens = await googleAuth.validateAuthorizationCode(
    data.code,
    data.verifier,
  );

  const response = await axios.get(
    "https://openidconnect.googleapis.com/v1/userinfo",
    {
      headers: { Authorization: `Bearer ${tokens.accessToken}` },
    },
  );

  const googleUser: GoogleUser = await response.data;
  let userAccount = await repository.account.getByGoogleIdOrEmail(
    googleUser.sub,
    googleUser.email,
  );

  // user does not exist
  if (!userAccount) {
    const userData: CreateUser = {
      id: util.generateId(),
      firstName: googleUser.given_name,
      lastName: googleUser.family_name,
      email: googleUser.email,
    };
    const user = await userRepository.create(userData);

    const accountData: CreateAccount = {
      id: util.generateId(),
      userId: user!.id,
      provider: Provider.google,
      credential: googleUser.sub,
    };
    await repository.account.create(accountData);

    // update userAccount
    userAccount = {
      userId: user!.id,
      email: user!.email,
      providers: [Provider.google],
    };
  } else if (!userAccount.providers.includes(Provider.google)) {
    const accountData: CreateAccount = {
      id: util.generateId(),
      userId: userAccount!.userId,
      provider: Provider.google,
      credential: googleUser.sub,
    };
    await repository.account.create(accountData);
  }

  // create session
  const cookie = await repository.session.create({
    userId: userAccount.userId,
    email: userAccount.email,
  });

  return { cookie, user: userAccount };
}
