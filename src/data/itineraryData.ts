export interface ItineraryItem {
  id: string;
  days: string;
  place: string;
  description: string;
}

export const highSeason: ItineraryItem[] = [
  {
    id: "high-1",
    days: "2 Days/1 Night",
    place: "Koh Phi Phi",
    description: "Explore the famous Koh Phi Phi islands with pristine beaches and vibrant marine life.",
  },
  {
    id: "high-2",
    days: "3 Days/2 Nights",
    place: "Phang Nga Bay and James Bond",
    description: "Cruise through limestone cliffs and the iconic James Bond Island.",
  },
  {
    id: "high-3",
    days: "4 Days/3 Nights",
    place: "Phang Nga Bay, Krabi, Phi Phi",
    description: "A scenic tour covering the best of Phang Nga Bay, Krabi, and Phi Phi.",
  },
  {
    id: "high-4",
    days: "5 Days/4 Nights",
    place: "Phang Nga Bay, Phi Phi, Racha",
    description: "Delightful island hopping with stops at Racha Islands.",
  },
   {
    id: "high-5",
    days: "6 Days/ 5 Nights",
    place: "Phi Phi, Lanta, Rok Nok, Racha",
    description: "Delightful island hopping with stops at Racha Islands.",
  },
   {
    id: "high-6",
    days: "7 Days/ 6 Nights",
    place: "Similian Islands",
    description: "Delightful island hopping with stops at Racha Islands.",
  },
   {
    id: "high-7",
    days: "8 Days/ 7 Nights",
    place: "Butang Islands",
    description: "Delightful island hopping with stops at Racha Islands.",
  },
];

export const greenSeason: ItineraryItem[] = [
  {
    id: "green-1",
    days: "2 Days/ 1 Night",
    place: "Racha Islands",
    description: "An extended tour to hidden gems of southern Thailand.",
  },
  {
    id: "green-2",
    days: "3 Days/ 2 Nights",
    place: "Phang Nga Bay and James Bond",
    description: "Diving paradise with crystal clear waters and abundant sea life.",
  },
  {
    id: "green-3",
    days: "4 Days/ 3 Nights ",
    place: "Phi Phi, Krabi, Phang Nga Bay",
    description: "Ultimate relaxation and adventure at the remote Butang Islands.",
  },
    {
    id: "green-4",
    days: "5 Days/ 4 Nights ",
    place: "Racha, Phi Phi, Phang Nga Bay",
    description: "Ultimate relaxation and adventure at the remote Butang Islands.",
  },
    {
    id: "green-5",
    days: "6 Days/ 5 Nights",
    place: "Racha, Phi Phi, Phang Nga Ba",
    description: "Ultimate relaxation and adventure at the remote Butang Islands.",
  },
    {
    id: "green-6",
    days: "7 Days/ 6 Nights ",
    place: "Racha, Ha, Phi Phi, Phang Nga Bay",
    description: "Ultimate relaxation and adventure at the remote Butang Islands.",
  },
    {
    id: "green-7",
    days: "8 Days/ 7 Nights ",
    place: "Racha, Rok, Ha, Phi Phi, Phang Nga",
    description: "Ultimate relaxation and adventure at the remote Butang Islands.",
  },
];
