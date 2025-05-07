import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { Account, accounts } from "../../schema";

export async function getById(id: string): Promise<Account | undefined> {
  try {
    const [result] = await db
      .select()
      .from(accounts)
      .where(eq(accounts.id, id));
    return result;
  } catch (error) {
    throw error;
  }
}
