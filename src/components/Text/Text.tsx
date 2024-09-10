import React from 'react';

type TextProps = {
    fontWeight?: string; //to-do change to a type
    fontSize?: number;
    fontFamily?: 'Poppins' | 'Leckerli';
    className?: string;
    children: React.ReactNode;
}

const Text : React.FC<TextProps> = ({
    fontWeight,
    fontSize,
    className,
    children
}) => {
    return (
        <span
            className={`
                
            `}
        >
            {children}
        </span>
    )
}

export { Text }