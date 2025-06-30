import PngIcons from "@/icons/pngIcon";
import { LuTreePalm, LuUtensilsCrossed, LuOrigami } from "react-icons/lu";
import { TbWheel } from "react-icons/tb";

const features = [
    {
        icon: LuTreePalm,
        title: "Island-Hopping Bliss",
        desc: "Discover iconic spots like Koh Phi Phi, Koh Lanta, Koh Rok & more—all in one unforgettable trip.",
    },
    {
        icon: TbWheel,
        title: "Picture-Perfect Views",
        desc: "From hidden lagoons to mountaintop lookouts, get ready for the best photo ops in Thailand.",
    },
    {
        icon: LuUtensilsCrossed,
        title: "Delicious Dining",
        desc: "Savor authentic Thai cuisine, beach BBQs, and a special dinner at a local restaurant.",
    },
    {
        icon: LuOrigami,
        title: "All-Inclusive Comfort",
        desc: "Sleep in cozy cabins, relax on deck, and let a professional 3-person crew handle everything.",
    },
];

const SeaEscape = () => {
    return (
        <div className="relative">
            <div className="absolute bg-[#FCFCFC] top-0 left-0 z-10 ">
                <img src={PngIcons.line3} alt="" className="w-auto h-auto" />
            </div>
        <section className="relative py-14 px-4 md:px-8 bg-[#FCFCFC]">
            <div className="absolute bottom-0 right-0 z-0 ">
                <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
            </div>
        
            <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl md:text-[40px] font-playfair text-zink font-semibold mb-3 mt-14">
                    What’s Included – Your All-Inclusive Sea Escape
                </h2>
                <p className="text-base md:text-lg font-inter text-zink">
                    Step aboard Amadeus for 6 days of island-hopping bliss—gourmet meals, snorkeling, kayaking, and epic views, all expertly handled by Far Away Charters
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-10 max-w-7xl mb-7 mx-auto">
                {features.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="text-center space-y-3 px-2">
                        <div className="flex justify-center">
                            <div className="bg-zink text-white w-15 h-15 flex items-center justify-center rounded-full">
                                <Icon size={32} />
                            </div>
                        </div>
                        <h3 className="text-[22px] font-bold font-sourceSanspro text-mustard">{title}</h3>
                        <p className="text-[16px] font-normal text-gray-600 font-inter  text-center">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
    );
};

export default SeaEscape;
