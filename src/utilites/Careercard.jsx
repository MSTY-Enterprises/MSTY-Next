import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

function Careercard({ item }) {
  return (
    <Link href='/contactus'>
    <li className='flex justify-between  border-b border-[#cacaca] py-8 hover:bg-[#e9e9e9] transition-colors duration-300 ease-in-out max-sm:flex-col ' >
     
        <div className="container mx-auto flex justify-between max-sm:flex-col">
            <div className='md:w-[500px]'>
        <h1 className='text-4xl font-bold text-[#19a0d6] mb-2.5 max-sm:text-[26px]'>{item.head}</h1>
        <h3 className='text-[16px] font-medium text-[#121212]'>{item.des}</h3>
        <ul className='flex w-fit gap-3.5 mt-3.5 '>
          {item.list.map((listItem, index) => (
            <li  className=" bg-[#d1d1d1] px-3.5 py-2 text-[15px] font-medium rounded-4xl" key={index}>{listItem}</li>
          ))}</ul>
          </div>
            <div className="flex items-center gap-1 text-[#19a0d6] font-semibold cursor-pointer max-sm:mt-4 ">
        <h2 className='text-2xl max-sm:text-[20px] md:text-[18px]'>Apply Now</h2>
        <MdArrowOutward  className='w-[40px] h-[40px] max-sm:w-[23px] max-sm:h-[23px] md:w-[21px] md:h-[21px]'/>
      </div>
      </div>
        </li>
        </Link>
      
    
   
  );
}

export default Careercard;
