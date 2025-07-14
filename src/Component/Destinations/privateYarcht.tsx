 import Image from "next/image";
import PngIcons from "@/icons/pngIcon";
import { FaCheckCircle } from "react-icons/fa";

const values = [
  { title: "Private Yachts", description: "Our handpicked fleet blends luxury, comfort, and style—from sleek modern vessels to timeless classics." },
  { title: "Tailored Experiences", description: "Cruise through Phuket’s hidden coves and crystal-clear waters with custom itineraries designed just for you." },
  { title: "Expert Crew", description: "Our passionate crew ensures smooth sailing and reveals the Andaman Sea’s best-kept secrets." },
    { title: "Gourmet Dining", description: "Savor chef-prepared meals made with fresh, local ingredients—every bite paired with a stunning view." },
  { title: "Ultimate Relaxation", description: "Lounge on sun-drenched decks or retreat to your private cabin—every moment is pure serenity." },

];

const PrivateYacht = () => (
  <section className="relative bg-white py-7 lg:py-10 overflow-hidden">
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-playfair font-bold text-mustard mb-4">Private Yacht in Phuket</h2>
        <p className="text-base md:text-xl xl:text-[22px] font-normal font-sourceSanspro max-w-6xl text-zink mx-auto text-gray-700">
          At Faraway Yachting, we believe your holiday should be more than a getaway—it should be an unforgettable escape.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-11 xl:gap-14 items-center">
        <div className="w-full">
          <Image src={PngIcons.privateyact} alt="Mission" width={590} height={590} className="w-full h-[350px] md:h-auto object-cover" />
        </div>
        <div>
          <ul className="space-y-4 lg:space-y-6">
            {values.map((v, i) => (
              <li key={i} className="flex items-start gap-3 max-w-lg">
                <FaCheckCircle className="text-[#F9B233] mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                <div>
                  <p className="font-bold md:text-lg lg:text-xl text-zink">{v.title}</p>
                  <p className="text-zink text-base lg:text-lg">{v.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PrivateYacht;
