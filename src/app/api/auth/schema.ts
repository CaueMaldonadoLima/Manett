import { pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "../users/schema";

enum Provider {
  password = "password",
  google = "google",
  github = "github",
}

const providerEnum = pgEnum(
  "provider",
  Object.values(Provider) as [Provider, ...Provider[]],
);

const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  provider: providerEnum("provider").notNull(),
  credential: varchar("credential", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

type InsertAccount = typeof accounts.$inferInsert;
type SelectAccount = typeof accounts.$inferSelect;

export type { InsertAccount, SelectAccount };
export { providerEnum, accounts, Provider };
