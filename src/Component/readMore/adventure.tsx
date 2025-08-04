"use client";

import JoinUs from "@/common/joinUs";
import PngIcons from "@/icons/pngIcon";1

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
  const allowedIds = ["phi-phi-island", "phang-nga-bay", "racha-islands"];
  if (!allowedIds.includes(id)) return null;

  const bg = backgroundMap[id] || "/images/bg-4.png";

  return <JoinUs id={id} bgImage={bg} />;
};``

export default StartAdventure;
