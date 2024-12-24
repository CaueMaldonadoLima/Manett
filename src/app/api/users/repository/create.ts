import { db } from "@/lib/db";
import { CreateUser, User, users } from "../schema";
import { DatabaseOperationError } from "../../errors";

export async function create(values: CreateUser): Promise<User | undefined> {
  try {
    const [result] = await db.insert(users).values(values).returning();
    if (!result) throw new DatabaseOperationError("Failed to create user");
    return result;
  } catch (error) {
    throw error;
  }
}
