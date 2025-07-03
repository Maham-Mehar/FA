// Corrected: data/attractionsData.ts
import PngIcons from "@/icons/pngIcon";

export interface Attraction {
    id: string;
    image: string;
    label: string;
    title: string;
    heading: string;
    description: string[];
    highlights: string[];
    tip: string;
}                                      

export interface DestinationAttractions {
    headingText: string;
    items: Attraction[];
}   

export const attractionsMap: Record<string, DestinationAttractions> = {
    "phi-phi-island": {
        headingText: "Main Attractions on Phi Phi Islands",
        items: [
            {
                id: "01",
                image: PngIcons.card2,
                label: "Nature’s Comeback Story",
                title: "Visit Maya Bay",
                heading: "Why It’s Special",
                description: [
                    "Once closed for ecological recovery (2018–2022), Maya Bay is now open with a renewed focus on sustainability.",
                    "Famous from The Beach, this stunning spot on Koh Phi Phi Leh offers crystal-clear waters, vibrant reefs, and towering limestone cliffs — perfect for snorkeling and diving. A visitor fee of 400 THB for adults and 200 THB for children helps support ongoing conservation efforts.",],
                highlights: [
                    "Crystal clear waters and dramatic cliffs",
                    "Protected coral reefs and marine life",
                    "Soft white sands and lush backdrop",
                ],
                tip: "Arrive early to avoid crowds and preserve the peace.",
            },
            {
                id: "02",
                image: PngIcons.card3,
                label: "A Hidden Gem in the Cliffs",
                title: "Visit Phi Phi Leh Lagoon",
                heading: "Why It’s Special",

                description: [
                    "Tucked between soaring limestone walls, this natural turquoise lagoon offers calm, sheltered waters perfect for swimming and kayaking.",
                    "Its free entry and easy access for non-swimmers make it an ideal escape for families and adventure seekers alike."],
                highlights: ["Calm waters", "Stunning scenery", "No crowds"],
                tip: "Visit early or late in the day for a peaceful, crowd-free experience.",
            },
            {
                id: "03",
                image: PngIcons.card4,
                label: "Where Nature Meets Wildlife",
                title: "Visit Monkey Beach",
                heading: "What to See",

                description: [
                    "Tucked away on Koh Phi Phi Don, Monkey Beach boasts powder-white sands, vivid turquoise waters, and a backdrop of lush jungle. It’s famous for its snorkeling, scenic beauty, and, of course, the playful wild monkeys that roam the shore.",],
                highlights: ["Long-tailed macaques in their natural habitat",
                    "Coral reefs just offshore",
                    "Towering limestone cliffs framing the beach",],
                tip: "Tip: Visit early for calm seas, fewer boats, and a peaceful wildlife encounter.",
            }, {
                id: "04",
                image: PngIcons.card5,
                label: "Sunrise with a View",
                title: "Hike to Phi Phi Viewpoint",
                heading: "Why It’s Special",

                description: [
                    "One of the most iconic experiences in the Phi Phi Islands, the Phi Phi Viewpoint hike offers breathtaking panoramic views of the island’s twin bays, lush greenery, and turquoise waters.",
                    "The hike takes about 20–30 minutes and is moderately steep, but the reward at the top is well worth the effort."],
                highlights: ["Sweeping views of Tonsai and Loh Dalum bays",
                    "A vibrant sunrise or quiet midday escape",
                    "Tropical plants and wildlife along the trail",],
                tip: "Go early at 5 AM for sunrise serenity, or try midday for fewer tourists—but be prepared for heat.",
            }, {
                id: "05",
                image: PngIcons.card6,
                label: "Explore the Deep Blue",
                title: "Go Diving or Snorkeling",
                heading: "What to See",
                description: [
                    "Ko Phi Phi is a diver’s paradise, offering vibrant reefs, clear waters, and a chance to swim alongside majestic marine life.",
                    "One of the top sites is Hin Muang, home to Thailand’s tallest vertical wall at 60 meters (197 feet). It’s a dream spot for experienced divers.",
                ],
                highlights: ["Leopard sharks, reef sharks & manta rays",
                    "Occasional whale shark sightings",
                    "Colorful coral gardens and a massive purple rock",],
                tip: "Visit early or late in the day for a peaceful, crowd-free experience.",
            }, {
                id: "06",
                image: PngIcons.card7,
                label: "A Peaceful Slice of Paradise",
                title: "Visit Bamboo Island",
                heading: "Why It’s Special",
                description: [
                    "Looking for a quiet escape near Phi Phi? Bamboo Island offers pristine beaches, calm waters, and some of the best snorkeling in the area.",
                    "Its powdery white sand, crystal-clear sea, and vibrant coral garden at Hin Klang make it a perfect spot for sunbathing, swimming, or simply unwinding.",
                ],
                highlights: ["Beautiful coral reefs & marine life at Hin Klang",
                    "Soft sandy beaches away from the crowds",
                    "Calm, clear waters ideal for snorkeling",],
                tip: "Most day trips include the entrance fee and lunch—just book and relax.",
            },
            {
                id: "07",
                image: PngIcons.card8,
                label: "Buzzing Vibes & Stunning Views",
                title: "Visit Tonsai Bay",
                heading: "Why It’s Special",

                description: [
                    "Tonsai Bay is the heart of Phi Phi—a lively mix of natural beauty, dining, and nightlife, surrounded by bright blue waters and lush islands.",
                    "Climb the nearby hill for a breathtaking panoramic view of the bay—best done in the early morning or late afternoon to avoid the heat.",],
                highlights: [
                    "Stunning bay views from the hilltop",
                    "Bustling streets filled with cafes, bars & shops",
                    "Boats arriving from Phuket & Krabi",],
                tip: "Respect local life, keep the beaches clean, and enjoy the island’s vibrant yet authentic charm.",
            }, {
                id: "08",
                image: PngIcons.card9,
                label: "Nighttime Island Magic",
                title: "Fire Show on the Beach",
                heading: "Why It’s Special",

                description: [
                    "After sunset, Koh Phi Phi’s beaches come alive with fiery performances that light up the night. Local performers twirl and toss flaming ropes and sticks in an electrifying display set to pulsing music.",
                    "It’s the perfect way to wind down after dinner—with a drink in hand, toes in the sand, and the fire lighting up the ocean breeze.",],
                highlights: ["Skilled fire dancers performing to music",
                    "Chill beach party atmosphere",
                    "Cocktails, cold beers & laid-back vibes",],
                tip: "Shows usually start after dark — grab a beach spot early for the best view!",
            },
        ],
    },
    // Page 2
    "phang-nga-bay": {
        headingText: "Main Attractions in Phang Nga Bay",
        items: [
            {
                id: "01",
                image: PngIcons.pnbCard1,
                label: "Iconic & Eroding Beauty",
                title: "Visit James Bond Island",
                heading: "Why It’s Special",
                description: [
                    "Known for its unique nail-shaped rock, James Bond Island (Koh Tapu) gained fame from the 1974 film The Man with the Golden Gun. Formed by millions of years of erosion, it's a must-see — while it still stands.",
                    "Entry is around 300 THB for adults and 150 THB for children. Great for photography and sightseeing by boat.",],
                highlights: [
                    "Iconic limestone spire rising from the sea",
                    "Khao Ping Kan’s leaning rock formations",
                    "Caves, lagoons & scenic photo spots",
                ],
                tip: "Arrive early to beat the crowds.",
            },
            {
                id: "02",
                image: PngIcons.pnbCard2,
                label: "A Village on Stilts",
                title: "Visit Phi Phi Leh Lagoon",
                heading: "Why It’s Special",

                description: [
                    "Floating in Phang Nga Bay, Panyee Island is a one-of-a-kind Muslim fishing village built entirely on stilts over the water—home to over 365 families descended from Javanese seafarers."],
                highlights: ["Floating football field",
                    "Local mosque & school",
                    "Markets with seafood, snacks & souvenirs",],
                tip: "Explore the village walkways, grab a fresh seafood lunch, and enjoy a glimpse into authentic island life — you won’t find anything else like it in Thailand.",
            },
            {
                id: "03",
                image: PngIcons.pnbCard3,
                label: "The “Room Island” Escape",
                title: "Visit Koh Hong",
                heading: "What to See",

                description: [
                    "Nestled in Krabi, Koh Hong charms visitors with crystal-clear lagoons, hidden caves, and white sandy beaches—perfect for swimming, kayaking, and snorkeling",
                    "As part of a national park, entry is 300 THB for adults, 150 THB for children.",],
                highlights: ["Hidden lagoon surrounded by cliffs",
                    "Secluded beaches & vibrant marine life",
                    "Lush greenery & scenic walking trails",],
                tip: " No alcohol or drones allowed — just pure, natural beauty.",
            }, {
                id: "04",
                image: PngIcons.pnbCard4,
                label: "Paddle Through Hidden Passages",
                title: "Explore Lod Cave",
                heading: "Why It’s Special",

                description: [
                    "Tucked beneath towering limestone cliffs in Phang Nga Bay, Lod Cave is a network of low-ceiling sea caves perfect for canoeing adventures. A magical experience in near-darkness!"],
                highlights: ["Stalactite-filled caves & tight passages",
                    "Hidden caverns lit by sunbeams",
                    "Peaceful lagoon openings during low tide",],
                tip: " At low tide, you can glide through more caves — some so tight you’ll need to lie flat in your canoe",
            },
        ]
    },
    // Page 3
    "racha-islands": {
        headingText: "Main Attractions in Racha Islands",
        items: [
            {
                id: "01",
                image: PngIcons.riCard1,
                label: "Racha Yai’s Bustling Beauty",
                title: "Patok Beach",
                heading: "Why It’s Special",
                description: [
                    "The main beach on Racha Yai, Patok Beach is known for its crescent-shaped shoreline, powdery white sand, and clear waters perfect for snorkeling.",],
                highlights: [
                    "Colorful marine life beneath crystal waters",
                    "Lively beachfront with restaurants & bars",
                    "Luxury stays like The Racha Hotel",
                ],
                tip: "It’s the main docking point for boats, so expect crowds—especially from November to April.",
            },
            {
                id: "02",
                image: PngIcons.riCard2,
                label: "Tranquility with an Artistic Twist",
                title: "Siam Bay",
                heading: "Why It’s Special",

                description: [
                    "Just north of Patok Beach, Siam Bay offers a peaceful escape, ideal for sunbathing, swimming, and spotting underwater sculptures."],
                highlights: ["Long white-sand beach with calm waters",
                    "Famous underwater sculpture garden",
                    "Beachfront dining with Thai & Italian cuisine",],
                tip: "Less crowded than Patok, it's great for families and couples seeking quiet moments.",
            },
            {
                id: "03",
                image: PngIcons.riCard3,
                label: "The Diver’s Hideaway",
                title: "Ter Bay",
                heading: "What to See",

                description: [
                    "Nestled in a secluded cove, Ter Bay is a raw and rugged beach surrounded by greenery and rocks—perfect for snorkeling and wreck diving.",],
                highlights: ["Hidden lagoon surrounded by cliffs",
                    "Secluded beaches & vibrant marine life",
                    "Lush greenery & scenic walking trails",],
                tip: " Limited facilities, but a dream for divers and nature lovers seeking solitude.",
            },
        ]
    },
    // Page 4
    "maithon-island": {
        headingText: "Main Attractions in Racha Islands",
        items: [
            {
                id: "01",
                image: PngIcons.miCard1,
                label: "A Marine Playground",
                title: "Explore Maiton Island",
                heading: "Why It’s Special",
                description: [
                    "Just off Phuket, Maiton Island is a hidden gem for underwater lovers with vibrant coral reefs, warm waters, and plenty of ways to explore the sea.",],
                highlights: [
                    "Healthy coral reefs teeming with tropical fish",
                    "Snorkeling, diving, kayaking & paddleboarding",
                    "Serene beaches perfect for a relaxing swim",
                ],
                tip: "It’s the main docking point for boats, so expect crowds—especially from November to April.",
            },
            {
                id: "02",
                image: PngIcons.miCard2,
                label: "A Rare Encounter",
                title: "Dolphin Watching",
                heading: "Why It’s Special",

                description: [
                    "Maiton is a haven for wildlife watchers, where dolphins, sea turtles, and moray eels thrive in protected waters rich in marine life."],
                highlights: ["Playful dolphins often spotted near the island",
                    "Colorful reefs ideal for underwater photography",
                    "Chance sightings of sea turtles & moray eels",],
                tip: " Take a boat tour around the island for the best chance to see dolphins in the wild.",
            },

        ]
    },
    // Page 5
    "koh-haa": {
        headingText: "Main Attractions in Racha Islands",
        items: [
            {
                id: "01",
                image: PngIcons.khCard1,
                label: "Dive Into Vibrant Underwater Gardens",
                title: "Koh Ha Coral Reefs",
                heading: "Why It’s Special",
                description: [
                    "Koh Ha is home to some of Thailand’s best coral reefs, offering exceptional visibility and abundant marine biodiversity.",],
                highlights: [
                    "Colorful coral gardens and reef fish",
                    "Sea turtles, reef sharks & more",
                    "Crystal-clear waters (30m+ visibility)",
                ],
                tip: "Ideal for both beginner and advanced divers — bring your underwater camera for unforgettable reef snapshots.",
            },
            {
                id: "02",
                image: PngIcons.khCard2,
                label: "Swim in a Scenic Natural Pool",
                title: "Koh Ha Lagoon",
                heading: "Why It’s Special",

                description: [
                    "Tucked between limestone cliffs, Koh Ha’s lagoon is a peaceful oasis perfect for swimming, snorkeling, and kayaking."],
                highlights: ["Turquoise, calm waters with vibrant marine life",
                    "Towering cliffs & hidden coves",
                    "Schools of fish & coral below the surface",],
                tip: "Great for non-divers too — explore by kayak for the best views of cliffs and underwater life.",
            },
            {
                id: "03",
                image: PngIcons.khCard3,
                label: "The Diver’s Hideaway",
                title: "Cave Diving at Koh Ha",
                heading: "What to See",

                description: [
                    "For experienced divers, Koh Ha offers thrilling cave systems with rare marine life and surreal rock formations.",],
                highlights: ["Underwater tunnels and caverns",
                    "Unique species adapted to cave life",
                    "Geological wonders & narrow swim-throughs",],
                tip: "Only for certified divers — book with a local dive operator for guided exploration and safety.",
            },
        ]
    },
    // Page 6
    "koh-muk": {
        headingText: "Main attractions in Koh muk",
        items: [
            {
                id: "01",
                image: PngIcons.kmCard1,
                label: "A Hidden Lagoon Adventure",
                title: "Emerald Cave",
                heading: "Why It’s Special",
                description: [
                    "Tucked on Koh Mook, Emerald Cave (Tham Morakot) is a sea cave that reveals a secret emerald-colored lagoon accessible only at low tide — perfect for adventurous swimmers. Entry is 400 THB and best timed at low tide for a safe, magical experience.",],
                highlights: [
                    " A secret lagoon glowing with emerald waters",
                    "Narrow sea tunnel through limestone cliffs",
                    "Lush jungle walls inside the hidden beach",
                ],
                tip: "It’s the main docking point for boats, so expect crowds—especially from November to April.",
            },
        ]
    },
    // Page 7
    "koh-kradan": {
        headingText: "Main attractions in Koh kradan",
        items: [
            {
                id: "01",
                image: PngIcons.kkCard1,
                label: "A Snorkeler’s Dream",
                title: "Marine Life",
                heading: "Why It’s Special",
                description: [
                    "Koh Kradan is a hidden gem in the Andaman Sea, known for its vibrant coral reefs and thriving marine life. With crystal-clear waters and colorful underwater scenery, it’s a paradise for snorkelers and divers seeking serene, uncrowded experiences.",],
                highlights: [
                    "Vibrant coral gardens teeming with sea life",
                    "Parrotfish, clownfish & sea anemones",
                    "Unspoiled shoreline with tranquil waters",
                ],
                tip: "With no hotels on the island, the best way to visit is via an overnight stay on a luxury yacht for an immersive nature escape.",
            },

        ]
    },
    // Page 8
    "koh-lanta": {
        headingText: "Main attractions in Koh lanta",
        items: [
            {
                id: "01",
                image: PngIcons.klCard1,
                label: "Nature’s Comeback Story",
                title: "Mu Ko Lanta National Park",
                heading: "Why It’s Special",
                description: [
                    "This national park stretches across Koh Lanta Yai and nearby islands, offering lush rainforests, hidden beaches, and panoramic views from its iconic lighthouse.Entry is 300 THB for adults and 150 THB for children.",],
                highlights: [
                    "Cliffside lighthouse views",
                    "Secluded beaches and coral reefs",
                    "Native wildlife and coastal forests",
                ],
                tip: "Tip: Wear sturdy shoes and bring plenty of water.",
            },
            {
                id: "02",
                image: PngIcons.klCard2,
                label: "Jungle Serenity",
                title: "Koh Lanta’s Waterfalls",
                heading: "Why It’s Special",

                description: [
                    "Explore tranquil jungle trails leading to waterfalls tucked deep within the forest. Some routes end at ethical elephant sanctuaries where you can engage with rescued elephants. Book the 2-hour elephant experience in advance (approx. 1,800 THB)."],
                highlights: ["Hidden waterfalls in tropical jungles",
                    "Ethical elephant sanctuaries",
                    "Lush green hiking trails",],
                tip: "Always choose ethical programs.",
            },
            {
                id: "03",
                image: PngIcons.klCard3,
                label: "Nighttime Island Magic",
                title: "Fire Shows on the Beach",
                heading: "What to See",

                description: [
                    "When the sun dips below the horizon, Koh Lanta’s beaches come alive with fiery spectacle. Especially popular along Klong Nin Beach, these fire shows are a thrilling display of skill and rhythm, as performers twirl flaming staffs, swing fire poi, and breathe fire into the night sky.",],
                highlights: ["Fire dancers twirling flames",
                    "Beach bars with sunset views",
                    "Live music and cozy beach seating",],
                tip: "Arrive early for a good seat, order a drink, and enjoy the show under the stars.",
            },
            {
                id: "04",
                image: PngIcons.klCard4,
                label: "A Slice of Secluded Paradise",
                title: "Relax at Long Beach",
                heading: "Why It’s Special",

                description: [
                    "Tucked away on Koh Lanta’s western coast, Long Beach (also known as Phra Ae Beach) is a serene escape for those seeking peace and simplicity.",
                    "Whether you’re enjoying a lazy morning walk along the shore, catching a quiet sunset in the evening, or trying stand-up paddleboarding, the beach’s vast space and scenic beauty create a truly restorative experience.",],
                highlights: ["Calm turquoise waters",
                    "Quiet beachfront spots",
                    "Sunset views with fewer crowds",],
                tip: "Visit during early morning or late afternoon to avoid the sun’s peak and enjoy the beach at its most peaceful.",
            },
            {
                id: "05",
                image: PngIcons.klCard5,
                label: "Island Life Up Close",
                title: "Explore Saladan Village",
                heading: "What to See",

                description: [
                    "As the sun begins to set, head to one of the many oceanfront restaurants perched over the water for a memorable meal. With the tide rolling in beneath your feet and the golden sky ahead, a seafood dinner here becomes an experience, not just a meal.",],
                highlights: ["Morning seafood and produce market",
                    "Local shops and cafés",
                    "Oceanfront dining and stilted homes",],
                tip: "Bring cash and an appetite. Great place for souvenirs and sunset seafood dinner",
            },
        ]
    },
    // Page 9
    "koh-rok": {
        headingText: "Main attractions in Koh rOK",
        items: [
            {
                id: "01",
                image: PngIcons.krCard1,
                label: "A Coral Wonderland Beneath the Waves",
                title: "Coral Reefs",
                heading: "Why It’s Special",
                description: [
                    "Koh Rok Nok and Koh Rok Nai are surrounded by some of Thailand’s most vibrant coral reefs, teeming with color and marine life. Perfect for snorkelers and divers alike.",],
                highlights: [
                    "Colorful hard and soft coral gardens",
                    "Clownfish in sea anemones",
                    "Parrotfish, angelfish & butterflyfish",
                ],
                tip: "Bring an underwater camera — visibility is amazing and the reefs are a photographer’s dream!",
            },
            {
                id: "02",
                image: PngIcons.krCard2,
                label: "Meet the Island’s Wild Side",
                title: "Marine Life",
                heading: "Why It’s Special",

                description: [
                    "The waters around Koh Rok are alive with marine biodiversity — from graceful sea turtles to elusive moray eels and the occasional blacktip reef shark."],
                highlights: ["Sea turtles gliding near the reef",
                    "Moray eels hiding in coral crevices",
                    "Blacktip reef sharks (harmless but thrilling!)",],
                tip: "Early mornings are best for spotting bigger marine creatures when the waters are calmest.",
            },
            {
                id: "03",
                image: PngIcons.krCard3,
                label: "Crystal-Clear Underwater Adventures",
                title: "Snorkeling & Diving",
                heading: "What to See",

                description: [
                    "Koh Rok is one of Thailand’s top snorkeling and diving destinations, offering reef-rich channels and thrilling underwater landscapes for all skill levels.",],
                highlights: ["Reef channel between Koh Rok Nok & Nai",
                    "Larger pelagic species and barracuda schools",
                    "Pristine visibility up to 30m+ng trails",],
                tip: "Strong swimmers can enjoy the drift between islands; beginners should stick to the reefs near Koh Rok Nok.",
            },
        ]
    },
};
