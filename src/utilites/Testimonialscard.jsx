import Image from "next/image";
import React from "react";

function Testimonialscard({ item, index }) {
  return (
    <>
      <li className="bg-[#e6e6e6] px-4 py-8 rounded-2xl">
        <Image src={item.img} alt="msty img" width={100} height={200} className="mb-2.5 w-fit h-fit"/>
        <p className="text-[15px]  text-[#0000]leading-7 font-normal mb-3">{item.rev}</p>
        <h3 className="text-[17px] font-bold text-[#121212]">{item.name}</h3>
      </li>
    </>
  );
}

export default Testimonialscard;
