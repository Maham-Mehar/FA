"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { dayTripCards } from "@/data/sliderData";

const DayTripSlider = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [autoCardIndex, setAutoCardIndex] = useState(0);

  useEffect(() => {
    if (activeTab === null) {
      const interval = setInterval(() => {
        setAutoCardIndex((prevIndex) => (prevIndex + 1) % dayTripCards.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const currentCard = activeTab
    ? dayTripCards.find((card) => card.label === activeTab)
    : dayTripCards[autoCardIndex];

  return (
    <div className="bg-white py-4 md:py-7 px-4 sm:px-6 xl:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[28px] md:text-[28px] lg:text-[36px] xl:text-[40px] font-sourceSanspro font-playfair font-bold text-zink">
          Day Trip Itineraries
        </h2>
        <p className="mt-2 text-black font-semibold text-xl md:[24px] lg:text-[28px]">
          What do you like to do?
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-5 mt-6">
          {dayTripCards.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`py-1 text-[15px] md:text-lg xl:text-xl font-poppins font-medium flex items-center gap-2 transition ${activeTab === label
                ? "text-mustard border-b-2 border-mustard"
                : "text-[#034250] border-b-2 border-b-zink"
                }`}
            >
              <span>
                <Icon size={24} />
              </span>
              {label}
            </button>
          ))}
        </div>

        {/* Card */}
        {currentCard && (
          <div className="mt-10 flex flex-col sm:flex-row bg-white border shadow-md rounded-xl overflow-hidden max-w-[1000px] mx-auto transition-all duration-500">
            <div className="w-full sm:w-1/2">
              <Image
                src={currentCard.image}
                alt={currentCard.category}
                width={400}
                height={400}
                className="object-cover w-full h-[300px] md:h-[490px] lg:h-[565px] xl:h-[600px]"
              />

            </div>
            <div className="p-4 lg:p-6 text-left w-full sm:w-1/2">
              <h3 className="text-[25px] lg:[36px] xl:text-[40px] leading-tight font-playfair font-semibold text-blue mb-3">
                {currentCard.category}
              </h3>
              <p className="text-sm md:text-[16px] lg:text-[20px] font-medium text-zink font-inter mb-2"> {currentCard.text}
              </p>
              <p className="text-sm md:text-[16px] lg:text-[20px] font-medium text-zink font-inter mb-1"> {currentCard.title}
              </p>
              {currentCard.highlights && currentCard.highlights.length > 0 && (
                <ul className="list-disc list-inside text-sm md:text-[16px] lg:text-[20px] font-inter font-bold text-zink space-y-1">
                  {currentCard.highlights.map((point, idx) => (
                    <li key={idx}>
                      {point}
                      {currentCard.text2?.[idx] && (
                        <span className="text-gray-500">
                          {currentCard.text2[idx]}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {/* Description */}
              <div className="text-sm md:text-[16px] lg:text-[20px] font-medium text-zink font-inter space-y-2 ">
                {currentCard.description.map((desc, idx) => (
                  <p key={idx} className="mb-3">{desc}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayTripSlider;
