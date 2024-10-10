import {
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "@/app/api/users/schema";
import { categories } from "../categories/schema";
import { bankAccounts } from "../bank-accounts/schema";

enum EntryType {
  income = "income",
  expense = "expense",
}

const entryTypeEnum = pgEnum(
  "entry_type",
  Object.values(EntryType) as [EntryType, ...EntryType[]],
);

const entries = pgTable("entries", {
  id: text("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  value: numeric("value", { precision: 15, scale: 2 }).notNull(),
  type: entryTypeEnum("type").notNull().default(EntryType.expense),
  date: timestamp("date").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),

  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  categoryId: text("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),
  bankAccountId: text("bank_account_id")
    .notNull()
    .references(() => bankAccounts.id, { onDelete: "cascade" }),
  // TODO: Add repeating entry relation
});

type InsertEntry = typeof entries.$inferInsert;
type SelectEntry = typeof entries.$inferSelect;

export type { InsertEntry, SelectEntry };
export { entries, entryTypeEnum };
