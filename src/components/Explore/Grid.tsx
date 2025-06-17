"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { yachtData } from "@/lib/features/data/yachtslice";
import type { RootState, AppDispatch } from '@/lib/store/store';
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Grid = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { yachts, loading, totalPages } = useSelector((state: RootState) => state.yacht);
    const [favorites, setFavorites] = useState<Record<number, Record<number, boolean>>>({});
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);
    const yachtsPerPage = 6;
    const [page, setPage] = useState(1);
    const router = useRouter();

    useEffect(() => {
        dispatch(yachtData({ page, limit: yachtsPerPage }));
      }, [page, dispatch]);

    const toggleFavorite = (groupIndex: number, yachtIndex: number) => {
        setFavorites((prev) => ({
            ...prev,
            [groupIndex]: {
                ...(prev[groupIndex] || {}),
                [yachtIndex]: !prev[groupIndex]?.[yachtIndex] || false,
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

    const handleNavigate = (id: number | string) => {
        router.push(`/detail/${id}`);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const renderPagination = () => {
        if (totalPages <= 1) return null;
        const pages: (number | string)[] = [];
        if (page === 1) {
            pages.push(1, 2, "...", totalPages);
        } else if (page === totalPages) {
            pages.push(1, "...", totalPages - 1, totalPages);
        } else if (page === 2) {
            pages.push(1, 2, "...", totalPages);
        } else {
            pages.push(page - 1, page, "...", totalPages);
        }
        return pages.map((p, index) => (
            <button
                key={index}
                className={`w-[35px] h-[35px] rounded-full border cursor-pointer ${
                    page === p ? "bg-[#012A50] text-white" : "bg-white text-[#012A50]"
                }`}
                onClick={() => typeof p === "number" && handlePageChange(p)}
                disabled={p === "..."}
            >
                {p}
            </button>
        ));
    };

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center lg:h-[calc(100vh-10.1rem)]">
                    <div className="w-10 h-10 border-3 border-t-transparent border-[#012A50] rounded-full animate-spin" />
                </div>
            ) : yachts?.length > 0 ? (
                <div className="grid grid-cols-3 gap-3 mt-[12px]">
                    {yachts.map((yachtItem, yachtId) => {
                        const Box = [
                            {
                                id: 1,
                                img: "/images/Home/featured-ft.svg",
                                label: "75 ft.",
                            },
                            {
                                id: 2,
                                img: "/images/Home/featured-guest.svg",
                                label: yachtItem?.maxPersons ? `${yachtItem.maxPersons} guests` : null,
                            },
                            {
                                id: 3,
                                icon: CiCalendar,
                                label: yachtItem?.launchedYear ?? null,
                            },
                        ];
                        const Cabins = [
                            {
                                id: 1,
                                img: "/images/Home/featured-cap.svg",
                                label: yachtItem?.crewedCharterType ? `with ${yachtItem.crewedCharterType}` : null,
                            },
                            {
                                id: 2,
                                img: "/images/Home/featured-cabin.svg",
                                label: yachtItem?.cabins ? `${yachtItem.cabins} Cabins` : null,
                            },
                            {
                                id: 3,
                                img: "/images/Home/featured-berth.svg",
                                label: yachtItem?.berthsCabin ? `${yachtItem.berthsCabin} Berths` : null,
                            }
                        ];
                        return (
                            <div key={yachtId} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border border-[#CECECE]" onClick={() => handleNavigate(yachtItem.id)}>
                                <div className="relative">
                                    {yachtItem.picturesURL?.length > 1 ? (
                                        <div className="relative">
                                            <Slider ref={sliderRef} {...settings}>
                                                {yachtItem.picturesURL.map((imgSrc, index) => (
                                                    <div key={index}>
                                                        <Image
                                                            src={imgSrc}
                                                            alt={`Yacht image ${index + 1}`}
                                                            width={300}
                                                            height={258}
                                                            className="w-full h-[220px] object-cover"
                                                            priority={index === 0}
                                                            unoptimized={true}
                                                        />
                                                    </div>
                                                ))}
                                            </Slider>
                                            <div className="flex flex-col gap-2 absolute right-4 top-[5rem]">
                                                {yachtItem.picturesURL.slice(0, 4).map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        className={`w-[3px] h-[24px] cursor-pointer rounded-md bg-[#B0B0B0] ${idx === activeSlide ? "bg-white" : ""
                                                            }`}
                                                        onClick={() => sliderRef.current?.slickGoTo(idx)}
                                                    ></button>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <Image
                                                src={yachtItem.picturesURL?.[0] || "/default.jpg"}
                                                alt="Yacht image"
                                                width={300}
                                                height={258}
                                                className="w-full h-[220px] object-cover"
                                                unoptimized={true}
                                            />
                                        </div>
                                    )}

                                    <div className="absolute top-2 right-2 text-[#F7F7F7]/50 text-[24px] cursor-pointer"
                                        onClick={() => toggleFavorite(yachtId, yachtId)}>
                                        {favorites[yachtId]?.[yachtId] ? (
                                            <FaHeart className="text-[#C3974C]" />
                                        ) : (
                                            <FaRegHeart />
                                        )}
                                    </div>
                                    <div className="absolute top-[12rem] left-[0.5rem] flex py-[9px] px-[18px] bg-white rounded-md" style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}>
                                        {Box.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center px-2 border-r last:border-r-0 border-[#E8E8E8] py-1 rounded-md"
                                            >
                                                {item.img && (
                                                    <Image src={item.img} alt="feature icon" width={16} height={16} />
                                                )}
                                                {item.icon && <item.icon className="text-[#122B3F] text-[16px]" />}
                                                {item.label && (
                                                    <span className="ml-1 font-normal text-[12px] text-[#1A2C37] font-plusjakarta">
                                                        {item.label}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-7 p-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-plusjakarta font-extrabold text-[19px] text-[#0061B1]">{yachtItem.name}</h3>
                                        <div className="flex items-center">
                                            <Image src="/images/Home/featured-star.svg" alt="star" width={10} height={10} />
                                            <span className="ml-1 text-[#1E1E1E] font-plusjakarta font-normal text-[13px]">(4.9)</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-[12px] items-center h-[3rem]">
                                        {Cabins.map((item) => (
                                            <div key={item.id} className="flex items-center">
                                                <Image src={item.img as string} alt="img" width={12} height={12} />
                                                <span className="ml-1 font-plusjakarta font-normal text-[13px] text-[#6D6D6D]">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center mt-[8px] h-[2rem]">
                                        <CiLocationOn className="text-[#012A50]" />
                                        <span className="ml-1 text-[#012A50] font-plusjakarta font-extrabold text-[13px]">{yachtItem?.location?.name?.textEN}</span>
                                    </div>
                                    <p className="mt-[16px] text-[#3D3D3D] font-normal text-[13px] font-plusjakarta">
                                        From
                                    </p>
                                    <div className="mt-1 flex items-center justify-between">
                                        <div>
                                            <span className="text-[#C3974C] font-plusjakarta font-extrabold text-[23px]">
                                                €{yachtItem.seasonSpecificData?.[0]?.prices?.[0]?.price}
                                            </span>
                                            <span className="text-[#3D3D3D] font-plusjakarta font-normal text-[13px]">/{yachtItem.seasonSpecificData?.[0]?.prices?.[0]?.type}</span>
                                        </div>
                                        <button className="px-[24px] py-[8px] cursor-pointer font-plusjakarta font-extrabold text-[13px] bg-[#001B48] text-white rounded-full"
                                        onClick={() => handleNavigate(yachtItem.id)}
                                        >
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="flex items-center justify-center h-[300px] text-lg text-[#012A50]">
                    No data available.
                </div>
            )}
            <div className="flex justify-center mt-10">
                {Array.isArray(yachts) && yachts.length > 0 && (
                    <div className="flex gap-2 items-center">
                        {page > 1 && (
                            <button
                                className="w-[35px] h-[35px] text-[16px] cursor-pointer text-[#012A50] flex justify-end items-center"
                                onClick={() => handlePageChange(page - 1)}
                            >
                                <FaChevronLeft />
                            </button>
                        )}
                        {renderPagination()}
                        {page < totalPages && (
                            <button
                                className="w-[35px] h-[35px] text-[16px] cursor-pointer text-[#012A50]"
                                onClick={() => handlePageChange(page + 1)}
                            >
                                <FaChevronRight />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Grid;