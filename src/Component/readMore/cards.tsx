"use client";
import Image from "next/image";
import { attractionsMap, Attraction } from "@/data/detailcard";
import { LuSailboat } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
interface AttractionsProps {
  id: string;
}
const Attractions: React.FC<AttractionsProps> = ({ id }) => {
  const data = attractionsMap[id];
  const headingText = data?.headingText ?? "Main Attractions";
  const attractions = data?.items ?? [];
  if (attractions.length === 0) {
    return (
      <section className="py-16 px-4">
        <h2 className="text-center text-2xl text-gray-600">{headingText}</h2>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-15 lg:py-17 xl:py-20 px-4 xl:px-8 bg-white text-zink">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-800 text-zink md:mb-11 lg:mb-13 xl:mb-16 uppercase tracking-wide">
        {headingText}
      </h2>

      <div className="space-y-5 md:space-y-12 lg:space-y-16 xl:space-y-20 px-0 xl:px-4 max-w-7xl mx-auto">
        {attractions.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 items-center"
          >
            {index % 2 === 0 ? (
              <>
                {/* Image Left */}
                <div className="flex justify-center md:justify-start my-5 md:my-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-[320px] md:w-[320px] lg:w-[420px] xl:w-[470px] h-auto border-4 border-[#D6AB62] rounded-tl-3xl rounded-br-3xl "
                  />
                </div>

                {/* Text Right */}
                <div className="space-y-3 lg:space-y-4 xl:space-y-5">
                  <div className="relative mt-10 md:mt-0 ">
                    <span className="text-[62px] md:text-[70px] lg:text-[95px] xl:text-[128px] pt-14 md:pt-12 lg:pt-8 xl:pt-0 font-semibold font-inter text-gray-100 absolute -top-23 left-0">
                      {item.id}
                    </span>
                    <div className="flex items-center ms-11">
                      <p className="w-13 md:w-15 lg:w-18 xl:w-21 border-b-3 border-mustard z-10"></p>
                      <p className="text-mustard font-semibold text-sm lg:text-lg xl:text-xl font-inter uppercase relative z-10 ms-3">
                        {item.label}
                      </p>
                    </div>
                    <h3 className="text-[24px] md:text-[26px] lg:text-[36px] xl:text-[46px] font-semibold font-sourceSanspro text-zink relative z-10 ms-11">
                      {item.title}
                    </h3>
                    <p className="text-zink text-sm sm:text-base font-normal relative z-10">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4 flex-col">
                    <div className="flex">
                      <span className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center me-1"><LuSailboat className="text-white " size={20} /></span>
                      <p className="font-semibold text-[20px] lg:text-[24px] font-sourceSanspro text-zink">{item.heading}</p>
                    </div>
                    <ul className="list-disc pl-4 text-base text-zink font-semibold font-sourceSanspro space-y-1">
                      {item.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start mt-3">
                    <IoWarningOutline className="text-zink" size={24} />
                    <p className="text-base text-zink font-inter font-semibold"><span className="font-bold text-mustard text-base font-inter me-2 ">Tip:</span>{item.tip}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Text Left */}
                <div className="space-y-3 lg:space-y-4 xl:space-y-5">
                  <div className="relative mt-8 md:mt-0 ">
                    <span className="text-[62px] md:text-[70px] lg:text-[95px] xl:text-[128px] pt-14 md:pt-12 lg:pt-8 xl:pt-0 font-semibold font-inter text-gray-100 absolute -top-23 left-0">
                      {item.id}
                    </span>
                    <div className="flex items-center ms-11 ">
                      <p className="w-13 md:w-15 lg:w-18 xl:w-21 border-b-3 border-mustard z-10"></p>
                      <p className="text-mustard font-semibold text-base lg:text-[18px] xl:text-[20px] font-inter uppercase relative z-10 ms-3">
                        {item.label}
                      </p>
                    </div>
                    <h3 className="text-[24px] md:text-[26px] lg:text-[36px] xl:text-[46px] font-semibold font-sourceSanspro text-zink relative z-10 ms-11">
                      {item.title}
                    </h3>
                    <p className="text-zink text-sm sm:text-base font-normal relative z-10">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4 flex-col">
                    <div className="flex">
                      <span className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center me-1"><LuSailboat className="text-white " size={20} /></span>
                      <p className="font-semibold text-[20px] lg:text-[24px] font-sourceSanspro text-zink">{item.heading}</p>
                    </div>
                    <ul className="list-disc pl-4 text-base text-zink font-semibold font-sourceSanspro space-y-1">
                      {item.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start mt-3">
                    <IoWarningOutline className="text-zink" size={24} />
                    <p className="text-base text-zink font-inter font-semibold"><span className="font-bold text-mustard text-base font-inter me-2 ">Tip:</span>{item.tip}</p>
                  </div>
                </div>

                {/* Image Right */}
                <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-[320px] md:w-[320px] lg:w-[420px] xl:w-[470px] h-auto border-4 border-[#D6AB62] rounded-tl-3xl rounded-br-3xl "
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;
