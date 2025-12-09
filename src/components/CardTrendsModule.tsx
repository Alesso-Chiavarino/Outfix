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

export const CardTrendsModule = () => {

  const { setProducts, products } = useStore(state => {
    return {
      setProducts: state.setProducts,
      products: state.products
    }
  })

  useEffect(() => {
    const loadProducts = async () => {
      const products = await ProductsService.getProducts()
      setProducts(products)
    }
    loadProducts()
  }, [])

  console.log("products", products)
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
        {products.map(({ images, price, title, id, category }) => {
          return (
            <SwiperSlide key={id}>
              <Link href={`/${category}/${title}--${id}`} className='flex flex-col items-start text-[16px] '>
                <div className='overflow-hidden w-full h-[300px] trendImageContainer'>
                  {/* {images.length > 1 ? (
                    <Swiper
                      navigation={{
                        enabled: true,
                        hideOnClick: true,
                        hiddenClass: 'hidden',
                      }}
                      slidesPerView={1}
                      modules={[Navigation]}
                      loop={true}
                      className="mySwiperChildren select-none"
                    >
                      {images.map((img, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img
                              className='w-[80%] h-full object-cover'
                              alt='img banner'
                              src={img}
                            // loading="lazy"
                            />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  ) : ( */}
                  <img
                    className='w-[80%] h-full object-cover'
                    alt='img banner'
                    src={images[0]}
                  // loading="lazy"
                  />
                  {/* )} */}
                </div>
                <span className='font-light mt-2'>{title}</span>
                <span className='font-semibold'>$ {price}</span>
              </Link>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          )
        })}
      </Swiper> : <p>Cargando productos...</p>}

    </section>
  )
}
