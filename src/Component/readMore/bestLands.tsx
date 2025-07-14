"use client";
import { islandsById } from "@/data/bestlandData";
import PngIcons from "@/icons/pngIcon";

interface BestLandsProps {
  id: string;
}

const BestLands: React.FC<BestLandsProps> = ({ id }) => {
  const islands = islandsById[id];

  if (!islands || islands.length === 0) return null;

  return (
    <section className="relative py-12 px-4 px-4 xl:px-0 xl-px-0 max-w-7xl mx-auto bg-[#FCFCFC]">
      {/* Title */}
      <div>
        <p className="text-[28px] md:[30px] lg:text-[36px] xl:text-[40px] font-playfair text-zink font-extrabold md:mb-5 lg:mb-8 text-center">
          Best Islands Around Phi Phi
        </p>
        {/* <img src="/images/Frame.png" alt="" /> */}
      </div>
      <div className="absolute left-10 top-0 z-0 hidden lg:block">
        <img src="/images/seashell.png" alt="" />
      </div>
      <div className="absolute right-0 md:top-35 lg:top-49 xl:top-65 z-0">
        <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <img src={PngIcons.line2} alt="" />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-17 lg:gap-30 max-w-6xl mx-auto">
     {islands.map((isle, idx) => (
  <div
    key={`${isle.id}-${idx}`} // ensures uniqueness
    className={`overflow-hidden p-0 lg:p-0 xl:p-6 ${
      idx === 1
        ? "mt-0 md:mt-30 lg:mt-36 xl:mt-40 "
        : idx === 2
        ? "mt-0 md:-mt-35 lg:-mt-50 xl:-mt-50"
        : ""
    }`}
  >
            <div className="relative">
              <img
                src={isle.image}
                alt={isle.title}
                className="w-full xl:w-[600px] h-[230px] md:h-[250px] lg:h-[310px] xl:h-[350px] object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-2 text-[28px] md:text-[28px] lg:text-[36px] xl:text-[36px] font-extrabold font-playfair text-white bg-opacity-50 px-3 py-1 rounded-lg">
                {isle.title}
              </div>
            </div>
            <div className="min-h-[170px] shadow-lg">
              <div className="p-4 space-y-2 max-w-[30rem] ">
                <p className="font-sourceSanspro text-mustard text-lg md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold ">
                  {isle.subtitle}
                </p>
                {isle.description.map((line, i) => (
                  <p
                    key={i}
                    className="text-zink font-normal font-inter text-base lg:text-[18px] leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestLands;
