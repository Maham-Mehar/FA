// src/Component/readMore/adventure.tsx
"use client";

import JoinUs from "@/common/joinUs";

interface StartAdventureProps {
  id: string;
}

const StartAdventure: React.FC<StartAdventureProps> = ({ id }) => {
  // pick your background based on id
  let bgImage = "/images/default-bg.png";
  if (id === "phiPhi") {
    bgImage = "/images/bg-3.png";
  } else if (id === "krabi") {
    bgImage = "/images/bg-krabi.png";
  }
  // add more elseif blocks for other ids

  return <JoinUs bgImage={bgImage} />;
};

export default StartAdventure;
