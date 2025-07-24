import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
    return (
        <section className="relative w-full bg-[#0061B1]/25 bg-[url('/images/aboutimg1.png')] bg-cover bg-center bg-no-repeat overflow-hidden min-h-[52vh] md:min-h-[62vh] lg:min-h-[72vh] xl:min-h-[70vh] flex items-center justify-center">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#034250]/50 z-0" />

            {/* Content */}
            <div className="relative z-10 text-white text-center px-4 max-w-7xl mx-auto">
                <div className="flex flex-col justify-center items-center max-w-3xl mx-auto">
                    <p className="text-[32px] md:text-[38px] lg:text-[48px] xl:text-[48px] font-bold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full">
                        About Us
                    </p>
                    <img
                        src={PngIcons.rframe2}
                        alt="Divider"
                        className="w-[320px] md:w-[380px] lg:w-[420px] xl:w-[450px] mx-auto my-1 md:my-2"
                    />
                    <p className="text-base text-white md:text-xl lg:text-[22px] font-normal font-sourceSanspro text-center mt-2 md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
                        <span className="text-red-600">Home </span> – About Us
                    </p>
                </div>
            </div>
        </section>

    )

}
export default HeroSection;
