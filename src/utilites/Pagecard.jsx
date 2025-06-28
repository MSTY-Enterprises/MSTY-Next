// import Image from 'next/image'
// import React from 'react'

// const Pagecard = ({item,index}) => {
//   return (
//     <li className='mb-6'>
//     <Image src={item.img} width={400} height={561}  />
//     </li>
//   )
// }

// export default Pagecard

import Image from 'next/image';
import React from 'react';

const Pagecard = ({ item }) => {
  return (
    <li className="mb-8 w-full sm:w-1/2 lg:w-1/3 px-2">
      <div className="w-full h-auto overflow-hidden rounded-2xl shadow-md">
        <Image
          src={item.img}
          alt="Offer Image"
          width={400}
          height={561}
          className="w-full h-auto object-cover"
        />
      </div>
    </li>
  );
};

export default Pagecard;
