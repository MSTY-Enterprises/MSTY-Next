import Image from "next/image";
import React from "react";

function Uicard({ item, index }) {


  return (
    <>
      <li
       style={{backgroundColor: item.bg, color: item.text}}
        className={`  z-${index * 10} py-15`}
      >
        <div className="container mx-auto flex justify-between items-center max-md:flex-col max-sm:items-start max-sm:p-2 max-md:items-start lg:p-2 ">
          <div className="lft w-8/13 max-sm:w-full max-md:w-full max-md:mb-7">
            <h1 className="text-[3rem] font-bold mb-4.5 max-sm:text-4xl max-sm:mb-2.5 max-md:mb-1">{item.head}</h1>
            <p className="text-[1.125rem] font-medium max-sm:text-[17px]">{item.para}</p>
          </div>
          <div className="rgt w-4/13 max-sm:w-full max-sm:mt-7.5 max-md:w-full">
           <Image src={item.img} alt="msty image" />
          </div>
        </div>
      </li>
    </>
  );
}

export default Uicard;
