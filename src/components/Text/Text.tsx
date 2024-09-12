import React from 'react';

type TextProps = {
    fontWeight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'; 
    fontSize?: number;
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
                ${fontWeight ? `font-${fontWeight}` : ''}
                ${fontSize ? `text-${fontSize}` : ''}
                ${className}
        `}
        >
            {children}
        </span>
    )
}

export { Text }