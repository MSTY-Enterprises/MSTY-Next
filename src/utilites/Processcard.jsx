import React from "react";
import { FaCircle } from "react-icons/fa";

function Processcard({ item, index }) {
  return (
    <li className="bg-[#ffffff] px-5 py-8 ">
      <div className="">
        <span className="text-[#7e7e81] font-medium text-[1.5rem]">
          {item.id}
        </span>
      </div>
      <div className=" mt-10">
        <h1 className="text-[1.625rem] font-bold text-[#1b1b1b] mb-2">
          {item.head}
        </h1>
        <p className="text-[#7e7e81] text-[1rem] leading-6 font-medium">
          {item.para}
        </p>
        <ul className="text-[1.125rem] font-medium text-[#1b1b1b] flex flex-col mt-3.5 ">
          {item.pnt.map((item, index) => (
            <li className=" flex items-center py-1   ">
              <FaCircle className=" mr-5 w-[10px]" />
              <span className=" ">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Processcard;
