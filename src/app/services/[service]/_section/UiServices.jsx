'use client'
import React from "react";
import Uicard from "@/utilites/Uicard";
import { useStore } from "@/store/Store";
import { useParams } from "next/navigation";


function UiServices() {

  const { servicesdata } = useStore();
  const { service } = useParams();

  const item = servicesdata[service].uixu;


  return (
    <>
      <div className="container mx-auto mb-10   max-sm:p-2 lg:p-2 relative overflow-hidden">
        <h1 className="text-[3rem] text-[#1b1b1b] font-bold leading-tight max-md:text-3xl">
          {item.head}

        </h1>
      </div>
      <ul className="  servs  ">

        {
          item.card.map((item, index) => (
            <Uicard item={item} key={index} />
          ))
        }


      </ul>
    </>
  );
}

export default UiServices;
