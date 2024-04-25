import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper's CSS
import demo from '../../assets/demoImage.png'


import {   Autoplay,  Pagination } from 'swiper/modules';


const Card = () => {
  return (

    <div className="flex justify-center items-center h-screen w-screen">

    <div className="relative w-3/4  h-3/4 ">
      <Swiper
         effect={'coverflow'}
         
         grabCursor={true}
         centeredSlides={true}
         autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
         slidesPerView={'2'}
        //  coverflowEffect={{
        //    rotate: 50,
        //    stretch: 0,
        //    depth: 100,
        //    modifier: 1,
        //    slideShadows: true,
        //  }}
         pagination={true}
         modules={[Autoplay, Pagination]}
        className="w-full h-full"
        >
        <SwiperSlide>
          <img src={demo} className="object-cover  w-100% h-10%" alt="card1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={demo} className="object-cover  w-100% h-10%" alt="card2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={demo}className="object-cover w-100% h-10%" alt="card3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={demo} className="object-cover  w-100% h-10%" alt="card4" />
        </SwiperSlide>
      </Swiper>
    </div>
          </div>
  );
};

export default Card;
