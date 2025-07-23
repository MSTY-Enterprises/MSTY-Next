import Needwebcard from '@/utilites/Needwebcard';
import React from 'react';
import { data } from '@/store/NeedWebdata';

const Need = () => {
  return (
    <div className="container mx-auto px-4 pb-10">
      <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-10 leading-tight pt-10">
        Design Isn’t Just About Looking Good — It’s About Making Your Business Stand Out Online
      </h1>

      <ul>
        {data.map((item, index) => (
          <Needwebcard key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Need;
