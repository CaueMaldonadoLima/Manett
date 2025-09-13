import { categoryById } from "@/mock/categories";
import { Entry } from "@/types/entries";

type Props = { entry: Entry };

function formatCurrencyUSD(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(value);
}

export default function EntriesRow({ entry }: Readonly<Props>) {
  const category = categoryById[entry.categoryId];
  const Icon = category.icon;
  const isIncome = entry.type === 'income';
  
  return (
  <div className="bg-background flex flex-row items-center justify-between gap-4 border-b border-secondary p-4 ">
      <div className="flex items-center gap-4">
        <Icon/>
        <div className="flex flex-col">
          <p className="text-sm">{entry.title}</p>
          <p className="text-sm text-secondary">{category.label}</p>
        </div>
        <p className="text-sm">{entry.description}</p>
      </div>
      <p className={`text-sm whitespace-nowrap ${isIncome ? 'text-primary' : 'text-accent'}`}>{isIncome ? '' : '- '}{formatCurrencyUSD(entry.amount)}</p>
    </div>
  );
}