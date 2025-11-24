import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
function Uibnrcard({ item, index }) {
  return (
    <div className="bnr bg-[#000054] pt-20 pb-20 mb-15  max-sm:pt-10 max-sm:pb-10 max-md:pb-15 max-sm:mb-8  ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center max-sm:p-2 max-sm:flex-col max-sm:items-start max-md:flex-col max-md:items-start lg:p-2 lg:flex-row">
          <div className="lft text-white w-8/13 max-sm:w-full max-md:w-full max-md:mb-5.5">
            <h1 className="text-6xl font-black mb-5 max-sm:text-3xl max-sm:mb-3 lg:text-5xl max-md:text-5xl max-md:mb-3.5">
              {item.head}
            </h1>
            <p className="text-[18px] font-medium leading-8 mb-3.5 max-sm:text-[16px] max-sm:leading-6">
              {item.para}
            </p>
            <div className="rgt max-sm:hidden w-fit">
              <div className=" bg-[#55d0ff]  ">
                <Link
                  href="/contactus"
                  className=" flex items-center text-[#121212] gap-2 btn  font-normal bg-[#fff] group  p-2  pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10 "
                >
                  Contact Us{" "}
                  <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
                </Link>
              </div>
            </div>
          </div>

          <div className="rgt  w-7/13 max-sm:w-full md:w-full max-md:w-full">
            <Image src={item.img} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uibnrcard;
