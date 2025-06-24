'use client'

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import phn from "@/assets/images/phn.png";
import goog from "@/assets/images/google.png";
import rate from "@/assets/images/rating.png";
import founder from "@/assets/images/founder.png";
import Image from "next/image";

const words = ["Startups", "SaaS Companies", "Agencies", "Brands"];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container px-2 mx-auto max-sm:px-2">
        <div className="main  flex max-sm:flex-col md:flex-col lg:flex-row justify-between items-center mt-10 md:mb-15 max-sm:mb-7 ">
          <div className="lft">
            <h1 className="text-[56px] max-sm:text-[32px] font-bold text-[#1b1b1b] leading-tight max-sm:mb-6 mb-10"data-aos="fade-right"
      data-aos-duration="3000">
              Global Website design
              <br className=" max-sm:hidden" /> agency digital partner
              <br className=" max-sm:hidden" /> for{" "}
              <span className="inline-block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
                  >
                    {words[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <div className="scnd flex max-sm:flex-col max-sm:justify-center items-center gap-4" data-aos="fade-"
      data-aos-duration="3000">
              <div className="bt w-fit  max-sm:w-full  max-sm:px-8">
                <a
                  href="tel:+919910741417"
                  className="bg-[#1b1b1b] group rounded-4xl p-2 flex items-center gap-3.5 pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg font-medium text-black overflow-hidden z-10 hover:text-white"
                >
                  <Image
                    src={phn}
                    alt="msty img"
                    className="rounded-full w-[44px] h-[44px]"
                  />
                  <h2 className="text-white group-hover:text-black transition-all duration-300 text-[18px] font-normal">
                    Book a Free Call
                  </h2>
                </a>
              </div>

              <a
                href="https://www.goodfirms.co/company/msty-enterprises "
                target="_blank"
              >
                <div className="rev flex max-sm:gap-8 gap-4">
                  <div className="frs">
                    <h5 className="text-[#6a797e] text-[12px] mb-[3px] font-normal tracking-wide">
                      REVIEWED ON
                    </h5>
                    <Image src={goog} alt="msty img"/>
                  </div>

                  <div className="scn">
                    <Image src={rate} alt="msty img"/>
                    <h5 className="text-[#6a797e] text-[15px] mt-[7px] font-normal tracking-wide">
                      10 REVIEWS
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="rgt max-sm:w-full md:w-8/12 md:mt-12  max-sm:mt-10 lg:w-3/10 bg-[#e1e1e1] rounded-2xl max-sm:mx-5 py-7 px-7">
            <h3 className="text-[18px] max-sm:text-[16px] font-medium text-[#1b1b22] leading-7 max-sm:leading-6">
              We deliver globally UI, UX & web design smoothly, without delay,
              saving your time and money with an efficient process.
            </h3>

            <div className="fond flex gap-2 items-center mt-5">
              <div className=" overflow-hidden rounded-4xl">
                {" "}
                <Image src={founder} alt="msty img" />
              </div>
              <h6 className="text-[11px] font-medium">
                Loved BY 100+ <br></br>Founders
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
