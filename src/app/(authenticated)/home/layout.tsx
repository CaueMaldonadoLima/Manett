export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full bg-background">
      	    <body className="bg-background flex-1 h-screen">{children}</body>
    	</html>
    )
}   