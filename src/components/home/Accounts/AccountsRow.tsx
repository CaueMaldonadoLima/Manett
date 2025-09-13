import { Utensils } from "lucide-react";

export default function AccountsRow() {
    return (
        <div className="flex flex-row items-center justify-between gap-4 pb-4">
            <div className="flex items-center gap-4">
                <Utensils />
                <div className="flex flex-col">
                    <p className="text-sm">Pizza Hut</p>
                    <p className="text-sm text-secondary">Restaurants</p>
                </div>
            </div>
            <p className="text-sm">- R$45,00</p>
        </div>
    );
}