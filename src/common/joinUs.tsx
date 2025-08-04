"use client";
import React from "react";

interface JoinUsProps {
  id?: string;
  bgImage: string;
  bgColor?: string;
  overlayOpacity?: number;
}

const JoinUs: React.FC<JoinUsProps> = ({
  bgImage,
  bgColor = "#034250",
  overlayOpacity = 0.6,
}) => {
  const overlayRGBA = `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(
    bgColor.slice(3, 5),
    16
  )}, ${parseInt(bgColor.slice(5, 7), 16)}, ${overlayOpacity})`;

  return (
    <div
      className="relative min-h-[60vh] md:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: overlayRGBA }}
      />

      <div className="relative z-20 text-center">
        <p className="  text-white font-inter text-[24px] sm:text-[30px] lg:text-[33px] font-extrabold">
          WHAT ARE YOU WAITING FOR?
        </p>
        <p className="text-white font-sourceSansPro text-[15px] sm:text-[18px] md:text-[20px] lg:text-[23px] pt-5 sm:pt-6 max-w-4xl mx-auto font-medium leading-relaxed">
          Secure your private yacht in Phuket today and dive into the heart of
          the mesmerizing Phuket islands. With Faraway Yachting Co. Ltd., you’re
          not just setting sail but embarking on an unforgettable Phuket
          adventure.
        </p>
        <button className="bg-white text-[16px] font-poppins sm:text-[18px] lg:text-[20px] text-[#034250] rounded-lg px-5 py-2 mt-8 sm:mt-10 hover:bg-[#034250] hover:text-white transition duration-300">
          Start Your Adventure
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
