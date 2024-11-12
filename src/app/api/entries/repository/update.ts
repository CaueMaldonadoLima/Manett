import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { entries, Entry } from "../schema";

export async function update(
  id: string,
  values: Partial<Entry>,
): Promise<Entry | undefined> {
  try {
    const [result] = await db
      .update(entries)
      .set(values)
      .where(eq(entries.id, id))
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
}
