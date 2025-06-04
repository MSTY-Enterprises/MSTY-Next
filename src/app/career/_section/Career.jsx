import React from "react";
import { data } from "@/store/Careerdata";
import Careercard from "@/utilites/Careercard";
import img from "@/assets/images/hiring.jpg";
import Image from "next/image";

function Career() {
  return (
    <>
      <div className="container mx-auto max-sm:p-2 md:p-2">
        <div className="border-[1px] border-[#757575] rounded-2xl w-fit px-3 py-1 mt-10 hover:bg-[#19a0d6] text-white transition-colors duration-300 ease-in-out">
          <p className="text-[14px] font-medium text-[#1b1b1b]  ">
            We're Hiring
          </p>
        </div>
        <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold leading-tight mt-3">
          Your Next Creative Adventure Starts Here
        </h1>

        <div className="relative mt-5  overflow-hidden group shadow-lg transition-shadow duration-500 hover:shadow-2xl">
          <Image
            src={img}
            alt="msty image"
            className="w-full h-full max-sm:h-[320px] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-90"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
      </div>

      <div className="  mb-17 max-sm:p-2 md:p-2">
        <ul className=" mt-3 ">
          {data.map((item, index) => (
            <Careercard key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Career;
