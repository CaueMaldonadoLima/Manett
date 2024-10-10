const LoginCard = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="bg-white w-full flex flex-col shadow-md p-16 rounded-lg gap-4">
            {children}
        </div>
    )
}

export { LoginCard }