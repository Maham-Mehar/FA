"use client";
import HeadingContent from "@/common/heading";
import PngIcons from "@/icons/pngIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { IoBoatOutline } from "react-icons/io5";
// import { PiCalendarCheck } from "react-icons/pi";


const features = [
  { title: "Design", value: "Mumby 48", image: PngIcons.icon4 },
  { title: "Year Built", value: "2013", image: PngIcons.icon5 },
  { title: "Length", value: "48 ft (14.5 m)", image: PngIcons.icon6 },
  { title: "No. of guests", value: "Max. 8", image: PngIcons.icon7 },
];

const catamaranDetails = [
  {
    label: "Cabins",
    description:
      "3 en-suite double queen-size cabins, 1 double queen-size cabin with nearby bathroom, and 2 forward single cabins.",
  },
  {
    label: "Comfort",
    description:
      "The cabins have double fans, reading lights, mosquito screens, and there are 4 bathrooms with shower. There is also an additional deck shower, sun protection from a fixed bimini and flexible awning, and an espresso machine.",
  },
  {
    label: "Entertainment",
    description:
      "audio CD/MP4 player, i-pod docking station, outside loudspeakers, audio library. You will NOT find TV and video on this yacht !!!!!",
  },
  {
    label: "Standard",
    description:
      "8-person tender with outboard, fishing equipment, snorkeling equipment, 2 kayaks & 1 paddleboard and safety equipment",
  },
  {
    label: "Sailing",
    description: "cruising speed 8 knots, top speed FAST",
  },
  {
    label: "Special",
    description:
      "Amadeus is known for its high standard of Thai and European catering and Italian style espresso’s. Free Thai cooking lessons, if interested! Your holiday on Amadeus will be a relaxing and culinary experience.",
  },
];

const thumbnails = [
  PngIcons.sailImage,
  PngIcons.sailImage1,
  PngIcons.sailImage2,
  PngIcons.sailImage3,
  PngIcons.sailImage3,
];

const SailingDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % thumbnails.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-10 lg:py-12 xl:py-14 px-4 md:px-0 lg:px-8">
      <div className="max-w-[78.2rem] mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <HeadingContent
            heading="Details of Our Sailing Catamaran"
            description="Discover the features that make our catamaran the ultimate escape vessel" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 items-center justify-center lg:justify-start lg:items-start">
          {/* Left: Image Slider (5 of 12 columns) */}
          <div className="md:col-span-5">
            <div className="relative w-full h-[400px] rounded-tl-3xl rounded-br-3xl overflow-hidden mb-4">
              <Image
                src={thumbnails[currentIndex]}
                alt="Sailing Catamaran"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {thumbnails.map((thumb, i) => (
                <div
                  key={i}
                  className={`w-[80px] h-[80px] cursor-pointer overflow-hidden rounded-md border transition-all duration-300 ${i === currentIndex
                    ? "border-zink blur-0"
                    : "border-gray-300 blur-[1px] hover:blur-0"
                    }`}
                  onClick={() => handleThumbnailClick(i)}
                >
                  <Image
                    src={thumb}
                    alt={`Thumb ${i}`}
                    width={70}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features & Table (7 of 12 columns) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {/* Feature Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 lg:mt-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-gray-200 px-3 py-2 rounded-md text-center flex flex-col items-center justify-center bg-[#FFFDF8]"
                >
                  <div className="flex flex-col items-center justify-center gap-1 text-[#9BA6B2]">
                    <img src={feature.image} alt={feature.title} />
                    <p className="text-lg lg:text-[20px] font-bold font-sourceSansPro text-zink">{feature.title}</p>
                  </div>
                  <p className="text-zink text-lg lg:text-[20px] font-medium font-sourceSansPro">{feature.value}</p>
                </div>
              ))}
            </div>

            {/* Table Style Details */}
            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full table-auto text-left text-[15px] font-sourceSanspro hidden md:block">
                <tbody>
                  {catamaranDetails.map((item, idx) => (
                    <tr key={idx} className="bg-white">
                      <td className="font-bold text-[24px] font-sourceSansPro text-zink px-4 py-3 w-[80px] align-top">
                        {item.label}:
                      </td>
                      <td className="px-4 py-3 text-zink font-normal font-sourceSansPro text-[20px] leading-relaxed">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="block md:hidden">
              {catamaranDetails.map((item, idx) => (
                <div key={idx} className="bg-white">
                  <p className="font-bold text-[24px] font-sourceSansPro text-zink align-top sm:w-auto md:px-4 md:py-3 md:text-[20px] md:block md:w-auto">
                    <span className="">{item.label}:</span>
                  </p>
                  <p className="text-zink font-normal pt-1 pb-3 font-sourceSansPro text-[20px] leading-relaxed sm:block sm:w-auto md:text-[16px] md:py-3 md:block md:w-auto">
                    <span className="">{item.description}</span>
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SailingDetails;
