import {
  AnyPgColumn,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "../users/schema";

const categories = pgTable("categories", {
  id: text("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  iconName: varchar("icon_name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),

  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  parentCategoryId: text("parent_category_id").references(
    (): AnyPgColumn => categories.id,
    {
      onDelete: "cascade",
    },
  ),
});

type InsertCategory = typeof categories.$inferInsert;
type SelectCategory = typeof categories.$inferSelect;

export type { InsertCategory, SelectCategory };
export { categories };
