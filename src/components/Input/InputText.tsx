'use client'

import { FC, useState } from "react"
import { EyeIcon, EyeSlashIcon } from "../icons";
import { Text } from "../Text/Text";

type InputProps = {
    labelText?: string;
    type?: 'text' | 'password'; 
    placeholder?: string;  
    errors?: any;
    register?: any;
    passwordValue?: string;
} 

const InputText:FC<InputProps> = ({
    labelText,
    type = 'text',
    placeholder = '...',
    errors,
    register,
    passwordValue
}) => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const passwordIconRender = () => (
        <button 
            type="button" 
            className="p-2" 
            onClick={() => setPasswordVisible(!passwordVisible)}
        >
            {passwordVisible ? <EyeIcon /> : <EyeSlashIcon />}
        </button>
    );

    const passwordStrongness = () => {
        if (!passwordValue) return '';
        
        const hasLetters = /[a-zA-Z]/.test(passwordValue);
        const hasNumbers = /\d/.test(passwordValue);
        const hasSpecialChars = /[^a-zA-Z0-9]/.test(passwordValue);
        
        if (hasLetters && hasNumbers && hasSpecialChars && passwordValue.length > 8) return 'strong';
        if (hasLetters && (hasNumbers || hasSpecialChars) && passwordValue.length > 6) return 'medium';
        if (hasLetters) return 'weak';

        return '';
    }

    return (
        <div className="flex-col w-full"> 
            {labelText && (
                <div className="flex w-full justify-between">
                    <Text type="label">{labelText}</Text> 
                    {type === 'password' && 
                        <Text
                            type="label"
                            className="font-medium  "
                            variant={
                                passwordStrongness() === 'strong' ? 'success'
                                : passwordStrongness() === 'medium' ? 'warning'
                                : 'error'
                            }
                        >
                            {passwordStrongness()}
                        </Text>
                    }
                </div>
            )
            }
            <div className={`
                ${labelText && 'mt-1'} 
                ${errors? 'border-2 border-error' : 'border-2 border-secondary'}
                ${!errors? 'focus-within:border-primary' : ''}
                bg-white rounded-md flex w-full
            `}>
                <input 
                    {...register}
                    type={type === 'password'? (passwordVisible? 'text': 'password'): type} 
                    className="p-2 bg-transparent focus:border-none focus:outline-none focus:ring-0 w-full placeholder-secondary"
                    placeholder={placeholder}
                />
                {type === "password" && <>{passwordIconRender()}</>}
            </div>
            {errors && <Text type="error" variant="error">{errors.message}</Text>}
        </div>
    )
}

export { InputText }