import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import slider1 from "../../assets/slider/slide1.jpg";
import slider2 from "../../assets/slider/slide2.jpg";
import slider3 from "../../assets/slider/slide3.jpg";
import slider4 from "../../assets/slider/slide4.jpg";
import slider5 from "../../assets/slider/slide5.jpg";
import slider6 from "../../assets/slider/slide6.jpg";
const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction"
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[95vh]"
      >
        <SwiperSlide>
          
          <img className="w-full h-full" src={slider1} />
          <h1 className="text-2xl text-white -mt-40 text-center font-bold ">Sundarban</h1>
        </SwiperSlide>
        <SwiperSlide>
          
          <img className="w-full h-full" src={slider2} />
          <h1 className="text-2xl text-white -mt-40 text-center font-bold ">CoxsBazar Beach Sunset</h1>
        </SwiperSlide>
        <SwiperSlide>
          
          <img className="w-full h-full" src={slider3} />
          <h1 className="text-2xl text-white -mt-40 text-center font-bold ">Srimangal Tea Gardens</h1>
        </SwiperSlide>
        <SwiperSlide>
          
          <img className="w-full h-full" src={slider4} />
          <h1 className="text-2xl text-white -mt-40 text-center font-bold ">Bandarban Hills View</h1>
        </SwiperSlide>
        <SwiperSlide>
          
          <img className="w-full h-full" src={slider5} />
          <h1 className="text-2xl text-white -mt-40 text-center font-bold ">Lalbagh Fort Dhaka</h1>
        </SwiperSlide>
        <SwiperSlide>
          
          <img className="w-full h-full" src={slider6} />
          <h1 className="text-2xl text-white -mt-40 text-center font-bold ">Rangamati Lake</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
