import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  	title: "Manett",
  	description: "Your all-in-one expense tracker",
};

const poppins = Poppins({
  	subsets: ['latin'],
  	weight: '400',
})

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
  	return (
    	<html lang="en" className="h-full">
      		<body className={`${poppins.className} h-full`}>{children}</body>
    	</html>
  	);
}
