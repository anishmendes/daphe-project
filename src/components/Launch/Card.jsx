import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper's CSS
import demo from '../../assets/demoImage.png'


import {   Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';


const Card = () => {
  return (

    <div className="flex justify-center items-center h-screen">

    <div className="relative w-3/4 h-3/4 ">
      <Swiper
         effect={'coverflow'}
         
         grabCursor={true}
         centeredSlides={true}
         autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
         slidesPerView={'auto'}
         coverflowEffect={{
           rotate: 50,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows: true,
         }}
         pagination={true}
         modules={[Autoplay,  EffectCoverflow, Pagination]}
        className="w-full h-full"
        >
        <SwiperSlide>
          <img src={demo} className="block w-full h-full" alt="card1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={demo} className="block w-full h-full" alt="card2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={demo}className="block w-full h-full" alt="card3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={demo} className="block w-full h-full" alt="card4" />
        </SwiperSlide>
      </Swiper>
    </div>
          </div>
  );
};

export default Card;
