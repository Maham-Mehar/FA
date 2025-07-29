"use client";
import Image from "next/image";
import { heroPages, HeroConfig } from "@/data/heroData";
interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const key = id.toLowerCase();
  const config: HeroConfig = heroPages[key] ?? heroPages["phi-phi-island"];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[70vh] lg:min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${config.bg})` }}
    >
      <div className="text-center flex flex-col justify-center items-center">
        <p className="text-white font-playfair font-normal pt-4 text-[30px] md:text-[36px] lg:text-[44px] xl:text-[56px] leading-tight">
          {config.title}
        </p>
        <Image src={config.frame} alt="" width={400} height={200} />
        <p className="text-white font-sourceSanspro font-extrabold text-[20px] md:text-[22px] lg:text-[25px]xl:text-[28px] mt-2">
          {config.subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
