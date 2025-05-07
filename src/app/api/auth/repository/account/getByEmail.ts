import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db";
import { Account, accounts, Provider } from "@/app/api/auth/schema";
import { User, users } from "@/app/api/users/schema";

type UserAccount = Omit<Account, "id" | "createdAt" | "updatedAt"> &
  Omit<User, "id" | "createdAt" | "updatedAt"> & {
    userId: User["id"];
    accountId: Account["id"];
    provider: Provider;
  };

export async function getByEmail(
  email: string,
): Promise<UserAccount | undefined> {
  try {
    const [result] = await db
      .select()
      .from(users)
      .leftJoin(accounts, eq(users.id, accounts.userId))
      .where(
        and(eq(users.email, email), eq(accounts.provider, Provider.password)),
      );

    const user = result.users;
    const account = result.accounts;

    const { id, ...userAccount } = {
      accountId: account!.id,
      userId: user!.id,
      provider: account!.provider,
      credential: account!.credential,
      ...user,
      ...account,
    };

    return userAccount;
  } catch (error) {
    throw error;
  }
}
