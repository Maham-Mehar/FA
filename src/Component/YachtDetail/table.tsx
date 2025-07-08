"use client";
import React from "react";
import { IoBoatOutline } from "react-icons/io5";
import { BsBoxes } from "react-icons/bs";
import { LuBolt } from "react-icons/lu";

type ItineraryEntry = {
    title: string[];
    description: string[];
};

const YachtTables = () => {
    const isActive = true;
    const hasItinerary = true;

    const item1 = {
        itinerary: [
            {
                title: ["Day 1", "Day 2", "Day 3"],
                description: [
                    "Arrival and welcome drink. Sail to nearby island.",
                    "Island hopping and snorkeling.",
                    "Return to base and farewell breakfast.",
                ],
            },
        ],
    };


    const item2 = {
        itinerary: [
            {
                title: ["Day 1", "Day 2", "Day 3"],
                description: [
                    "Arrival and welcome drink. Sail to nearby island.",
                    "Island hopping and snorkeling.",
                    "Return to base and farewell breakfast.",
                ],
            },
        ],
    };


    const item3 = {
        itinerary: [
            {
                title: ["Day 1", "Day 2", "Day 3"],
                description: [
                    "Arrival and welcome drink. Sail to nearby island.",
                    "Island hopping and snorkeling.",
                    "Return to base and farewell breakfast.",
                ],
            },
        ],
    };

    return (
        <div>
            <div className="border-b-1 border-gray-400 mb-5">
                <div className="border-1 border-gray-300 px-3 md:px-4 lg:px-5 xl:px-7 mb-5 rounded-lg">
                    <div className="flex items-center py-4 ">
                        <p className="p-2 bg-mustard rounded-lg text-white me-3">< IoBoatOutline size={24} /></p>
                        <p className="text-xl lg:text-[23px] text-zink font-bold font-sourceSansPro">Yacht Specifications</p>
                    </div>
                    {isActive && hasItinerary && item1.itinerary && (
                        <div className="pb-6">
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300 text-left text-zink table-auto">
                                    <tbody>
                                        {item1.itinerary.map((entry, idx) => {
                                            const titles = entry.title ?? [];
                                            const descriptions = entry.description ?? [];
                                            return titles.map((title, i) => (
                                                <tr
                                                    key={`${idx}-${i}`}
                                                    className="text-sm md:text-base odd:bg-white even:bg-[#F5F5F5] odd:hover:bg-[#F5F5F5]"
                                                >
                                                    <td className="border border-gray-300 font-sourceSansPro text-[18px] px-2 lg:px-4 py-3 font-bold text-black align-top">
                                                        {title}
                                                    </td>
                                                    <td className="border border-gray-300 font-sourceSansPro text-[16px] lg:text-[18px] px-2 lg:px-4 py-3 text-black">
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
                </div>
            </div>

            <div className="border-b-1 border-gray-400 mb-5">
                <div className="border-1 border-gray-300 px-3 md:px-4 lg:px-5 xl:px-7  mb-5 rounded-lg">
                    <div className="flex items-center py-4 ">
                        <p className="p-2 bg-mustard rounded-lg text-white me-3"><BsBoxes size={24} /></p>
                        <p className="text-xl lg:text-[23px]text-zink font-bold font-sourceSansPro">Equipment</p>
                    </div>
                    {isActive && hasItinerary && item2.itinerary && (
                        <div className=" pb-6">
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300 text-left text-zink table-auto">
                                    <tbody>
                                        {item2.itinerary.map((entry, idx) => {
                                            const titles = entry.title ?? [];
                                            const descriptions = entry.description ?? [];
                                            return titles.map((title, i) => (
                                                <tr
                                                    key={`${idx}-${i}`}
                                                    className="text-sm md:text-base odd:bg-white even:bg-[#F5F5F5] odd:hover:bg-[#F5F5F5]"
                                                >
                                                    <td className="border border-gray-300 font-sourceSansPro text-[18px] px-2 lg:px-4 py-3 font-bold text-black align-top">
                                                        {title}
                                                    </td>
                                                    <td className="border border-gray-300 font-sourceSansPro text-[16px] lg:text-[18px] px-2 lg:px-4 py-3 text-black">
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
                </div>
            </div>

            <div className="border-b-1 border-gray-400 mb-5">
                <div className="border-1 border-gray-300 px-3 md:px-4 lg:px-5 xl:px-7  mb-5 rounded-lg">
                    <div className="flex items-center py-4">
                        <p className="p-2 bg-mustard rounded-lg text-white me-3"><LuBolt size={24} /></p>
                        <p className="text-xl lg:text-[23px] text-zink font-bold font-sourceSansPro">Activities Equipment</p>
                    </div>
                    {isActive && hasItinerary && item3.itinerary && (
                        <div className="pb-6">
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300 text-left text-zink table-auto">
                                    <tbody>
                                        {item3.itinerary.map((entry, idx) => {
                                            const titles = entry.title ?? [];
                                            const descriptions = entry.description ?? [];
                                            return titles.map((title, i) => (
                                                <tr
                                                    key={`${idx}-${i}`}
                                                    className="text-sm md:text-base odd:bg-white even:bg-[#F5F5F5] odd:hover:bg-[#F5F5F5]"
                                                >
                                                    <td className="border border-gray-300 font-sourceSansPro text-[18px] px-2 lg:px-4 py-3 font-bold text-black align-top">
                                                        {title}
                                                    </td>
                                                    <td className="border border-gray-300 font-sourceSansPro text-[16px] lg:text-[18px] px-2 lg:px-4 py-3 text-black">
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
                </div>
            </div>
        </div>
    );
}
export default YachtTables;
