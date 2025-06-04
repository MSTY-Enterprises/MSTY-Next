import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
function Servicecontentcard({ item, index }) {
  return (
    <>
      <div className="mt-18 max-sm:p-2  max-lg:p-2 max-md:p-2 xl:p-2 ">
        <div className=" container mx-auto flex justify-between  gap-8 max-sm:flex-col max-lg:flex-col max-md:flex-col">
          <div className="lft w-9/13 max-sm:w-full max-lg:w-full max-md:w-full">
            <h1 className="text-[3.5rem] font-bold underline text-[#1b1b1b] mb-5 max-sm:text-5xl max-sm:leading-[54px]">
              {item.head}
            </h1>
            <p className="text-[2rem] text-[#1b1b1b] mb-5 max-sm:text-[18px]">{item.para}</p>
            <div className="rgt  w-fit outline-0">
              <div className=" bg-[#55d0ff]  ">
                <Link
                  href={item.lnk}
                  className=" flex items-center text-white gap-2 btn  font-normal bg-[#1b1b1b] group  p-2  pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10 "
                >
                 Explore Now{" "}
                  <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
                </Link>
              </div>
            </div>
          </div>

          <div className="rgt w-5/13 max-sm:w-full  max-lg:w-full max-md:w-full">
            <h1 className="text-[1.375rem] text-[#1b1b1b] font-semibold uppercase">
              {item.head2}
            </h1>
            <ul className="  text-[1.5rem]  max-sm:text-[20px]">
              {item.list.map((item, index) => (
                <li
                  className=" border-b-1 border-b-[#f0f0f0]  py-4 flex justify-between items-center"
                  key={index}
                >
                  <span>
                    <span className=" text-[18px] text-[#7e7e81] mr-2">
                      0{index + 1}
                    </span>
                    {item}
                  </span>{" "}
                  <MdArrowOutward />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="imgs mt-19">
          <Image src={item.imgs} alt="msty image"  />
        </div>
      </div>
    </>
  );
}

export default Servicecontentcard;
