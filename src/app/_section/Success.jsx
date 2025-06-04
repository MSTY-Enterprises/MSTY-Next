
import Successcard from "@/utilites/Successcard";
import { data } from "@/store/Successdata";
import icon from "@/assets/images/success.png";
import inner from "@/assets/images/innr.jpg";
import Image from "next/image";

function Success() {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <div className="mb-8">
          <h3 className="text-[#121212] text-sm font-medium bg-[#f3f3f3] px-4 py-1 rounded-full w-fit mb-2">
            OUR STEPS
          </h3>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121212]">
            Our Methodology for Success
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-12 items-center">
          {/* Right Side: Cards */}
          <div className="w-full lg:w-1/2 space-y-6">
            <ul>
              {data.map((item, index) => (
                <Successcard key={index} item={item} />
              ))}
            </ul>
          </div>

          {/* Left Side: Image Circle */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Rotating Icon */}
            <Image
              src={icon}
              alt="Rotating icon"
              className="w-[280px] sm:w-[350px] lg:w-[430px] animate-spin-slow"
            />

            {/* Center Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d9c9ba] rounded-full flex items-center justify-center overflow-hidden w-[180px] sm:w-[250px] lg:w-[330px] h-[180px] sm:h-[250px] lg:h-[330px]">
              <Image src={inner} alt="Inner circle visual" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
