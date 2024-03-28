'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const CardTrendsModule = () => {
  return (
    <section className="container">

      <h2 className="text-3xl mb-5">Tendencias</h2>

      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={20}
        init={false}
        modules={[Navigation, Autoplay]}
        className="trendsSwiper select-none"
      >
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide><SwiperSlide>
          <div className='flex flex-col w-full items-start text-[16px]'>
            <img
              alt='img banner'
              src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000"
              loading="lazy"
            />
            <span className='font-light mt-2'>Remera Nazi</span>
            <span className='font-semibold'>$ 789</span>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>


    </section>
  )
}
