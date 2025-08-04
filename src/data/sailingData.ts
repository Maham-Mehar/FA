import PngIcons from "@/icons/pngIcon";

export interface ItineraryItem {
    id: string;
    days: string;
    place: string;
    image?: string;
    itinerary?: {
        title?: string[];
        description?: string[];
    }[];
}

export const highSeason: ItineraryItem[] = [
    {
        id: "1",
        days: "Day",
        place: "- Chalong pier, Phuket  —  Tonsai Bay, Koh Phi Phi",
        itinerary: [
            {
                title: [
                    "9:00 – 10:00	",
                    "10:30",
                    "10:45",
                    "11:30",
                    "Early afternoon",
                    "Late afternoon	",
                    "Evening",
                    "Anchorage",],
                description: [
                    "Pick up from the airport or your hotel",
                    "Arrival on the boat at Chalong Pier, Phuket",
                    "Trip-, boat- and safety briefing",
                    "Departure to Koh Phi Phi",
                    "Early afternoon	Stop at Koh Maiton for a quick dip.",
                    "Late afternoon	Stop at Koh Phi Phi Don for a quick dip",
                    "Evening	A night out on Koh Phi Phi for enjoying the nightlife or a relaxing massage",
                    "Anchorage	Mooring at Tonsai Bay, Koh Phi Phi",
                ],
            }
        ]
    },
    {
        id: "2",
        days: "Day",
        place: "-Tonsai Bay, Koh Phi Phi -> Kantiang beach, Koh Lanta",
        itinerary: [
            {
                title: [

                    "Morning",
                    "Early afternoon",
                    "Late afternoon	Sail to anchorage",
                    "Evening",
                    "Anchorage",

                ],
                description: [

                    "Hike to Koh Phi Phi Viewpoint",
                    "Kantiang beach, Koh Lanta for some beach time and eventual a walk through the jungle to a waterfall",
                    "Sail to anchorage",
                    "Dinner in a nice Thai restaurant",
                    "Kantiang beach, Koh Lanta",
                ],
            }
        ]
    },
    {
        id: "3",
        days: "Day ",
        place: "- Kantiang beach, Koh Lanta A—> Koh Muk and Koh Rok",
        itinerary: [
            {
                title: [

                    "Morning",
                    "Afternoon",
                    "Evening	",
                    "Anchorage",],
                description: [

                    "Discovering the emerald cave, Koh Muk",
                    "Sail to Koh Rok Nok for some amazing snorkeling, kayaking",
                    "Beachside BBQ on the white sand beach with sunset",
                    "Koh Rok",
                ],
            }
        ]
    },
    {
        id: "4",
        days: "Day ",
        place: "- Koh Rok —> Koh Ha and Phi Phi Leh",
        itinerary: [
            {
                title: [
                    " Early morning",
                    "Morning and sup",
                    "Afternoon",
                    "Evening",
                    "Anchorage",
                ],
                description: [
                    "Hiking to the view point",
                    "Sail to Koh Ha for some more amazing snorkeling, kayaking and SUP",
                    "Visit Maya Bay from “The Beach”",
                    "Sunset sailing to anchorage",
                    "Mooring at Koh Phi Phi Leh",
                ],
            }
        ]
    },
    {
        id: "5",
        days: "Day ",
        place: "- Koh Phi Phi Leh -> Koh Racha Yai",
        itinerary: [
            {
                title: [
                    "Morning",
                    "Early Afternoon",
                    "Late Afternoon",
                    "Evening",
                    "Anchorage",],
                description: [
                    "snorkeling, kayaking and SUP at Koh Phi Phi Don West",
                    "Dolphin spotting on the way to Koh Racha Yai around Koh Maithon Area",
                    "Snorkeling on Koh Racha east",
                    "Sunset sailing to anchorage",
                    "Bungalow bay, Racha Yai",
                ],
            }
        ]
    },
    {
        id: "6",
        days: "Day ",
        place: "- Koh Racha Yai -> Chalong Pier, Phuket",
        itinerary: [
            {
                title: [
                    "Morning ",
                    "11:00 am ",
                ],
                description: [
                    "Last dip with snorkeling, kayaking and SUP in bungalow bay",
                    "Arrival at Chalong Pier, Phuket for disembarking",
                ],
            }
        ]
    },

];
