import { InputText } from "@/components/Input/InputText";
import { Controller } from "react-hook-form";

interface FormInputTextProps {
    name: string;
    control: any; 
    labelText: string;
    type?: 'text' | 'password';
    placeholder?: string;
    error?: string;
}

const FormInputText: React.FC<FormInputTextProps> = ({
    name,
    control,
    labelText,
    type = "text",
    placeholder,
    error,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <InputText 
                    {...field}
                    labelText={labelText}
                    type={type}
                    placeholder={placeholder}
                    error={error} 
                />
            )}
        />
    );
};

export { FormInputText };