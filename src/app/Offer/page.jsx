// 

import React from 'react';
import Pagecard from '@/utilites/Pagecard';
import { data } from '../../store/Pagedata';

const Offer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl text-[#121212] font-extrabold mb-10 leading-tight sm:mt-10 sm:mb-12">
        Get the perfect website at an unbeatable price —<br className="hidden sm:block" />
        our limited-time offers are built for growth.
      </h1>

      <ul className="flex flex-wrap -mx-2">
        {data.map((item, index) => (
          <Pagecard key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Offer;
