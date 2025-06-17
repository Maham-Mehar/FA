import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IconType } from "react-icons";

export interface HeroItem {
  id: number;
  main?: string;
  title?: string;
  btn?: string;
  btnlist?: string;
  image?: string;
}

export const HeroData: HeroItem[] = [
  {
    id: 1,
    main: "The Ultimate Yacht Marketplace",
    title: "AI-Powered Booking for Seamless Sailing",
    btn: "Explore Yachts",
    btnlist: "List Yacht Now",
  },
  {
    id: 2,
    image: "/images/Home/hero.svg",
  },
];

export interface AboutItem {
  id: number;
  main?: string;
  title?: string;
  desp?: string;
  image?: string;
  label?: string;
}

export const AboutData: AboutItem[] = [
  {
    id: 1,
    main: "Dream Getaways",
    title: "Destinations",
    desp: "Find Your Escape, Live It Today!",
  },
  {
    id: 2,
    image: "/images/Home/italy.svg",
    label: "Italy",
  },
  {
    id: 3,
    image: "/images/Home/dubai.svg",
    label: "Dubai",
  },
  {
    id: 4,
    image: "/images/Home/turkey.svg",
    label: "Turkey",
  },
  {
    id: 5,
    image: "/images/Home/maldives.svg",
    label: "Maldives",
  },
  {
    id: 6,
    image: "/images/Home/miami.svg",
    label: "Miami",
  },
  {
    id: 7,
    image: "/images/Home/thailand.svg",
    label: "Thailand",
  },
  {
    id: 8,
    image: "/images/Home/australia.svg",
    label: "Australia",
  },
  {
    id: 9,
    image: "/images/Home/greece.svg",
    label: "Greece",
  },
];

export interface FeaturedItem {
  id: number;
  main?: string;
  title?: string;
  desp?: string;
  image?: string[];
  arrayft?: {
    id?: number;
    img?: string;
    icon?: IconType;
    label?: string;
  }[];
  label?: string;
  imgstar?: string;
  per?: string;
  arraysk?: {
    id?: number;
    img?: string;
    label?: string;
  }[];
  icon?: IconType;
  location?: string;
  from?: string;
  price?: string;
  day?: string;
  btn?: string;
}

