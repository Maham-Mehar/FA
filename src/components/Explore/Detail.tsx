"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation'
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

const Detail = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { yachts, loading, totalPages } = useSelector((state: RootState) => state.yacht);
    const [favorites, setFavorites] = useState<Record<number, Record<number, boolean>>>({});
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);
    const router = useRouter();
    const yachtsPerPage = 5;
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(yachtData({ page, limit: yachtsPerPage }));
    }, [page, dispatch]);

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
                className={`w-[35px] h-[35px] rounded-full border cursor-pointer ${page === p ? "bg-[#012A50] text-white" : "bg-white text-[#012A50]"
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
                <div className="grid grid-cols-1 gap-3 mt-[12px]">
                    {yachts.map((yachtItem, yachtIndex) => {
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
                        const StarArray = [
                            { id: 1, imgstar: "/images/Explore/star-four.svg" },
                            { id: 2, imgstar: "/images/Explore/star-four.svg" },
                            { id: 3, imgstar: "/images/Explore/star-four.svg" },
                            { id: 4, imgstar: "/images/Explore/star-four.svg" },
                            { id: 5, imgstar: "/images/Explore/star-four.svg" },
                        ];
                        return (
                            <div key={yachtIndex} className="bg-white border border-[#CECECE] rounded-lg shadow-md px-[8px] py-[8px] flex gap-4 items-center overflow-hidden cursor-pointer" onClick={() => handleNavigate(yachtItem.id)}>
                                <div className="relative w-[37%] overflow-hidden">
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
                                                            className="w-full h-[260px] object-cover rounded-lg"
                                                            priority={index === 0}
                                                            unoptimized={true}
                                                        />
                                                    </div>
                                                ))}
                                            </Slider>
                                            <div className="flex gap-2 absolute left-1/3 bottom-[1.3rem]">
                                                {yachtItem.picturesURL.slice(0, 4).map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        className={`w-[24px] h-[3px] cursor-pointer rounded-md bg-[#B0B0B0] ${idx === activeSlide ? "bg-white" : ""
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
                                        onClick={() => toggleFavorite(yachtIndex, yachtIndex)}>
                                        {favorites[yachtIndex]?.[yachtIndex] ? (
                                            <FaHeart className="text-[#C3974C]" />
                                        ) : (
                                            <FaRegHeart />
                                        )}
                                    </div>
                                </div>
                                <div className="pt-[4px] border-r border-[#D1D1D1] pr-5 w-[70%]">
                                    <h3 className="font-plusjakarta font-extrabold text-[19px] text-[#0061B1]">{yachtItem.name}</h3>
                                    <div className="flex items-center gap-1 mt-[11px]">
                                        <div className="flex items-center">
                                            <div className="flex gap-0.5 items-center">
                                                {StarArray.map((sk, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <Image key={index} src={sk.imgstar as string} alt='img' width={10} height={10} />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="ml-1 text-[#1E1E1E] font-plusjakarta font-normal text-[13px]">(4.9)</span>
                                        </div>
                                        <p className="text-[#888888] font-normal font-plusjakarta text-[11px]">50 reviews</p>
                                    </div>
                                    <div className="flex items-center mt-[12px]">
                                        <CiLocationOn className="text-[#012A50]" />
                                        <span className="ml-1 text-[#012A50] font-plusjakarta font-extrabold text-[13px]">{yachtItem.location.name.textEN}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-[8px]">
                                        {Box.map((ft, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 py-[10px] px-[16px] border border-[#E8E8E8] bg-white rounded-md"
                                                style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}
                                            >
                                                {ft.img && (
                                                    <Image src={ft.img} alt={`Yacht image ${index + 1}`} width={16} height={16} />
                                                )}
                                                {ft.icon && <ft.icon className="text-[#122B3F] text-[16px]" />}
                                                <span className="ml-1 font-normal text-[13px] text-[#1A2C37] font-plusjakarta">{ft.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-1 mt-[8px] items-center">
                                        {Cabins.map((sk, index) => (
                                            <div key={index} className="flex items-center gap-2 py-[5px] px-[8px] border border-[#E8E8E8] bg-white rounded-md"
                                                style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}>
                                                {sk.img && <Image src={sk.img} alt={`Yacht image ${index + 1}`} width={12} height={12} />}
                                                <span className="ml-1 font-plusjakarta font-normal text-[13px] text-[#6D6D6D]">{sk.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 mt-[28px] items-center">
                                        {yachtItem.picturesURL.slice(0, 6).map((sk, index) => (
                                            <div key={index} className="flex items-center relative">
                                                <Image
                                                    src={sk}
                                                    alt={`Yacht image ${index + 1}`}
                                                    width={54}
                                                    height={44}
                                                    className="rounded-md cursor-pointer w-[54px] h-[44px]"
                                                />
                                            </div>
                                        ))}
                                        {yachtItem.picturesURL.length > 6 && (
                                            <div
                                                className="relative cursor-pointer"
                                                onClick={() => console.log("See All clicked")}
                                            >
                                                <Image
                                                    src={yachtItem.picturesURL[6]}
                                                    alt="Yacht image see all"
                                                    width={54}
                                                    height={44}
                                                    className="rounded-md w-[54px] h-[44px]"
                                                />
                                                <div className="absolute inset-0 bg-[#0C0C0C]/70 rounded-md flex items-center justify-center">
                                                    <span className="text-white text-sm font-medium">See All</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="pt-[1px] flex flex-col justify-between h-[16rem] w-[20%]">
                                    <div className="flex justify-end">
                                        <p className="gradient-text font-extrabold text-[13px] font-plusjakarta">Luxury on the Waves!</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-[#3D3D3D] font-normal text-[13px] font-plusjakarta">
                                            Starting from
                                        </p>
                                        <p className="text-[#C3974C] font-plusjakarta font-extrabold text-[23px]">
                                            €{yachtItem.seasonSpecificData?.[0]?.prices?.[0]?.price}
                                        </p>
                                        <p className="text-[#3D3D3D] font-plusjakarta font-normal text-[13px]">{yachtItem.seasonSpecificData?.[0]?.prices?.[0]?.type}</p>
                                        <button className="px-[24px] py-[8px] mt-1 cursor-pointer font-plusjakarta font-extrabold text-[13px] bg-[#001B48] text-white rounded-full"
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
                {yachts.length > 0 && (
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

export default Detail;