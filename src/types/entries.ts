import type { LucideIcon } from "lucide-react";

export type EntryType = "income" | "expense";

export type CategoryId =
  | "food"
  | "transport"
  | "rent"
  | "shopping"
  | "health"
  | "salary"
  | "freelance";

export interface Category {
  id: CategoryId;
  label: string;
  type: EntryType;
  icon: LucideIcon;
}

export interface Entry {
  id: string;
  title: string;
  description?: string;
  amount: number;
  currency?: "BRL";
  date: string;
  categoryId: CategoryId;
  type: EntryType;
}
