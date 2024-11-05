import { Button } from "@/components/Button/Button"
import { GoogleIcon } from "@/components/icons"
import { InputText } from "@/components/Input"
import { Text } from "@/components/Text/Text"
import { zodResolver } from "@hookform/resolvers/zod"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

type LoginFormProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"), 
    password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters long"), 
})

const LogInForm: FC<LoginFormProps> = ({setIsLogin}) => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const emailValue = watch('email'); // Obtém o valor do email
    const passwordValue = watch('password');

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        console.log(data)
    }
console.log(emailValue)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Button 
                variant="outline"
                icon={{position: 'left', icon: <GoogleIcon/>}}
            >
                Log in with Google
            </Button> 
            <div className="w-full flex-row items-center justify-center flex">
                <hr className="w-full h-[1.5px] rounded-full bg-secondary"/>
                <p className="px-2">or</p>
                <hr className="w-full h-[1.5px] rounded-full bg-secondary"/>
            </div>
            <div>
                <div className="gap-4 w-full flex-col flex justify-center items-center">
                    <InputText 
                        register={register('email')}
                        labelText={'E-mail'}
                        type='text'
                        placeholder='mail@example.com'
                        errors={errors.email}
                    />
                    <InputText
                        register={register('password')}
                        labelText={'Password'}
                        type='password'
                        placeholder='●●●●●●'
                        errors={errors.password}
                    />
                </div>
                <button onClick={() => alert('Forgot password')} className="mb-4">
                    <Text type='label' variant={'primary'} className="font-medium">Forgot password?</Text>
                </button>
                <div className="pb-8">
                    <Button type="submit">Log In</Button>
                    <div className='w-full gap-2 flex flex-row'>
                        <span className='text-secondary'>Don't have an account yet?</span>
                        <button onClick={() => setIsLogin(false)} className='text-primary'>Sign up</button>  
                    </div>
                </div>
            </div>
                
        </form>
    )
}

export { LogInForm }