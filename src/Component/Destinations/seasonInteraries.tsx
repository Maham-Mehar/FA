"use client";
import { useState } from "react";
import { highSeason, greenSeason, ItineraryItem } from "@/data/itineraryData";

const ItinerarySection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  const renderItem = (item: ItineraryItem) => (
    <div
      key={item.id}
      className="bg-[#F9FAFB] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200"
    >
      <button
        type="button"
        onClick={() => toggleItem(item.id)}
        className="flex justify-between items-center w-full p-4 cursor-pointer text-left"
      >
        <div className="flex items-center gap-4">
          <span className="bg-[#034250] text-white font-poppins text-[12px] xl:text-[13px] font-medium px-3 py-1 rounded-lg">
            {item.days}
          </span>
          <h4 className="font-semibold text-sm xl:text-base text-zink">
            {item.place}
          </h4>
        </div>
        <span className="text-2xl font-bold text-gray-400">
          {activeId === item.id ? "−" : "+"}
        </span>
      </button>

      {activeId === item.id && (
        <div className="px-4 pb-4 text-sm sm:text-base text-gray-600">
          {item.description}
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-white py-12 px-4 lg:px-5 xl:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 xl:gap-16">
          {/* High Season */}
          <div>
            <h2 className="text-[24px] sm:text-[28px] font-playfair text-zink font-bold mb-1">
              High Season Itineraries
            </h2>
            <p className="text-mustard text-[16px] sm:text-[18px] mb-6 font-sourceSanspro">
              (From November till April)
            </p>
            <div className="space-y-4">{highSeason.map(renderItem)}</div>
          </div>

          {/* Green Season */}
          <div>
            <h2 className="text-[24px] sm:text-[28px] font-playfair font-bold text-[#034250] mb-1">
              Green Season Itineraries
            </h2>
            <p className="text-mustard text-[16px] sm:text-[18px] mb-6 font-sourceSanspro">
              (From May till October)
            </p>
            <div className="space-y-4">{greenSeason.map(renderItem)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
