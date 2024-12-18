import { db } from "@/lib/db";
import { bankAccounts, CreateBankAccount } from "../schema";

export async function create(
  values: CreateBankAccount,
): Promise<any | undefined> {
  try {
    const [result] = await db.insert(bankAccounts).values(values).returning();
    return result;
  } catch (error) {
    throw error;
  }
}
