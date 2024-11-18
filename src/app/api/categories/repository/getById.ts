import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { categories, Category } from "../schema";

export async function getById(id: string): Promise<Category | undefined> {
  try {
    const [result] = await db
      .select()
      .from(categories)
      .where(eq(categories.id, id));
    return result;
  } catch (error) {
    throw error;
  }
}
