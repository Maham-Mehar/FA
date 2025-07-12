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
    <section className="relative py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FCFCFC]">
      {/* Title */}
      <div>
        <p className="text-3xl md:text-[40px] font-playfair text-zink font-extrabold mb-8 text-center">
          Best Islands Around Phi Phi
        </p>
        {/* <img src="/images/Frame.png" alt="" /> */}
      </div>
      <div className="absolute left-10 top-0 z-0 ">
        <img src="/images/seashell.png" alt="" />
      </div>
      <div className="absolute right-0 top-55 z-0">
        <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <img src={PngIcons.line2} alt="" />
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 z-10 mt-14">
        {islands.map((isle, idx) => (
          <div
            key={isle.id}
            className={` overflow-hidden p-6 ${idx === 1 ? "mt-40" : ""
              }`}
          >
            <div className="relative">
              <img
                src={isle.image}
                alt={isle.title}
                className="w-[430] h-[350px] object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-2 text-[40px] font-extrabold font-playfair text-white bg-opacity-50 px-3 py-1 rounded-lg">
                {isle.title}
              </div>
            </div>
            <div className="min-h-[170px] shadow-lg">
              <div className="p-4 space-y-2 max-w-[30rem]">
                <p className="font-sourceSanspro text-mustard text-[24px] font-bold ">
                  {isle.subtitle}
                </p>
                {isle.description.map((line, i) => (
                  <p
                    key={i}
                    className="text-zink font-normal font-inter text-[18px] leading-relaxed"
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
