// src/Component/readMore/bestLands.tsx
"use client";
import PngIcons from "@/icons/pngIcon";
import { bestLandsPages, BestLandsData } from "@/data/bestlandData";

interface BestLandsProps {
  id: string;
}

const BestLands: React.FC<BestLandsProps> = ({ id }) => {
  const pageData: BestLandsData | undefined = bestLandsPages[id];
  if (!pageData) return null; // or a “not found” message

  const { islands } = pageData;

  return (
    <section className="relative py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FCFCFC]">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-playfair text-zink font-bold">
          Best Islands Around Phi Phi
        </h2>
      </div>
      <div className="absolute left-10 top-4 z-0">
        <img src="/images/seashell.png" alt="" />
      </div>
      <div className="absolute right-5 top-12 z-0">
        <img src={PngIcons.frame1} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <img src={PngIcons.line2} alt="" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14 z-10">
        {islands.map((isle, idx) => (
          <div
            key={isle.id}
            className={`bg-white rounded-lg shadow p-6 ${
              idx === 1 ? "lg:mt-12" : ""
            }`}
          >
            <div className="relative">
              <img
                src={isle.image}
                alt={isle.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                {isle.title}
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-mustard font-semibold text-xl">{isle.subtitle}</p>
              {isle.description.map((line, i) => (
                <p key={i} className="text-zink text-base leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestLands;
