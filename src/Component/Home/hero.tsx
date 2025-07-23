import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
    return (
        <div className="relative w-full ">

            <section className="relative w-full bg-[#0061B1]/25 bg-[url('/images/homeimg1.png')] bg-cover bg-center bg-no-repeat overflow-hidden min-h-[45vh] md:min-h-[68vh] lg:min-h-[72vh] xl:min-h-[82vh] flex items-center justify-center">
                {/* Content on top */}
                <div className=" absolute inset-0 bg-[#034250]/50 z-0">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-left items-start ">
                            <img src={PngIcons.img2} alt="" className="h-32 md:h-40 lg:h-50" />
                        </div>
                        <div className="flex items-center w-full text-center text-white px-4">
                            <div className="flex flex-col justify-center items-center max-w-3xl mx-auto">
                                <p className="text-[32px] md:text-[38px] lg:text-[48px] xl:text-[64px] font-bold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full">
                                    Phuket Yacht Charter
                                </p>
                                <img
                                    src={PngIcons.rframe2}
                                    alt="Divider"
                                    className="w-[500px] mx-auto my-2"
                                />
                                <p className="text-base md:text-xl lg:text-[22px] font-normal font-sourceSanspro text-center mt-2 md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
                                    Experience luxury and adventure with the best Phuket Yacht Charter Operator. Sail the stunning waters & best Islands of Phuket in style and make unforgettable memories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >

    )

}
export default HeroSection;
