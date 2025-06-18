import React from "react";

const Wedo = ({ item }) => {
  return (
    <li className="bg-white py-5 w-full sm:w-6/13 px-2">
      <h1 className="text-3xl px-6 font-bold text-[#1b1b1b]">{item.title}</h1>

      <ul>
        {item.head.map((point, index) => (
          <li
            key={index}
            className="text-[1.2rem] font-medium border-b border-[#cfcfcf] last:border-b-0 flex items-center py-7"
          >
            <div className="flex items-center px-6 group relative w-full">
              <span className="text-[1rem] text-[#7e7e81] mr-2.5">
                0{index + 1}
              </span>
              <div className="group relative w-full cursor-pointer">
                {point}
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#c5c5c5] group-hover:w-full pointer-events-none"></span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Wedo;
