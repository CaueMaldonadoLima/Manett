export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
      	    <body className="bg-background flex-1 h-screen">{children}</body>
    	</html>
    )
}   