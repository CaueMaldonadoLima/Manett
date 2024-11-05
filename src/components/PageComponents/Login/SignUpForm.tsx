import { Button } from "@/components/Button/Button"
import { ArrowRightIcon } from "@/components/icons"
import { InputText } from "@/components/Input/InputText"
import { FC } from "react"

type SignUpFormProps = {
    setIsLogin: (value: boolean) => void
}

const SignUpForm: FC<SignUpFormProps> = ({setIsLogin}) => {

    return (
        <div className="gap-8 flex flex-col">
            <div className="gap-4 flex flex-col">
                <div className='flex w-full flex-row gap-2'>
                    <InputText labelText={'First name'} type='text' placeholder='John'/>
                    <InputText labelText={'Last name'} type='text' placeholder='Doe'/>
                </div>
                <InputText labelText={'E-mail'} type='text' placeholder='mail@example.com'/>
                <InputText labelText={'Password'} type='text' placeholder='●●●●●●'/>
                <div>
            </div>
                <Button type='submit' icon={{position: 'left', icon: <ArrowRightIcon/>}}>Join us</Button>
                <div className='w-full gap-2 flex flex-row'>
                    <span className='text-secondary'>Already have an account?</span>
                    <button onClick={() => setIsLogin(true)} className='text-primary'>Log in</button> 
                </div>
            </div>
        </div>
    )
}

export { SignUpForm }