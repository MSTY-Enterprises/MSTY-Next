import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Goalcard({ item, index }) {

  return (
    <div className="goalcard flex justify-between items-center mt-15 mb-15 max-sm:flex-col max-sm:mt-8 max-md:flex-col max-md:items-start lg:gap-5 ">
      <div className="lft w-6/13  max-sm:w-full max-sm:mb-5 max-md:w-full max-md:mb-8 lg:w-7/13">
        <Image src={item.img} alt={item.head} className="w-fit h-fit" />
      </div>
      <div className="rgt w-6/13 max-sm:w-full  max-md:w-full xl:w-7/13">
        <h1 className="text-[3rem] font-bold text-[#1b1b1b] leading-tight mb-4 max-sm:text-3xl max-sm:mb-2.5 lg:text-4xl lg:mb-2 xl:text-5xl">{item.head}</h1>
        <p className="text-[1.125rem] font-medium">{item.para}</p>
        <ul className="mt-4 text-[1.5rem] max-sm:text-[18px] lg:text-[18px] xl:text-[1.3rem]">
          {item.list.map((item, index) => (
            <li className=" flex justify-between items-center py-3 border-b-1 border-b-[#e4e4e4] ">
              <span>
                <span className="text-[18px] max-sm:text-[16px] text-[#7e7e81] mr-3 lg:text-[16px] xl:text-[17px]">0{index + 1}</span>
                <span >{item}</span>
              </span>
              <MdArrowOutward />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Goalcard;
