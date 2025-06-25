
import PngIcons from "@/icons/pngIcon";

export interface Island {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string[];
}

export interface BestLandsData {
  id: string;
  islands: Island[];
}

export const bestLandsPages: Record<string, BestLandsData> = {
  phiPhi: {
    id: "phiPhi",
    islands: [
      {
        id: "bamboo",
        title: "Bamboo Island",
        subtitle: "– A Coral-Fringed Escape",
        image: PngIcons.card10,
        description: [
          "With its powdery white sand and clear turquoise waters, Bamboo Island is the perfect tropical retreat. Surrounded by coral reefs, it’s ideal for snorkeling, swimming, or simply relaxing.",
          "As part of Hat Nopparat Thara National Park, access requires a 400 THB fee for adults and 200 THB for children, supporting conservation efforts.",
          "Whether you're unwinding on the beach or exploring the reef, this peaceful island is a must-visit for nature lovers and adventure seekers alike.",
        ],
      },
      {
        id: "phiphi",
        title: "Phi Phi Don",
        subtitle: "– The Heart of the Islands",
        image: PngIcons.card11,
        description: [
          "The largest and only inhabited island in the Phi Phi group, Phi Phi Don is the hub for arrivals from Phuket and Ao Nang.",
          "Here, you’ll find resorts, shops, and restaurants, plus lively nightlife and stunning beaches perfect for sunbathing by day and partying by night.",
          "Don’t miss the viewpoint hike for panoramic island vistas.",
        ],
      },
    ],
  },
  // You can add more pages keyed by id here:
  // krabi: { id: "krabi", islands: [ ... ] },
};
