'use client'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../app/globals.scss';


export function ImagesSlider({ images }: { images: string[] }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className='w-full flex gap-2 select-none h-[450px]'>
            <div className="w-[10%] h-full">
                <Swiper
                    direction="vertical"
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView="auto"
                    freeMode
                    watchSlidesProgress
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className="!h-[60px] cursor-pointer border border-gray-400 rounded-md overflow-hidden"
                        >
                            <img
                                src={image}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-[90%] h-full">
                <Swiper
                    loop
                    spaceBetween={10}
                    navigation
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiperDetail h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="h-full flex items-center justify-center">
                            <img
                                src={image}
                                className="max-h-full max-w-full object-contain"
                                alt=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
