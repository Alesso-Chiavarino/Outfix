'use client'

import { Banner } from "@/components/Banner";
import { CardTrendsModule } from "@/components/CardTrendsModule";
import { CardsModuleOne } from "@/components/CardsModuleOne";
import { CardsModuleThree } from "@/components/CardsModuleThree";
import { CardsModuleTwo } from "@/components/CardsModuleTwo";
import { Newsletter } from "@/components/Newsletter";
import NextNProgress from 'nextjs-progressbar';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-20">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Banner />
      <CardsModuleOne />
      <CardsModuleTwo />
      <CardsModuleThree />
      <CardTrendsModule />
      <Newsletter />
    </main>
  );
}
