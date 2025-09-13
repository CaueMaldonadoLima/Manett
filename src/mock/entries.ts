import type { Entry } from '@/types/entries';

export const MOCK_ENTRIES: Entry[] = [
  { id: '1', title: 'Pizza Hut', description: 'Pizza night', amount: 45,  currency: 'BRL', date: '2025-09-10', categoryId: 'food',      type: 'expense' },
  { id: '2', title: 'Uber',      amount: 18.5,               currency: 'BRL', date: '2025-09-11', categoryId: 'transport', type: 'expense' },
  { id: '3', title: 'Salary',    amount: 3500,               currency: 'BRL', date: '2025-09-05', categoryId: 'salary',    type: 'income'  },
  { id: '4', title: 'Freela LP', amount: 800,                currency: 'BRL', date: '2025-09-08', categoryId: 'freelance', type: 'income'  },
];