export const FeaturedData: FeaturedItem[] = [
  {
    id: 1,
    main: "Waves Whisper",
    title: "Featured Yachts",
    desp: "Let the waves guide you to elegance, adventure, and pure relaxation!",
  },
  {
    id: 2,
    image: [
      "/images/Home/featured.svg",
      "/images/Home/featured.svg",
      "/images/Home/featured.svg",
    ],
    arrayft: [
      {
        id: 1,
        img: "/images/Home/featured-ft.svg",
        label: "75 ft.",
      },
      {
        id: 2,
        img: "/images/Home/featured-guest.svg",
        label: "10 guests",
      },
      {
        id: 3,
        icon: CiCalendar,
        label: "2016",
      },
    ],
    label: "Ocean Serenity 75",
    imgstar: "/images/Home/featured-star.svg",
    per: "(4.9)",
    arraysk: [
      {
        id: 1,
        img: "/images/Home/featured-cap.svg",
        label: "With skipper",
      },
      {
        id: 2,
        img: "/images/Home/featured-cabin.svg",
        label: "2 Cabins",
      },
      {
        id: 3,
        img: "/images/Home/featured-berth.svg",
        label: "2 Berths",
      },
    ],
    icon: CiLocationOn,
    location: "Monaco, French Riviera",
    from: "From",
    price: "$2,500",
    day: "/day",
    btn: "Detail",
  },
  {
    id: 3,
    image: [
      "/images/Home/featured-one.svg",
      "/images/Home/featured-one.svg",
      "/images/Home/featured-one.svg",
    ],
    arrayft: [
      {
        id: 1,
        img: "/images/Home/featured-ft.svg",
        label: "95 ft.",
      },
      {
        id: 2,
        img: "/images/Home/featured-guest.svg",
        label: "14 guests",
      },
      {
        id: 3,
        icon: CiCalendar,
        label: "2010",
      },
    ],
    label: "Infinity Wave 85",
    imgstar: "/images/Home/featured-star.svg",
    per: "(4.9)",
    arraysk: [
      {
        id: 1,
        img: "/images/Home/featured-cap.svg",
        label: "With skipper",
      },
      {
        id: 2,
        img: "/images/Home/featured-cabin.svg",
        label: "2 Cabins",
      },
      {
        id: 3,
        img: "/images/Home/featured-berth.svg",
        label: "2 Berths",
      },
    ],
    icon: CiLocationOn,
    location: "St. Tropez, France",
    from: "From",
    price: "$2,700",
    day: "/day",
    btn: "Detail",
  },
  {
    id: 4,
    image: [
      "/images/Home/feautred-two.svg",
      "/images/Home/feautred-two.svg",
      "/images/Home/feautred-two.svg",
    ],
    arrayft: [
      {
        id: 1,
        img: "/images/Home/featured-ft.svg",
        label: "105 ft.",
      },
      {
        id: 2,
        img: "/images/Home/featured-guest.svg",
        label: "20 guests",
      },
      {
        id: 3,
        icon: CiCalendar,
        label: "2015",
      },
    ],
    label: "Luminous Pearl 80",
    imgstar: "/images/Home/featured-star.svg",
    per: "(4.9)",
    arraysk: [
      {
        id: 1,
        img: "/images/Home/featured-cap.svg",
        label: "With skipper",
      },
      {
        id: 2,
        img: "/images/Home/featured-cabin.svg",
        label: "2 Cabins",
      },
      {
        id: 3,
        img: "/images/Home/featured-berth.svg",
        label: "2 Berths",
      },
    ],
    icon: CiLocationOn,
    location: "Phuket, Thailand",
    from: "From",
    price: "$3,000",
    day: "/day",
    btn: "Detail",
  },
];

export interface WhyItem {
  id: number;
  main?: string;
  title?: string;
  desp?: string;
  image?: string;
  label?: string;
  description?: string;
}

export const WhyData: WhyItem[] = [
  {
    id: 1,
    main: "Glide with Trust",
    title: "Why Book With Us?",
    desp: "Enjoy AI-powered yacht recommendations, real-time availability, and secure bookings for a seamless luxury experience.",
  },
  {
    id: 2,
    image: "/images/Home/verify.svg",
    label: "Verified & Trusted Yachts",
    description:
      "Every yacht is inspected & verified for top-notch quality, safety, and luxury.",
  },
  {
    id: 3,
    image: "/images/Home/secure.svg",
    label: "Secure & Transparent Payments",
    description:
      "Enjoy 100% secure transactions with no hidden fees — pay with confidence.",
  },
  {
    id: 4,
    image: "/images/Home/customer.svg",
    label: "24/7 Customer & AI Support ",
    description:
      "Live agents & AI concierge provide round-the-clock assistance for a smooth trip.",
  },
];

export interface PlanItem {
  id: number;
  title?: string;
  desp?: string;
  array?: {
    id: number;
    label?: string;
    description?: string;
  }[];
  image?: string;
}

export const PlanData: PlanItem[] = [
  {
    id: 1,
    title: "Plan your travel with confidence",
    desp: "No hassle, no stress—just smooth sailing. Book your dream yacht in minutes!",
  },
  {
    id: 2,
    array: [
      {
        id: 1,
        label: "Find Your Perfect Yacht",
        description:
          "Browse luxury yachts, use smart filters, and get AI-powered recommendations for the best match.",
      },
      {
        id: 2,
        label: "Customize & Book Instantly",
        description:
          "Select your destination, duration, and extras with transparent pricing—AI ensures the best deals.",
      },
      {
        id: 3,
        label: "Aboard & Relax",
        description:
          "Meet your crew, enjoy top-tier service, and let our AI Assistant handle trip updates & queries.",
      },
    ],
  },
  {
    id: 3,
    image: "/images/Home/plan.svg",
  },
];

