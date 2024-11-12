import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { entries, Entry } from "../schema";

export async function getById(id: string): Promise<Entry | undefined> {
  try {
    const [result] = await db.select().from(entries).where(eq(entries.id, id));
    return result;
  } catch (error) {
    throw error;
  }
}
