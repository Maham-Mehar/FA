import Hero from "@/components/Home/Hero";
import Destination from "@/components/Home/Destination";
// import Featured from "@/components/Home/Featured";
import Why from "@/components/Home/Why";
import Plan from "@/components/Home/Plan";
import What from "@/components/Home/What";
import Subscribe from "@/components/Home/Subscribe";
import Faq from "@/components/Home/Faq";
import Own from "@/components/Home/Own";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white relative">
      <Hero />
      <Destination />
      {/* <Featured /> */}
      <Why />
      <Plan />
      <What />
      <Subscribe />
      <Faq />
      <Own />
      <div className="fixed right-5 bottom-5 cursor-pointer w-[52px] h-[52px] rounded-full bg-[#C3974C] flex items-center justify-center z-10" style={{ boxShadow: "0px 4px 4px 0px #95959540" }}>
        <Image src="/images/Home/hero_vector.svg" alt="" width={30} height={30} />
      </div>
    </div>
  );
}
