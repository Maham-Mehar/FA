import { WhyData } from "@/data/Home";
import Image from "next/image";

const Why = () => {


    return (
        <div className="bg-[#EEF8FF]">
            <div className="max-w-7xl mx-auto px-6 py-[50px]">
                <h3 className="font-gloss text-[24px] font-normal text-center text-[#26BFFF]">
                    {WhyData[0].main}
                </h3>
                <h2 className="font-dmserif text-center text-[38px] sm:text-[68px] md:text-[72px] font-normal text-[#1A2C37]">
                    {WhyData[0].title}
                </h2>
                <div className="flex justify-center">
                    <p className="font-plusjakarta text-center text-[#1E1E1E] font-normal sm:text-[23px] leading-6 sm:leading-8 sm:max-w-[55rem]">{WhyData[0].desp}</p>
                </div>
                <div className="max-w-[60rem] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                        {WhyData.slice(1).map((item) => (
                            <div
                                key={item.id}
                            >
                                <Image
                                    src={item.image as string}
                                    alt="img"
                                    width={40}
                                    height={38}
                                />
                                <h2 className="font-plusjakarta font-extrabold lg:max-w-xs mt-[16px] text-[28px] text-[#1B5C89] sm:h-[7.7rem] md:h-[7.7rem] lg:h-[5rem]">
                                    {item.label}
                                </h2>
                                <p className="text-[#1E1E1E] font-plusjakarta font-normal text-[23px] sm:max-w-[15rem] mt-[16px]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;
