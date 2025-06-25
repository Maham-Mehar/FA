// src/data/heroData.ts

import PngIcons from "@/icons/pngIcon";

export interface HeroConfig {
  bg: string;
  title: string;
  subtitle: string;
  frame: string;
}

export const heroPages: Record<string, HeroConfig> = {
  "phi-phi-island": {
    bg: PngIcons.Hbg2,
    title: "Phi Phi Island, Thailand",
    subtitle: "Exploring the Marine Wonders of Phi Phi Islands",
    frame: "/images/rframe.png",
  },
  "phang-nga-bay": {
    bg: PngIcons.Hbg3,
    title: "Phang Nga Bay",
    subtitle: "SAILING THROUGH THAILAND’S MAJESTIC WONDERS",
    frame: "/images/rframe.png",
  },
  "racha-islands": {
    bg: PngIcons.Hbg4,
    title: "Racha Islands",
    subtitle: "THAILAND’S PREMIER YACHTING AND UNDERWATER OASIS",
    frame: "/images/rframe.png",
  },
  "maithon-island": {
    bg: PngIcons.Hbg5,
    title: "Maithon Island",
    subtitle: "EXPLORE UNTOUCHED BEACHES",
    frame: "/images/rframe.png",
  },
  "koh-haa": {
    bg: PngIcons.Hbg6,
    title: "Koh Haa",
    subtitle: "stunning marine paradise",
    frame: "/images/rframe.png",
  },
  "koh-muk": {
    bg: PngIcons.Hbg7,
    title: "Koh Muk",
    subtitle: "enigmatic oceanic caves to animated coral reefs",
    frame: "/images/rframe.png",
  },
  "koh-kradan": {
    bg: PngIcons.Hbg8,
    title: "Koh Kradan",
    subtitle: "dream destination for nature enthusiasts",
    frame: "/images/rframe.png",
  },
  "koh-lanta": {
    bg: PngIcons.Hbg9,
    title: "Koh Lanta",
    subtitle: "unspoiled beaches",
    frame: "/images/rframe.png",
  },
  "koh-rok": {
    bg: PngIcons.Hbg10,
    title: "Koh Rok",
    subtitle: "unique natural beauty and biodiversity",
    frame: "/images/rframe.png",
  },
};
