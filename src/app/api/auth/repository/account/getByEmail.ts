import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db";
import { Account, accounts, Provider } from "@/app/api/auth/schema";
import { User, users } from "@/app/api/users/schema";

export async function getByEmail(
  email: string,
): Promise<(Account & User) | undefined> {
  try {
    const [result] = await db
      .select()
      .from(users)
      .leftJoin(accounts, eq(users.id, accounts.userId))
      .where(
        and(eq(users.email, email), eq(accounts.provider, Provider.password)),
      );
    return { ...result.users, ...result.accounts } as Account & User;
  } catch (error) {
    throw error;
  }
}
