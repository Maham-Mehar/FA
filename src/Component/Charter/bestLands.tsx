import BestLands from "@/common/bestLands";
import PngIcons from "@/icons/pngIcon";
// Best Places Data
const bestLandsData = [
  {
    id: "1",
    title: "Private Yacht in Phuket",
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
      "Crave freedom on the open sea? Set your own course with a bareboat charter in Phuket — no skipper, no schedule, just you and the Andaman’s turquoise embrace.",
      "Choose from our top-tier fleet of fully equipped yachts & catamarans, ready to launch your next unforgettable adventure.",
    ],
  },
];
          
const  BestLands_Section= () => {
  // Fetch the Design Section from common File 
  return <BestLands data={bestLandsData} />;          
};

export default BestLands_Section;
