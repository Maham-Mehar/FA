"use client";

import { useEffect, useState } from "react";
import { Sealife, ItineraryItem } from "@/data/saelife";

const SealifeFAQ = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  // ✅ Open the first FAQ on mount (optional)
  useEffect(() => {
    if (Sealife.length > 0) {
      setActiveId(Sealife[0].id);
    }
  }, []);

  // ✅ Toggle based on ID — one at a time
  const toggleItem = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-12 px-4 lg:px-5 xl:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 flex justify-center flex-col items-center">
          <h2 className="text-[24px] sm:text-[40px] font-playfair text-zink font-semibold mb-1">
            FAQS About Sailing
          </h2>
          <img
            src="/images/rframe.png"
            alt="Divider"
            className="w-[500px] flex justify-center text-center my-3 mx-auto"
          />
          <p className="text-zink text-[18px] md:text-[20px] lg:text-[24px] font-normal font-sourceSanspro text-center md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
            Frequently asked questions about your sailing adventure
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 xl:gap-x-8">
          {Sealife.filter((item): item is ItineraryItem => !!item?.id).map(item => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                id={`faq-${item.id}`}
                className={`border border-gray-200 rounded-lg shadow-sm transition duration-200 ${
                  isActive ? "shadow-md" : "hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full p-4 cursor-pointer text-left"
                >
                  <p className="font-bold text-lg lg:text-xl text-zink font-sourceSanspro max-w-lg">
                    {item.place}
                  </p>
                  <span className="text-2xl font-bold text-gray-400">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {isActive && (
                  <div className="px-4 pb-6">
                    <p className="text-zink font-sourceSanspro text-base lg:text-lg">
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
