import React from "react";
import Blogcard from "@/utilites/Blogcard";
import { data } from "@/store/Blogdata"
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

function Blog() {
  return (
    <>
      <div className=" blog bg-[#f2f2f2] pt-16 pb-16 mb-16 p-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
            <div className='lft'>
              <h3 className=" text-[#121212] rounded-4xl w-fit text-[16px] mb-3 ">
                BLOGS & NEWS
              </h3>
              <h1 className='text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-3.5'>Latest insights & inspiration</h1>
            </div>

            <div className='rgt '>
              <div className=" bg-[#55d0ff]  ">
                <Link
                  href="/Blogs"
                  className=" flex items-center text-white gap-2 btn  font-normal bg-[#1b1b1b] group  p-2  pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10 "
                >
                  See More{" "}
                  <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
                </Link>
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap justify-center items-center w-full mt-9 gap-4.5 ">
            {data.slice(0,3).map((item, index) => (
              <Blogcard key={index} item={item} />
            ))}

          </ul>


        </div>
      </div>
    </>
  );
}

export default Blog;
