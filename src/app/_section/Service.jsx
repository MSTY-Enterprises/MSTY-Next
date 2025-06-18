import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Servicecard from '@/utilites/Servicecard';
import { data } from '@/store/Servicedata'
import Link from 'next/link';


function Service() {
  return (
    <>
      <div className='container mx-auto mb-15 p-2   '>
        <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
          <div className='lft'>
            <h3 className=" text-[#121212] rounded-4xl w-fit text-[16px] mb-3 ">
              FEATURED SERVICES
            </h3>
            <h1 className='text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-3.5'>The Best Services</h1>
          </div>

          <div className='rgt max-sm:mb-4 '>
            <div className=" bg-[#55d0ff]  ">
              <Link
                href="/services"
                className=" flex items-center text-white gap-2 btn  font-normal bg-[#1b1b1b] group  p-2  pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10 "
              >
                See More{" "}
                <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
              </Link>
            </div>
          </div>
        </div>

        <div className='main'>
          <ul className='w-full flex flex-wrap gap-5 justify-center mt-9'>
            {data.map((item, index) => (
              <Servicecard key={index} item={item} />
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}

export default Service