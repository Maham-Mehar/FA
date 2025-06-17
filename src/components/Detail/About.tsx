"use client";

import { useState } from 'react';
import { DetailbtnData } from '@/data/Detail';
import Description from './Description/Description';
import Amenities from './Amenities/Amenities';
import Add from './Add-on-Services/Add';
import Good from './Good-to-Know/Good';
import Location from './Location/Location';
import Faq from './FAQ/Faq';
import Review from './Reviews/Review';
import Availability from './Availability/Availability';

const About = () => {

    const initialActiveIndices = DetailbtnData.reduce((acc, item) => {
        acc[item.id] = 0;
        return acc;
    }, {} as { [key: number]: number });

    const [activeIndices, setActiveIndices] = useState<{ [key: number]: number }>(initialActiveIndices);

    const handleClick = (parentId: number, buttonIndex: number) => {
        setActiveIndices((prev) => ({ ...prev, [parentId]: buttonIndex }));
    };

    return (
        <div>
            {DetailbtnData.map((item) => (
                <div key={item.id} className='mt-4'>
                    <div className="flex gap-2 items-center">
                        {item.arraybtn.map((buttonItem, buttonIndex) => (
                            <button
                                key={buttonIndex}
                                onClick={() => handleClick(item.id, buttonIndex)}
                                className={`py-[8px] px-[8px] font-plusjakarta font-bold text-[16px] cursor-pointer 
                                        ${activeIndices[item.id] === buttonIndex
                                        ? "border-b-2 border-[#012A50] text-[#012A50]"
                                        : "text-[#6D6D6D]"
                                    }`}
                            >
                                {buttonItem.label}
                            </button>
                        ))}
                    </div>
                    {activeIndices[item.id] === 0 && <Description />}
                    {activeIndices[item.id] === 1 && <Amenities />}
                    {activeIndices[item.id] === 2 && <Add />}
                    {activeIndices[item.id] === 3 && <Good />}
                    {activeIndices[item.id] === 4 && <Location />}
                    {activeIndices[item.id] === 5 && <Faq />}
                    {activeIndices[item.id] === 6 && <Review />}
                    {activeIndices[item.id] === 7 && <Availability />}
                </div>
            ))}
        </div>
    );
};

export default About;