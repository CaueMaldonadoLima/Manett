'use client'

import { FC, useState } from "react"
import { EyeIcon, EyeSlashIcon } from "../icons";
import { Text } from "../Text/Text";

type InputProps = {
    labelText?: string;
    type?: 'text' | 'password'; 
    placeholder?: string;  
    errors?: any;
    register: any;
    name: string;
} 

const InputText:FC<InputProps> = ({
    labelText,
    type = 'text',
    placeholder = '...',
    errors,
    register,
    name, 
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

    return (
        <div className="flex-col w-full"> 
            {labelText &&
                <Text type="label">{labelText}</Text> //TODO: add strong/weak password message
            }
            <div className={`
                ${labelText && 'mt-1'} 
                ${errors? 'border-2 border-error' : 'border-2 border-secondary'}
                ${!errors? 'focus-within:border-primary' : ''}
                bg-white rounded-md flex w-full
            `}>
                <input 
                    {...register(name)}
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