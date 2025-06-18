'use client'
import React from "react";
import Blogcard from "@/utilites/Blogcard";
import { useBlog } from "@/hooks/BlogContext";
function Blogs() {

  const { blogs } = useBlog();

  

  return (
    <>
      <div className="container mx-auto py-10   md:p-2 max-sm:p-2">
        <h1 className="text-5xl max-sm:text-2xl text-[#121212] font-extrabold mb-3 leading-tight pt-10">
          Shaping the Future of Digital Design & Innovation
        </h1>

      <p className=" text-3xl max-sm:text-[18px] max-sm:leading-[25px] text-[#121212] leading-[43px] md:text-3xl">Stay updated with the latest in web development, design trends, and tech insights. Get practical, expert advice to help businesses, developers, and designers build, improve, and create impactful digital experiences.</p>
        <ul className="flex flex-wrap justify-center items-center w-full mt-9 gap-4.5 max-sm:w-fit md:justify-items-start max-sm:p-2 pb-10 ">
          {blogs.map((item, index) => (
            <Blogcard key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blogs;
