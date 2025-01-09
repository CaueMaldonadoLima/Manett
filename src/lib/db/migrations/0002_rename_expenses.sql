ALTER TABLE "expenses_table" RENAME TO "entries";--> statement-breakpoint
ALTER TABLE "entries" DROP CONSTRAINT "expenses_table_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "entries" ALTER COLUMN "title" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "entries" ADD CONSTRAINT "entries_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
