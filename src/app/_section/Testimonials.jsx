'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { data } from "@/store/Testimonialdata";
import Testimonialscard from "@/utilites/Testimonialscard";

function Testimonials() {
  return (
    <div className="bg-[#f2f2f2] pt-16 pb-16 mb-16 p-2">
      <div className="container mx-auto">
        <h3 className="text-[#121212] rounded-4xl w-fit text-[16px] mb-3">
          OUR TESTIMONIALS
        </h3>
        <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-9">
          What Our Clients Say
        </h1 >
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
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
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Testimonialscard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div >
  );
}

export default Testimonials;
