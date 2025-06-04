import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

function Deliver() {
  return (
    <div className="bg-[#090909] mb-15 pt-25 pb-25 max-sm:p-2 max-sm:py-18 max-md:pt-20 max-md:pb-20 lg:p-2 lg:py-20">
      <div className="container mx-auto ">
        <h1 className="text-white text-[3rem] font-bold leading-tight max-sm:text-3xl max-md:text-4xl">
          We deliver on time, in days and weeks
          <br className=" max-sm:hidden" /> <span className="text-[#848484]">—not months.</span>
        </h1>
        <div className="flex justify-between items-center mt-13 max-sm:flex-col max-sm:items-start max-md:mt-10">
          <div className="lft bg-[#282828] w-6/10 max-sm:w-full">
            <ul>
              <li className=" border-b-1 border-b-[#686868]">
                <div className="flex justify-between items-center px-14 py-6 max-sm:px-4 max-md:px-5">
                  <div className="flex items-center">
                    <span className="text-[#7e7e81] font-medium text-[18px] mr-3.5">
                      01
                    </span>
                    <p className="text-[1.5rem] font-medium text-white max-sm:text-[18px] max-md:text-[19px]">
                      Onboard in 01 day
                    </p>
                  </div>
                  <div>
                    <MdArrowOutward className="text-white" />
                  </div>
                </div>
              </li>

              <li className=" border-b-1 border-b-[#686868]">
                <div className="flex justify-between items-center px-14 py-5 max-sm:px-4 max-md:px-5">
                  <div className="flex items-center">
                    <span className="text-[#7e7e81] font-medium text-[18px] mr-3.5">
                      03
                    </span>
                    <p className="text-[1.5rem] font-medium text-white max-sm:text-[18px] max-md:text-[19px]">
                      Understand Scope & Strategy
                    </p>
                  </div>
                  <div>
                    <MdArrowOutward className="text-white" />
                  </div>
                </div>
              </li>

              <li className=" ">
                <div className="flex justify-between items-center px-14 py-5 max-sm:px-4 max-md:px-5">
                  <div className="flex items-center">
                    <span className="text-[#7e7e81] font-medium text-[18px] mr-3.5">
                      03
                    </span>
                    <p className="text-[1.5rem] font-medium text-white max-sm:text-[18px] max-md:text-[19px]">
                      First designs in 4-5 days
                    </p>
                  </div>
                  <div>
                    <MdArrowOutward className="text-white" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="rgt w-3/10 max-sm:w-full max-sm:mt-5 max-sm:">
            <p className="text-white text-sm italic mb-4">
              "Msty Enterprise is a fantastic design team, with a healthy blend
              of UI and UX skills. Highly recommended”
            </p>
            <div className="rgt max-sm:hidden  w-fit ">
              <div className=" bg-[#55d0ff]  ">
                <Link
                  href="/contactus"
                  className=" flex items-center text-black gap-2 btn  font-normal bg-white group  p-2  pr-4.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10  "
                >
                  Contact Us{" "}
                  <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deliver;
