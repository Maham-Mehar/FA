"use client";

import { useState } from 'react';
import { DescriptionData } from '@/data/Detail';

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div>
            {DescriptionData.map((item, index) => (
                <div key={index}>
                    <div className='flex items-center gap-2 mt-[16px]'>
                        {item.question && <item.question className="text-[#012A50] text-[24px]" />}
                        <p className='text-[#001B48] font-extrabold text-[19px] font-plusjakarta'>{item.freq}</p>
                    </div>
                    <div className="space-y-4 mt-[16px]">
                        {item.faq.map((item, index) => (
                            <div key={index} className="grid grid-cols-2 gap-4 last:pb-[16px]">
                                <p
                                    className={`text-[19px] font-plusjakarta pl-[20px] py-[8px] cursor-pointer 
                                                ${activeIndex === index ? 'font-extrabold text-[#012A50] h-[2.7rem] border-l-2 border-l-[#012A50] bg-[#EEF8FF] rounded-r-md' : 'font-semibold text-[#1E1E1E]'}
                                            `}
                                    onClick={() => handleToggle(index)}
                                >
                                    {item.question}
                                </p>
                                {activeIndex === index && (
                                    <p className="text-[#1E1E1E] font-plusjakarta rounded-md font-normal text-[16px] py-[10px] px-[10px] bg-[#EEF8FF]">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;