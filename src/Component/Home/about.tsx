import ContactBanner from "@/common/contactbanner";
const About = () => {
    return (
        <div className="my-10">
            <div className="flex items-center justify-center h-full w-full text-center text-zink px-4 ">
                <div className="flex flex-col justify-center items-center text-zink max-w-3xl mx-auto my-10">
                    <p className="text-[28px] md:text-[36px] lg:text-[36px] xl:text-[36px] font-bold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full">
                        Book Your Private Yacht In Phuket
                    </p>
                    <img
                        src="/images/rframe.png"
                        alt="Divider"
                        className="w-[500px] mx-auto my-1"
                    />
                    <p className="text-[18px] md:text-[22px] font-normal font-sourceSanspro text-center mt-2 md:max-w-xl lg:max-w-2xl xl:max-w-6xl">
                        Book your private yacht in Phuket for a luxurious and unforgettable sailing experience! Explore the stunning islands, crystal-clear waters and hidden gems of this tropical paradise in style. Book Now!
                    </p>
                </div>
            </div>
            <ContactBanner />
        </div>
    )
}
export default About