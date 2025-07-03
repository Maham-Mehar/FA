import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden min-h-[82vh] flex items-center justify-center">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/videos/crewedVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content on top */}
            <div className="flex items-center justify-center h-full text-center text-white px-4">
                <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
                    <p className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold font-playfair mb-4 max-w-2xl leading-tight">
                        Yacht Charter Phuket      </p>
                    <img src={PngIcons.rframe2} alt="" className="w-[500px] flex justify-center text-center mx-auto" />
                    <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal font-sourceSansPro  mt-2">
                        Sail Phuket in style with our all-inclusive luxury yacht rentals—complete with gourmet dining, drinks, and a pro crew. Wherever you want to go, we’ll take you there in comfort and class.                    </p>
                </div>
            </div>
        </section>

    )

}
export default HeroSection;
