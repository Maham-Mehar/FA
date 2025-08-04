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
import SeaEscape from "@/Component/cabinCharter/seaEscape";
import Thailand_BestLands from "@/Component/cabinCharter/thailandbs";
import SailingDetails from "@/Component/cabinCharter/oursailsDetail";
import Price_Details from "@/Component/cabinCharter/pricingDetail";
import FunMoments from "@/Component/cabinCharter/moments";
import ComparisonChart from "@/Component/cabinCharter/moments2Remember";
import FounderNote from "@/Component/cabinCharter/ourFounder";


const SeaSide_Sixdays = () => {
  // Section Refs
  const contactRef = useRef<HTMLDivElement | null>(null);
  const itineraryRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const cruiseRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const sectionTabs = [
    { icon: LuAnchor, label: "Book Now", targetRef: contactRef },
    { icon: IoBoatOutline, label: "Sailing Itinerary", targetRef: itineraryRef },
    { icon: LuBadgeEuro, label: "Pricing", targetRef: pricingRef },
    { icon: SlCalender, label: "Cruise Dates", targetRef: cruiseRef },
    { icon: LuShipWheel, label: "FAQ", targetRef: faqRef },
  ];

  const [activeTab, setActiveTab] = useState(sectionTabs[0].label);

  return (
    <div >

      <div className="relative my-6 sm:my-8 md:my-10">
        {/* Faint Background Map */}
        <div className="absolute inset-0 bg-[url('/images/map.png')] bg-no-repeat bg-center bg-cover opacity-10 z-0" />

        <div className="relative bg-white/80 z-10 py-0 sm:py-10 md:py-12 px-2 sm:px-4 md:px-4 lg:px-4 xl:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-7 overflow-x-auto">
              {sectionTabs.map(({ label, icon: Icon, targetRef }) => (
                <button
                  key={label}
                  onClick={() => {
                    setActiveTab(label);
                    targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`py-1 px-2 sm:px-3 text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[20px] font-poppins font-medium flex items-center gap-2 transition whitespace-nowrap ${activeTab === label
                    ? "text-mustard border-b-2 border-b-mustard"
                    : "text-[#034250] border-b-2 border-b-zink"
                    }`}
                >
                  <Icon size={20} />
                  {label}
                </button>
              ))}
            </div>

            {/* Intro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10 pt-5 items-center">
              <div className="flex flex-col items-center md:items-start text-center md:text-start">
                <p className="font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-sourceSanspro text-mustard">
                  Island Odyssey
                </p>
                <p className="text-[26px] sm:text-[30px] md:text-[35px] lg:text-[48px] font-bold font-playfair text-zink py-2 sm:py-3 max-w-xl leading-snug">
                  6 Days of Seaside Bliss
                </p>
                <p className="font-normal text-[15px] sm:text-[16px] md:text-[17px] lg:text-[20px] font-inter text-zink pt-3 sm:pt-4 max-w-lg leading-relaxed">
                  Sail through Thailand's island gems on a 6-day luxury cabin charter—discover hidden lagoons, vibrant reefs, and serene beaches from Phuket to Koh Rok and Phi Phi Leh.
                </p>
                <button className="text-xs sm:text-sm md:text-base lg:text-lg font-bold font-poppins bg-zink px-3 py-2 md:px-5 md:py-3 text-white rounded-lg mt-3 md:mt-6 flex items-center gap-2 hover:bg-opacity-90 transition">
                  Detail Itinerary
                </button>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src={PngIcons.sixPlaces}
                  alt="Charter Map"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-xl max-h-[390px] md:max-h-[410px] lg:max-h-[470px] xl:max-h-[580px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SeaEscape />
      <Thailand_BestLands />
      <Sailing_Itinerary sectionRef={itineraryRef} />
      <SailingDetails />
      <PricingSection sectionRef={pricingRef} />
      <Price_Details />
      <CruiseDates sectionRef={cruiseRef} />
      <FunMoments />
      <ComparisonChart />
      <FounderNote />
      <SealifeFAQ sectionRef={faqRef} />
      <ContactUs sectionRef={contactRef} />
    </div>
  );
};

export default SeaSide_Sixdays;
