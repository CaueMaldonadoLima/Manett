import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { Account, accounts } from "../../schema";

export async function update(
  id: string,
  values: Partial<Account>,
): Promise<Account | undefined> {
  try {
    const [result] = await db
      .update(accounts)
      .set(values)
      .where(eq(accounts.id, id))
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
}
