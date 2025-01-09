import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { categories, Category } from "../schema";

export async function getByUserId(id: string): Promise<Category[] | undefined> {
  try {
    const result = await db
      .select()
      .from(categories)
      .where(eq(categories.userId, id));
    return result;
  } catch (error) {
    throw error;
  }
}
