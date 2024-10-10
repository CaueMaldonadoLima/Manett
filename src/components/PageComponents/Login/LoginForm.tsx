import { InputText } from "@/components/Input/InputText"

const LoginForm = () => {
    return (
        <>
            <div className='flex w-full flex-row gap-2'>
                <InputText labelText={'First name'} type='text' placeholder='John'/>
                <InputText labelText={'Last name'} type='text' placeholder='Doe'/>
            </div>
            <InputText labelText={'E-mail'} type='text' placeholder='mail@example.com'/>
            <InputText labelText={'Password'} type='text' placeholder='●●●●●●'/>
        </>
    )
}

export { LoginForm }