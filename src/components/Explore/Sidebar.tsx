"use client";

import { useState } from "react";
import { Range } from "react-range";
import { FilterOptions } from "@/data/Explore";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";


const Sidebar = () => {

    const [priceRange, setPriceRange] = useState([0, 3000]);
    const [counts, setCounts] = useState<{ [key: string]: number }>({
        "Number of cabins": 0,
        "Number of berths": 0,
        "Number of bathrooms": 0,
    });
    const [selected, setSelected] = useState("ft.");
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({});

    const handleIncrement = (category: string) => {
        setCounts((prev) => ({ ...prev, [category]: prev[category] + 1 }));
    };

    const handleDecrement = (category: string) => {
        if (counts[category] > 0) {
            setCounts((prev) => ({ ...prev, [category]: prev[category] - 1 }));
        }
    };

    const handleOptionChange = (category: string | undefined, value: string) => {
        if (!category) return;
        setSelectedOptions((prev) => ({
            ...prev,
            [category]: prev[category]?.includes(value)
                ? prev[category].filter((item: string) => item !== value)
                : [...(prev[category] || []), value],
        }));
    };

    return (
        <div className="bg-[#F4F8FB] border border-[#E7E7E7] rounded-xl py-[16px] px-[6px] w-[27%]">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E7E7E7]">
                <Image src="/images/Explore/filter.svg" alt="filter" width={14} height={14} />
                <h2 className="font-plusjakarta font-extrabold text-[19px] text-[#005292]">
                    Filters
                </h2>
            </div>
            {FilterOptions.map((filter, index) => (
                <div key={index} className={`${index === 0 ? "mt-[9px]" : "mt-[16px]"}`}>
                    {filter.type === "range" && (
                        <div className="rounded-xl bg-white px-[8px] py-[8px]" style={{ boxShadow: "0px 4px 4px 0px #DEDEDE40" }}>
                            <h2 className="font-plusjakarta font-semibold text-[14px] text-[#1E1E1E]">
                                {filter.category}
                            </h2>
                            <Range
                                step={filter.step || 1}
                                min={filter.min}
                                max={filter.max}
                                values={priceRange}
                                onChange={(newValues) => setPriceRange(newValues)}
                                renderTrack={({ props, children }) => {
                                    type TrackProps = {
                                        key?: string;
                                        style: React.CSSProperties;
                                        ref: React.Ref<HTMLDivElement>;
                                        onMouseDown: React.MouseEventHandler<HTMLDivElement>;
                                        onTouchStart: React.TouchEventHandler<HTMLDivElement>;
                                    };
                                    const { key, ...restProps } = props as TrackProps;
                                    return (
                                        <div key={key} {...restProps} className="h-2 bg-gray-300 rounded-lg relative mt-[14px] mx-2">
                                            <div
                                                className="absolute h-full bg-[#007ADB] rounded-lg"
                                                style={{
                                                    left: `${((priceRange[0] - filter.min) / (filter.max - filter.min)) * 100}%`,
                                                    right: `${100 - ((priceRange[1] - filter.min) / (filter.max - filter.min)) * 100}%`,
                                                }}
                                            />
                                            {children}
                                        </div>
                                    );
                                }}
                                renderThumb={({ props }) => {
                                    const { key, ...restProps } = props;
                                    return (
                                        <div key={key} {...restProps} className="w-5 h-5 bg-[#012A50] rounded-full" />
                                    );
                                }}
                            />
                            <div className="flex justify-between items-center mt-[14px]">
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-plusjakarta font-semibold text-[13px] text-[#012A50]">Min</h2>
                                    <div className="w-[81px] border border-[#022252] rounded-xl px-[8px] py-[8px] flex justify-between font-plusjakarta font-medium text-[#D1D1D1]">
                                        <p>{filter.unit}</p> <p>{priceRange[0]}</p>
                                    </div>
                                </div>
                                <Image src="/images/Explore/border.svg" alt="border" width={60} height={15} className="mt-7" />
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-plusjakarta font-semibold text-[13px] text-[#012A50]">Max</h2>
                                    <div className="w-[81px] border border-[#022252] rounded-xl px-[8px] py-[8px] flex justify-between font-plusjakarta font-medium text-[#D1D1D1]">
                                        <p>{filter.unit}</p> <p>{priceRange[1]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Buttons */}
                    {filter.type === "button" && (
                        <div className="rounded-xl bg-white px-[8px] py-[8px] flex gap-2 flex-col" style={{ boxShadow: "0px 4px 4px 0px #DEDEDE40" }}>
                            {filter.options.map((option, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <p className="text-[#1E1E1E] text-[13px] font-normal font-plusjakarta">{option.category}</p>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => handleDecrement(option.category)}
                                            className={`w-5 h-5 pb-1 flex items-center justify-center rounded-full border 
                                    ${counts[option.category] === 0 ? "border-[#E7E7E7] text-[#E7E7E7] cursor-not-allowed" : "border-[#012A50] cursor-pointer text-[#012A50]"} `}
                                            disabled={counts[option.category] === 0}
                                        >
                                            -
                                        </button>
                                        <span className="w-10 text-center border-b border-[#5D5D5D] text-[12px] font-normal font-plusjakarta text-[#1E1E1E]">
                                            {counts[option.category].toString().padStart(2, "0")}
                                        </span>
                                        <button
                                            onClick={() => handleIncrement(option.category)}
                                            className="w-5 h-5 pb-1 flex items-center justify-center rounded-full cursor-pointer border border-[#012A50] text-[#012A50]"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Length */}
                    {filter.type === "min" && (
                        <div className="rounded-xl bg-white px-[8px] py-[8px]" style={{ boxShadow: "0px 4px 4px 0px #DEDEDE40" }}>
                            <div className="flex justify-between items-center">
                                <h2 className="font-plusjakarta font-semibold text-[14px] text-[#1E1E1E]">
                                    {filter.category}
                                </h2>
                                <div className="flex space-x-3">
                                    {filter.label?.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <button
                                                className={`flex items-center justify-center w-[18px] h-[18px] rounded-full ${selected === item.title ? "bg-gradient-to-r from-[#022252] to-[#013D70] text-white" : "bg-[#D1D1D1] text-white"
                                                    }`}
                                                onClick={() => setSelected(item.title)}
                                            >
                                                <item.icon className="w-5 h-5" />
                                            </button>
                                            <p
                                                className={`text-lg font-plusjakarta font-semibold text-[#1E1E1E] `}
                                            >
                                                {item.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-[14px]">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="border border-[#E8E8E8] focus:border-[#022252] focus:text-black w-[81px] px-[8px] 
                                    py-[8px] rounded-md placeholder:text-[#D1D1D1] appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                                    [&::-webkit-outer-spin-button]:appearance-none"
                                />
                                <p className="text-[#1E1E1E] font-plusjakarta font-semibold text-[12px]">to</p>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="border border-[#E8E8E8] focus:border-[#022252] focus:text-black w-[81px] px-[8px] 
                                    py-[8px] rounded-md placeholder:text-[#D1D1D1] appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                                    [&::-webkit-outer-spin-button]:appearance-none"
                                />
                                <button className="bg-[#001B48] text-white rounded-md cursor-pointer px-[9px] py-[11px]">
                                    <IoMdArrowForward />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Ideal */}
                    {filter.type === "checkbox" && (
                        <div className="rounded-xl bg-white px-[8px] py-[8px]" style={{ boxShadow: "0px 4px 4px 0px #DEDEDE40" }}>
                            <h2 className="font-plusjakarta font-semibold text-[14px] text-[#1E1E1E]">
                                {filter.category}
                            </h2>
                            <div
                                className={`mt-[14px] gap-2 ${filter.category === "Equipment" ? "grid grid-cols-2" : "flex flex-col"
                                    }`}
                            >
                                {filter.options?.map((option, idx) => (
                                    <label key={idx} className="flex items-center space-x-1 cursor-pointer max-w-fit">
                                        <input
                                            type="checkbox"
                                            checked={selectedOptions[filter.category ?? ""]?.includes(option.label ?? "") || false}
                                            onChange={() => handleOptionChange(filter.category, option.label ?? "")}
                                            className="w-4 h-4"
                                        />
                                        {idx === 0 ? (
                                            <>
                                                <span className="font-plusjakarta font-normal text-[#1E1E1E]">
                                                    {option.label}
                                                </span>
                                                {option.img && (
                                                    <Image
                                                        src={option.img}
                                                        alt="icon"
                                                        width={20}
                                                        height={20}
                                                    />
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {option.arrays?.map((option, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <Image
                                                            key={index}
                                                            src={option.img ?? ""}
                                                            alt="icon"
                                                            width={10}
                                                            height={10}
                                                        />
                                                    </div>
                                                ))}

                                                <span className="font-plusjakarta font-normal text-[#1E1E1E]">
                                                    {option.label}
                                                </span>
                                            </>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))
            }
            <div className="flex justify-center mt-[16px]">
                <button className="bg-[#001B48] rounded-full cursor-pointer shadow-md px-[31px] py-[8px] text-white text-center font-plusjakarta font-extrabold text-[13px]">
                    Reset filters
                </button>
            </div>
        </div>
    );
};

export default Sidebar;