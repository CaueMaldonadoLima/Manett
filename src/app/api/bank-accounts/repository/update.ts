import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { bankAccounts, BankAccount } from "../schema";

export async function update(
  id: string,
  values: Partial<BankAccount>,
): Promise<BankAccount | undefined> {
  try {
    const [result] = await db
      .update(bankAccounts)
      .set(values)
      .where(eq(bankAccounts.id, id))
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
}
