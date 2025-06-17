"use client";

import React, { useState } from "react";
import { FaqData } from "@/data/Home";
import Image from "next/image";

const Faq = () => {

    const [openFaq, setOpenFaq] = useState<number | null>(1);

    const toggleFAQ = (id: number) => {
        setOpenFaq(openFaq === id ? null : id);
    };


    return (
        <div className="bg-white relative">
            <Image src="/images/Home/faq-top.svg" alt="vec" width={350} height={300} className="absolute right-0 top-0 w-[250px] h-[250px] sm:w-auto sm:h-auto" />
            <div className="max-w-7xl mx-auto px-6 py-4 pt-10 pb-[120px]">
                <h3 className="font-gloss text-[24px] font-normal text-center text-[#26BFFF]">
                    {FaqData[0].main}
                </h3>
                <h2 className="font-dmserif text-center text-[40px] sm:text-[72px] font-normal text-[#1A2C37] leading-12 sm:leading-20">
                    {FaqData[0].title}
                </h2>
                <p className="font-plusjakarta text-center text-[#1E1E1E] font-normal sm:text-[23px]">
                    {FaqData[0].desp}
                </p>
                <div className="flex flex-col lg:flex-row gap-10 mt-[20px]">
                    <div className="w-full lg:w-2/3">
                        {FaqData[1].faq?.map((item) => (
                            <div
                                key={item.id}
                                className="border border-[#CFCFCF] py-[10px] px-[23px] cursor-pointer rounded-lg mb-[15px] last:mb-0 transition-all duration-500 ease-in-out"
                            >
                                <div
                                    className="flex justify-between items-center"
                                    onClick={() => toggleFAQ(item.id)}
                                >
                                    <h4 className="font-plusjakarta font-extrabold text-[18px] sm:text-[23px] text-[#001B48]">
                                        {item.label}
                                    </h4>
                                    <p className="text-[30px] text-[#001B48]">
                                        {openFaq === item.id ? "−" : "+"}
                                    </p>
                                </div>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <p className="font-plusjakarta text-[#4F4F4F] font-normal text-[16px] sm:text-[19px] pt-2 pb-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/3 border border-[#CFCFCF] pt-[40px] px-[30px] lg:px-[23px] xl:px-[33px] pb-[24px] rounded-lg flex items-center flex-col">
                        <Image
                            src={FaqData[2].image as string}
                            alt="FAQ"
                            width={65}
                            height={65}
                        />
                        <h4 className="font-plusjakarta text-[18px] sm:text-[23px] lg:text-[18px] xl:text-[23px] font-extrabold text-[#1E1E1E] mt-[35px]">{FaqData[2].title}</h4>
                        <p className="text-[#4F4F4F] font-plusjakarta font-normal text-[19px] mt-[21px] text-center">
                            {FaqData[2].desp}
                        </p>
                        <button className="mt-[60px] bg-[#C3974C] cursor-pointer font-plusjakarta text-[19px] text-white font-extrabold px-[32px] py-[16px] rounded-full">
                            {FaqData[2].btn}
                        </button>
                    </div>
                </div>
            </div>
            <Image src="/images/Home/faq-bottom.svg" alt="vec" width={350} height={300} className="absolute left-0 bottom-0 w-[250px] h-[250px] sm:w-auto sm:h-auto" />
        </div>
    );
};

export default Faq;
