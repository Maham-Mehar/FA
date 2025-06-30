"use client";
import { LuShipWheel, LuAnchor, LuBadgeEuro } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoBoatOutline } from "react-icons/io5";
import { useState } from "react";
import PngIcons from "@/icons/pngIcon";

const SeaSide_Sixdays = () => {
    const dayTripCards = [
        { icon: LuAnchor, label: "Book Now" },
        { icon: IoBoatOutline, label: "Sailing Itinerary" },
        { icon: LuBadgeEuro, label: "Pricing" },
        { icon: SlCalender, label: "Cruise Dates" },
        { icon: LuShipWheel, label: "FAQ" },
    ];

    const [activeTab, setActiveTab] = useState<string>(dayTripCards[0].label);

    return (
        <div>
            <div className="relative my-9">
                <div className="absolute inset-0 bg-[url('/images/map.png')] bg-no-repeat bg-center bg-cover opacity-10 z-0" />

                <div className="relative bg-white/80 z-10 py-10 px-4"> 
                    <div className="max-w-7xl mx-auto">
                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-7">
                            {dayTripCards.map(({ label, icon: Icon }) => (
                                <button
                                    key={label}
                                    onClick={() => setActiveTab(label)}
                                    className={`py-1 text-base md:text-lg lg:text-[20px] font-poppins font-medium flex items-center gap-2 transition ${activeTab === label
                                        ? "text-mustard border-b-2 border-b-mustard"
                                        : "text-[#034250] border-b-2 border-b-zink"
                                        }`}
                                >
                                    <Icon size={24} />
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 flex items-center pt-5">
                            <div className="">
                                <p className="font-normal text-[24px] font-sourceSanspro text-mustard">
                                    Island Odyssey
                                </p>
                                <p className="text-[48px] max-w-md font-bold font-playfair text-zink py-3">
                                    6 Days of Seaside Bliss
                                </p>
                                <p className=" font-normal text-[24px] font-inter text-zink pt-4 max-w-lg">
                                    Sail through Thailand’s island gems on a 6-day luxury cabin
                                    charter—discover hidden lagoons, vibrant reefs, and serene
                                    beaches from Phuket to Koh Rok and Phi Phi Leh.
                                </p>
                                <button className="text-sm sm:text-base md:text-lg font-bold font-poppins bg-zink px-3 py-2 lg:px-5 lg:py-3 text-white rounded-lg mt-4 lg:mt-6 flex items-center gap-2 hover:bg-opacity-90 transition">
                                    Detail Itinerary
                                </button>
                            </div>

                            <div>
                                <img src={PngIcons.sixPlaces} alt="Charter Map" className="w-full h-[650px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeaSide_Sixdays;
