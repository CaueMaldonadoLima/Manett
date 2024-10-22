'use client'

import { FC, useState } from "react"
import { EyeIcon, EyeSlashIcon } from "../icons";
import { Text } from "../Text/Text";

type InputProps = {
    labelText?: string;
    type?: 'text' | 'password'; 
    placeholder?: string;  
    error?: string;
} 

const InputText:FC<InputProps> = ({
    labelText,
    type = 'text',
    placeholder = '...',
    error
}) => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const passwordIconRender = () => {
        return (
            <>
                {
                    passwordVisible? <button className="p-2" onClick={() => setPasswordVisible(!passwordVisible)}>{EyeIcon()}</button>
                :
                    <button className="p-2" onClick={() => setPasswordVisible(!passwordVisible)}>{EyeSlashIcon()}</button>
                }
            </>
        )
    }

    return (
        <div className="flex-col w-full"> 
            {labelText &&
                <Text type="label">{labelText}</Text> //TODO: add strong/weak password message
            }
            <div className={`
                ${labelText && 'mt-1'} 
                ${error? 'border-error focus-within:border-error' : 'focus-within:border-primary'}
                bg-white border-2 border-secondary rounded-md flex w-full
            `}>
                <input 
                    type={type === 'password'? (passwordVisible? 'text': 'password'): type} 
                    className="p-2 bg-transparent focus:border-none focus:outline-none focus:ring-0 w-full placeholder-secondary"
                    placeholder={placeholder}
                />
                {type === "password" && <>{passwordIconRender()}</>}
            </div>
        </div>
    )
}

export { InputText }