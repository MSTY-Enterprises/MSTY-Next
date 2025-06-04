import React from "react";
import abt from "@/assets/images/about.jpg";
import Image from "next/image";

function About() {
  return (
    <div className="container mx-auto mt-15 mb-15 p-2">
      <h3 className="text-[#121212] rounded-4xl w-fit text-[16px] mb-3">
        ABOUT US
      </h3>
      <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-3.5">
        We Are Here to Give You Effective Ideas
      </h1>
      <p className="text-[16px] max-sm:text-[14px] leading-7 font-medium">
        At our company{" "}
        <span className="bg-[#55d0ff] px-1.5 py-1.5 mr-1.5 ml-1.5">
          MSTY Enterprises
        </span>
        , we are engaged in helping businesses increase their outreach and
        achieve measurable growth in the digital world. We know that no two
        businesses are the same in the global scheme of things, so we always
        take our time to get to know the unique circumstances of our clients,
        thereby developing solutions for a resulting added value. By
        experimenting with different web modifications on your site, we not
        only give you the possibility to own strong online visibility but also
        help engage with real potential clients and profitability.
      </p>

      <div className="relative mt-5 rounded-2xl overflow-hidden group shadow-lg transition-shadow duration-500 hover:shadow-2xl">
        <Image
          src={abt}
          alt="About"
          className="w-full h-full max-sm:h-[320px] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-90"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        ></div>
      
      </div>
    </div>
  );
}

export default About;
