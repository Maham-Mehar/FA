"use client";
import { useState } from "react";
import { priceDetail, ItineraryItem } from "@/data/priceDetail";
import { IconType } from "react-icons";
import HeadingContent from "@/common/heading";

const Price_Details = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setActiveId(prev => (prev === id ? null : id));
    };

    const renderItem = (item: ItineraryItem) => {
        const isActive = activeId === item.id;
        const Icon = item.icon as IconType;

        return (
            <div
                key={item.id}
                className="border bg-white border-gray-200 rounded-lg hover:shadow-md transition duration-200"
            >
                {/* Header */}
                <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="flex justify-between items-center w-full p-4 text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-[#034250] text-white p-2 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                        </div>
                        <p className="font-bold text-[17px] md:text-[19px] lg:text-[22px] text-zink font-sourceSanspro">{item.place}</p>
                    </div>
                    <span className="text-2xl font-bold text-gray-400">{isActive ? "−" : "+"}</span>
                </button>

                {/* Accordion Body */}
                {isActive && (
                    <div className="px-4 pb-6 space-y-2">
                        {item.itinerary?.map((entry, idx) =>
                            entry.description.map((desc, i) => (
                                <p
                                    key={`${idx}-${i}`}
                                    className="ms-3 text-base lg:text-lg xl:text-xl text-[#333333] font-normal font-sourceSansPro leading-tight flex items-start gap-2"
                                >
                                    <span className="text-black font-bold">•</span>
                                    {desc}
                                </p>
                            ))
                        )}
                    </div>
                )}

            </div>
        );
    };

    // Divide items manually
    const leftColumn = priceDetail.filter(item => ["1", "2", "3"].includes(item.id));
    const rightColumn = priceDetail.filter(item => ["4", "5", "6"].includes(item.id));

    return (
        <section className="bg-[#E6ECED1A] py-12 px-4 lg:px-4 xl:px-8">
            <div className="max-w-[78.2rem] mx-auto">
                {/* Heading */}
                <div className="mb-12 ">
                    <HeadingContent
                        heading="Sailing Itinerary"
                        description="A seamless route through the Andaman’s most iconic and secret escapes" />
                </div>

                {/* Itinerary Columns */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                    <div className="space-y-4">{leftColumn.map(renderItem)}</div>
                    <div className="space-y-4">{rightColumn.map(renderItem)}</div>
                </div>
            </div>
        </section>
    );
};

export default Price_Details;
