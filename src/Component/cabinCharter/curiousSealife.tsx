"use client";
import { useState } from "react";
import { Sealife ,ItineraryItem } from "@/data/saelife";

const SealifeFAQ = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-12 px-4 lg:px-5 xl:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 flex justify-center flex-col items-center">
          <h2 className="text-[24px] sm:text-[40px] font-playfair text-zink font-semibold mb-1">
            FAQs About Sailing
          </h2>
          <img
            src="/images/rframe.png"
            alt="Divider"
            className="w-[500px] flex justify-center text-center my-3 mx-auto"
          />
          <p className="text-zink text-[16px] sm:text-[24px] font-normal font-sourceSanspro text-center">
            Frequently asked questions about your sailing adventure
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-x-8">
         {Sealife.filter((item): item is ItineraryItem => item !== undefined).map(item => {
    const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full p-4 cursor-pointer text-left"
                >
                  <p className="font-bold text-[18px] text-zink font-sourceSanspro max-w-lg">
                    {item.place}
                  </p>
                  <span className="text-2xl font-bold text-gray-400">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {isActive && (
                  <div className="px-4 pb-6">
                    <p className="text-zink font-sourceSanspro text-[18px] ">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SealifeFAQ;
