'use client'

import Image from "next/image";
import { FC, useState } from "react";
import { SignUpScreen } from "./Screens/SignUpScreen";
import { LogInScreen } from "./Screens/LogInScreen";

type LogAndSignProps = {
}

const LogAndSign: FC<LogAndSignProps> = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <main className='bg-background flex-1 bg-opacity-90 space-x-16 flex-col w-full px-24 h-screen'>
			<div className='px-16 py-4 w-full items-center justify-start'>
				<Image 
					src={'/images/purple-logo.svg'} 
					width={150}
					height={150}	
					alt={''}
				/>
			</div>
			<div className='flex gap-6 ease-int-out transition-opacity'>
				{isLogin ? 
					<LogInScreen setIsLogin={setIsLogin}/>
				: 
					<SignUpScreen setIsLogin={setIsLogin}/>
				}
			</div>
		</main>
    )
}

export  { LogAndSign}