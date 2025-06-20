"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const tabs = ["Snorkeling", "Sightseeing", "Sunsets", "Dolphin spotting"];

const cards = [
  {
    tab: "Snorkeling",
    category: "Snorkeling in Phuket",
    image: "/images/snorkeling.jpg",
    highlights: [
      "Crystal-clear water for visibility",
      "Abundant marine life with 1,200+ fish species and 300 coral varieties",
    ],
    description:
      "Snorkeling is the easiest way to explore the underwater world—just grab a mask, snorkel, fins, and a sense of adventure. It’s simple, safe, and endlessly fun—making snorkeling the perfect addition to your island escape.",
  },
  {
    tab: "Sightseeing",
    category: "Island Sightseeing",
    image: "/images/sightseeing.jpg",
    highlights: [
      "Visit iconic limestone cliffs",
      "Explore local villages and scenic views",
    ],
    description:
      "Experience the beauty of Thailand’s islands, local culture, and jaw-dropping views with relaxing guided tours.",
  },
  {
    tab: "Sunsets",
    category: "Sunset Cruises",
    image: "/images/sunset.jpg",
    highlights: ["Romantic ocean sunsets", "Evening cocktails on deck"],
    description:
      "Watch the sun melt into the sea with luxury and comfort on a sunset cruise perfect for couples or groups.",
  },
  {
    tab: "Dolphin spotting",
    category: "Dolphin Spotting Tour",
    image: "/images/dolphin.jpg",
    highlights: [
      "High chance of dolphin sightings",
      "Eco-friendly and safe",
    ],
    description:
      "Set out on a fun adventure where you may witness dolphins swimming freely in their natural habitat.",
  },
];

const DayTripSlider = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [autoCardIndex, setAutoCardIndex] = useState(0);

  // Auto slide when no tab is manually selected
  useEffect(() => {
    if (activeTab === null) {
      const interval = setInterval(() => {
        setAutoCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const currentCard = activeTab
    ? cards.find((card) => card.tab === activeTab)
    : cards[autoCardIndex];

  return (
    <div className="bg-white py-14 px-4 sm:px-6 xl:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#034250]">
          Day Trip Itineraries
        </h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          What do you like to do?
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm sm:text-base rounded-full border transition ${
                activeTab === tab
                  ? "bg-[#034250] text-white"
                  : "bg-white text-[#034250] border-[#034250]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card Display */}
        {currentCard && (
          <div className="mt-10 flex flex-col sm:flex-row bg-white border shadow-md rounded-xl overflow-hidden max-w-[800px] mx-auto transition-all duration-500">
            {/* Image */}
            <div className="w-full sm:w-1/2">
              <Image
                src={currentCard.image}
                alt={currentCard.category}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left w-full sm:w-1/2">
              <h3 className="text-xl font-semibold text-[#034250]">
                {currentCard.category}
              </h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 mt-2 space-y-1">
                {currentCard.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                {currentCard.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayTripSlider;
