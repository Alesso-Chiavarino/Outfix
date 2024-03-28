import { Banner } from "@/components/Banner";
import { CardTrendsModule } from "@/components/CardTrendsModule";
import { CardsModuleOne } from "@/components/CardsModuleOne";
import { CardsModuleThree } from "@/components/CardsModuleThree";
import { CardsModuleTwo } from "@/components/CardsModuleTwo";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20">
      <Banner />
      <CardsModuleOne />
      <CardsModuleTwo />
      <CardsModuleThree />
      <CardTrendsModule />
      <Newsletter />
    </main>
  );
}
