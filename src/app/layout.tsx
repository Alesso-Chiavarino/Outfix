import { Inter, Fira_Sans_Condensed } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Slick } from "@/components/Slick";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>test</title>
      </head>

      <body className={inter.className}>
        <Slick />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
