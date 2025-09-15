import type { Entry } from '@/types/entries';

export const MOCK_ENTRIES: Entry[] = [
  { id: '1',  title: 'Pizza Hut',        description: 'Pizza night', amount: 45,   currency: 'USD', date: '2025-09-10', categoryId: 'food',      type: 'expense' },
  { id: '2',  title: 'Uber',             amount: 18.5,               currency: 'USD', date: '2025-09-11', categoryId: 'transport', type: 'expense' },
  { id: '3',  title: 'Salary',           amount: 3500,               currency: 'USD', date: '2025-09-05', categoryId: 'salary',    type: 'income'  },
  { id: '4',  title: 'Freela LP',        amount: 800,                currency: 'USD', date: '2025-09-08', categoryId: 'freelance', type: 'income'  },
  { id: '5',  title: 'Groceries',        description: 'Weekly market', amount: 220.75, currency: 'USD', date: '2025-09-12', categoryId: 'shopping',  type: 'expense' },
  { id: '6',  title: 'Pharmacy',         amount: 67.9,               currency: 'USD', date: '2025-09-09', categoryId: 'health',     type: 'expense' },
  { id: '7',  title: 'Rent',             amount: 1500,               currency: 'USD', date: '2025-09-01', categoryId: 'rent',       type: 'expense' },
  { id: '8',  title: 'Uber to office',   amount: 24.2,               currency: 'USD', date: '2025-09-06', categoryId: 'transport',  type: 'expense' },
  { id: '9',  title: 'Client invoice',   description: 'Website fix', amount: 600,     currency: 'USD', date: '2025-09-07', categoryId: 'freelance', type: 'income'  },
  { id: '10', title: 'Sushi',            amount: 89.99,              currency: 'USD', date: '2025-09-03', categoryId: 'food',       type: 'expense' },
  { id: '11', title: 'Clothes',          amount: 310,                currency: 'USD', date: '2025-09-02', categoryId: 'shopping',   type: 'expense' },
  { id: '12', title: 'Bonus',            amount: 500,                currency: 'USD', date: '2025-09-04', categoryId: 'salary',     type: 'income'  },
];
