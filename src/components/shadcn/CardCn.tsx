import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

type CardCnProps = {
    title?: string,
    description?: string,
    children?: React.ReactNode,
} 

const CardCn: React.FC<CardCnProps> = ({
    title,
    description,
    children
}) => {
    return (
        <Card>
            {title || description &&
                <CardHeader>
                    {title && <CardTitle>{title}</CardTitle>}
                    {description && <CardDescription>{description}</CardDescription>}
                    {/* {headerButton && } */}
                </CardHeader>
            }
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export { CardCn }