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
            <div className='w-[10%]'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    slidesPerView={Infinity}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiperChildrenDetail"
                >
                    {images && images.length > 0 && images.map((image, index) => (
                        <SwiperSlide key={index} className='cursor-pointer w-[50px] h-[50px] border-[1px] border-gray-400 rounded-md overflow-hidden p-[2px] hover:border-gray-600'>
                            <img className='object-cover w-full h-full' src={image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-[90%]">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='mySwiperDetail'
                >
                    {images && images.length > 0 && images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img className='object-contain w-full h-full' src={image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
