import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/app/api/**/schema.ts",
  out: "./src/app/api/db/migrations",
  migrations: {
    table: "migrations",
  },
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
