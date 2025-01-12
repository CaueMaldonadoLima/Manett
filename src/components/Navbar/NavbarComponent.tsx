"use client"
import Image from 'next/image'
import { DashboardIcon, CategoriesIcon, RecepeitIcon, RepeatIcon } from "@/components/icons";
import { CircleUser } from "lucide-react";
import { Tooltip } from '../Tooltip/TooltipComponent';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const route = usePathname();
    console.log(route)

    const getActiveClass = (path: string) => {
        return route === path ? "text-primary hover:text-primary/80" : "text-secondary hover:text-primary/80";
      };

    return (
        <nav className="bg-white shadow-md w-full p-4 rounded-md flex flex-row justify-between">
            <Image 
                src={'/images/pink-logo.svg'} 
                width={125}
                height={125}	
                alt={''}
            />
        <div className="flex flex-row items-center justify-center gap-4">
            <Tooltip text={'Dashboard'} position={'bottom'} className={getActiveClass('/home')}>
                {DashboardIcon()}
            </Tooltip>
            <Tooltip text={'Receipts'} position={'bottom'} className={getActiveClass('/receipts')}>
                {RecepeitIcon()}
            </Tooltip>
            <Tooltip text={'Categories'} position={'bottom'} className={getActiveClass('/categories')}>
                {CategoriesIcon()}
            </Tooltip>
            <Tooltip text={'Repeat'} position={'bottom'} className={getActiveClass('/repeat')}>
                {RepeatIcon()}
            </Tooltip>
            <Tooltip text={'Settings'} position={'bottom'} className={getActiveClass('/settings')}>
                <CircleUser className=''/>
            </Tooltip>
        </div>
    </nav> 
    )
}

export { NavBar }