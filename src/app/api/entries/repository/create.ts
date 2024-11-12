import { db } from "@/lib/db";
import { CreateEntry, entries } from "../schema";

export async function create(values: CreateEntry): Promise<any | undefined> {
  try {
    const [result] = await db.insert(entries).values(values).returning();
    return result;
  } catch (error) {
    throw error;
  }
}
