import React from "react";
import Video from "@/app/_section/Video";
import Servicecontentcard from "@/utilites/Servicecontentcard";
import { datas } from "@/store/Serviceinnerdata";

function Service() {
  return (
    <>
      <div className="container mx-auto pt-14 max-sm:p-2 md:p-2 md:pt-10 xl:p-2 ">
        <h1 className="text-5xl max-sm:text-2xl max-sm:mt-5.5 text-[#121212] font-extrabold leading-tight mb-3.5">
          Empowering High-Growth Teams with Scalable Digital Product Design &
          UI/UX Solutions
        </h1>
        <p className="  text-3xl max-sm:text-[18px] max-sm:leading-tight text-[#121212] leading-[43px] md:text-3xl">
          We design intuitive, scalable digital products—transforming ideas into
          seamless <br  className="max-sm:hidden md:hidden"/>
          user experiences for startups, SaaS companies, and growing teams.
        </p>
      </div>
      <Video />
      <div className="pb-14">
        <div className="serv ">
          <div className="">
            {datas.map((item, index) => (
              <Servicecontentcard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
