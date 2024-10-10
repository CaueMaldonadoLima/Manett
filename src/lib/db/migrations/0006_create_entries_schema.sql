DO $$ BEGIN
 CREATE TYPE "public"."entry_type" AS ENUM('income', 'expense');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "entries" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "value" numeric(15, 2) NOT NULL;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "type" "entry_type" DEFAULT 'expense' NOT NULL;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "date" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "category_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "bank_account_id" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "entries" ADD CONSTRAINT "entries_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "entries" ADD CONSTRAINT "entries_bank_account_id_bank_accounts_id_fk" FOREIGN KEY ("bank_account_id") REFERENCES "public"."bank_accounts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
