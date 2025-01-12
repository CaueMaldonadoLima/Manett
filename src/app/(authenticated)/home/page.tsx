import { NavBar } from "@/components";
import { Entries } from "@/components/PageComponents/Home";

export default function page() {
    return (
        <div className="p-8 flex flex-col gap-6 h-screen">
            <NavBar />
            <div className="bg-white rounded-md shadow-md px-4 py-2 h-full">
                <p className="text-lg">Summary</p>
            </div>
            <Entries />
            <div className="flex flex-row gap-4 w-full">
                <div className="bg-white rounded-md shadow-md px-4 py-2 w-full">
                    <p className="text-lg">Subscriptions</p>
                </div>
                <div className="bg-white rounded-md shadow-md px-4 py-2 w-full">
                    <p className="text-lg">Accounts</p>
                </div>
            </div>
        </div>
    )
}