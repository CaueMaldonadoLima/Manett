import { Utensils } from "lucide-react"

type Props = {
    title: string,
    type: string,
    description?: string,
    value: string,
}

const EntriesRow: React.FC<Props> = ({
    title,
    type,
    description,
    value,
}) => {
    return (
        <div className="w-full flex flex-row gap-2 items-center text-xs border-secondary border-b">
            <div className="w-fit p-2">
                <Utensils className="w-5 h-5" />
            </div>
            <div className="p-2">
                <p>{title}</p>
                <p className="text-secondary">{type}</p>
            </div>
            <p className="w-full px-4 text-sm">{description}</p>
            <p className="w-[10%] items-center flex justify-end">{value}</p>
        </div>
    )
}

export { EntriesRow }