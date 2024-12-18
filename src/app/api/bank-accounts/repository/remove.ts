import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { bankAccounts, BankAccount } from "../schema";

export async function remove(id: string): Promise<BankAccount | undefined> {
  try {
    const [result] = await db
      .delete(bankAccounts)
      .where(eq(bankAccounts.id, id))
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
}
