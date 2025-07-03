"use client";
import { islandsById } from "@/data/bestlandData";
import PngIcons from "@/icons/pngIcon";
const BestLands = () => {
  const values = [
    {
      id: "1",
      title: "Private Yacht in Phuketd",
      subtitle: "– Your Private Yacht, Your Dream Escape",
      image: PngIcons.crewedimg3,
      description: [
        "At Faraway Yachting Co. Ltd., we believe your holiday should be nothing short of extraordinary. That’s why we offer bespoke private yacht charters in Phuket — crafted around your desires.",
        "Cruise through turquoise waters, discover hidden islands, and unwind in total privacy with a dedicated crew that takes care of everything. Your journey. Your pace. Your unforgettable adventure.",
      ],
    },
    {
      id: "2",
      title: "Bareboat charter Phuket",
      subtitle: "– Go Where the Wind Takes You",
      image: PngIcons.crewedimg4,
      description: [
        "Crave freedom on the open sea? Set your own course with a bareboat charter in Phuket — no skipper, no schedule, just you and the Andaman’s turquoise embrace. Explore hidden coves, drop anchor in secret bays, and discover paradise on your terms.",
        "Choose from our top-tier fleet of fully equipped yachts & catamarans, ready to launch your next unforgettable adventure.",
      ],
    },


  ];
  return (
    <section className="relative py-12 px-4 md:px-6 lg:px-8 xl-px-0 max-w-7xl mx-auto bg-[#FCFCFC]">
      {/* Title */}
      <div>
        <p className="text-3xl md:text-[40px] font-playfair text-zink font-extrabold mb-8 text-center">
          Phuket Yacht Charter Adventures
        </p>
        {/* <img src="/images/Frame.png" alt="" /> */}
      </div>
      <div className="absolute left-10 top-0 z-0 ">
        <img src="/images/seashell.png" alt="" />
      </div>
      <div className="absolute right-0 top-55 z-0">
        <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <img src={PngIcons.line2} alt="" />
      </div>
      <div className="relative  mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl">
          {values.map((isle, idx) => (
            <div
              key={isle.id}
              className={` overflow-hidden p-6 ${idx === 1 ? "mt-40" : ""
                }`}
            >
              <div className="relative">
                <img
                  src={isle.image}
                  alt={isle.title}
                  className="w-[700] h-[350px] object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 text-[40px] font-extrabold font-playfair text-white bg-opacity-50 px-3 py-1 rounded-lg">
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
      </div>
    </section>
  )
}
export default BestLands