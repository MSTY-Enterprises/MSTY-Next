"use clients";
import React from "react";
import Image from "next/image";
import img from "@/assets/images/seo-inner.jpg";
import { moveItem } from "motion";
import Needdetailcard from "@/utilites/Needdetailcard";
import { data } from "@/store/Needdetailpage";
import Contact from "@/app/_section/Contact";

const Needpage = () => {
  return (
    <>
      <div className="frst pt-14 pb-14 bg-[#f1f1f1] mb-18">
        <div className="container mx-auto px-4">
          <Needdetailcard />
        </div>
      </div>
      <Contact heading="Get Quote" />
    </>
  );
};

export default Needpage;
