import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { BankAccount, bankAccounts } from "../schema";

export async function getByUserId(
  id: string,
): Promise<BankAccount[] | undefined> {
  try {
    const result = await db
      .select()
      .from(bankAccounts)
      .where(eq(bankAccounts.userId, id));
    return result;
  } catch (error) {
    throw error;
  }
}
