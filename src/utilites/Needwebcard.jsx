'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

const Needwebcard = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <li className="mb-10">
      <div
        className={`flex flex-col md:flex-row ${
          !isEven ? 'md:flex-row-reverse' : ''
        } items-center gap-8 p-6 bg-[#f2f2f2] rounded-lg shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] `}
      >
        <aside className="relative shrink-0">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <Image
              src={item.img}
              alt={item.head}
              width={576}
              height={600}
              className="object-cover"
            />
          </div>
        </aside>

        <aside className="flex-1">
          <h1 className="text-4xl font-bold underline text-[#1b1b1b] mb-5 max-sm:text-5xl max-sm:leading-[54px]">
            {item.head}
          </h1>
          <p className="text-[1.125rem] text-[#262626] leading-8 font-medium mb-4">
            {item.para}
          </p>
          <div className=" bg-[#55d0ff] w-fit  ">
              <Link
                href="https://wa.me/919910741417?" target='_blank'
                className=" flex items-center text-white gap-2 btn  font-normal bg-[#1b1b1b] group  p-2  pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10 "
              >
                Connect With Us{" "}
                <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
              </Link>
            </div>
        </aside>
      </div>
    </li>
  );
};

export default Needwebcard;
