import Image from "next/image";
import React from "react";

function Logocard({ item, index }) {
  return (
    <li className=" mx-10">
      <Image src={item.img} alt="" className="h-9 w-fit" width={100} height={100} />
    </li>
  );
}

export default Logocard;
