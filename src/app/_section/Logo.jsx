import React from 'react'
import Marquee from "react-fast-marquee";
import Logocard from '@/utilites/Logocard'
import { data } from '@/store/Logodata'
function Logo() {
  return (
    <>

      <Marquee>
        <ul className='flex'>
          {data.map((item, index) => (
            <Logocard key={index} item={item} />
          ))}
        </ul>
      </Marquee>





    </>
  )
}

export default Logo