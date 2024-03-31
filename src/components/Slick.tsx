'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { usePathname } from 'next/navigation';
import { routesWithoutSlick } from '@/constants/route.constant';

export function Slick() {

    const pathname = usePathname()

    if (routesWithoutSlick.includes(pathname)) return null

    return (
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            loop={true}
            init={false}
            modules={[Autoplay]}
            className="mySwiper select-none bg-black text-white cursor-pointer"
        >
            <SwiperSlide style={{ fontSize: '15px', padding: '7px 0px' }}>
                Promociones de verano
            </SwiperSlide>
            <SwiperSlide style={{ fontSize: '15px', padding: '7px 0px' }}>
                50% de descuento en todas las prendas
            </SwiperSlide>
            <SwiperSlide style={{ fontSize: '15px', padding: '7px 0px' }}>
                Envío gratis en todas las compras
            </SwiperSlide>
        </Swiper>
    )
}