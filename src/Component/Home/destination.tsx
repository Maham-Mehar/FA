"use client";
import Image from "next/image";
import attractionsData, { Attraction } from "@/data/homeCard";
import { LuSailboat } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";

const headingText = "Explore Thailand";

const Attractions: React.FC = () => {
  const items = attractionsData["phi-phi-island"].items;

  if (!items || items.length === 0) {
    return (
      <section className="py-16 px-4">
        <h2 className="text-center text-2xl text-gray-600">{headingText}</h2>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white text-zink">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-800 md:mb-11 lg:mb-13 xl:mb-16 uppercase tracking-wide">
        {headingText}
      </h2>

      <div className="space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6"
          >
            {index % 2 === 0 ? (
              <>
                {/* Image Left */}
                <div className="flex justify-center md:justify-start">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={470}
                    height={300}
                    className="w-[320px] md:w-[320px] lg:w-[420px] xl:w-[470px] h-auto border-4 border-[#D6AB62] rounded-tl-3xl rounded-br-3xl"
                  />
                </div>
                {/* Text Right */}
                <AttractionContent item={item} />
              </>
            ) : (
              <>
                {/* Text Left */}
                <AttractionContent item={item} />
                {/* Image Right */}
                <div className="flex justify-center md:justify-end">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={470}
                    height={300}
                    className="w-[320px] md:w-[320px] lg:w-[420px] xl:w-[470px] h-auto border-4 border-[#D6AB62] rounded-tl-3xl rounded-br-3xl"
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

const AttractionContent = ({ item }: { item: Attraction }) => (
  <div className="space-y-5">
    <div className="relative">
      <span className="-mt-14 font-inter text-gray-100 absolute left-0 top-0 z-0">
        <img src="/images/homeicon.png" alt="" className="h-33"/>
      </span>
      <div className="flex items-center ms-11">
        <div className="w-14 border-b-4 border-mustard z-10" />
        <p className="text-mustard font-semibold text-base lg:text-lg xl:text-xl font-inter uppercase ms-3 z-10">
          {item.label}
        </p>
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[46px] font-semibold font-sourceSanspro text-zink ms-11 z-10">
        {item.title}
      </h3>
      <p className="text-zink text-sm sm:text-base font-normal z-10 ms-11">
        {item.description.join(" ")}
      </p>
    </div>

    <div className="flex gap-2 flex-col ms-11">
      <div className="flex items-center">
        <span className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center me-2">
          <LuSailboat className="text-white" size={20} />
        </span>
        <p className="font-semibold text-xl font-sourceSanspro text-zink">
          {item.heading}
        </p>
      </div>
      <ul className="list-disc pl-4 text-base text-zink font-semibold font-sourceSanspro space-y-1">
        {item.highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>

    <div className="flex items-start gap-2 ms-11">
      <IoWarningOutline className="text-zink mt-1" size={24} />
      <p className="text-base text-zink font-inter font-semibold">
        <span className="font-bold text-mustard me-2">Tip:</span>
        {item.tip}
      </p>
    </div>
  </div>
);

export default Attractions;