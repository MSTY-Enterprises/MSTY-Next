import React from 'react'
import { data } from '@/store/Projectdata';
import Projectcard from '@/utilites/Projectcard';
function Project() {
  return (
    <>
    <div className='container mx-auto max-sm:p-2'>
       
        <h1 className='text-5xl max-sm:text-3xl max-sm:mt-10 max-sm:mb-4 text-[#121212] mt-10 font-extrabold mb-10 leading-tight'>Crafting Digital Experiences That Elevate Brands</h1>
        <ul className="flex flex-wrap w-full items-center justify-center gap-4 mt-4  ">
              {data.map((item, index) => (
                <Projectcard key={index} item={item} />
              ))}
            </ul>
    </div>
    
    </>
  )
}

export default Project