"use client";

import React, { useState, useEffect } from "react";
import { WhatData } from "@/data/Home";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const What = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % WhatData.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [WhatData.length]);


    return (
        <div className="bg-white relative">
            <Image src="/images/Home/What-top.svg" alt="vec" width={300} height={300} className="absolute h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] lg:w-[300px] left-[-6rem] top-[0rem]" />
            <div className="max-w-7xl mx-auto px-6 pt-10 pb-[50px]">
                <h3 className="font-gloss text-[24px] font-normal text-center text-[#26BFFF]">
                    Echoes of Adventure
                </h3>
                <h2 className="font-dmserif text-center text-[35px] sm:text-[62px] md:text-[72px] font-normal text-[#1A2C37] leading-16 sm:leading-18">
                    What Our Guests Say
                </h2>
                <p className="font-plusjakarta text-center text-[#1E1E1E] font-normal sm:text-[23px]">
                    Real Stories from Happy Sailors Around the World!
                </p>
                <div className="max-w-2xl mx-auto relative mt-[40px]">
                    <button
                        onClick={() => setActiveIndex((prev) => (prev === 0 ? WhatData.length - 1 : prev - 1))}
                        className="absolute hidden sm:block sm:left-[-20px] md:left-[-60px] top-1/2 transform -translate-y-1/2 z-10 text-[#022252] cursor-pointer"
                    >
                        <IoIosArrowBack size={40} />
                    </button>

                    <button
                        onClick={() => setActiveIndex((prev) => (prev === WhatData.length - 1 ? 0 : prev + 1))}
                        className="absolute hidden sm:block sm:right-[-20px] md:right-[-60px] top-1/2 transform -translate-y-1/2 z-10 text-[#022252] cursor-pointer"
                    >
                        <IoIosArrowForward size={40} />
                    </button>
                    <div className="relative h-[440px] sm:h-[350px] md:h-[400px] flex justify-center">
                        {WhatData.map((item, index) => {
                            const isPrev = index === (activeIndex - 1 + WhatData.length) % WhatData.length;
                            const isActive = index === activeIndex;
                            const isNext = index === (activeIndex + 1) % WhatData.length;
                            return (
                                <div
                                    key={index}
                                    className={`absolute w-full sm:w-[32rem] md:w-full transition-transform duration-500 ${isActive
                                        ? "z-30 translate-y-0 scale-100 shadow-xl"
                                        : isPrev
                                            ? "z-20 translate-y-6 scale-95 opacity-80"
                                            : isNext
                                                ? "z-10 translate-y-12 scale-90 opacity-60"
                                                : "hidden"
                                        }`}
                                >
                                    <div className="relative bg-white rounded-lg pt-3 p-6 pb-0 shadow-md">
                                        <div className="md:flex gap-6">
                                            <div className="hidden md:block w-1/3 relative">
                                                <div className="absolute top-[-2rem]">
                                                    <Image
                                                        src={item.image as string}
                                                        alt={item.label as string}
                                                        width={309}
                                                        height={506}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-2/3">
                                                <h2 className="text-[40px] font-extrabold font-plusjakarta leading-10 text-[#001B48]">{item.label}</h2>
                                                <div className="flex justify-between items-center mt-3 md:mt-0">
                                                    <p className="text-[#0096FF] font-extrabold text-[19px] font-plusjakarta">{item.title}</p>
                                                    <div className="flex items-center">
                                                        <Image src={item.img as string} alt="stars" width={120} height={24} />
                                                        <span className="ml-1 text-[#1E1E1E] font-plusjakarta font-normal text-[13px]">{item.figure}</span>
                                                    </div>
                                                </div>
                                                <p className="text-[#454545] font-extrabold font-plusjakarta text-[13px] mt-2">{item.adventure}</p>
                                                <p className="text-[#1E1E1E] font-plusjakarta font-normal text-[16px] mt-[6px]">{item.description}</p>
                                                <div className="grid grid-cols-2 gap-2 mt-[10px] pb-[25px]">
                                                    {item.array?.map((loc) => (
                                                        <div key={loc.id} className="flex items-center gap-2">
                                                            <Image src={loc.img as string} alt={loc.location as string} width={20} height={20} />
                                                            <span className="text-[#012A50] font-normal font-plusjakarta text-[16px]">{loc.location}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Image src="/images/Home/What-bottom.svg" alt="vec" width={400} height={300} className="absolute h-[150px] w-[100px] sm:h-[150px] sm:w-[100px] md:h-[250px] md:w-[150px] lg:h-[400px] lg:w-[300px] right-0 bottom-0" />
        </div>
    );
};

export default What;