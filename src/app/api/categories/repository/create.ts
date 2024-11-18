import { db } from "@/lib/db";
import { categories, CreateCategory } from "../schema";

export async function create(values: CreateCategory): Promise<any | undefined> {
  try {
    const [result] = await db.insert(categories).values(values).returning();
    return result;
  } catch (error) {
    throw error;
  }
}
