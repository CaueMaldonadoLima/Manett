import { Button } from "@/components/Button/Button"
import { ArrowRightIcon } from "@/components/icons"
import { InputText } from "@/components/Input/InputText"
import { Text } from "@/components/Text/Text"
import { zodResolver } from "@hookform/resolvers/zod"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

type SignUpFormProps = {
    setIsLogin: (value: boolean) => void
}

const signUpSchema = z.object({
    firstName: z.string()
        .min(1,'First name is required'),
    lastName: z.string()
        .min(1,'Last name is required'),
    email: z.string()
        .min(1,'E-mail is required')
        .email( 'Invalid e-mail'),
    password: z.string()
        .min(1,'Password is required'),
})

const SignUpForm: FC<SignUpFormProps> = ({setIsLogin}) => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    })

    const passwordValue = watch('password');

    const onSubmit = (data: z.infer<typeof signUpSchema>) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="gap-8 flex flex-col">
            <div className="gap-4 flex flex-col">
                <div className='flex w-full flex-row gap-2'>
                    <InputText 
                        register={register('firstName')}
                        labelText={'First name'} 
                        type='text' 
                        placeholder='John'
                        errors={errors.firstName}
                    />
                    <InputText 
                        register={register('lastName')}
                        labelText={'Last name'} 
                        type='text' 
                        placeholder='Doe'
                        errors={errors.lastName}
                    />
                </div>
                <InputText 
                    register={register('email')}
                    labelText={'E-mail'} 
                    type='text' 
                    placeholder='mail@example.com'
                    errors={errors.email}
                />
                <InputText 
                    passwordValue={watch('password')}
                    register={register('password')}
                    labelText={'Password'} 
                    type='password' 
                    placeholder='●●●●●●'
                    errors={errors.password}
                />
                <div>
            </div>
                <Button type='submit' icon={{position: 'left', icon: <ArrowRightIcon/>}}>Join us</Button>
                <div className='w-full gap-2 flex flex-row'>
                    <span className='text-secondary'>Already have an account?</span>
                    <button onClick={() => setIsLogin(true)} className='text-primary'>Log in</button> 
                </div>
            </div>
        </form>
    )
}

export { SignUpForm }