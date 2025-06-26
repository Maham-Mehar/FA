import PngIcons from "@/icons/pngIcon";

// Mapping: id -> array of islands
export const islandsById: Record<string, {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string[];
}[]> = {
  "phi-phi-island": [
    {
      id: "hong",
      title: "Bamboo Island",
      subtitle: "– A Coral-Fringed Escape",
      image: PngIcons.land1,
      description: [
        "With its powdery white sand and clear turquoise waters, Bamboo Island is the perfect tropical retreat. Surrounded by coral reefs, it’s ideal for snorkeling, swimming, or simply relaxing.",
        "As part of Hat Nopparat Thara National Park, access requires a 400 THB fee for adults and 200 THB for children, supporting conservation efforts.",
        "Whether you're unwinding on the beach or exploring the reef, this peaceful island is a must-visit for nature lovers and adventure seekers alike.",
      ],
    },
    {
      id: "james-bond",
      title: "Phi Phi Don",
      subtitle: "– The Heart of the Islands",
      image: PngIcons.land2,
      description: [
        "The largest and only inhabited island in the Phi Phi group, Phi Phi Don is the hub for arrivals from Phuket and Ao Nang.",
        "Here, you’ll find resorts, shops, and restaurants, plus lively nightlife and stunning beaches perfect for sunbathing by day and partying by night.",
        "A vibrant mix of relaxation and energy, it’s the island that truly never sleeps.",
      ],
    },
  ],

  "phang-nga-bay": [
    {
      id: "Yao-Yai",
      title: "Koh Yao Yai",
      subtitle: "– Peaceful Island Living",
      image: PngIcons.land3,
      description: [
        "The larger of the Koh Yao islands, Koh Yao Yai offers a quiet, untouched escape just a short boat ride from Phuket or Krabi.",
        "With sandy beaches, clear waters, and lush rubber plantations, it’s perfect for travelers seeking nature, seclusion, and local charm.",
        "From cozy homestays to upscale resorts, Koh Yao Yai caters to all—without the crowds.",
      ],
    },
    {
      id: "Yao-noi",
      title: "Koh Yao Noi",
      subtitle: "– Where Serenity Meets Simplicity",
      image: PngIcons.land4,
      description: [
        "Smaller and more developed than its sister island, Koh Yao Noi offers a peaceful blend of local culture and light tourism.",
        "Perfect for kayaking, cycling, and relaxing on quiet beaches, it’s ideal for travelers seeking authentic Thai island life with a touch of comfort.",
        "Accessible by ferry from Phuket or Krabi, the island features accommodation for every budget—from cozy guesthouses to boutique resorts.",
      ],
    },
    {
      id: "Khai-Nai",
      title: "Koh Khai Nai",
      subtitle: "– A Snorkeler’s Stop",
      image: PngIcons.land5,
      description: [
        "Just off Phuket, Koh Khai Nai is a tiny island known for vibrant coral reefs and crystal-clear waters—perfect for snorkeling and swimming.",
        "Popular on day trips, its small size makes it ideal for a quick beach escape with soft sand, shallow seas, and tropical charm.",
      ],
    },
    {
      id: "Yao-noi",
      title: "Koh Naka Yai",
      subtitle: "– Serenity Near Phuket",
      image: PngIcons.land6,
      description: [
        "Just off Phuket’s northeast coast, Koh Naka Yai is known for its peaceful beaches and laid-back vibe—perfect for sunbathing, swimming, and relaxing.",
        "Home to a luxury resort and water activities like sailing and windsurfing, it’s a top pick for day-trippers seeking a quiet escape without the crowds.",
      ],
    },
  ],

  "racha-islands": [
    {
      id: "Racha-Yai",
      title: "Koh Racha Yai",
      subtitle: "– A Calm Island Retreat",
      image: PngIcons.land7,
      description: [
        "The larger and more developed of the Racha Islands, Koh Racha Yai is perfect for a peaceful escape with powdery beaches, calm waters, and shoreline snorkeling.",
        "Great for families or anyone seeking serenity, its U-shaped Ao Tawan Tok Bay offers clear visibility and a relaxed atmosphere just a short trip from Phuket.",
      ],
    },
    {
      id: "Racha-Noi",
      title: "Koh Racha Noi",
      subtitle: "– Untamed Diver’s Paradise",
      image: PngIcons.land8,
      description: [
        "Smaller and uninhabited, Koh Racha Noi is a wild, rugged destination for experienced divers and adventurers.",
        "With deep waters, strong currents, and the chance to spot manta rays, this untouched island is a must for those chasing off-the-beaten-path marine thrills.",
      ],
    },
  ],

  "maithon-island": [
    {
      id: "Racha-Yai",
      title: "Coral Island",
      subtitle: "– Phuket’s Easy Island Escape",
      image: PngIcons.land9,
      description: [
        "Just southeast of Phuket, Coral Island is a top day-trip destination with golden beaches, turquoise waters, and excellent snorkeling.",
        "Explore Banana Beach’s vibrant marine life, Nikorn’s peaceful shores, and Nonthasak’s scenic views—plus, you might spot hornbills among the trees!",
      ],
    },
    {
      id: "Racha-Noi",
      title: "Koh Lon",
      subtitle: "– Tranquility Just Minutes from Phuket",
      image: PngIcons.land10,
      description: [
        "A short boat ride from Phuket, Koh Lon offers an authentic, crowd-free island vibe with calm waters, fresh seafood, and peaceful beaches.",
        "Perfect for slow travel lovers seeking quiet swims, sunset meals, and a true escape from the bustle.",
      ],
    },
  ],

  "koh-haa": [
    {
      id: "Ko-Jum",
      title: "Ko Jum",
      subtitle: "– Undiscovered Tranquility in Krabi",
      image: PngIcons.land11,
      description: [
        "Tucked north of Koh Lanta, Ko Jum (also known as Koh Pu) is a serene island offering peaceful beaches, local fishing villages, and a truly laid-back vibe.",
        "Ideal for travelers seeking nature and culture, it’s perfect for snorkeling, kayaking, jungle hikes, and experiencing authentic Thai island life—far from the tourist crowds.",
      ],
    },

  ],

  "koh-muk": [
    {
      id: "Racha-Yai",
      title: "Koh Cheuk",
      subtitle: "– Snorkeler’s Paradise",
      image: PngIcons.land12,
      description: [
        "Close to Koh Muk, Koh Cheuk is a small island known for its crystal-clear waters and thriving coral reefs — ideal for snorkeling day trips.",
        "Teeming with colorful marine life, it offers an easy escape into vibrant underwater worlds without venturing too far from the main islands.",
      ],
    },
    {
      id: "koh-kradan",
      title: "Koh Kradan",
      subtitle: "– Peaceful Beach Retreat",
      image: PngIcons.land13,
      description: [
        "Koh Kradan lures travelers with powdery white sands and turquoise waters along Paradise Beach — perfect for sunbathing and snorkeling.",
        "Its undeveloped charm and coral-rich waters make it a favorite for quiet beach getaways and underwater exploration.",
      ],
    },
    {
      id: "koh-ngai",
      title: "Koh Ngai",
      subtitle: "– Tranquil Nature Escape",
      image: PngIcons.land14,
      description: [
        "Part of Koh Lanta National Park, Koh Ngai is a lush island with soft beaches and coral-filled waters—ideal for kayaking and snorkeling.",
        "With minimal crowds and a romantic vibe, it’s perfect for honeymooners and those seeking true relaxation.",
      ],
    },
  ],

  "koh-kradan": [
    {
      id: "kon-muk",
      title: "Koh Mook",
      subtitle: "– Nature & Mystery Combined",
      image: PngIcons.land15,
      description: [
        "Known for the stunning Emerald Cave, Koh Mook invites adventurers to swim through a dark tunnel to a hidden, sunlit lagoon.",
        "Beyond the cave, the island offers untouched nature, local fishing villages, and quiet beaches for a truly authentic Thai island experience. A perfect destination for explorers seeking mystery, culture, and tranquility all in one.",
      ],
    },
    {
      id: "koh-ngai",
      title: "Koh Ngai",
      subtitle: "– Peaceful Island Bliss",
      image: PngIcons.land16,
      description: [
        "With white sand beaches and vibrant coral reefs, Koh Ngai is ideal for snorkeling, beach walks, and sunset views.",
        "Its quiet charm and tropical greenery create a secluded paradise for nature lovers and those in search of serene escapes. A hidden haven where calm waters and jungle-covered hills offer pure relaxation.",
      ],
    },
  ],

  "koh-lanta": [
    {
      id: "koh-ruk",
      title: "Koh Rok",
      subtitle: "– Snorkeler’s Paradise in a National Park",
      image: PngIcons.land17,
      description: [
        "Part of a protected marine national park, Koh Rok Nai and Koh Rok Nok are twin islands famed for vibrant coral reefs and crystal-clear waters.",
        "A top pick for snorkelers and divers, this untouched destination is a dream for marine life lovers seeking an underwater adventure.",
      ],
    },
    {
      id: "koh-haa",
      title: "Koh Haa",
      subtitle: "– Limestone Lagoon Escape",
      image: PngIcons.land18,
      description: [
        "Koh Haa features five dramatic limestone islets rising from turquoise waters, offering spectacular snorkeling and cave diving.",
        "With rich coral reefs, underwater caverns, and an abundance of marine life, it’s a hidden gem perfect for adventurous day-trippers.",
      ],
    },
    {
      id: "ko-ngai",
      title: "Ko Ngai",
      subtitle: "– The Emerald Island Retreat",
      image: PngIcons.land19,
      description: [
        "Nicknamed the “Emerald Island,” Ko Ngai is beloved for its soft white sand, calm waters, and tropical serenity.",
        "Ideal for kayaking, beachcombing, or sunbathing in peace, this secluded spot is a go-to for travelers craving laid-back island vibes.",
      ],
    },
  ],

  "koh-rok": [
    {
      id: "koh-sukron",
      title: "Koh Sukorn",
      subtitle: "– Rustic Charm in Trang",
      image: PngIcons.land20,
      description: [
        "Off the coast of Trang, Koh Sukorn is known for its quiet beaches, rubber plantations, and authentic island life —perfect for slow travel and cycling through nature.",
        "With scenic trails, serene bays, and local fishing villages, it’s a peaceful haven for travelers seeking simplicity and cultural immersion.",
      ],
    },
    {
      id: "koh-pu",
      title: "Koh Pu (Koh Jum)",
      subtitle: "– Tranquil Island Between Krabi & Lanta",
      image: PngIcons.land21,
      description: [
        "Tucked between Krabi Town and Koh Lanta, Koh Pu (Koh Jum) blends mountain trails and peaceful beaches for a perfect low-key getaway.",
       "Split into a hilly north and beachy south, it offers great hikes, quiet shores, and cozy stays—ideal for those craving nature and seclusion without going remote.",
      ],
    },
  ],
  
};
