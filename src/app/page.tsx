import { CardCn } from "@/components/shadcn/CardCn";
import Image from "next/image";

export default function Home() {
    return (
		<div className="bg-red-500 h-full w-full p-4 gap-4 flex-1 flex flex-col">
            <nav className="bg-white flex items-center p-4 h-16 w-full rounded-lg">
                <Image
                    src={'/images/pink-logo.svg'}
                    alt={'logo'}
                    width={150}
                    height={150}
                />
            </nav>
            <div>
                <CardCn />
            </div>
        </div>
    );
}
