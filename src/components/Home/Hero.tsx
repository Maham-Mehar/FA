import { HeroData } from "@/data/Home";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

    return (
        <header className="max-w-7xl mx-auto px-6 py-4 sm:py-6 grid lg:grid-cols-2 gap-6 items-center lg:h-[calc(100vh-10.1rem)]">
            {HeroData.map((item) =>
                item.image ? (
                    <div key={item.id} className="flex justify-center">
                        <Image
                            src={item.image}
                            alt="Hero"
                            width={0}
                            height={0}
                            className="w-auto h-auto sm:w-[558px] sm:h-[530px]"
                        />
                    </div>
                ) : (
                    <div key={item.id} className="space-y-5 flex flex-col items-center lg:items-start">
                        <h3 className="font-plusjakarta text-[20px] sm:text-[23px] font-semibold text-[#C3974C]">
                            {item.main}
                        </h3>
                        <h1 className="font-dmserif font-normal text-[62px] sm:text-[72px] text-[#122B3F] leading-[4rem] sm:leading-[5rem] text-center lg:text-start lg:max-w-xl">
                            {item.title}
                        </h1>
                        <div className="flex gap-4">
                            <Link href="/exploremore" className="bg-[#001B48] text-white cursor-pointer font-plusjakarta px-[24px] py-[8px] rounded-full font-extrabold text-[15px] sm:text-[19px] block">
                                {item.btn}
                            </Link>
                            <button className="border border-[#966738] cursor-pointer font-plusjakarta text-[#C3974C] px-[24px] py-[8px] rounded-full font-extrabold text-[15px] sm:text-[19px]">
                                {item.btnlist}
                            </button>
                        </div>
                    </div>
                )
            )}
        </header>
    );
};

export default Hero;
