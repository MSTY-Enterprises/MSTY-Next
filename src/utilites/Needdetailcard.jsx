'use client'
import React, { use, useEffect } from 'react'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useNeeds } from '@/hooks/NeedsContext';

const Needdetailcard =  ({}) => {
   const { need } =  useParams();
   const { needsData, setCurrentNeedsSlug } = useNeeds();

   useEffect(() => {
      setCurrentNeedsSlug(need);
   }, [need, setCurrentNeedsSlug]);

   const UpdateContent =  needsData?.content?.replace('/storage/', `https://api.mstyenterprises.com/storage/`);



  return (
    <>
    
    <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-10 leading-tight">
       {needsData?.title}
          </h1> 

           <div className="relative mt-5 mb-10 overflow-hidden group shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMG_URL}${needsData?.image}`}
                        alt="seo"
                        className="w-full h-full max-sm:h-[320px] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-90"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                    <div className="" dangerouslySetInnerHTML={{ __html: UpdateContent }} ></div>
                  
    
    
    </>
  )
}

export default Needdetailcard