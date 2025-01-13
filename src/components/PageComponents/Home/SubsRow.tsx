import { Tv } from "lucide-react"

type Props = {
    title: string
    date: string
    value: string
}

const SubsRow: React.FC<Props> = ({
    title,
    date,
    value,
}) => {
    return (
        <div className="w-full flex flex-row gap-2 items-center text-xs justify-between">
            <div className="w-fit p-2 flex flex-row items-center">
                <Tv className="w-5 h-5" />
                <div className="p-2">
                    <p>{title}</p>
                    <p className="text-secondary">{date}</p>
                </div>
            </div>
            <div className="w-full items-center justify-end flex">
                <p>{value}</p>
            </div>
        </div>
    )
}

export { SubsRow }