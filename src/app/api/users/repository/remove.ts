import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { User, users } from "@/app/api/users/schema";

export async function remove(id: string): Promise<User | undefined> {
  try {
    const [result] = await db.delete(users).where(eq(users.id, id)).returning();
    return result;
  } catch (error) {
    throw error;
  }
}
