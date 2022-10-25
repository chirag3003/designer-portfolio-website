import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import CarouselStyle from "./Carousel.style";
import Image from "next/image";
import React from "react";

export default function Carousel() {
    return (<CarouselStyle>
        <Swiper
            spaceBetween={1}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className={"slide"}>
                    <Image
                        src={"/imgs/img6.jpg"}
                        alt={"hi"}
                        layout={"fill"}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"slide"}>
                    <Image
                        src={"/imgs/img7.jpg"}
                        alt={"himg"}
                        layout={"fill"}
                    />
                </div>
            </SwiperSlide>

        </Swiper>
    </CarouselStyle>);
};