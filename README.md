# Manett

Short description, motivation, pic, etc

<!-- start table of contents -->

* [Database](#database)
* [Migration](#migration)
* [Requirements](#requirements)

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

# Requirements

1. Authentication

- [ ] create account
- [ ] sign in
- [ ] sign out
- [ ] delete account
- [ ] recover password
- [ ] change password
- [ ] update info

2. Entry

- [ ] create entry
- [ ] get entry details
- [ ] update entry
- [ ] delete entry
- [ ] create repeating entry (subscription)

3. Categories

- [ ] create category
- [ ] get category details
- [ ] update category
- [ ] delete category
- [ ] allow sub categories (infinite nesting)

4. Bank accounts

- [ ] create bank account
- [ ] get bank account details
- [ ] update bank account
- [ ] delete bank account
- [ ] allow for transferences between bank accounts

5. Data

- [ ] allow import/export in multiple formats (json,xml,excel,...)

6. Currency

- [ ] allow for multiple currencies
- [ ] automatically sync currency values
- [ ] automatically convert different currencies into main one

7. Budget

- ?

8. Statistics

- ?

9. Search
