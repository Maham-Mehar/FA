import PngIcons from "@/icons/pngIcon"

const AboutSection = () => {
    return (
        <div className="max-w-7xl mx-auto my-12 md:my-14 lg:my-16 xl:my-18 px-4 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 xl:gap-16">
                <div>
                    <div className="flex items-center">
                        <p className="w-13 md:w-15 lg:w-18 xl:w-21 border-b-3 border-mustard z-10"></p>
                        <p className="text-mustard font-semibold text-base lg:text-[18px] xl:text-[20px] font-inter uppercase relative z-10 ms-3">
                            From Anchors to Adventures    </p>
                    </div>
                    <p className="text-[26px] lg:text-[34px] xl:text-[40px] font-bold font-playfair text-zink mb-3 uppercase">Our Story</p>
                    <p className="text-base lg:text-lg xl:text-[22px] text-zink font-normal text-inter">Faraway Yachting began in 1996 when four passionate sailors from Austria, Norway, Australia, and the Netherlands met by chance at Kata Beach. What started as a sunset chat turned into a bold venture—offering sailing and scuba trips across Thailand, Myanmar, and even the remote Andaman Islands.<br />

                        From diving with elephants to exploring volcanic reefs, we pioneered unforgettable expeditions across Southeast Asia. Today, 25+ years later, Faraway Yachting is still owned by one of the original founders, Wolfgang from Austria.<br />

                        With five personally managed catamarans and deep local knowledge, we offer more than just a yacht—it’s your gateway to adventure, backed by decades of hands-on experience and heart.</p>
                </div>

                <div className="flex items-center ">
                    <img src={PngIcons.aboutimg3} alt="" />
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 xl:gap-16 mt-6 md:mt-8 lg:mt-11 xl:mt-14">
                <div className="flex items-center">
                    <img src={PngIcons.aboutimg4} alt="" />
                </div>

                <div >
                    <div className="flex items-center">
                        <p className="w-13 md:w-15 lg:w-18 xl:w-21 border-b-3 border-mustard z-10"></p>
                        <p className="text-mustard font-semibold text-base lg:text-[18px] xl:text-[20px] font-inter uppercase relative z-10 ms-3">
                            Beyond the Horizon  </p>
                    </div>
                    <p className="text-[26px] lg:text-[34px] xl:text-[40px] font-bold font-playfair text-zink mb-3 uppercase"> Our Mission</p>
                    <p className="text-base lg:text-lg xl:text-[22px] text-zink font-normal text-inter">At Faraway Yachting, our mission is simple — create unforgettable, safe, and sustainable yacht adventures that bring joy to our guests and pride to our crew.<br />
                        We believe a happy crew means happy guests, so we invest in team spirit, personalized service, and thoughtful touches—from birthday surprises to tailor-made charters.<br />
                        Safety is our anchor. We exceed industry standards with rigorous maintenance and hands-on crew training, never compromising when it comes to protecting lives and vessels. <br />
                        As Thailand’s leading sustainable yacht company, we minimize fuel use, protect marine beauty, and champion eco-conscious innovation.<br />
                        While profit keeps us afloat, people and the planet steer our course. We reinvest in our team, upgrade our yachts, and raise the bar for what a charter experience can be.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutSection