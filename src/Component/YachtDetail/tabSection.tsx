"use client";
import { useState } from "react";
import { RxRulerSquare } from "react-icons/rx";
import { LuSailboat, LuDoorOpen, LuToilet } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline, IoBoatOutline } from "react-icons/io5";
import About from "./about";
import DayCharter from "./dayCharter";
import NightCharter from "./nightCharter";
import { Yacht } from "../YachtDetail/hero";

type Props = {
  data: Yacht | null;
};

const TabSection: React.FC<Props> = ({ data }) => {
  const features = [
    { title: "Length", value: `${data?.length} ft`, icon: RxRulerSquare },
    { title: "Type", value: data?.boatType, icon: LuSailboat },
    { title: "Cabins", value: data?.cabins, icon: LuDoorOpen },
    { title: "Bathrooms", value: data?.bathrooms, icon: LuToilet },
    { title: "Day Charter Capacity", value: data?.passengerDayTrip, icon: FiSun },
    { title: "Overnight Charter Capacity", value: data?.passengerOvernight, icon: IoMoonOutline },
  ];

  const dayTripCards = [
    { icon: IoBoatOutline, label: "About Boat" },
    { icon: FiSun, label: "Day Charter" },
    { icon: IoMoonOutline, label: "Overnight Charter" },
  ];

  const [activeTab, setActiveTab] = useState("About Boat");

  const renderContent = () => {
    switch (activeTab) {
      case "About Boat":
        return <About data={data} />;
      case "Day Charter":
        return <DayCharter data={data} />;
      case "Overnight Charter":
        return <NightCharter data={data} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Features */}
      <div className="flex flex-wrap gap-4 mt-3 md:mt-4 lg:mt-6 xl:mt-8 justify-center md:justify-start">
        {features.map(({ title, value, icon: Icon }, index) => (
          <div
            key={index}
            className="border border-mustard px-2 lg:px-3 xl:px-4 py-2 xl:py-3 rounded-md bg-white text-center inline-flex flex-col items-center shadow-sm"
          >
            <div className="text-mustard flex flex-col items-center gap-2">
              <Icon size={24} />
              <p className="text-sm lg:text-[16px] font-bold font-sourceSansPro text-zink leading-snug text-center">
                {title}
              </p>
            </div>
            <p className="text-zink text-sm lg:text-[16px] font-medium font-sourceSansPro mt-2">
              {value}
            </p>
          </div>
        ))}
      </div>
      {/* 


      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-5 lg:gap-7 overflow-x-auto mt-6">
        {dayTripCards.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center gap-2 whitespace-nowrap transition-all font-poppins font-medium
              py-1 px-1 sm:px-3 text-[12px] md:text-sm lg:text-base lg:text-lg
              ${activeTab === label
                ? "text-mustard border-b-2 border-mustard"
                : "text-[#034250] border-b-2 border-transparent hover:border-zinc-400"
              }`}
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </div>

      {/* Render Tab Content */}
      <div className="mt-6">{renderContent()}</div>
    </div>
  )
}
export default TabSection