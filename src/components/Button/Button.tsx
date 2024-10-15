import { FC } from "react"

type ButtonProps = {  
    variant?: 'solid' | 'outline';
    children: React.ReactNode
    color?: 'primary' | 'secondary' | 'accent'
    icon?: {
        position: 'left' | 'right'
        icon: React.ReactNode
    }
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ variant = 'solid', children, icon, onClick, color = 'primary'}) => {

    const variantStyles = {
        'solid': `bg-${color} text-white border-2 border-${color}`,
        'outline': `bg-white text-text border-2 border-text`
    }

    return (
        <button 
            className={`
                ${variantStyles[variant]}
                w-full p-2 rounded-md flex text-center items-center justify-center gap-2 focus:outline-none
            `}
            onClick={onClick}    
        >
            {icon?.position === 'left' && <span>{icon.icon}</span>}
            {children}
            {icon?.position === 'right' && <span>{icon.icon}</span>}
        </button>
    )
}

export { Button }