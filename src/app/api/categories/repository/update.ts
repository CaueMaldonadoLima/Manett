import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { categories, Category } from "../schema";

export async function update(
  id: string,
  values: Partial<Category>,
): Promise<Category | undefined> {
  try {
    const [result] = await db
      .update(categories)
      .set(values)
      .where(eq(categories.id, id))
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
}
