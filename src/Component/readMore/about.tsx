"use client";

import { FiPhone } from "react-icons/fi";
import { aboutPages, AboutData } from "@/data/aboutData";

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const normalizedId = id.toLowerCase();
  const data: AboutData | undefined = aboutPages[normalizedId];

  if (!data) {
    return <p className="p-8 text-center text-red-500">Content not found for "{id}".</p>;
  }

  const {
    preTitle,
    title,
    subtitle,            
    description,
    buttonText,
    heroImage,
    decorLines: { line1 },
  } = data;

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-0">
        <img src={line1} alt="decorative line h-15" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 xl:px-4 md:py-0 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text Section */}
          <div className="space-y-2 lg:space-y-4 xl:space-y-3 text-center md:text-left">
            <p className="font-sourceSanspro text-[16px] lg:text-[18px] xl:text-[20px] pt-6 md:pt-10 xl:pt-12 text-gray-500 uppercase">
              {preTitle}
            </p>
            <h2 className="text-[28x] md:text-[27px] lg:text-[33px] xl:text-[40px] font-playfair text-zink uppercase leading-tight">
              {title}
            </h2>
            <p className="font-semibold font-sourceSanspro text-[16px] lg:text-[20px] xl:text-[24px] text-mustard uppercase">
              {subtitle}
            </p>
            <p className="text-sm md:text-base lg:text-lg font-inter text-zink max-w-xl">
              {description}
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="text-sm sm:text-base md:text-lg font-poppins bg-mustard px-3 py-2 lg:px-5 lg:py-3 text-white rounded-lg mt-4 xl:mt-6 flex items-center gap-2 hover:bg-opacity-90 transition">
                <FiPhone />
                {buttonText}
              </button>
            </div>
          </div>

          {/* Image Section */}
        <div className="hidden md:block">
          <div className="w-full flex justify-end item-start">
            <img
              src={heroImage}
              alt={title}
              className="hidden md:block w-full sm:max-w-xs md:max-w-sm md:h-[370px] lg:h-[450px] xl:h-[480px] lg:max-w-md object-cover"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
