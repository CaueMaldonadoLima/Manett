import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "@/app/api/users/schema";

export const expensesTable = pgTable("expenses_table", {
  id: text("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  description: text("description").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertExpense = typeof expensesTable.$inferInsert;
export type SelectExpense = typeof expensesTable.$inferSelect;
