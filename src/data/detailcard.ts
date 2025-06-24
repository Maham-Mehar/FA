// data/attractionsData.ts
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

export const attractions: Attraction[] = [
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
];
