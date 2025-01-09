import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/app/api/**/schema.ts",
  out: "./src/lib/db/migrations",
  migrations: {
    table: "migrations",
  },
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
