import { Text } from "@/components/Text/Text"

const LoginTitle = ({
    title,
    subtitle
} : {
    title: string,
    subtitle: string
}) => {
    return (
        <div className='flex-col w-full flex'>
            <Text type='title'>{title}</Text>
            <Text variant='secondary'>{subtitle}</Text>
        </div>
    )
}

export { LoginTitle }