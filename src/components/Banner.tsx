'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Banner() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        init={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper max-h-[500px] select-none"
      >
        <SwiperSlide>
          <img
            alt='img banner'
            src="https://levisarg.vtexassets.com/assets/vtex.file-manager-graphql/images/e2f9fa44-f607-4640-87b8-c1b004730d61___1b9568498da8ce4f2e03a9eff3da083b.png"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt='img banner'
            src="https://levisarg.vtexassets.com/assets/vtex.file-manager-graphql/images/04b92398-105e-4cdd-a7c7-b8a2e879e10c___e411a2f9c4f86ca6d8831e049aaf1693.png"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt='img banner'
            src="https://jc-moda.com/wp-content/uploads/2024/03/JCinvierno2024-jpg.webp"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}