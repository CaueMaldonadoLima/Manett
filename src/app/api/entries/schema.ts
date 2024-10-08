import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "@/app/api/users/schema";

const entries = pgTable("entries", {
  id: text("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

type InsertEntry = typeof entries.$inferInsert;
type SelectEntry = typeof entries.$inferSelect;

export type { InsertEntry, SelectEntry };
export { entries };
