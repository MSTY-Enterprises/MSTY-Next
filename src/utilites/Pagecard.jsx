import Image from "next/image";
import React from "react";

const Pagecard = ({ item }) => {
  return (
    <div className="w-full h-auto overflow-hidden rounded-2xl shadow-md">
      <Image
        src={item.img}
        alt="Offer Image"
        width={400}
        height={561}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Pagecard;
