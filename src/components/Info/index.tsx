"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InfoData, InfoItem } from "@/data/Info";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";


const Info = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (item: InfoItem) => {
        if (item.label === "Contact Founder") {
            setIsModalOpen(true);
        } else if (item.label === "PDF") {
            const link = document.createElement("a");
            link.href = item.href || "/images/scope.pdf";
            link.download = "scope.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(item.href, "_blank");
        }
    };


    return (
        <>
            <div className="w-full transition-colors duration-500 bg-white border-b border-b-[#C3C3C3] boxshadow-navbar">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link href="/">
                        <h2 className="font-extrabold md:text-[21px] lg:text-[23px] text-primary font-plusjakarta text-center">
                            SailAway Charters
                        </h2>
                    </Link>
                </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:h-[calc(100vh-4.2rem)] flex items-center justify-center flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {InfoData.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleClick(item)}
                            className="flex flex-col items-center justify-center cursor-pointer transition hover:scale-105"
                        >
                            <div className="w-[120px] h-[120px] flex items-center relative">
                                <Image
                                    src={item.img}
                                    alt={item.label}
                                    width={100}
                                    height={100}
                                    className="object-cover rounded-md w-[100px]"
                                />
                            </div>
                            <p className="mt-3 text-base font-semibold text-customblack text-center text-black">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 bg-[#A7A7A7]/50 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
                            <button
                                className="absolute top-2 right-3 text-black text-xl cursor-pointer"
                                onClick={() => setIsModalOpen(false)}
                            >
                                ✕
                            </button>
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src="/images/user.jpeg"
                                    alt="Hadeed Idrees"
                                    width={50}
                                    height={50}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-[#C3974C]">Florian Tretter (Flo)</h2>
                                </div>
                            </div>
                            <div className="space-y-2 text-base text-[#022252]">
                                <p className="flex items-center gap-2">
                                    <CiMail size={20} />
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=flo@far-away.net"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline cursor-pointer"
                                    >
                                        flo@far-away.net
                                    </a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaWhatsapp size={20} /> <a href="https://wa.me/66954142143" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer"> +66 95 414 2143</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaLinkedin size={20} /> <a href="https://www.linkedin.com/in/florian-tretter-1a6954166/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer"> https://www.linkedin.com/in/florian-tretter-1a6954166/</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <CiCalendar size={20} /> <a href="https://calendly.com/flowed/30min" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer"> https://calendly.com/flowed/30min</a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Info;