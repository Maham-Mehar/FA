"use client";

import { useEffect, useState, useRef } from "react";
import { BodyHeaderData } from '@/data/Explore';
import { DetailData } from '@/data/Detail';
import Gallery from './Gallery';
import ReservationModal from './ReservationModal';
import About from './About';
import { useSelector, useDispatch } from "react-redux";
import { yachtDetailData } from "@/lib/features/data/yachtdetailslice";
import type { RootState, AppDispatch } from '@/lib/store/store';

interface HeroProps {
    id: number;
}

const Hero: React.FC<HeroProps> = ({ id }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { yachtsdetail, fetchedIds, loading } = useSelector((state: RootState) => state.yachtdetail);
    const [isScrolled, setIsScrolled] = useState(false);

    const hasFetchedRef = useRef(false);
    useEffect(() => {
        if (id && !hasFetchedRef.current && !fetchedIds.includes(id)) {
          dispatch(yachtDetailData({ id }));
          hasFetchedRef.current = true;
        }
      }, [dispatch, id, fetchedIds]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center lg:h-[calc(100vh-10.1rem)]">
                    <div className="w-10 h-10 border-3 border-t-transparent border-[#012A50] rounded-full animate-spin" />
                </div>
            ) : yachtsdetail ? (
                <div>
                    <header className="max-w-7xl mx-auto px-6 py-4 sm:py-6">
                        <div className="flex items-center gap-1">
                            <h2 className="font-plusjakarta text-[#B0B0B0] font-normal text-[13px]">
                                {BodyHeaderData[0].title}
                            </h2>
                            <h2 className="font-plusjakarta text-[#B0B0B0] font-normal text-[13px]">
                                {BodyHeaderData[0].main}
                            </h2>
                            <h2 className="font-plusjakarta text-[#B0B0B0] font-normal text-[13px]">/</h2>
                            <p className="font-plusjakarta text-[#012A50] font-normal text-[13px]">{yachtsdetail?.name}</p>
                        </div>
                        {DetailData.map((item, index) => (
                            <div key={index}>
                                <div className='flex justify-between items-center mt-[20px]'>
                                    <div className='flex items-center gap-2'>
                                        <h1 className="font-plusjakarta text-[#012A50] font-extrabold text-[33px]">{yachtsdetail?.name}</h1>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        {item?.arrays?.map((item, index) => (
                                            <div key={index} className="flex items-center cursor-pointer gap-2 border border-[#E8E8E8] rounded-md bg-white py-[5px] px-[8px]">
                                                <item.icon className="text-[#B0B0B0]" />
                                                <p className='font-plusjakarta font-medium text-[10px] text-[#6D6D6D]'>{item.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex gap-5 mt-[24px] relative'>
                                    <div className='w-[75%] h-full'>
                                        <Gallery />
                                        <About />
                                    </div>
                                    <div className={`w-[25%] h-full sticky transition-all duration-300 ${isScrolled ? "top-[5.7rem]" : "top-0"}`}>
                                        <ReservationModal />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </header>
                </div>
            ) : (
                <div className="flex items-center justify-center h-[300px] text-lg text-[#012A50]">
                    No data available.
                </div>
            )}
        </>
    );
};

export default Hero;