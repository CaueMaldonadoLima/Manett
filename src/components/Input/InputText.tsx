'use client'

import { FC, useState } from "react"
import { EyeIcon, EyeSlashIcon } from "../icons";

type InputProps = {
    labelText?: string;
    type?: 'text' | 'password';
}

const InputText:FC<InputProps> = ({
    labelText,
    type = 'text'
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
        <> 
            {labelText &&
                <label className="text-text">{labelText}</label>
            }
            <div className="border-2 border-secondary rounded-sm flex w-full">
                <input 
                    type={type === 'password'? (passwordVisible? 'text': 'password'): type} 
                    className="p-2 focus:border-none focus:outline-none focus:ring-0 w-full"
                />
                {type === "password" && <>{passwordIconRender()}</>}
            </div>
        </>
    )
}

export { InputText }