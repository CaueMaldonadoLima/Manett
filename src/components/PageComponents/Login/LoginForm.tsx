import { Button } from "@/components/Button/Button"
import { GoogleIcon } from "@/components/icons"
import { InputText } from "@/components/Input"
import { Text } from "@/components/Text/Text"

const LogInForm = () => {
    return (
        <>
            <Button 
                variant="outline"
                icon={{position: 'left', icon: <GoogleIcon/>}}
            >
                Sign in with Google
            </Button> 
            <div className="w-full flex-row items-center justify-center flex">
                <hr className="w-full h-[1.5px] rounded-full bg-secondary"/>
                <p className="px-2">or</p>
                <hr className="w-full h-[1.5px] rounded-full bg-secondary"/>
            </div>
            <div>
                <div className="gap-4 w-full flex-col flex justify-center items-center">
                    <InputText 
                        labelText={'E-mail'}
                        type='text'
                        placeholder='mail@example.com'
                    />
                    <InputText
                        labelText={'Password'}
                        type='text'
                        placeholder='●●●●●●'
                    />
                    {/* <FormInputText 
                        labelText={'E-mail'}
                        type='text'
                        placeholder='mail@example.com'
                        name={""} 
                        control={undefined}
                    />
                    <FormInputText 
                        labelText={'Password'} 
                        type='text' 
                        placeholder='●●●●●●' 
                        name={""} 
                        control={undefined}
                    /> */}
                </div>
                <button onClick={() => alert('Forgot password')}>
                    <Text type='label' variant={'primary'} className="font-medium">Forgot password?</Text>
                </button>
            </div>
                
        </>
    )
}

export { LogInForm }