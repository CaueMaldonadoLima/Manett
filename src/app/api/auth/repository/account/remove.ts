import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { Account, accounts } from "../../schema";

export async function remove(id: string): Promise<Account | undefined> {
  try {
    const [result] = await db
      .delete(accounts)
      .where(eq(accounts.id, id))
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
}
