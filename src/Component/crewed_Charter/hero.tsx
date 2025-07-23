import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
    return (
        <section className="relative w-full bg-[url('/images/crewedimg.png')] bg-cover bg-center bg-no-repeat overflow-hidden min-h-[45vh] md:min-h-[80vh] lg:min-h-[72vh] xl:min-h-[82vh] flex items-center justify-center">

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#034250]/60 z-0" />

            {/* Content on top */}
            <div className="flex items-center justify-center h-full text-center text-white px-4 relative z-10">
                <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
                    {/* Title Text */}
                    <p className="text-[28px] md:text-[36px] lg:text-[36px] xl:text-[40px] font-bold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full">
                        Yacht Charter Phuket
                    </p>
                    <img
                        src={PngIcons.rframe2}
                        alt="Divider"
                        className="w-[500px] flex justify-center text-center mx-auto"
                    />
                    <p className="text-[18px] md:text-[22px] font-normal font-sourceSanspro text-center mt-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl ">
                        Sail Phuket in style with our all-inclusive luxury yacht rentals—complete with gourmet dining, drinks, and a pro crew. Wherever you want to go, we’ll take you there in comfort and class.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
