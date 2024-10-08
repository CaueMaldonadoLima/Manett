import React from 'react';

type TextProps = {
    className?: string;
    children: React.ReactNode;
}

const Text : React.FC<TextProps> = ({
    className,
    children
}) => {
    return (
        <span
            className={`
                text-text
                ${className}
        `}
        >
            {children}
        </span>
    )
}

export { Text }