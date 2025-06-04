import Image from 'next/image';
import React from 'react'


function Projectcard({ item, index }) {
  return (
    <>

      <li className="hover:bg-[#e1e1e1] group md:w-6/13 lg:w-8/25 max-sm:w-full   [&:nth-child(3n+3)]:mr-0 rounded-2xl">
        <a href={item.link} target='blank'>
          <div className="img mb-6 overflow-hidden rounded-2xl group-hover:rounded-b-none">
            <Image
              src={item.img}
              alt='msty img'
              width={1000}
              height={1000}
              className="transition-transform w-full h-full duration-300 group-hover:scale-110"
            />
          </div>
          <h2 className="text-{#121212} text-lg font-medium group-hover:pl-[15px] transition-all duration-300">{item.name}</h2>
          <h3 className="text-[#121212] text-sm group-hover:pl-[15px] transition-all duration-300 mb-6 underline ">Explore Now</h3>
        </a>
      </li>

    </>
  )
}

export default Projectcard