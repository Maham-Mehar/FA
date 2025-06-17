import { AboutData } from "@/data/Home";
import Image from "next/image";

const Destination = () => {

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-6 sm:py-5">
                <h3 className="font-gloss text-[24px] font-normal text-center text-[#26BFFF]">
                    {AboutData[0].main}
                </h3>
                <h2 className="font-dmserif text-center text-[52px] sm:text-[72px] font-normal gradient-text leading-13">
                    {AboutData[0].title}
                </h2>
                <p className="font-plusjakarta text-center text-[#1E1E1E] font-normal text-[16px] sm:text-[23px] mt-2">{AboutData[0].desp}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {AboutData.slice(1).map((item) => (
                        <div
                            key={item.id}
                            className="relative rounded-tl-2xl rounded-br-2xl overflow-hidden"
                            style={{ boxShadow: "0px 4px 24px 0px #7C7C7C40" }}
                        >
                            <Image
                                src={item.image as string}
                                alt="img"
                                width={300}
                                height={0}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="absolute bottom-1 left-4 font-plusjakarta font-extrabold text-[40px] text-white">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-[20px]">
                    <button className="px-[24px] py-[8px] font-plusjakarta cursor-pointer rounded-full font-extrabold text-[19px] text-white bg-[#C3974C]">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Destination;
