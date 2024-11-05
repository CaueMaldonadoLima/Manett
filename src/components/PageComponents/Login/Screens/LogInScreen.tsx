import { LoginCard } from "../LoginCard"
import { LoginTitle } from "../LoginTitle"

import { FC } from "react"
import { LogInForm } from "../LoginForm"

type LogInScreenProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInScreen: FC<LogInScreenProps> = ({ setIsLogin }) => {
    return (
        <>
            <LoginCard>
                <LoginTitle title={'Welcome back'} subtitle='Continue with Google or enter your details.'/>
                <LogInForm setIsLogin={setIsLogin}/>
            </LoginCard>
            <div className='w-full flex	rounded-lg p-16 bg-accent'>
                .
            </div>
        </>
    )
}

export { LogInScreen }