// data/yachts.ts

export interface Yacht {
  id: string;
  name: string;
  lengthFt: number;
  guests: number;
  cabins: number;
  priceFrom: number; // per day
  image: string;
}

export const yachts: Yacht[] = [
  {
    id: "mozart",
    name: "Mumby 48-ft Mozart",
    lengthFt: 48,
    guests: 25,
    cabins: 8,
    priceFrom: 4000,
    image: "/images/Slide1.png",
  },
  {
    id: "stealth",
    name: "Hot Chili 38-ft Stealth",
    lengthFt: 38,
    guests: 24,
    cabins: 4,
    priceFrom: 700,
    image: "/images/Slide2.png",
  },
  {
    id: "amandus",
    name: "Mumby 48-ft Amadus",
    lengthFt: 48,
    guests: 25,
    cabins: 8,
    priceFrom: 750,
    image: "/images/Slide3.png",
  },
  // …add more boats here
];
