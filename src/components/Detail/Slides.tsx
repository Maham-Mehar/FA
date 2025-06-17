"use client";

import { useState, useRef } from "react";
import { BodyData } from "@/data/Explore";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Slides = () => {

    const [favorites, setFavorites] = useState<Record<number, Record<number, boolean>>>({});
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);

    const toggleFavorite = (itemId: number, imgIndex: number) => {
        setFavorites((prev) => ({
            ...prev,
            [itemId]: {
                ...(prev[itemId] || {}),
                [imgIndex]: !prev[itemId]?.[imgIndex] || false,
            },
        }));
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        afterChange: (index: number) => setActiveSlide(index),
    };


    return (
        <div className="grid grid-cols-3 gap-3 mt-[12px]">
            {BodyData.slice(0, 3).map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border border-[#CECECE]">
                    <div className="relative">
                        <Slider ref={sliderRef} {...settings}>
                            {item.image?.map((imgSrc, index) => (
                                <div key={index} className="relative">
                                    <Image
                                        src={imgSrc}
                                        alt={item.label as string}
                                        width={344}
                                        height={0}
                                        className="h-[210px] w-full"
                                    />
                                    <div className="flex flex-col gap-2 absolute right-4 top-[6rem]">
                                        {item.image?.map((_, idx) => (
                                            <button
                                                key={idx}
                                                className={`w-[3px] h-[24px] cursor-pointer rounded-md bg-[#B0B0B0] ${idx === activeSlide ? "bg-white" : ""}`}
                                                onClick={() => sliderRef.current?.slickGoTo(idx)}
                                            ></button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        {item.feature && (
                            <div className={`absolute left-2 top-2 text-white px-[8px] py-[4px] rounded-full font-plusjakarta font-extrabold text-[11px]
                                         ${item.feature === "Instant booking" ? "bg-[#001B48]" : "bg-[#C3974C]"}
                                        `}>
                                {item.feature}
                            </div>
                        )}
                        <div className="absolute top-2 right-2 text-[#F7F7F7]/50 text-[24px] cursor-pointer"
                            onClick={() => toggleFavorite(item.id, index)}>
                            {favorites[item.id]?.[index] ? (
                                <FaHeart className="text-[#C3974C]" />
                            ) : (
                                <FaRegHeart />
                            )}
                        </div>
                        <div className="absolute top-[12rem] left-[1rem] flex py-[9px] px-[18px] bg-white rounded-md" style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}>
                            {item.arrayft?.map((ft) => (
                                <div
                                    key={ft.id}
                                    className="flex items-center px-2 border-r last:border-r-0 border-[#E8E8E8] py-1 rounded-md"
                                >
                                    {ft.img && (
                                        <Image src={ft.img} alt={ft.label as string} width={16} height={16} />
                                    )}
                                    {ft.icon && <ft.icon className="text-[#122B3F] text-[16px]" />}
                                    <span className="ml-1 font-normal text-[12px] text-[#1A2C37] font-plusjakarta">{ft.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pt-7 p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-plusjakarta font-extrabold text-[19px] text-[#0061B1]">{item.label}</h3>
                            <div className="flex items-center">
                                <Image src={item.imgstar as string} alt="star" width={10} height={10} />
                                <span className="ml-1 text-[#1E1E1E] font-plusjakarta font-normal text-[13px]">{item.per}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-[12px] items-center">
                            {item.arraysk?.map((sk) => (
                                <div key={sk.id} className="flex items-center">
                                    <Image src={sk.img as string} alt={sk.label as string} width={12} height={12} />
                                    <span className="ml-1 font-plusjakarta font-normal text-[13px] text-[#6D6D6D]">{sk.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-[8px]">
                            {item.icon && <item.icon className="text-[#012A50]" />}
                            <span className="ml-1 text-[#012A50] font-plusjakarta font-extrabold text-[13px]">{item.location}</span>
                        </div>
                        <p className="mt-[16px] text-[#3D3D3D] font-normal text-[13px] font-plusjakarta">
                            {item.from}
                        </p>
                        <div className="mt-1 flex items-center justify-between">
                            <div>
                                <span className="text-[#C3974C] font-plusjakarta font-extrabold text-[23px]">
                                    {item.price}
                                </span>
                                <span className="text-[#3D3D3D] font-plusjakarta font-normal text-[13px]">{item.day}</span>
                            </div>
                            <button className="px-[24px] py-[8px] cursor-pointer font-plusjakarta font-extrabold text-[13px] bg-[#001B48] text-white rounded-full"
                            >
                                {item.btn}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slides;