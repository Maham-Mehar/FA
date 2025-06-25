"use client";

import React from "react";
import SetSail from "@/common/yarchtcharter";
import PngIcons from "@/icons/pngIcon";

interface ChartersAdventureProps {
  id: string;
}

const backgroundMap: Record<string, string> = {
  "phang-nga-bay": PngIcons.bg_5,
  "racha-islands": PngIcons.bg_6,
  "maithon-island": PngIcons.bg_7,
  "koh-haa": PngIcons.bg_8,
  "koh-muk": PngIcons.bg_9,
  "koh-kradan": PngIcons.bg_10,
  "koh-lanta": PngIcons.bg_11,
  "koh-rok": PngIcons.bg_12,
  // Add more mappings here
};

const ChartersAdventure: React.FC<ChartersAdventureProps> = ({ id }) => {
  const bg = backgroundMap[id] || "/images/bg-4.png"; 

  return <SetSail id={id} bgImage={bg} />;
};

export default ChartersAdventure;
