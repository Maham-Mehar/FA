"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BodyHeaderData } from "@/data/Explore";
import Image from "next/image";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Grid from "./Grid";
import Detail from "./Detail";

const Body = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectedLabel, setSelectedLabel] = useState(
        BodyHeaderData[0]?.link?.[0]?.label || "Select"
    );
    const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string>("grids");

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-[71%] bg-white">
            <div className="flex justify-between gap-2">
                <div className="flex items-center gap-1">
                    <h2 className="font-plusjakarta text-[#B0B0B0] font-normal text-[13px]">
                        {BodyHeaderData[0].title}
                    </h2>
                    <h2 className="font-plusjakarta text-[#012A50] font-normal text-[13px]">
                        {BodyHeaderData[0].main}
                    </h2>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center bg-white boxshadow-btn gap-2 z-10 font-medium cursor-pointer px-[8px] py-[12px] min-w-[112px] h-[26px] border border-[#E4E4E4] rounded-full font-plusjakarta text-[13px]">
                        {BodyHeaderData[0].btng?.map((item) => {
                            const tabValue = item.label?.toLowerCase() ?? "";
                            const isActive = activeTab === tabValue;
                            return (
                                <div
                                    key={item.id}
                                    className={`flex items-center last:pl-0 pr-[0.5rem] last:pr-0 gap-1 border-r border-[#888888] last:border-0 cursor-pointer 
                                    ${isActive ? "text-[#001B48]" : "text-button"}`}
                                    onClick={() => setActiveTab(tabValue)}
                                >
                                    {item.img ? (
                                        <Image src={item.img} alt="img" width={13} height={13} />
                                    ) : item.icon ? (
                                        <item.icon
                                            size={13}
                                            className={isActive ? "text-[#001B48]" : "text-button"}
                                        />
                                    ) : null}
                                    <span className="last:pt-0.5">{item.label}</span>
                                </div>
                            );
                        })}
                    </button>

                    <p className="text-[#B0B0B0] font-semibold text-[13px] font-plusjakarta">
                        {BodyHeaderData[0].sort}
                    </p>
                    <button
                        className="relative flex items-center z-10 gap-1 cursor-pointer text-[#001B48] font-plusjakarta font-medium text-[16px]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedLabel}
                        {isOpen ? <MdOutlineKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
                        {isOpen && (
                            <div
                                ref={dropdownRef}
                                className="absolute boxshadow-btn-one right-0 top-7 py-[5px] px-[4px] w-[182px] border border-[#E7E7E7] bg-white shadow-lg rounded-lg overflow-hidden"
                            >
                                {BodyHeaderData[0].link?.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={`block px-2 py-2 rounded-lg font-medium text-[13px] text-[#454545] text-start transition-all duration-200 ease-in-out
                                       ${hoveredLabel === item.label
                                                ? "bg-[#C3974C] text-white" // Apply hover styles when hovering
                                                : selectedLabel === item.label && !hoveredLabel
                                                    ? "bg-[#C3974C] text-white" // Show active styles only when nothing is hovered
                                                    : "bg-transparent text-[#454545]" // Ensure smooth transition back to default
                                            }
                                       hover:bg-[#C3974C] hover:text-white
                                   `}
                                        onClick={() => {
                                            setSelectedLabel(item.label);
                                            setIsOpen(false);
                                            setHoveredLabel(null);
                                        }}
                                        onMouseEnter={() => setHoveredLabel(item.label)}
                                        onMouseLeave={() => setHoveredLabel(null)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </button>
                </div>
            </div>
            <p className="font-plusjakarta text-[#012A50] font-extrabold text-[23px] mt-[15px]">
                {BodyHeaderData[1].title}
            </p>
            <div>
                {activeTab === "grids" && <Grid />}
                {activeTab === "list" && <Detail />}
            </div>
        </div>
    );
};

export default Body;