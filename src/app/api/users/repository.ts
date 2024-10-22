import { db } from "@/lib/db";
import { users } from "./schema";
import { eq } from "drizzle-orm";

// TODO: Fix type
export class UserRepository {
  async getById(id: string): Promise<any | undefined> {
    try {
      const [result] = await db.select().from(users).where(eq(users.id, id));
      return result;
    } catch (error) {
      // TODO: create specific error
      throw error;
    }
  }

  async update(id: string, values: Partial<any>): Promise<any | undefined> {
    try {
      const [result] = await db
        .update(users)
        .set(values)
        .where(eq(users.id, id))
        .returning();
      return result;
    } catch (error) {
      // TODO: create specific error
      throw error;
    }
  }

  async remove(id: string): Promise<any | undefined> {
    try {
      const [result] = await db
        .delete(users)
        .where(eq(users.id, id))
        .returning();
      return result;
    } catch (error) {
      // TODO: create specific error
      throw error;
    }
  }
}
