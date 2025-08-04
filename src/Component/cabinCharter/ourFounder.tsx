import React from "react";

export default function FounderNote() {
    return (
        <section className="bg-white py-16 px-4 xl:px-0">
            <div className="max-w-[78.2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left: Text */}
                <div className="flex-1 max-w-2xl text-center md:text-left">
                    <div className="flex items-center justify-center text-center gap-2 mb-2 xl:mb-4">
                        <p className="w-8 border-b-2 border-mustard  hidden md:block"></p>
                        <p className="text-mustard text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal sourceSansPro mb-1 xl:mb-2 text-lg">
                            Why We Sail Differently
                        </p>
                    </div>
                    <h2 className="text-3xl text-[28px] md:text-[28px] text-center md:text-left lg:text-[36px] xl:text-[40px] font-playfair text-zink font-bold mb-3 md:mb-2 lg:mb-3 xl:mb-4">
                        A Note from Our Founder
                    </h2>
                    <p className="text-zink font-inter text-base lg:text-lg xl:text-xl font-normal md:text-lg mb-2 lg:mb-4 xl:mb-6">
                        Skip the crowds, sail smarter. With 20+ years at sea and a passion for hidden gems, I created this itinerary to give you the best of Thailand’s islands—clear waters, quiet beaches, and golden hours without the speedboat rush.</p>
                    <p className="text-zink font-inter text-base lg:text-lg xl:text-xl font-normal md:text-lg mb-2 lg:mb-4 xl:mb-6">
                        While others stick close to shore, we go further for unforgettable views and a truly exclusive experience. I look forward to welcoming you aboard!
                    </p>
                    <p className="text-mustard font-inter text-base lg:text-lg xl:text-xl font-bold text-lg mb-1">
                        Sunny regards from Phuket
                    </p>
                    <p className="text-zink font-inter  text-base lg:text-lg  text-xl font-bold font-poppins">
                        Wolfgang Riessbacher
                    </p>
                </div>
                {/* Right: YouTube Video */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-[450px] md:w-[460px] lg:w-[520px] xl:w-[620px] h-[320px] md:h-[360px] lg:h-[390px] xl:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/S2B7C_0htVY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}