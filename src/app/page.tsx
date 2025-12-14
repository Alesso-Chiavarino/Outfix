'use client'

import { Banner } from "@/components/Banner";
import { CardTrendsModule } from "@/components/CardTrendsModule";
import { CardsModuleOne } from "@/components/CardsModuleOne";
import { CardsModuleThree } from "@/components/CardsModuleThree";
import { CardsModuleTwo } from "@/components/CardsModuleTwo";
import { Newsletter } from "@/components/Newsletter";
import { useEffect } from "react";
import { useStore } from "@/store/store";
import { CategoriesService } from "@/services/categories.service";
import { ColorsService } from "@/services/colors.service";

export default function Home() {

  const { setCategories, setColors, categories } = useStore(state => {
    return {
      setCategories: state.setCategories,
      setColors: state.setColors,
      categories: state.categories,
    }
  })

  useEffect(() => {
    const loadInitialData = async () => {
      const categories = await CategoriesService.getCategories()
      const colors = await ColorsService.getColors()

      setCategories(categories)
      setColors(colors)
    }

    loadInitialData();
  }, []);

  const categoriesModuleOne = categories && categories.slice(0, 4);
  const categoriesModuleThree = categories && categories.slice(4, 7);

  return (
    <main className="flex min-h-[94vh] flex-col items-center gap-20">
      <Banner />
      <CardsModuleOne categories={categoriesModuleOne} />
      <CardsModuleTwo />
      <CardsModuleThree categories={categoriesModuleThree} />
      <CardTrendsModule />
      <Newsletter />
    </main>
  );
}
