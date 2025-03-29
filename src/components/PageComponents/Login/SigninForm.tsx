import { Button } from "@/components/Button/Button"
import { GoogleIcon } from "@/components/icons"
import { InputText } from "@/components/Input/InputText"

const SigninForm = () => {//TODO: button component
    //TODO: Forgot password
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
            <InputText labelText={'E-mail'} type='text' placeholder='mail@example.com'/>
            <InputText labelText={'Password'} type='text' placeholder='●●●●●●'/>
            {/* <p>Forgot password?</p> */}
        </>
    )
}

export { SigninForm }