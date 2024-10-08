'use client'

import { FC, useState } from "react"
import { EyeIcon, EyeSlashIcon } from "../icons";

type InputProps = {
    labelText?: string;
    type?: 'text' | 'password';   
} 

const InputText:FC<InputProps> = ({
    labelText,
    type = 'text',
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
                <label className="text-text">{labelText}</label> //TODO: add strong/weak password message
            }
            <div className={`${labelText && 'mt-2'} border-2 border-secondary rounded-md flex w-full`}>
                <input 
                    type={type === 'password'? (passwordVisible? 'text': 'password'): type} 
                    className="p-2 bg-transparent focus:border-none focus:outline-none focus:ring-0 w-full"
                />
                {type === "password" && <>{passwordIconRender()}</>}
            </div>
        </div>
    )
}

export { InputText }