import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { data } from "@/store/Projectdata";
import Projectcard from "@/utilites/Projectcard";
import Link from "next/link";

function Project() {
  return (
    <>
      <div className="bg-[#f2f2f2] pt-16 pb-15 mb-16 p-2">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
            <div className="lft">
              <h3 className=" text-[#121212] rounded-4xl w-fit text-[16px] mb-3 ">
                PROJECT
              </h3>
              <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-3.5">
                Some Our Recent Works
              </h1>
            </div>

            <div className="rgt max-sm:mb-5 ">
              <div className=" bg-[#55d0ff]  ">
                <Link
                  href="/Portfolio"
                  className=" flex items-center text-white gap-2 btn  font-normal bg-[#1b1b1b] group  p-2  pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10 "
                >
                  See More{" "}
                  <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
                </Link>
              </div>
            </div>
          </div>

          <div className="proj w-full">
            <ul className="flex flex-wrap w-full items-center justify-center gap-4 mt-4  ">
              {data.slice(0, 6).map((item, index) => (
                <Projectcard key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
