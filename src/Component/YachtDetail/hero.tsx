"use client";
import Gallery from '@/Component/YachtDetail/gallery';
import { CiShare2 } from "react-icons/ci";
import ContactDetail from './contactDetail';
import { useState } from 'react';
import { useEffect } from 'react';
import VideoSection from './videoSection';
import YachtAdventure from '../crewed_Charter/yachtAdventure';
const HeroSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const values = [
        { title: "Hot Chilli 38ft – Stealth" },
    ];
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='max-w-7xl mx-auto'>
            <p className='sourceSansPro text-gray-400 text-[15px] font-normal mt-5'>
                Crewed Charter Phuket /  {values.map((item, index) => (<span key={index} className='sourceSansPro text-[15px] font-bold text-zink'>{item.title}</span>))}
            </p>
            <div className='flex justify-between mt-4'>
                {values.map((item, index) => (<p key={index} className='md:text-[24px] lg:text-[26px] xl:text-[33px] font-playfair text-zink font-extrabold'>{item.title}</p>))}
                <div>
                    <button className='flex items-center border-1 poppins text-[14px] border-gray-400 px-2 py-2'><span className='me-2'><CiShare2 size={20} />
                    </span>Share</button>
                </div>
            </div>
            <div className='flex gap-5 relative'>
                <div className='w-[75%] h-full'>
                    <Gallery />
                    {/* <About /> */}
                </div>
                <div className={`w-[25%] h-full sticky transition-all duration-300 ${isScrolled ? "top-[5.7rem]" : "top-0"}`}>
                    <ContactDetail />
                </div>
            </div>
            <div className='mt-6'>
                <VideoSection />
                <YachtAdventure />
            </div>
        </div>

    )
}
export default HeroSection;