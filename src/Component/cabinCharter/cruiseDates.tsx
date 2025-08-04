"use client";
import { useState } from "react";
import { cruiseDates } from "@/data/cruiseDates";
import { RefObject } from "react";

interface CruiseDatesProps {
    sectionRef: RefObject<HTMLDivElement | null>; // <-- fixed
}

const CruiseDates = ({ sectionRef }: CruiseDatesProps) => {
    const [activeTab, setActiveTab] = useState<"1" | "2">("1");
    const data = cruiseDates.find((c) => c.id === activeTab);

    return (
        <section  ref={sectionRef} className="bg-white pt-4 pb-13 lg:pb-16 px-4 xl:px-0">
            <div className="max-w-[78.2rem] mx-auto">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-playfair text-zink font-semibold">
                        Cruise Dates
                    </h2>
                    <p className="text-zink font-sourceSansPro mt-2 font-normal text-xl md:text-[24px] lg:text-[28px] xl:text-[32px]">
                        Prices start from 999 € per person
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-6 gap-4">
                    <button
                        onClick={() => setActiveTab("1")}
                        className={`px-3 md:px-4 lg:px-6 py-2 border font-playfair text-[15px] md:text-[20px] lg:text-[23px] xl:text-[25px] text-black font-bold ${activeTab === "1"
                            ? "border-gray-400 bg-[#E6ECED33] py-2 md:py-4 rounded-xl"
                            : "border-transparent text-black"
                            } transition duration-300`}
                    >
                        Two Person in Double Cabin
                        <p className="text-[13px] md:text-lg lg:text-[20px] font-sourceSansPro font-semibold text-mustard">(price per person)</p>
                    </button>
                    <button
                        onClick={() => setActiveTab("2")}
                        className={`px-3 md:px-4 lg:px-6 py-2 border font-playfair text-[15px] md:text-[21px] lg:text-[23px] xl:text-[25px] font-bold text-black ${activeTab === "2"
                            ? "border-gray-400 bg-[#E6ECED33] py-2 md:py-4 rounded-xl"
                            : "border-transparent text-black"
                            } transition duration-300`}
                    >
                        Single Person in Double Cabin
                        <p className="text-[13px] md:text-lg lg:text-[20px] font-sourceSansPro font-semibold text-mustard">(price per person)</p>

                    </button>
                </div>

                {/* Table */}
                {data && (
                    <div className="w-full overflow-x-auto border border-black rounded-lg max-w-5xl mx-auto">
                        <table className="min-w-[700px] w-full table-auto border-collapse text-center text-sm md:text-base font-sourceSansPro">
                            <thead className="bg-[#D6AB62] text-zink">
                                <tr className="text-[18px] lg:text-[20px] font-bold font-poopins text-white">
                                    <th className="py-3 px-4 border-b border-r border-black">Date</th>
                                    <th className="py-3 px-4 border-b border-r border-black">Availability</th>
                                    <th className="py-3 px-4 border-b border-r border-black">Ensuite Cabin P.P.</th>
                                    <th className="py-3 px-4 border-b border-r border-black">Non Ensuite Cabin P.P.</th>
                                    <th className="py-3 px-4 border-b border-black">Book Now</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.dates.map((date, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white text-[16px] lg:text-[18px] text-zink font-poppins font-medium hover:bg-[#f3f4f6] transition"
                                    >
                                        <td className={`px-4 py-3 text-zink border-black ${index !== data.dates.length - 1 ? "border-b" : ""} border-r`}>
                                            {date}
                                        </td>
                                        <td className={`px-4 py-3 text-green-600 capitalize font-bold text-zink border-black ${index !== data.dates.length - 1 ? "border-b" : ""} border-r`}>
                                            {data.availibility[index] || "-"}
                                        </td>
                                        <td className={`px-4 py-3 text-zink border-black ${index !== data.dates.length - 1 ? "border-b" : ""} border-r`}>
                                            {data.ensuitCabin[index] || "-"}
                                        </td>
                                        <td className={`px-4 py-3 text-zink border-black ${index !== data.dates.length - 1 ? "border-b" : ""} border-r`}>
                                            {data.nonEnsuitCabin[index] || "-"}
                                        </td>
                                        <td className={`px-4 py-3 text-zink border-black ${index !== data.dates.length - 1 ? "border-b" : ""}`}>
                                            <button className="text-dark hover:text-[#D6AB62]">
                                                {data.bookNow[index] || "Book"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </section>
    );
};

export default CruiseDates;
