import React from "react";

function Corecard({ item }) {
  return (
    <li className=" max-sm:h-50 max-sm:p-6 bg-white flex flex-col justify-between h-96 p-10 border-r-[1px] border-[#cfcfcf] last:border-r-0 hover:bg-[#21b0e9]/5 transition-all duration-500 ease-in-out w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 border-b-[1px] 2xl:px-2 ">
      <h3 className="text-8xl text-[#b9b9b9] max-sm:text-8xl font-black">{item.no}</h3>
      <div>
        <h1 className=" pl-0  text-[2rem] text-[#1b1b1b] font-bold mb-1 xl:px-2">
          {item.head}
        </h1>
        <p className="text-[16px] font-normal text-[#858585]">{item.para}</p>
      </div>
    </li>
  );
}

export default Corecard;
