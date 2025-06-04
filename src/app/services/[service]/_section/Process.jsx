'use client'
import Processcard from "@/utilites/Processcard";
import { useStore } from "@/store/Store";
import { useParams } from "next/navigation";


function Process() {

  const { servicesdata } = useStore();
  const { service } = useParams();

  const data = servicesdata[service].process; 


  
  return (
    <>
      <div className="bg-[#f2f2f2] py-2 my-20 max-sm:px-2 lg:p-2 pt-[63px] max-sm:pt-[30px] ">
        <div className="container mx-auto ">
          <div className="  z-10 bg-[#f2f2f2] px-5 lg:px-0   pt-10  ">
            <h1 className="text-[3rem] text-[#1b1b1b] font-bold leading-tight max-sm:text-3xl">
              The process behind
              <br />
              our UI UX design
            </h1>

            <ul className=" flex justify-center gap-5 my-auto pb-[63px] mt-7 max-sm:pb-[30px] max-sm:flex-col">
              {data.map((item, index) => (
                <Processcard key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
