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
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

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

const insertEntrySchema = createInsertSchema(entries, {
  title: (schema) => schema.title.trim().min(1),
  value: () => z.number().positive().finite().multipleOf(0.01),
  date: () => z.coerce.date(),
});

type Entry = typeof entries.$inferSelect;
type CreateEntry = typeof entries.$inferInsert;

export type { Entry, CreateEntry };
export { entries, entryTypeEnum, insertEntrySchema };
