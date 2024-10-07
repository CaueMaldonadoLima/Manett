import {
  numeric,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "../users/schema";

const bankAccounts = pgTable("bank_accounts", {
  id: text("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  iconName: varchar("icon_name", { length: 255 }).notNull(),
  balance: numeric("balance", { precision: 15, scale: 2 })
    .notNull()
    .default("0"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),

  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

type InsertBankAccount = typeof bankAccounts.$inferInsert;
type SelectBankAccount = typeof bankAccounts.$inferSelect;

export type { InsertBankAccount, SelectBankAccount };
export { bankAccounts };
