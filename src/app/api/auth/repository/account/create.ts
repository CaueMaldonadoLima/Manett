import { db } from "@/lib/db";
import { Account, accounts, CreateAccount } from "../../schema";
import { DatabaseOperationError } from "@/app/api/errors";

export async function create(values: CreateAccount): Promise<Account> {
  try {
    const [result] = await db.insert(accounts).values(values).returning();
    if (!result) throw new DatabaseOperationError("Failed to create account");
    return result;
  } catch (error) {
    throw error;
  }
}
