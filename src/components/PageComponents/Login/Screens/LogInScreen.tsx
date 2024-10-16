import { Button } from "@/components/Button/Button"
import { LoginCard } from "../LoginCard"
import { LoginTitle } from "../LoginTitle"

import { FC } from "react"
import { LogInForm } from "../LoginForm"

type LogInScreenProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInScreen: FC<LogInScreenProps> = ({ setIsLogin }) => { //TODO: add image
    return (
        <>
            <LoginCard>
                <LoginTitle title={'Welcome back'} subtitle='Continue with Google or enter your details.'/>
                <LogInForm/>
                <div className="pb-8">
                    <Button> 
                        Sign In
                    </Button>
                    <div className='w-full gap-2 flex flex-row'>
                        <span className='text-secondary'>Don't have an account yet?</span>
                        <button onClick={() => setIsLogin(false)} className='text-primary'>Sign up</button>  
                    </div>
                </div>
            </LoginCard>
            <div className='w-full flex	rounded-lg p-16 bg-accent'>
                .
            </div>
        </>
    )
}

export { LogInScreen }