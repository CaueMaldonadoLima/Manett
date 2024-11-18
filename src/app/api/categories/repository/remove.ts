import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { categories, Category } from "../schema";

export async function remove(id: string): Promise<Category | undefined> {
  try {
    const [result] = await db
      .delete(categories)
      .where(eq(categories.id, id))
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
}
