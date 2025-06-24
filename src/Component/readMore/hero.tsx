import Image from "next/image";
const HeroSection = () => {
    return (
        <div>
            {/* HERO IMAGE SECTION */}
            <div className="bg-[url('/images/bg_2.png')] bg-cover bg-center bg-no-repeat min-h-[30vh] md:min-h-[40vh] lg:min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="text-center flex flex-col justify-center items-center">
                    <p className="text-white font-normal font-playfair pt-4 text-[32px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-tight">
                        Phi Phi Island, Thailand
                    </p>
                    <Image src="/images/rframe.png" alt="" width={400} height={200} />
                    <p className="text-white font-extrabold font-sourceSanspro text-[20px] md:text-[24px] xl:text-[28px]">
                        Exploring the Marine Wonders of Phi Phi Islands
                    </p>

                </div>
            </div>

        </div>
    )
}
export default HeroSection