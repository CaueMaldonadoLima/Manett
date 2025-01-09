import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { entries, Entry } from "../schema";

export async function remove(id: string): Promise<Entry | undefined> {
  try {
    const [result] = await db
      .delete(entries)
      .where(eq(entries.id, id))
      .returning();
    return result;
  } catch (error) {
    throw error;
  }
}
