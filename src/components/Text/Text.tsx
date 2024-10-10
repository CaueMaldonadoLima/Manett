import React from 'react';

type TextProps = {
    className?: string;
    children: React.ReactNode;
    type?: 'title' | 'subtitle' | 'default' | 'label';
    variant?: 'primary' | 'secondary' | 'accent' | 'default'
}

const Text : React.FC<TextProps> = ({
    className,
    children,
    type = 'default',
    variant = 'default'
}) => {

    const fontSize = {
        title: 'text-2xl',
        subtitle: 'text-xl',
        default: 'text-base',
        label: 'text-sm'
    }

    const color = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        default: 'text-text'
    }

    return (
        <span
            className={`
                ${fontSize[type]}
                ${color[variant]}
                ${className}
        `}
        >
            {children}
        </span>
    )
}

export { Text }