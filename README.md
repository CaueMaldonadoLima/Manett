# Manett

Short description, motivation, pic, etc

<!-- start table of contents -->

* [Database](#database)
* [Migration](#migration)

<!-- end table of contents -->

# Database

The database used is postgresql from vercel. You can create your own db and get
the config with the command `vercel env pull .env.local`.

# Migration

1. Generate migration `npx drizzle-kit generate --name name_of_migration`
2. Run migration `npx drizzle-kit migrate`
