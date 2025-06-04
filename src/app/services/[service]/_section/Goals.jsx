'use client'
import React from "react";
import Goalcard from "@/utilites/Goalcard";
import { useStore } from "@/store/Store";
import { useParams } from "next/navigation";


function Goals() {
  const { servicesdata } = useStore();
  const { service } = useParams();

  const item = servicesdata[service].goals;

  return (
    <>
      <div className="container mx-auto max-sm:p-2 max-md:p-2 lg:p-2">
        <div className="flex justify-between">
          <Goalcard item={item} />
        </div>
      </div>
    </>
  );
}

export default Goals;
