"use client";
import { useState } from "react";
import { highSeason, ItineraryItem } from "@/data/sailingData";
import HeadingContent from "@/common/heading";
import { RefObject } from "react";

interface SailingItineraryProps {
    sectionRef: RefObject<HTMLDivElement | null>; // <-- fixed
}

const Sailing_Itinerary = ({ sectionRef }: SailingItineraryProps) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setActiveId(prev => (prev === id ? null : id));
    };

    const renderItem = (item: ItineraryItem) => {
        const isActive = activeId === item.id;
        const hasItinerary = item.itinerary && item.itinerary.length > 0;

        return (
            <div
                key={item.id}
                className={`border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200`}
            >
                {/* Accordion Header */}
                <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="flex justify-between items-center w-full p-4 cursor-pointer text-left"
                >
                    <div className="flex items-center gap-4 justify-center">
                        <div className="bg-[#034250] text-white font-poppins text-[15px] xl:text-[16px] font-semibold px-3 py-1 rounded-lg">
                            <p>
                                {item.days}
                            </p>
                            <p className="text-center">{item.id}</p>
                            {/* ID below day */}
                        </div>
                        <p className="font-bold text-[18px] lg:text-[20px] xl:[23px] text-zink font-sourceSanspro">{item.place}</p>
                    </div>
                    <span className="text-2xl font-bold text-gray-400">
                        {isActive ? "−" : "+"}
                    </span>
                </button>

                {/* Table Body */}
                {isActive && hasItinerary && item.itinerary && (
                    <div className="px-4 pb-6">
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-left text-zink table-auto">

                                <tbody>
                                    {item.itinerary.map((entry, idx) => {
                                        const titles = entry.title ?? [];
                                        const descriptions = entry.description ?? [];
                                        return titles.map((title, i) => (
                                            <tr
                                                key={`${idx}-${i}`}
                                                className="text-sm md:text-base odd:bg-white even:bg-[#F5F5F5] odd:hover:bg-[#F5F5F5]"
                                            >
                                                <td className="border border-gray-300 font-sourceSansPro text-[18px] lg:text-[23px] px-2 md:px-2 lg:px-4 py-3 font-bold text-black align-top">
                                                    {title}
                                                </td>
                                                <td className="border border-gray-300 font-sourceSansPro font-normal text-[18px] lg:text-[22px] px-2 md:px-2 lg:px-4 py-3 text-black">
                                                    {descriptions[i] || "-"}
                                                </td>
                                            </tr>
                                        ));
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {/* Optional Image Box */}
                {isActive && !hasItinerary && item.image && (
                    <div className="px-4 pb-6">
                        <img
                            src={item.image}
                            alt={item.place}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                )}
            </div>
        );
    };

    // Divide items manually
    const leftColumn = highSeason.filter(item => item.id === "1" || item.id === "2" || item.id === "3");
    const rightColumn = highSeason.filter(item => item.id === "4" || item.id === "5" || item.id === "6");
    return (
        <div ref={sectionRef} className="py-6">
            <section className="bg-white px-4 lg:px-5 xl:px-8">
                <div className="max-w-[78.2rem] mx-auto">
                    {/* Fetch Heading  */}
                    <div className="mb-12">
                        <HeadingContent
                            heading="Visit The Best Islands Of Thailand"
                            description='A simple word with a big promise — "Koh" means island, and your journey is filled with the best of them' />
                    </div>
                    {/* Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Left Column */}
                        <div className="space-y-3">
                            {leftColumn.map(item => renderItem(item))}
                        </div>
                        {/* Right Column */}
                        <div className="space-y-3">
                            {rightColumn.map(item => renderItem(item))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[78.2rem] mx-auto px-4 lg:px-5 xl:px-0 mt-10">
                <div className="flex justify-center">
                    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[490px] xl:h-[520px] overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/jLTjbJ1TUg8?rel=0&modestbranding=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Sailing_Itinerary;
