import PngIcons from "@/icons/pngIcon";

export interface AboutData {
  id: string;
  preTitle: string;
  title: string;
  subtitle: string;
  description: string[];
  buttonText: string;
  heroImage: string;
  decorLines: {
    line1: string;
  };
}

// ✅ Keys with hyphens must be in quotes
export const aboutPages: Record<string, AboutData> = {
  "phi-phi-island": {
    id: "phi-phi-island",
    preTitle: "YACHT DESTINATION",
    title: "PARADISE UNVEILED",
    subtitle: "A NAUTICAL HAVEN IN THE ANDAMAN SEA",
    description: [
      "The Phi Phi Islands are situated in the Andaman Sea and are famous for natural beauty and rich marine life. This is a group of islands located in Krabi Province in southern Thailand and is the ideal tourist destination for marine activities, exploration, and relaxation.",],
    buttonText: "Contact Us",
    heroImage: PngIcons.about1,
    decorLines: {
      line1: PngIcons.line1,
    },
  },
  "phang-nga-bay": {
    id: "phang-nga-bay",
    preTitle: "YACHT DESTINATION",
    title: "NAUTICAL WONDERS",
    subtitle: "SAILING THROUGH THAILAND’S MAJESTIC WONDERS",
    description: [
      "Phang Nga Bay is a tropical paradise. Nestled in the Andaman Sea between Phuket and the southern Thailand mainland, Phang Nga Bay captivates visitors with its stunning limestone karsts and rich marine life. ",
      "While the waters in Phang Nga Bay may not always be crystal clear due to natural silt and runoff, the bay remains a picturesque destination. Phang Nga Bay can be reached by boat from the mainland. Visitors can take a boat tour from Phuket or Krabi to explore the bay and its surrounding islands.",
    ],
    buttonText: "Learn More",
    heroImage: PngIcons.about2,
    decorLines: {
      line1: PngIcons.line1,
    },
  },
  "racha-islands": {
    id: "racha-islands",
    preTitle: "YACHT DESTINATION",
    title: "HIDDEN PARADISE",
    subtitle: "THAILAND’S PREMIER YACHTING AND UNDERWATER OASIS",
    description: [
      "Thailand’s hidden jewel in the azure waters of the Andaman Sea. It is 12 kilometers south of Phuket. The island is mainly divided into two parts – Racha Yai and Racha Noi.  ",
      "This enchanting island is just a short journey from the busy streets of Phuket. Unlike any other Thai island, it offers a quick, serene escape from the city.",
    ],
    buttonText: "Learn More",
    heroImage: PngIcons.about3,
    decorLines: {
      line1: PngIcons.line1,
    },
  },

  "maithon-island": {
    id: "maithon-island",
    preTitle: "YACHT DESTINATION",
    title: "SECRET ISLAND",
    subtitle: "EXPLORE UNTOUCHED BEACHES",
    description: [
      "Maithon also known as Koh Mai Thon, located off the southeast coast of Phuket, Thailand It is only 15 minutes by speedboat. ",
      "This small treasure is well-known for its untouched beaches, clean waters, and lush biodiversity, making it an ideal destination for anybody seeking serenity and natural beauty.",
    ],
    buttonText: "Learn More",
    heroImage: PngIcons.about4,
    decorLines: {
      line1: PngIcons.line1,
    },
  },
  "koh-haa": {
    id: "koh-haa",
    preTitle: "YACHT DESTINATION",
    title: "marine paradise",
    subtitle: "stunning marine paradise",
    description: [
      "Koh Haa located in the Andaman Sea, is a stunning marine paradise with captivating underwater scenery, a variety of marine species, and tranquil natural surroundings. Whether you are a dedicated diver, a snorkeling lover, or just looking to unwind in a beautiful location, Koh Ha provides a memorable experience.",
    ],
    buttonText: "Learn More",
    heroImage: PngIcons.about5,
    decorLines: {
      line1: PngIcons.line1,
    },
  },
  "koh-muk": {
    id: "koh-muk",
    preTitle: "YACHT DESTINATION",
    title: "Hidden Gems",
    subtitle: "enigmatic oceanic caves to animated coral reefs",
    description: [
      "Koh Muk is quite a hidden gem for any adventurer. This beautiful island offers an unforgettable experience to every visitor with its appealing marine resources.  ",
      "From enigmatic oceanic caves to animated coral reefs, Koh Muk will certainly take you into the realm of nature’s marvels.",
    ],
    buttonText: "Learn More",
    heroImage: PngIcons.about6,
    decorLines: {
      line1: PngIcons.line1,
    },
  },
  "koh-kradan": {
    id: "koh-kradan",
    preTitle: "YACHT DESTINATION",
    title: "top beaches",
    subtitle: "dream destination for nature enthusiasts",
    description: [
      "Koh Kradan a hidden gem in Thailand’s Trang Province, is a dream destination for nature enthusiasts and marine lovers.",
      "Known for its pristine beaches, vibrant coral reefs, and crystal-clear waters, Koh Kradan offers an idyllic escape from the hustle and bustle of everyday life. In 2023, it was recognized as one of the top beaches on Earth. Koh Kradan is part of the Hat Chao Mai National Park.",
    ],
    buttonText: "Learn More",
    heroImage: PngIcons.about7,
    decorLines: {
      line1: PngIcons.line1,
    },
  },
  "koh-lanta": {
    id: "koh-lanta",
    preTitle: "YACHT DESTINATION",
    title: "An Exotic Haven",
    subtitle: "unspoiled beaches",
    description: [
      "Koh Lanta an idyllic island situated in the Andaman Sea, is a hidden gem renowned for its unspoiled beaches, colorful marine ecosystems, and peaceful weather. ",
      "This exotic paradise, famous among French tourists thanks to the reality TV show “Koh Lanta,” offers a perfect blend of relaxation and excitement, especially for surfers.",
    ],
    buttonText: "Learn More",
    heroImage: PngIcons.about8,
    decorLines: {
      line1: PngIcons.line1,
    },
  },
  "koh-rok": {
    id: "koh-rok",
    preTitle: "YACHT DESTINATION",
    title: "Marine Wonders",
    subtitle: "unique natural beauty and biodiversity",
    description: [
      " Koh Rok composed of two islands—Koh Rok Nok and Koh Rok Nai—is situated in the Andaman Sea, just south of Koh Lanta. This twin island paradise is part of the Mu Koh Lanta National Park, a protected area that ensures the preservation of its unique natural beauty and biodiversity. ",
      "The islands are known for their unspoiled environment, offering a serene escape from the more commercialized tourist spots in Thailand.",
    ],
    buttonText: "Learn More",
    heroImage: PngIcons.about9,
    decorLines: {
      line1: PngIcons.line1,
    },
  },
};
