import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Slick } from "@/components/Slick";
import { Footer } from "@/components/Footer";
import { ModulesProvider } from "@/providers/ModulesProvider";
import { Toaster } from "sonner";
import Hydration from "@/providers/Hydration";
import "./globals.scss";

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
        <Hydration />
        <ModulesProvider>
          <Slick />
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ModulesProvider>
      </body>
    </html>
  );
}
