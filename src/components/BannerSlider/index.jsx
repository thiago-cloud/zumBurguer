"use client";

import React, { useRef, useState } from 'react';
import{ Swiper, SwiperSlide } from 'swiper/react';

// Importando os estilos Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import {Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

// import slide1 from '../../assets/images/slide1.jpg'


export const BannerSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0} 
                navigation={true}
                pagination={{
                clickable: true,
                }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }} 
                effect={'fade'}
                modules={[Autoplay, Pagination, Navigation, EffectFade]} 
                className="banner-slider w-[100%] h-full h-fit"
            >
                <SwiperSlide>
                    <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background:`url('./slide-1.jpg')`}}>
                        <div className="container">
                            <div className="info w-[50%] d-flex flex-col gap-4 mr-auto duration-1000">
                                <h2 className="text-white"> 
                                    Crispy Chicken
                                </h2>
                                <h3>
                                    <span className="text-white/80">Open Daily: </span><span className="text-yellow-500">11:30PM - 8:30PM</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background:`url('./slide-2.jpg')`}}>
                        <div className="container">
                            <div className="info w-[40%] d-flex flex-col gap-4 mr-auto duration-1000">
                                <h2 className="text-white"> 
                                    Double Burger
                                </h2>
                                <h3>
                                    <span className="text-white/80">Open Daily: </span><span className="text-yellow-500">11:30PM - 8:30PM</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background:`url('./slide-3.jpg')`}}>
                        <div className="container">
                            <div className="info w-[50%] d-flex flex-col gap-4 ml-auto duration-1000">
                                <h2 className="text-white"> 
                                    Chicken Fingers
                                </h2>
                                <h3>
                                    <span className="text-white/80">Open Daily: </span><span className="text-yellow-500">11:30PM - 8:30PM</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>   
    )
}