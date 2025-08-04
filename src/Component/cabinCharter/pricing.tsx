"use client";
import { LuAnchor } from "react-icons/lu";
import { GoCheckCircle } from "react-icons/go";
import HeadingContent from "@/common/heading";
import { RefObject } from "react";

const pricingOptions = [
  {
    title: "Oceanview Duo – Ensuite Cabin",
    price: "€1,199",
    per: "per person",
    type: "Double Occupancy",
    features: [
      "Private ensuite bathroom",
      "Ideal for couples or friends",
      "Wake up to the sea every morning",
    ],
  },
  {
    title: "Solo Serenity – Ensuite Cabin",
    price: "€1,599",
    per: "per person",
    type: "Single Occupancy",
    features: [
      "Enjoy your own ensuite space",
      "No sharing, just serenity",
      "Premium comfort for solo travelers",
    ],
  },
  {
    title: "Shared Bliss – Non-Ensuite Cabin",
    price: "€1,099",
    per: "per person",
    type: "Double Occupancy",
    features: [
      "Budget-friendly comfort",
      "Shared facilities",
      "Great for easy-going duos",
    ],
  },
  {
    title: "Private Retreat – Non-Ensuite Cabin",
    price: "€1,499",
    per: "per person",
    type: "Single Occupancy",
    features: [
      "Simple and peaceful stay",
      "Shared facilities, personal space",
      "Ideal for quiet solo explorers",
    ],
  },
];

interface PricingSectionProps {
    sectionRef: RefObject<HTMLDivElement | null>; // <-- fixed
}

const PricingSection = ({ sectionRef }: PricingSectionProps) => {
  return (
    <section ref={sectionRef}  className="bg-[#E6ECED1A] py-5 md:py-8 px-14 md:px-16 lg:px-4 xl:px-0">
      <div className="max-w-[78.2rem] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <HeadingContent
            heading="Pricing"
            description="Premium island-hopping experiences at crystal-clear prices!" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-3 xl:gap-6">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white p-3 xl:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-[#D6AB62] transition duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[16px] xl:text-[15px] font-semiboldfont-sourceSansPro text-mustard mb-2 leading-tight">
                  {option.title}
                </h3>
                <p className="text-zink md:text-[26px] lg:text-[28px] text-[32px] font-sourceSansPro font-bold leading-none">
                  From {option.price}
                </p>
                <p className="text-zink text-[16px] font-sourceSansPro font-semibold mb-3">{option.per}</p>
                <div className="flex items-center gap-2 mb-4">
                  <p className="w-8 border-b-2 border-mustard"></p>
                  <p className="text-zink text-[16px] font-sourceSansPro font-semibold italic">
                    {option.type}
                  </p>
                </div>


                <ul className="space-y-2 text-[16px] font-sourceSansPro text-zink font-normal">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-mustard text-xl mt-1"><GoCheckCircle /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button className="mt-6 border flex items-center  border-zink text-zink font-poppins font-semibold text-[16px] px-7 py-2 rounded-lg hover:bg-[#034250] hover:text-white transition duration-200">
                  <span className="me-2"><LuAnchor /></span>  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
