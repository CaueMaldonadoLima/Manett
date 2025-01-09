import { CategoriesIcon, DashboardIcon, RecepeitIcon, RepeatIcon } from "@/components/icons";
import Image from "next/image";
import { CircleUser } from "lucide-react";

export default function page() {
    return (
        <div className="p-8 flex flex-col gap-6 h-screen">
            <nav className="bg-white shadow-md w-full p-4 rounded-md flex flex-row justify-between">
                <Image 
                    src={'/images/pink-logo.svg'} 
                    width={150}
                    height={150}	
                    alt={''}
                />
                <div className="flex flex-row gap-2 items-center justify-center">
                    <DashboardIcon />
                    <RecepeitIcon />
                    <CategoriesIcon />
                    <RepeatIcon /> 
                    <CircleUser />
                </div>
            </nav> 
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