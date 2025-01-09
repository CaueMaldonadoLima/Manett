import { FC } from "react"

type ButtonProps = {  
    variant?: 
        'solid-primary' | 
        'solid-secondary' | 
        'solid-accent' | 
        'outline-primary' | 
        'outline-secondary' | 
        'outline-accent' | 
        'outline';
    children: React.ReactNode
    icon?: {
        position: 'left' | 'right'
        icon: React.ReactNode
    }
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = ({ variant = 'solid-primary', children, icon, onClick, type = 'button'}) => {

    const variantStyles = {
        'solid-primary': `bg-primary text-white border-2 border-primary`,
        'solid-secondary': `bg-secondary text-white border-2 border-secondary`,
        'solid-accent': `bg-accent text-white border-2 border-accent`,
        'outline-primary': `bg-white text-primary border-2 border-primary`,
        'outline-secondary': `bg-white text-secondary border-2 border-secondary`,
        'outline-accent': `bg-white text-accent border-2 border-accent`,
        'outline': `bg-white text-text border-2 border-text`
    }

    return (
        <button 
            className={`
                ${variantStyles[variant]}
                w-full p-2 rounded-md flex text-center items-center justify-center gap-2 focus:outline-none
            `}
            onClick={onClick}
            type={type}    
        >
            {icon?.position === 'left' && <span>{icon.icon}</span>}
            {children}
            {icon?.position === 'right' && <span>{icon.icon}</span>}
        </button>
    )
}

export { Button }