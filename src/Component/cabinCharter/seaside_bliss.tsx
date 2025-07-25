"use client";

import { useRef, useState } from "react";
import { LuShipWheel, LuAnchor, LuBadgeEuro } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoBoatOutline } from "react-icons/io5";

import PngIcons from "@/icons/pngIcon";
import ContactUs from "./contactUs";
import Sailing_Itinerary from "./sailing_Itineraries";
import PricingSection from "./pricing";
import CruiseDates from "./cruiseDates";
import SealifeFAQ from "./curiousSealife";

const SeaSide_Sixdays = () => {
  // Section refs
  const contactRef = useRef<HTMLDivElement | null>(null);
  const itineraryRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const cruiseRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);

  // Tabs config with corresponding refs
  const dayTripCards = [
    { icon: LuAnchor, label: "Book Now", ref: contactRef },
    { icon: IoBoatOutline, label: "Sailing Itinerary", ref: itineraryRef },
    { icon: LuBadgeEuro, label: "Pricing", ref: pricingRef },
    { icon: SlCalender, label: "Cruise Dates", ref: cruiseRef },
    { icon: LuShipWheel, label: "FAQ", ref: faqRef },
  ];

  const [activeTab, setActiveTab] = useState(dayTripCards[0].label);

  return (
    <div>
      <div className="relative my-6 sm:my-8 md:my-10">
        {/* Background Map */}
        <div className="absolute inset-0 bg-[url('/images/map.png')] bg-no-repeat bg-center bg-cover opacity-10 z-0" />

        <div className="relative bg-white/80 z-10 py-0 sm:py-10 md:py-12 px-2 sm:px-4 md:px-4 lg:px-4 xl:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-7 overflow-x-auto">
              {dayTripCards.map(({ label, icon: Icon, ref }) => (
                <button
                  key={label}
                  onClick={() => {
                    setActiveTab(label);
                    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`py-1 px-2 sm:px-3 text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[20px] font-poppins font-medium flex items-center gap-2 transition whitespace-nowrap ${
                    activeTab === label
                      ? "text-mustard border-b-2 border-b-mustard"
                      : "text-[#034250] border-b-2 border-b-zink"
                  }`}
                >
                  <Icon size={20} />
                  {label}
                </button>
              ))}
            </div>

            {/* Intro Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10 pt-5 items-center">
              <div className="flex w-full items-center md:items-start flex-col text-center md:text-start">
                <p className="font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-sourceSanspro text-mustard">
                  Island Odyssey
                </p>
                <p className="text-[26px] sm:text-[30px] md:text-[35px] lg:text-[48px] font-bold font-playfair text-zink py-2 sm:py-3 max-w-xl leading-snug">
                  6 Days of Seaside Bliss
                </p>
                <p className="font-normal text-[15px] sm:text-[16px] md:text-[17px] lg:text-[20px] font-inter text-zink pt-3 sm:pt-4 max-w-lg leading-relaxed">
                  Sail through Thailand's island gems on a 6-day luxury cabin charter—discover
                  hidden lagoons, vibrant reefs, and serene beaches from Phuket to Koh Rok and Phi Phi Leh.
                </p>
                <button className="text-xs sm:text-sm md:text-base lg:text-lg font-bold font-poppins bg-zink px-3 py-2 md:px-5 md:py-3 text-white rounded-lg mt-3 md:mt-6 flex items-center gap-2 hover:bg-opacity-90 transition">
                  Detail Itinerary
                </button>
              </div>

              <div className="flex w-full justify-center md:justify-end items-center">
                <img
                  src={PngIcons.sixPlaces}
                  alt="Charter Map"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl max-h-[390px] md:max-h-[450px] lg:max-h-[510px] xl:max-h-[580px] block"
                />
              </div>
            </div>

            {/* Component Sections with Refs */}
            <div className="mt-14 space-y-16">
              <div ref={contactRef}>
                <ContactUs />
              </div>
              <div ref={itineraryRef}>
                <Sailing_Itinerary />
              </div>
              <div ref={pricingRef}>
                <PricingSection />
              </div>
              <div ref={cruiseRef}>
                <CruiseDates />
              </div>
              <div ref={faqRef}>
                <SealifeFAQ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeaSide_Sixdays;
