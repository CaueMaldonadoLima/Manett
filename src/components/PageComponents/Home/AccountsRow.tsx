type Props = {
    title: string
    value: string
}

const AccountsRow: React.FC<Props> = ({
    title,
    value,
}) => {
    return (
        <div className="w-full flex flex-row gap-2 items-center text-xs justify-between">
            <p>{title}</p>
            <p>{value}</p>
        </div>
    )
}

export { AccountsRow }