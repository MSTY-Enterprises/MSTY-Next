import Image from 'next/image'
import React from 'react'

function Servicecard({ item, index }) {
  return (
    <li className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#bcedff66] shadow-md px-6 py-10 rounded-2xl  lg:w-8/25  bg-[#f2f2f2] mb-6 shadow-[rgba(0, 0, 0, 0.1) 0px 2px 11px]  border border-solid border-[#ececec]'>
      <div className='bg-[#f2f2f2] rounded-full w-fit p-4 flex items-center justify-center mt-[-65px] mb-1 border-t border-t-[#ececec]'>
        <Image src={item.img} alt='msty img' className=' w-fit h-fit ' width={100} height={100} />
      </div>
      <div className='text'>
        <h2 className='text-[20px] font-bold mb-1'>{item.head}</h2>
        <p className='text-[15px]  text-[#7a7a7a]leading-7 font-normal '>{item.con}</p>
      </div>
    </li>
  )
}

export default Servicecard