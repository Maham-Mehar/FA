// src/data/destinationCards.ts

import PngIcons from "@/icons/pngIcon";

export interface CardItem {
  id: string;         
  image: string;      
  title: string;
  description: string;
}

const CardData: CardItem[] = [
  {
    id: "phi-phi-island",
    title: "Phi Phi Islands",
    image: PngIcons.image1,
    description:
      "The Phi Phi Islands are situated in the Andaman Sea and are famous for natural beauty and rich marine life. This is a group of islands ...",
  },
  {
    id: "phang-nga-bay",   
    title: "Phang Nga Bay",
    image: PngIcons.image2,
    description:
      "Phang Nga Bay is a tropical paradise. Nestled in the Andaman Sea between Phuket and the southern Thailand mainland, ...",
  },
  {
    id: "racha-islands",
    title: "Racha Islands",
    image: PngIcons.image3,
    description:
      "The Racha Islands are renowned for white sands and clear waters—perfect for snorkeling and diving ...",
  },
  {
    id: "maithon-island",
    title: "Maithon Island",
    image: PngIcons.image4,
    description:
      "Maithon Island, also known as Koh Mai Thon, located off the southeast coast of Phuket, Thailand. It is only 15 minutes by speedboat ...",
  },
  {
    id: "koh-haa",
    title: "Koh Haa",
    image: PngIcons.image5,
    description:
      "Koh Haa, located in the Andaman Sea, is a stunning marine paradise with captivating underwater scenery, a variety of marine ...",
  },
  {
    id: "koh-muk",
    title: "Koh Muk",
    image: PngIcons.image6,
    description:
      "Koh Muk is quite a hidden gem for any adventurer. This beautiful island offers an unforgettable experience to every visitor with its appealing ...",
  },
  {
    id: "koh-kradan",
    title: "Koh Kradan",
    image: PngIcons.image7,
    description:
      "Koh Kradan, a hidden gem in Thailand’s Trang Province, is a dream destination for nature enthusiasts and marine lovers ...",
  },
  {
    id: "koh-lanta",
    title: "Koh Lanta",
    image: PngIcons.image8,
    description:
      "Koh Lanta, an idyllic island situated in the Andaman Sea, is a hidden gem renowned for its unspoiled beaches, colorful marine ...",
  },
  {
    id: "koh-rok",
    title: "Koh Rok",
    image: PngIcons.image9,
    description:
      "Koh Rok, composed of two islands—Koh Rok Nok and Koh Rok Nai—is situated in the Andaman Sea, just south of Koh Lanta. This twin island ...",
  },
];

export default CardData;
