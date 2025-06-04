import React from 'react'

function Successcard({ item, index }) {
  return (
    <>
      <li className='mb-6 border-b border-b-[#aaaaaa] py-3 last:border-b-0'>
        <h1 className='text-2xl font-bold mb-1.5 text-[#2a8fd3]'>{item.head}</h1>
        <p className='text-[16px] leading-7 font-normal text-[#414141]'>{item.para}</p>
      </li>


    </>
  )
}

export default Successcard