export interface WhatItem {
  id: number;
  main?: string;
  title?: string;
  desp?: string;
  image?: string;
  label?: string;
  img?: string;
  figure?: string;
  adventure?: string;
  description?: string;
  array?: {
    id: number;
    img?: string;
    location?: string;
  }[];
}

export const WhatData: WhatItem[] = [
  {
    id: 1,
    image: "/images/Home/What.svg",
    label: "A Perfect Solo Escape!",
    title: "Emily R.",
    img: "/images/Home/what-star.svg",
    figure: "(4.9)",
    adventure: "Adventure Enthusiast",
    description:
      "As a solo traveler, I wanted a social yet private sailing experience. The cabin charter was perfect! I met amazing people while enjoying my own space. Everything was well-organized, and the AI concierge made trip planning effortless!",
    array: [
      {
        id: 1,
        img: "/images/Home/what-location.svg",
        location: "Thailand",
      },
      {
        id: 2,
        img: "/images/Home/what-cabin.svg",
        location: "Cabin Charters",
      },
      {
        id: 3,
        img: "/images/Home/what-heart.svg",
        location: "AI concierge",
      },
    ],
  },
  {
    id: 2,
    image: "/images/Home/What.svg",
    label: "A Perfect Solo Escape!",
    title: "Emily R.",
    img: "/images/Home/what-star.svg",
    figure: "(4.9)",
    adventure: "Adventure Enthusiast",
    description:
      "As a solo traveler, I wanted a social yet private sailing experience. The cabin charter was perfect! I met amazing people while enjoying my own space. Everything was well-organized, and the AI concierge made trip planning effortless!",
    array: [
      {
        id: 1,
        img: "/images/Home/what-location.svg",
        location: "Thailand",
      },
      {
        id: 2,
        img: "/images/Home/what-cabin.svg",
        location: "Cabin Charters",
      },
      {
        id: 3,
        img: "/images/Home/what-heart.svg",
        location: "AI concierge",
      },
    ],
  },
  {
    id: 3,
    image: "/images/Home/What.svg",
    label: "A Perfect Solo Escape!",
    title: "Emily R.",
    img: "/images/Home/what-star.svg",
    figure: "(4.9)",
    adventure: "Adventure Enthusiast",
    description:
      "As a solo traveler, I wanted a social yet private sailing experience. The cabin charter was perfect! I met amazing people while enjoying my own space. Everything was well-organized, and the AI concierge made trip planning effortless!",
    array: [
      {
        id: 1,
        img: "/images/Home/what-location.svg",
        location: "Thailand",
      },
      {
        id: 2,
        img: "/images/Home/what-cabin.svg",
        location: "Cabin Charters",
      },
      {
        id: 3,
        img: "/images/Home/what-heart.svg",
        location: "AI concierge",
      },
    ],
  },
];

export interface SubscribeItem {
  id: number;
  image?: string;
  title?: string;
  desp?: string;
  btn?: string;
}

export const SubscribeData: SubscribeItem[] = [
  {
    id: 1,
    image: "/images/Home/sub.svg",
  },
  {
    id: 2,
    title: "Subscribe Newsletters",
    desp: "Join our newsletter for exclusive perks, early yacht access, special offers, and a 5% discount on your next adventure!",
    btn: "Subcribe Now",
  },
];

export interface FaqItem {
  id: number;
  main?: string;
  title?: string;
  desp?: string;
  faq?: {
    id: number;
    label: string;
    description: string;
  }[];
  image?: string;
  label?: string;
  description?: string;
  btn?: string;
}

