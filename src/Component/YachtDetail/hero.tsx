"use client";
import Gallery from '@/Component/YachtDetail/gallery';
import { CiShare2 } from "react-icons/ci";
import { useState, useEffect } from 'react';
import VideoSection from './videoSection';
import YachtAdventure from '../crewed_Charter/yachtAdventure';
import TabSection from './tabSection';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const values = [
    { title: "Hot Chilli 38ft – Stealth" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
    <div className="max-w-7xl mx-auto px-4 xl:px-0">
      {/* Breadcrumb */}
      <p className="sourceSansPro text-gray-400 text-[15px] font-normal mt-5">
        Crewed Charter Phuket /{" "}
        {values.map((item, index) => (
          <span key={index} className="font-bold text-zink">
            {item.title}
          </span>
        ))}
      </p>

      {/* Title and Share Button */}
      <div className="flex justify-between mt-4 flex-wrap gap-2">
        {values.map((item, index) => (
          <p
            key={index}
            className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[33px] font-playfair text-zink font-extrabold"
          >
            {item.title}
          </p>
        ))}
        <button className="flex items-center border border-gray-400 px-3 py-2 text-[14px] poppins text-zink">
          <CiShare2 size={20} className="me-2" />
          Share
        </button>
      </div>

      {/* Gallery + Tabs + Sticky Sidebar */}
      <div className="flex flex-col md:flex-row gap-5 relative mt-6">
        <div className="w-full md:w-[70%]">
          <Gallery />
          <TabSection />
        </div>
        <div
          className={`w-full md:w-[30%] sticky transition-all duration-300 ${
            isScrolled ? "top-[5.7rem]" : "top-0"
          }`}
        >
          {/* You can place the ContactDetail or any sidebar content here */}
        </div>
      </div>

      {/* Video & Adventure */}
      <div className="mt-6">
        <VideoSection />
            </div>
      </div>
              <YachtAdventure />
</div>
  );
};

export default HeroSection;
