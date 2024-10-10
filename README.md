# Manett

Short description, motivation, pic, etc

<!-- start table of contents -->

* [Database](#database)
* [Migration](#migration)

<!-- end table of contents -->

# Database

The database used is postgresql from vercel. You can create your own db and get
the config with the command `vercel env pull .env.local`. There also is a
default database dashboard available by drizzle with the command `npm run db`.

# Migration

1. Generate migration `npm run migration:generate migration_name`
2. Run migration `npm run migration:run`

If a mistake was made, you can drop a migration by running:

1. `npm run migration:drop`
2. `npm run migration:run`
