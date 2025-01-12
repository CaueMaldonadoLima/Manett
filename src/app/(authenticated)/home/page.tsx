import { NavBar } from "@/components";

export default function page() {
    return (
        <div className="p-8 flex flex-col gap-6 h-screen">
            <NavBar />
            <div className="bg-white rounded-md shadow-md p-4 h-full">
                <p>Summary</p>
            </div>
            <div className="bg-white rounded-md shadow-md p-4">
                <p>Entries</p>
            </div>
            <div className="flex flex-row gap-4 w-full">
                <div className="bg-white rounded-md shadow-md p-4 w-full">
                    <p>Subscriptions</p>
                </div>
                <div className="bg-white rounded-md shadow-md p-4 w-full">
                    <p>Accounts</p>
                </div>
            </div>
        </div>
    )
}