import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { bankAccounts, BankAccount } from "../schema";

export async function getById(id: string): Promise<BankAccount | undefined> {
  try {
    const [result] = await db
      .select()
      .from(bankAccounts)
      .where(eq(bankAccounts.id, id));
    return result;
  } catch (error) {
    throw error;
  }
}
