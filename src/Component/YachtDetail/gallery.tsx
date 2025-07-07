"use client";
import PngIcons from "@/icons/pngIcon";
import { useState } from "react";
import Image from "next/image";
import { RxRulerSquare } from "react-icons/rx";
import { LuSailboat, LuDoorOpen, LuToilet } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline, IoBoatOutline } from "react-icons/io5";
import About from "./about";
import DayCharter from "./dayCharter";
import NightCharter from "./nightCharter";
const Gallery = () => {
  const maxImages = 9;
  const pictures = [
    "/images/crewedadv4.png",
    "/images/crewedadv2.png",
    "/images/crewedadv3.png",
    "/images/crewedadv1.png",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img8.png",
    "/images/img9.png",
    "/images/img10.png",
  ];

  const features = [
    { title: "Length", value: "38 ft", icon: RxRulerSquare },
    { title: "Type", value: "Power", icon: LuSailboat },
    { title: "Cabins", value: "1", icon: LuDoorOpen },
    { title: "Bathrooms", value: "2", icon: LuToilet },
    { title: "Day Charter Capacity", value: "14", icon: FiSun },
    { title: "Overnight Charter Capacity", value: "4", icon: IoMoonOutline },
  ];
  // Tabs Data
  const dayTripCards = [
    { icon: IoBoatOutline, label: "About Boat" },
    { icon: FiSun, label: "Day Charter" },
    { icon: IoMoonOutline, label: "Overnight Charter" },
  ];

  const [activeTab, setActiveTab] = useState("About Boat");

  const renderContent = () => {
    switch (activeTab) {
      case "About Boat":
        return <About />;
      case "Day Charter":
        return <DayCharter />;
      case "Overnight Charter":
        return <NightCharter />;
      default:
        return null;
    }
  };

  // const visiblePictures = pictures.slice(0, maxImages);

  return (
    <div className="w-full px-4 xl:px-0 py-7">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        <div className="lg:col-span-2 row-span-2">
          <Image
            src={pictures[0]}
            alt="main-img"
            className="rounded-xl w-full h-[350px] object-cover"
            width={387}
            height={313}
          />
        </div>

        <div className="grid grid-rows-2 gap-2">
          {pictures.slice(1, 3).map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`img-${idx}`}
              className="rounded-lg w-full h-[170px] object-cover"
              width={200}
              height={210}
            />
          ))}
        </div>

        <div className="grid grid-rows-2 gap-2">
          {pictures.slice(3, 5).map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`img-${idx}`}
              className="rounded-lg w-full h-[170px] object-cover"
              width={200}
              height={210}
            />
          ))}
        </div>

        <div className="grid grid-rows-3 gap-2">
          {pictures.slice(5, 9).map((img, index) => (
            <div key={index} className="relative">
              <Image
                src={img}
                alt={`img-${index}`}
                className="rounded-lg w-full h-[81px] object-cover"
                width={100}
                height={81}
              />
              {index === 3 && pictures.length > maxImages && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-sm rounded-lg">
                  +{pictures.length - maxImages}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Tabs */}

      <div className="flex flex-wrap gap-4  mt-8">
        {features.map(({ title, value, icon: Icon }, index) => (
          <div
            key={index}
            className="border border-mustard px-4 py-3 rounded-md bg-white text-center inline-flex flex-col items-center shadow-sm"
          >
            <div className="text-mustard flex flex-col items-center gap-2">
              <Icon size={24} />
              <p className="text-[16px] font-bold font-sourceSansPro text-zink leading-snug text-center">
                {title}
              </p>
            </div>
            <p className="text-zink text-[16px] font-medium font-sourceSansPro mt-2">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-5 lg:gap-7 overflow-x-auto mt-6">
        {dayTripCards.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center gap-2 whitespace-nowrap transition-all font-poppins font-medium
            py-1 px-2 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg
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

      {/* Render selected tab content here */}
      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default Gallery;
