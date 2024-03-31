import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Slick } from "@/components/Slick";
import { Footer } from "@/components/Footer";
import { ModulesProvider } from "@/providers/ModulesProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <head>
        <title>Outfix</title>
      </head>

      <body className={inter.className}>
        <ModulesProvider>
          <Slick />
          <Navbar />
          {children}
          <Footer />
        </ModulesProvider>
      </body>
    </html>
  );
}
