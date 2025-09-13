import { Utensils, Car, Home, ShoppingBag, HeartPulse, Banknote, Briefcase } from 'lucide-react';
import type { Category } from '@/types/entries';

export const CATEGORIES: Category[] = [
  { id: 'food',      label: 'Restaurants', type: 'expense', icon: Utensils },
  { id: 'transport', label: 'Transport',   type: 'expense', icon: Car },
  { id: 'rent',      label: 'Rent',        type: 'expense', icon: Home },
  { id: 'shopping',  label: 'Shopping',    type: 'expense', icon: ShoppingBag },
  { id: 'health',    label: 'Health',      type: 'expense', icon: HeartPulse },
  { id: 'salary',    label: 'Salary',      type: 'income',  icon: Banknote },
  { id: 'freelance', label: 'Freelance',   type: 'income',  icon: Briefcase },
];

export const categoryById = Object.fromEntries(
  CATEGORIES.map(c => [c.id, c])
) as Record<Category['id'], Category>;
