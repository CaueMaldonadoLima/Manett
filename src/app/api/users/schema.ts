import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

const users = pgTable("users", {
  id: text("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export { users };
