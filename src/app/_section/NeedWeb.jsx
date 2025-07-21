import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import img from '@/assets/images/need-web.jpg';



const NeedWeb = () => {
  return (
    <section className="bg-[#f2f2f2] pt-16 pb-15 mb-16 p-2 mt-15 ">
      <div className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-sm:py-5 md:gap-20 px-4 md:px-10 py-5">
  <aside className="w-full md:w-1/2 relative">
    <Image
      src={img}
      alt="Need Image"
      width={400}
      height={372}
      className=""
    />

    
  </aside>

  <aside className="w-full md:w-1/2">
    <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-4 leading-tight">
      Why Every Business Needs a Website
    </h1>
    <p className="text-[16px] max-sm:text-[14px] leading-7 font-medium mb-6 text-[#333]">
      In today’s digital age, a website is no longer a luxury — it’s a necessity.
      Whether you're a small local shop or a growing brand, your customers expect
      to find you online. A website builds trust, showcases your products or
      services, answers questions, and helps people connect with you 24/7. Without
      one, you're missing out on valuable opportunities to grow your business and
      stay ahead of the competition.
    </p>
    <div className=" bg-[#55d0ff] w-fit ">
              <Link
                href="/need"
                className=" flex items-center text-white gap-2 btn  font-normal bg-[#1b1b1b] group  p-2  pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10 "
              >
                See More{" "}
                <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
              </Link>
            </div>
  </aside>
</div>

      </div>
    </section>
  );
};

export default NeedWeb;
