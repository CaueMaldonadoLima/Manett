import { eq, and, or, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { users } from "@/app/api/users/schema";
import { accounts, Provider } from "../../schema";

type UserAccount = {
  userId: string;
  email: string;
  providers: Provider[];
};

export async function getByGoogleIdOrEmail(
  googleId: string,
  email: string,
): Promise<UserAccount | undefined> {
  try {
    const [result] = await db
      .select({
        userId: users.id,
        email: users.email,
        providers: sql<Provider[]>`ARRAY_AGG(accounts.provider) AS providers`, // creates array of providers
      })
      .from(accounts)
      .innerJoin(users, eq(users.id, accounts.userId))
      .where(
        or(
          and(
            eq(accounts.provider, Provider.google),
            eq(accounts.credential, googleId),
          ),
          and(eq(accounts.provider, Provider.password), eq(users.email, email)),
        ),
      )
      .groupBy(users.id);

    return result;
  } catch (error) {
    throw error;
  }
}
