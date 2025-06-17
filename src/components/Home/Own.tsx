import { OwnData } from "@/data/Home";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";


const Own = () => {

    return (
        <div className="bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 sm:py-10">
                <h3 className="font-gloss text-[24px] font-normal text-center text-[#26BFFF]">
                    {OwnData[0].main}
                </h3>
                <h2 className="font-dmserif text-center text-[55px] sm:text-[72px] font-normal text-[#1A2C37] leading-13">
                    {OwnData[0].title}
                </h2>
                <p className="font-plusjakarta text-center text-[#1E1E1E] font-normal sm:text-[23px]">
                    {OwnData[0].desp}
                </p>
                <div className="flex items-center flex-col">
                    <div className="border border-[#EAEAEA] shadow-md rounded-lg h-auto md:h-[26rem] lg:h-[28rem] w-full lg:w-[61rem] relative md:flex md:flex-row md:items-center gap-8 mt-[40px]">
                        <div className="hidden md:block w-[365px] lg:w-[330px] h-[480px]">
                            <div className="absolute lg:left-[-2rem] top-[-2rem]">
                                <Image
                                    src={OwnData[1].image as string}
                                    alt={OwnData[1].name as string}
                                    width={330}
                                    height={400}
                                    className="h-[410px] md:w-[220px] lg:w-[330px]"
                                />
                            </div>
                            <div className="mt-[24rem] lg:mt-[25.2rem] text-end lg:pr-[2rem]">
                                <h4 className="font-plusjakarta font-extrabold text-[19px] text-[#012A50]">
                                    {OwnData[1].name}
                                </h4>
                                <p className="text-[#808080] font-plusjakarta] text-[16px] font-normal flex items-center justify-end gap-1">
                                    <CiLocationOn />
                                    {OwnData[1].designation}
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#F6F6F6]/50 rounded-xl shadow-lg w-full md:max-w-[38.5rem] relative pl-[50px] pr-[10px] lg:pl-[90px] py-[35px]"
                            style={{ boxShadow: "-4px 0px 4px 0px #C5C5C540" }}
                        >
                            <Image
                                src={OwnData[2].image as string}
                                alt="Quotes"
                                width={80}
                                height={70}
                                className="absolute top-[-2.5rem] sm:top-[-2rem] lg:top-[-1rem] left-[-1rem]"
                            />
                            <div className="absolute w-[3px] h-[200px] md:h-[252px] bg-[#001B48] left-[2rem] top-[9rem]">

                            </div>
                            <h3 className="text-[25px] sm:text-[35px] lg:text-[48px] font-extrabold font-plusjakarta text-[#1E1E1E] leading-10 sm:leading-11 lg:leading-13">
                                {OwnData[2].label}
                            </h3>
                            <p className="text-[#3D3D3D] font-normal font-plusjakarta lg:text-[19px] mt-2 max-w-lg">{OwnData[2].description}</p>
                            <p className="text-[#3D3D3D] font-normal font-plusjakarta lg:text-[19px] mt-2 max-w-lg">{OwnData[2].desp}</p>
                            <p className="text-[#3D3D3D] font-normal font-plusjakarta lg:text-[19px]">{OwnData[2].thank}</p>
                        </div>
                    </div>
                    <button className="mt-[30px] py-[8px] px-[32px] cursor-pointer bg-[#C3974C] rounded-full text-white font-extrabold text-[19px] font-plusjakarta">
                        Turn Yacht into Profit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Own;
