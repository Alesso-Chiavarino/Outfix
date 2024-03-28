import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Slick } from "@/components/Slick";
import { Footer } from "@/components/Footer";
import "./globals.css";

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
        <Footer />
      </body>
    </html>
  );
}
