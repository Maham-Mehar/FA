"use client";

import { useState } from "react";
import { AboutContent } from "@/data/abouFAQS";
import SetSail from "@/common/yarchtcharter";

const AboutSection_FAQs = () => {
  const [activeId, setActiveId] = useState<number | null>(0);
  const faqArray = AboutContent || [];
  const firstColumn = faqArray.filter((_, i) => i % 2 === 0);
  const secondColumn = faqArray.filter((_, i) => i % 2 !== 0);

  const toggleItem = (index: number) => {
    setActiveId((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        {/* Heading */}
        <div className="mb-8 lg:mb-10 xl:mb-12 flex justify-center flex-col items-center">
          <h2 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-playfair text-zink font-semibold mb-1">
            FAQs
          </h2>
          <img
            src="/images/rframe.png"
            alt="Divider"
            className="w-[500px] my-3 mx-auto"
          />
        </div>

        {/* Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
          {[firstColumn, secondColumn].map((column, columnIndex) => (
            <div className="space-y-3 lg:space-y-4 xl:space-y-6" key={columnIndex}>
              {column.map((item, index) => {
                const actualIndex = columnIndex === 0 ? index * 2 : index * 2 + 1;
                const isOpen = activeId === actualIndex;

                return (
                  <div
                    key={actualIndex}
                    className={`border border-gray-200 rounded-lg shadow-sm transition duration-200 ${isOpen ? "shadow-md" : "hover:shadow-md"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(actualIndex)}
                      className="flex justify-between items-center w-full py-2 lg:py-3 xl:py-4 px-2 lg:px-3 xlpx-4 cursor-pointer text-left"
                    >
                      <p className="font-bold text-base lg:text-xl text-zink font-sourceSanspro max-w-lg">
                        {item.place}
                      </p>
                      <span className="text-2xl font-bold text-gray-400">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-6">
                        {item.description.split("\n").map((line: string, i: number) => {
                          const trimmedLine = line.trim();
                          const withBold = trimmedLine.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
                          const withDashSpan = withBold.replace(
                            /^–\s?/,
                            '<span class="text-zinc-800 font-semibold">–</span> '
                          );
                          return (
                            <p
                              key={i}
                              className="text-zink font-sourceSanspro text-base lg:text-lg mb-2"
                              dangerouslySetInnerHTML={{ __html: withDashSpan }}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <SetSail bgImage="/images/aboutimg6.png" />
    </section>
  );
};

export default AboutSection_FAQs;
