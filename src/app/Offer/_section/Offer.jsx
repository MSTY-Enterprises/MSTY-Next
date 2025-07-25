// components/Offer.tsx (or wherever your component lives)
"use client";

import Image from "next/image";
import img from "@/assets/images/offer-bnr.jpg";
import Pagecard from "@/utilites/Pagecard";
import { data, text } from "../../../store/Pagedata";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Offer = () => {
  const [offer, setOffer] = useState([]);

  const fetchOffer = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();  
      setOffer(data);  
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOffer();
  }, []); 

  

  


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-15">
      <h1 className="text-4xl sm:text-5xl text-[#121212] mt-10 font-extrabold mb-0 leading-tight max-sm:mt-10 max-sm:mb-4">
      Looking for a Website That’s Practically a Steal? 
      
      </h1>

      <div>
        {text.map((item, index) => (
          <p
            key={index}
            className="max-sm:text-[14px] leading-7 font-medium mb-10 mt-4"
          >
            {item.para1}
          </p>
        ))}
      </div>

      <div className="relative mt-5 mb-10 overflow-hidden group shadow-lg transition-shadow duration-500 hover:shadow-2xl">
        <Image
          src={img}
          alt="Offer banner"
          className="w-full h-full max-sm:h-[320px] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-90"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      

      <Swiper
  spaceBetween={30}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  loop={true}
  modules={[Pagination, Autoplay]}
  className="mySwiper"
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
  }}
>
  {offer.map((item, index) => (
    <SwiperSlide key={index} className="p-8">
      <Pagecard item={item} />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default Offer;
