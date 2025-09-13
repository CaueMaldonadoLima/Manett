import AccountsArea from "@/components/home/Accounts/AccountsArea";
import EntriesArea from "@/components/home/Entries/EntriesArea";
import { ChartAreaInteractive } from "@/components/shadcn/ChartCn";
import SubscriptionsArea from "@/components/home/Subscriptions/SubscriptionsArea";
import { CircleUser, LayoutDashboard, ReceiptText, Repeat2, SwatchBook } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
		<div className="bg-background h-full w-full p-4 gap-4 flex-1 flex flex-col">     
            <nav className="w-full flex flex-row items-center justify-between">
                <div id="logo" className="flex items-center justify-center">
                    <Image
                        src={'/images/purple-logo.svg'}
                        alt={'logo'}
                        width={150}
                        height={150}
                    />
                </div>
                <div id="actions" className="flex gap-4 justify-center">
                    <LayoutDashboard className="text-secondary"/>
                    <ReceiptText  className="text-secondary"/>
                    <SwatchBook  className="text-secondary"/>
                    <Repeat2  className="text-secondary"/>
                    <CircleUser  className="text-secondary"/>
                </div>
            </nav>       
            <div>
                <ChartAreaInteractive/>
                <EntriesArea />
                <div className="flex flex-row gap-5 w-full justify-between items-center">
                    <SubscriptionsArea />
                    <AccountsArea />
                </div>
            </div>
        </div>
    );
}
