import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { createClient, VercelKV } from "@vercel/kv";

const db = drizzle(sql);

// used for session storage
const redis = createClient({
  url: process.env.SESSION_KV_REST_API_URL,
  token: process.env.SESSION_KV_REST_API_TOKEN,
});

export { db, redis };
export type { VercelKV as Redis };
