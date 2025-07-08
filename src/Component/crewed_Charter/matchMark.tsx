"use client";
import React from "react";
import { yachts, Yacht } from "@/data/crewedData";
import { useState } from "react";
import Link from "next/link";

const YachtMatchmaker: React.FC = () => {
    const [guests, setGuests] = useState<number>(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            const clamped = Math.min(150, Math.max(1, value));
            setGuests(clamped);
        } else {
            setGuests(1);
        }
    };

    const increment = () => {
        setGuests(prev => Math.min(150, prev + 1));
    };

    const decrement = () => {
        setGuests(prev => Math.max(1, prev - 1));
    };
    // length range 
    const [length, setLength] = useState(60);

    const handleLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLength(Number(e.target.value));
    };

    const getDot = (position: "left" | "center" | "right") => {
        if (position === "left" && length < 50) return "●";
        if (position === "center" && length >= 50 && length <= 70) return "●";
        if (position === "right" && length > 70) return "●";
        return "";
    };
    return (
        <div className="py-12 bg-gray-50 px-4 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 xl:gap-10 max-w-7xl mx-auto xl:px-0 lg:px-4">
                {/* Left column: Form */}
                <div className="md:col-span-4">
                    <div className="bg-white rounded-2xl shadow-lg p-3 lg:p-4 xl:p-6">
                        <h2 className=" text-xl lg:text-2xl font-extrabold text-green mb-6 font-playfair">
                            Yacht Matchmaker
                        </h2>

                        {/* Yacht Type */}
                        <div className="mb-5">
                            <label className="block text-sm font-semibold mb-0 lg:mb-2 text-zinc-700">
                                Select Yacht Type
                            </label>
                            <select className="w-full border-b-2 border-b-[#42717C] outline-none px-3 py-2 ">
                                <option>Type</option>
                                <option>Catamaran</option>
                                <option>Monohull</option>
                                <option>Motor Yacht</option>
                            </select>
                        </div>

                        {/* Yacht Range */}
                        <div className="mb-5">
                            <label className="block text-sm font-semibold mb-2 text-zinc-700">
                                Select Yacht Range
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                className="w-full border-b-2 border-b-[#42717C] px-3 py-2 outline-none"
                            />
                        </div>

                        {/* Trip Type */}
                        <div className="mb-5">
                            <label className="block text-sm font-semibold mb-2 text-zinc-700">
                                Select Trip Type
                            </label>
                            <select className="w-full border-b-2 border-b-[#42717C] px-3 py-2 outline-none">
                                <option>Trip Type</option>
                                <option>Day Charter</option>
                                <option>Overnight Charter</option>
                            </select>
                        </div>

                        {/* Guests */}
                        <div className="mb-4 pb-4 border-b border-gray-200">
                            <label className="block text-sm font-semibold mb-2 text-zinc-700">
                                Guests (1 - 150)
                            </label>
                            <div className="flex items-center gap-2 border-b-2 border-b-[#42717C]">
                                <button
                                    type="button"
                                    onClick={decrement}
                                    className="text-xl text-zinc-400 px-2"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={guests}
                                    onChange={handleChange}
                                    min={1}
                                    max={150}
                                    className="w-full text-center outline-none border-0 px-2 py-1"
                                />
                                <button
                                    type="button"
                                    onClick={increment}
                                    className="text-xl text-zinc-400 px-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        {/* length */}
                        <div className="mb-4 pb-4 border-b border-gray-200">
                            <label className="block text-sm font-semibold mb-2 text-zinc-700">
                                Select Length Range
                            </label>

                            <div className="flex flex-col items-center gap-2 w-full">
                                <input
                                    type="range"
                                    min={40}
                                    max={80}
                                    value={length}
                                    onChange={handleLength}
                                    className="w-full accent-[#D6AB62]"
                                />

                                {/* Label + Dot Row */}
                                <div className="flex justify-between w-full items-center text-center">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs text-zinc-500">&lt; 40 ft</span>
                                        <span className="text-xs text-zinc-500">{getDot("left")}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs text-zinc-500">60 ft</span>
                                        <span className="text-xs text-zinc-500">{getDot("center")}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs text-zinc-500">&gt; 80 ft</span>
                                        <span className="text-xs text-zinc-500">{getDot("right")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-zinc-700">Price Range</label>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-zinc-500">€0</span>
                                <input
                                    type="range"
                                    min={0}
                                    max={12700}
                                    className="flex-1 accent-[#D6AB62]"
                                />
                                <span className="text-xs text-zinc-500">€12,700</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column: Yacht cards */}
                <div className="md:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 xl:gap-6">
                        {yachts.map((boat: Yacht) => (
                            <Link href="/yachtDetail">
                                <div key={boat.id} className="">
                                    <div className="mb-3 py-5 transition">
                                        <div className="overflow-hidden">
                                            <img
                                                src={boat.image}
                                                alt={boat.name}
                                                className="w-full md:h-55 lg:h-64 xl:h-70 object-cover rounded-tl-3xl rounded-br-3xl"
                                            />
                                        </div>
                                        <div className="mt-3 space-y-1 px-0 lg:px-3 ">
                                            <p className="text-lg md:text-base lg:text-lg xl:text-xl font-poppins text-red-500 font-semibold">
                                                from {boat.priceFrom.toLocaleString()} EUR
                                            </p>
                                            <h3 className="text-[24px] md:text-[22px] lg:text-[26px] xl:text-[30px] font-playfair text-zink">{boat.name}</h3>
                                            <p className="text-lg md:text-[17px] lg:text-xl xl:text-[22px] font-sourceSanspro text-gray-600">
                                                Day &amp; Overnight Charter
                                            </p>
                                        </div>
                                        <div className="mt-4 px-2 pt-3 flex justify-between border-t border-gray-300 text-gray-700 text-sm">
                                            <div className="flex items-center space-x-1">
                                                <img src="/images/icon1.png" alt="" className="lg:w-5 md:w-3 w-4" />
                                                <span>{boat.lengthFt} ft</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <img src="/images/icon2.png" alt="" className="lg:w-5 md:w-3 w-4" />
                                                <span>{boat.guests}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 pe-8">
                                                <img src="/images/icon3.png" alt="" className="lg:w-5 md:w-3 w-4" />
                                                <span>{boat.cabins}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YachtMatchmaker;
