import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from './Img.json'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {

    const [male, female, slider] = Product

    let slide = slider.slider
    console.log(slide);
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {slide && slide.map((x) =>
                    <SwiperSlide ><img src={x.img} className=' img-fluid' alt="" /></SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