export const FaqData: FaqItem[] = [
  {
    id: 1,
    main: "Anchored Answers",
    title: "Your Questions, Answered",
    desp: "Smooth sailing starts with the right information.",
  },
  {
    id: 2,
    faq: [
      {
        id: 1,
        label: "What types of yachts are available for charter?",
        description:
          "Booking is easy! Simply browse available yachts, choose your preferred option, customize your trip, and confirm your booking with secure payment.",
      },
      {
        id: 2,
        label: "Can I rent a yacht without a crew?",
        description:
          "Booking is easy! Simply browse available yachts, choose your preferred option, customize your trip, and confirm your booking with secure payment.",
      },
      {
        id: 3,
        label: "Is my payment secure?",
        description:
          "Booking is easy! Simply browse available yachts, choose your preferred option, customize your trip, and confirm your booking with secure payment.",
      },
      {
        id: 4,
        label: "What destinations can I charter a yacht in?",
        description:
          "Booking is easy! Simply browse available yachts, choose your preferred option, customize your trip, and confirm your booking with secure payment.",
      },
      {
        id: 5,
        label: "How does pricing work? Are there hidden fees?",
        description:
          "Booking is easy! Simply browse available yachts, choose your preferred option, customize your trip, and confirm your booking with secure payment.",
      },
    ],
  },
  {
    id: 3,
    image: "/images/Home/faq.svg",
    title: "Do you have more questions?",
    desp: "Effortless booking, secure payments, and smart financial management—designed for both renters and yacht owners.",
    btn: "Shoot A Direct Mail",
  },
];

export interface OwnItem {
  id: number;
  main?: string;
  title?: string;
  desp?: string;
  image?: string;
  name?: string;
  designation?: string;
  label?: string;
  description?: string;
  imageline?: string;
  thank?: string;
}

export const OwnData: OwnItem[] = [
  {
    id: 1,
    main: "Wave Wealth",
    title: "Own a Yacht?",
    desp: " Let It Work for You!",
  },
  {
    id: 2,
    image: "/images/Home/own.svg",
    name: "Daniel M.",
    designation: "Mediterranean",
  },
  {
    id: 3,
    image: "/images/Home/own-quotes.svg",
    imageline: "/images/Home/own-line.svg",
    label: "Effortless Bookings, Maximum Earnings!",
    description:
      "Listing my yacht with Sailaway Charters was the best decision I made. The platform’s AI-powered pricing ensured I got the best rates, and the seamless booking system meant I never had to worry about managing reservations.",
    desp: "Payments are always on time, and the customer support is outstanding. I now earn passive income while my yacht stays in top condition. Highly recommend!",
    thank: "~ Thanks, guys!",
  },
];

export interface FooterItem {
  id: number;
  title?: string;
  description?: string;
  icon?: React.ElementType[];
  links?: { name: string; href: string }[];
  type?: "logo" | "links" | "legal";
}

export const FooterData: FooterItem[] = [
  {
    id: 1,
    type: "logo",
    title: "Logo",
    description:
      "Sailaway Charters – Luxury yachting made effortless. From charters to custom yacht building, we bring your dream voyage to life.",
    icon: [FaFacebookF, FaTwitter, FaInstagram, FaYoutube],
  },
  {
    id: 2,
    type: "links",
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Destinations", href: "/" },
      { name: "Special Offers", href: "/" },
      { name: "How it works", href: "/" },
      { name: "Testimonials", href: "/" },
    ],
  },
  {
    id: 3,
    type: "links",
    title: "Business",
    links: [
      { name: "Yacht Listings", href: "/" },
      { name: "Payments", href: "/" },
      { name: "Support", href: "/" },
    ],
  },
  {
    id: 4,
    type: "links",
    title: "Company",
    links: [
      { name: "About us", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Contact us", href: "/" },
    ],
  },
  {
    id: 5,
    type: "legal",
    links: [
      { name: "Terms", href: "/" },
      { name: "Privacy", href: "/" },
      { name: "Cookies", href: "/" },
    ],
  },
];
