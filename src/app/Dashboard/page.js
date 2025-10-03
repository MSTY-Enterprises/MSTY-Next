import React from "react";
import Dashboardcard from "@/utilites/Dashboardcard";
import { data } from '@/store/Dashboarddata';

export const metadata = {
  title: "Dashboard | Web & Digital Marketing Solution for Grow ",
  description:
    "MSTY Enterprises provides professional web solutions, social media management, website maintenance, and digital marketing to help businesses expand online. ",
};

const page = () => {
  return (
    <>
      <div className="container mx-auto max-sm:p-2">
        <h1 className="text-5xl max-sm:text-3xl max-sm:mt-10 max-sm:mb-4 text-[#121212] mt-10 font-extrabold mb-10 leading-tight">
          Crafting Dashboard Experiences That Elevate Brands
        </h1>
        <ul className="flex flex-wrap w-full gap-4 mt-4  ">
          {data.map((item, index) => (
            <Dashboardcard key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default page;
