"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PngIcons from "@/icons/pngIcon";

const islands = [
    { title: "Koh Maithon", image: PngIcons.thPlace_1 },
    { title: "Koh Phi Phi", image: PngIcons.thPlace_2 },
    { title: "Phi Phi Viewpoint", image: PngIcons.thPlace_3 },
    { title: "Koh Muk", image: PngIcons.thPlace_4 },
];

const Thailand_BestLands = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="py-16 my-6 px-4 bg-white relative overflow-hidden">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl md:text-[40px] font-playfair text-zink font-semibold">
                    Visit The Best Islands Of Thailand
                </h2>
                <img src="/images/rframe.png" alt="" className="w-[500px] flex justify-center text-center mt-2 mx-auto" />

                <p className="text-zink font-sourceSanspro mt-2 text-[24px] font-normal md:text-[24px] mb-4 leading-tight">
                    A simple word with a big promise — "Koh" means island, and your journey is filled with the best of them
                </p>
            </div>

            <div className="w-full relative">
                {/* Top Ellipse - Single overlay for all images */}
                <img
                    src="/images/Ellipse 1.png"
                    alt=""
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full"
                />

                <Slider {...settings}>
                    {islands.map((island, index) => (
                        <div key={index} className="px-3">
                            <div className="relative">
                                {/* Image Box */}
                                <div className="relative overflow-hidden z-20 rounded-lg">
                                    <img
                                        src={island.image}
                                        alt={island.title}
                                        className="w-full h-[440px] object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-20 left-5 text-white text-[36px] font-playfair font-extrabold drop-shadow-lg">
                                        {island.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Bottom Ellipse - Single overlay for all images */}
                <img
                    src="/images/Ellipse 2.png"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-full"
                />
            </div>
            
            {/* Text Box - Centered with max-width */}
            <div className="flex justify-center mt-12">
                <div className="max-w-7xl mx-auto bg-[#E6ECED33] flex items-center justify-between gap-8 px-4 border-l-7 border-l-[#034250]">
                    <div className="flex-1">
                        <p className="text-zink font-sourceSanspro font-semibold text-[20px] mb-2">
                            <span className="font-semibold text-mustard">Info:</span> Island time runs on nature's clock!
                        </p>
                        <p className="text-zink font-sourceSanspro font-semibold text-base">
                            Our schedule may shift with the wind, waves, and weather—so while departure and return times are set, daily timings may ebb and flow.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <img src="/images/slideText.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thailand_BestLands;
