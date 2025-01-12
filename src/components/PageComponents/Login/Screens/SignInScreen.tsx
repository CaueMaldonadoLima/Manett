import { ArrowRightIcon } from "@/components/icons"
import { LoginCard } from "../LoginCard"
import { LoginForm } from "../LoginForm"
import { LoginTitle } from "../LoginTitle"
import { FC } from "react"

type SignInScreenProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const SignInScreen: FC<SignInScreenProps> = ({ setIsLogin }) => {
    return (
        <>
            <div className='w-full flex	rounded-lg p-16 bg-accent'>
                .
            </div>
            <LoginCard>
                <LoginTitle title={'Get Started'} subtitle={'Create an account now!'}/>
                <LoginForm />
                <div>
                    <button className='w-full bg-primary p-2 rounded-md my-2'>
                        <div className='text-white flex w-full items-center justify-center'>
                            <span className='mr-2'>
                                Join us 
                            </span>
                            {ArrowRightIcon()}
                        </div>
                    </button>
                    <div className='w-full gap-2 flex flex-row'>
                        <span className='text-secondary'>Already have an account?</span>
                        <button onClick={() => setIsLogin(true)} className='text-primary'>Sign in</button> 
                    </div>
                </div>
            </LoginCard>
        </>
    )
}

export { SignInScreen }