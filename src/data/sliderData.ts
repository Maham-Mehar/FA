import { MdWaves, MdOutlineRemoveRedEye } from "react-icons/md";
import { LuSunset, LuFish } from "react-icons/lu";
import { ReactNode } from "react";
import PngIcons from "@/icons/pngIcon";

export interface DayTripCardType {
    icon: React.ComponentType<{ size?: string | number; className?: string }>;
    label: string;
    category: string;
    text: string;
    image: string;
    title?: string;
    highlights?: string[];
    text2?: string[];
    description: string[];
}

export const dayTripCards: DayTripCardType[] = [
    {
        icon: MdWaves,
        label: "Snorkeling",
        category: "Snorkeling in Phuket",
        text: "Snorkeling is the easiest way to explore the underwater world—just grab a mask, snorkel, fins, and a sense of adventure.",
        image: PngIcons.category1,
        title: "What makes it amazing?",
        highlights: [
            "Crystal-clear water ",
            "Abundant marine ",
        ],
        text2: [" for visibility", "life with over 1,200 fish species and 300 coral varieties"],
        description: [
            "Conditions like wind, currents, and coral spawning can affect visibility, but even in shallow waters, you’ll spot clownfish, angelfish, moray eels, and more.",
            "It’s simple, safe, and endlessly fun—making snorkeling the perfect addition to your island escape. Dive in and discover a world of color just beneath the surface!",
        ],
    },
    {
        icon: MdOutlineRemoveRedEye,
        label: "Sightseeing",
        category: "Island Sightseeing",
        text: "If there’s one thing you must do in Thailand, it’s explore the breathtaking islands around Phuket.",
        image: PngIcons.category2,
        description: [
            "From ancient 250–500 million-year-old limestone cliffs to hidden beaches, secluded lagoons, and stunning viewpoints, a private boat charter lets you experience it all.",
            "With countless sights to see, it’s impossible to cover everything in a day—opt for a custom day trip or go all in on an overnight adventure.",
            "After 25+ years sailing these waters, here are my Top 5 must-see spots around Phuket (in no particular order—they're all spectacular).",
        ],
    },
    {
        icon: LuSunset,
        category: "Such a romantic dude you might think…",
        label: "Sunset Cruises",
        text: "Enjoy romantic ocean views with cocktails at sea.",
        image: PngIcons.category3,

        description: [
            "There’s something magical about the sky turning shades of pink, gold, and fire, reflecting off the sea as the sun dips below the horizon. It feels unreal—like a scene straight out of a postcard (no Photoshop needed!).",
            "After years of sailing around the world, the sunsets in Phuket still take my breath away.",
            "The best part? There’s one every day.  Don’t miss your chance to witness nature’s most stunning daily show.",
        ],
    },
    {
        icon: LuFish,
        label: "Dolphin spotting",
        category: "Dolphin spotting around Phuket",
        text: `Phuket and its nearby islands are a paradise for dolphin lovers. Seeing these playful creatures in the wild is one of the top highlights of any boat trip`,
        image: PngIcons.category4,
        title: "When you sail with us, your chances are high:",
        highlights: [
            "Maithon Island ",
            "Koh Racha",
            "Similan Islands"
        ],
        text2: [
            "(near Phi Phi) offers an 80% chance of dolphin sightings",
            " trips often surprise guests with dolphins along the way,",
            "offer sightings in the open ocean",
            "On rare days, you might even witness a pod of hundreds, like we did en route to the Andamans"
        ],
        description: [
            "Add a magical dolphin encounter to your Phuket adventure—you won’t forget it.",
        ],
    }

];
