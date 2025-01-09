import {
  numeric,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "../users/schema";
import { createInsertSchema } from "drizzle-zod";

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

const insertBankAccountSchema = createInsertSchema(bankAccounts, {
  title: (schema) => schema.title.trim().min(1),
  iconName: (schema) => schema.iconName.trim().min(1),
});

type BankAccount = typeof bankAccounts.$inferSelect;
type CreateBankAccount = typeof bankAccounts.$inferInsert;

export type { BankAccount, CreateBankAccount };
export { bankAccounts, insertBankAccountSchema };
