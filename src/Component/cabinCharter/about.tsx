"use client";

import { FiPhone } from "react-icons/fi";
const About = () => {
    return (
        < div>
            <div className="absolute ">
                <img src="/images/line1.png" alt="" />
            </div>
            <div className="relative py-16">
                <div className="relative bg-[url('/images/cabout_1.png')] h-full bg-no-repeat bg-right my-9">
                    <div className=" w-full h-full py-16 px-4 md:px-10 lg:px-20">
                        <div className="max-w-4xl text-center mx-auto">
                            <p className="text-center font-normal text-[20px] font-sourceSanspro uppercase text-[#B4C7CB] ">Sail Into Serenity</p>
                            <p className="text-[40px] font-semibold font-playfair text-zink uppercase py-5">The best cabin charter in Thailand</p>
                            <p className="text-[24px] font-sourceSanspro text-mustard uppercase font-semibold">Escape. Unwind. Explore</p>
                            <p className="text-center font-normal text-[16px] font-inter text-zink pt-4">End your day in comfort with a delicious Thai dinner in your cozy cabin, watching the sunset paint the horizon. Drift to sleep under the stars, serenaded by the ocean breeze.</p>
                            <p className="text-center font-normal text-[16px] font-inter text-zink py-3">A cabin charter in Thailand isn’t just a getaway—it’s a journey into serenity, beauty, and unforgettable memories.</p>
                            <p className="text-center font-normal text-[16px] font-inter text-zink pb-4 ">With Far Away Yachting, your dream adventure is just a booking away. From luxury yachts to expert crews, we craft tailored, stress-free escapes just for you.</p>
                            <div className="flex justify-center ">
                                <button className="text-sm sm:text-base md:text-lg font-poppins bg-zink px-3 py-2 lg:px-5 lg:py-3 text-white rounded-lg mt-4 lg:mt-6 flex items-center gap-2 hover:bg-opacity-90 transition">
                                    <FiPhone />
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About