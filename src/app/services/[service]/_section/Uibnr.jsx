'use client'
import React from "react";
import Uibnrcard from "@/utilites/Uibnrcard";

import { useStore } from "@/store/Store";
import { useParams } from "next/navigation";


function Uibnr() {
  const { servicesdata } = useStore();
  const { service } = useParams();

  const item = servicesdata[service].bnr;

  return (
    <div classname=" ">
      <Uibnrcard item={item} />
    </div>
  );
}

export default Uibnr;
