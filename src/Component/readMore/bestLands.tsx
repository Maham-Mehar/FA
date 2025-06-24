"use client";
import PngIcons from "@/icons/pngIcon";

const BestLands = () => {
    const islands = [
        {
            id: "bamboo",
            title: "Bamboo Island",
            subtitle: "– A Coral-Fringed Escape",
            image: PngIcons.card10,
            description: [
                "With its powdery white sand and clear turquoise waters, Bamboo Island is the perfect tropical retreat. Surrounded by coral reefs, it’s ideal for snorkeling, swimming, or simply relaxing.",
                "As part of Hat Nopparat Thara National Park, access requires a 400 THB fee for adults and 200 THB for children, supporting conservation efforts.",
                "Whether you're unwinding on the beach or exploring the reef, this peaceful island is a must-visit for nature lovers and adventure seekers alike.",
            ],
        },
        {
            id: "phiphi",
            title: "Phi Phi Don",
            subtitle: "– The Heart of the Islands",
            image: PngIcons.card11,
            description: [
                "The largest and only inhabited island in the Phi Phi group, Phi Phi Don is the hub for arrivals from Phuket and Ao Nang.",
                "Here, you’ll find resorts, shops, and restaurants, plus lively nightlife and stunning beaches perfect for sunbathing by day and partying by night.",
                "Don’t miss the viewpoint hike for panoramic island vistas.",
            ],
        },
    ];

    return (
        <section className="relative py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FCFCFC]">
            <div>
                <h2 className="text-3xl md:text-4xl font-playfair text-zink font-bold mb-8 text-center">
                    Best Islands Around Phi Phi
                </h2>
                {/* <img src="/images/Frame.png" alt="" /> */}
            </div>
            <div className="absolute left-10 top-0 z-0 ">
                <img src="/images/seashell.png" alt="" />
            </div>
            <div className="absolute right-5 top-50 z-0">
                <img src={PngIcons.frame1} alt="" />
            </div>
            <div className="absolute bottom-0 left-0 z-0">
                <img src={PngIcons.line2} alt="" />
            </div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 z-10 mt-14">
                {islands.map((isle, idx) => (
                    <div
                        key={isle.id}
                        className={` overflow-hidden p-6 ${idx === 1 ? "mt-40" : ""
                            }`}
                    >
                        <div className="relative">
                            <img
                                src={isle.image}
                                alt={isle.title}
                                className="w-[430] h-[350px] object-cover rounded-lg"
                            />
                            <div className="absolute bottom-4 left-4 text-[32px] font-extrabold font-playfair text-white bg-opacity-50 px-3 py-1 rounded-lg">
                                {isle.title}
                            </div>
                        </div>
                        <div className="min-h-[170px] shadow-lg">
                            <div className="p-4 space-y-2 max-w-[30rem]">
                                <p className="font-sourceSanspro text-mustard text-[24px] font-bold ">
                                    {isle.subtitle}
                                </p>
                                {isle.description.map((line, i) => (
                                    <p
                                        key={i}
                                        className="text-zink font-normal font-inter text-[18px] leading-relaxed"
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestLands;
