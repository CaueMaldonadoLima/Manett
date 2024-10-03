import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

const users = pgTable("users", {
  id: text("id").primaryKey(),
  googleId: text("google_id").unique(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }), // may be null if googleId is set
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

type InsertUser = typeof users.$inferInsert;
type SelectUser = typeof users.$inferSelect;

const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export type { InsertUser, SelectUser };
export { users, sessions };
