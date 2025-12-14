'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect } from 'react';
import { ProductsService } from '@/services/products.service';
import { useStore } from '@/store/store';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductCard } from './ProductCard';

export const CardTrendsModule = () => {

  const { setProducts, products, categories } = useStore(state => {
    return {
      setProducts: state.setProducts,
      products: state.products,
      categories: state.categories,
    }
  })

  useEffect(() => {
    const loadProducts = async () => {
      const products = await ProductsService.getProducts()
      setProducts(products)
    }
    loadProducts()
  }, [])

  return (
    <section className="container">

      <h2 className="text-3xl mb-5">Tendencias</h2>

      {products && products.length > 0 ? <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={20}
        init={false}
        modules={[Navigation, Autoplay]}
        className="trendsSwiper select-none"
      >
        {products.map((prod) => {

          const category = categories.find(cat => cat.id === prod.category);

          return (
            <SwiperSlide key={prod.id}>
              <ProductCard product={prod} category={category} />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          )
        })}
      </Swiper> : <p>Cargando productos...</p>}

    </section>
  )
}
