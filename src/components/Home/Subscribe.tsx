import { SubscribeData } from "@/data/Home";
import Image from "next/image";

const Subscribe = () => {


    return (
        <div className="bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 sm:py-[85px]">
                <div className="bg-white rounded-xl shadow-lg px-[30px] sm:px-[40px] lg:pl-[53px] lg:pr-[53px] xl:pr-[140px] flex flex-col md:flex-row items-center gap-6 md:gap-10">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Image
                            src={SubscribeData[0].image as string}
                            alt="Subscribe"
                            width={309}
                            height={309}
                        />
                    </div>
                    <div className="w-full md:w-2/3 pb-[56px] md:py-[56px]">
                        <h2 className="font-plusjakarta text-[25px] sm:text-[28px] font-extrabold text-[#1E1E1E]">
                            {SubscribeData[1].title}
                        </h2>
                        <p className="text-[#1E1E1E] font-plusjakarta font-normal text-[16px]">
                            {SubscribeData[1].desp}
                        </p>
                        <div className="mt-[30px] flex flex-col md:flex-row justify-between gap-4 md:gap-2 lg:gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full md:w-2/3 px-4 py-3 border border-[#EEF8FF] bg-[#F2F8FD] rounded-md focus:outline-none focus:ring-2 text-[#1E1E1E] placeholder:text-[#888888] focus:ring-[#022252]"
                            />
                            <button className="bg-[#001B48] font-plusjakarta cursor-pointer font-extrabold md:text-[11px] lg:text-[16px] hover:bg-[#003366] text-white px-[23px] py-[16px] rounded-md">
                                {SubscribeData[1].btn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
