"use client";

import JoinUs from "@/common/joinUs";
import PngIcons from "@/icons/pngIcon";

interface StartAdventureProps {
  id: string;
}

const backgroundMap: Record<string, string> = {
  "phi-phi-island": PngIcons.bgf_1,
  "phang-nga-bay": PngIcons.bgf_2,
  "racha-islands": PngIcons.bgf_3,
  // Add more mappings here
};

const StartAdventure: React.FC<StartAdventureProps> = ({ id }) => {
  // ✅ Only show component if id is one of the first 3 pages
  const allowedIds = ["phi-phi-island", "phang-nga-bay", "racha-islands"];
  if (!allowedIds.includes(id)) return null;

  const bg = backgroundMap[id] || "/images/bg-4.png";

  return <JoinUs id={id} bgImage={bg} />;
};

export default StartAdventure;
