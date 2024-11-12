import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { User, users } from "@/app/api/users/schema";

export async function update(
  id: string,
  values: Partial<User>,
): Promise<User | undefined> {
  try {
    const [result] = await db
      .update(users)
      .set(values)
      .where(eq(users.id, id))
      .returning();
    return result;
  } catch (error) {
    // TODO: return readable error due to duplicate username
    throw error;
  }
}
