import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiCalendar, CiLocationOn, CiCircleQuestion } from "react-icons/ci";
import { IconType } from "react-icons";

export interface DetailItem {
  id: number;
  arrays: {
    icon: IconType;
    label: string;
  }[];
  arrayi: {
    img: string;
  }[];
  reservation: string;
  imgstar: string;
  per: string;
  icon: IconType;
  location: string;
  iconc: IconType;
  date: string;
  from: string;
  to: string;
  btn: string;
  or: string;
  btnb: string;
  desp: string;
  img: string;
  list: string;
  iconh: IconType;
  wishlist: string;
  luxury: string;
  review: string;
  arraystar: {
    img: string;
  }[];
  arrayft: {
    id: number;
    img?: string;
    label: string;
    icon?: IconType;
  }[];
  arraysk: {
    id: number;
    img: string;
    label: string;
  }[];
}

export const DetailData: DetailItem[] = [
  {
    id: 1,
    arrays: [
      {
        icon: FaRegHeart,
        label: "Save",
      },
      {
        icon: IoShareSocialOutline,
        label: "Share",
      },
    ],
    arrayi: [
      {
        img: "/images/Detail/img.svg",
      },
      {
        img: "/images/Detail/img-one.svg",
      },
      {
        img: "/images/Detail/img-two.svg",
      },
      {
        img: "/images/Detail/img-three.svg",
      },
      {
        img: "/images/Detail/img-four.svg",
      },
      {
        img: "/images/Detail/img-five.svg",
      },
      {
        img: "/images/Detail/img-six.svg",
      },
      {
        img: "/images/Detail/img-seven.svg",
      },
      {
        img: "/images/Detail/img-eight.svg",
      },
    ],
    reservation: "Reservation",
    imgstar: "/images/Home/featured-star.svg",
    per: "(4.9)",
    icon: CiLocationOn,
    location: "Monaco, French Riviera",
    iconc: CiCalendar,
    date: "Check  dates available",
    from: "From:",
    to: "To:",
    btn: "Request Quotation",
    or: "OR",
    btnb: "Book Now",
    desp: "You will only be charged if the request is accepted",
    img: "/images/Explore/detail.svg",
    list: "See the price list",
    iconh: FaRegHeart,
    wishlist: "Add to Wishlist",
    luxury: "Luxury on the Waves!",
    review: "50 reviews",
    arraystar: [
      {
        img: "/images/Explore/star-four.svg",
      },
      {
        img: "/images/Explore/star-four.svg",
      },
      {
        img: "/images/Explore/star-four.svg",
      },
      {
        img: "/images/Explore/star-four.svg",
      },
      {
        img: "/images/Explore/star-four.svg",
      },
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
    arraysk: [
      {
        id: 1,
        img: "/images/Detail/skipper.svg",
        label: "With skipper",
      },
      {
        id: 2,
        img: "/images/Detail/cabin.svg",
        label: "2 Cabins",
      },
      {
        id: 3,
        img: "/images/Detail/berth.svg",
        label: "2 Berths",
      },
      {
        id: 4,
        img: "/images/Detail/wifi.svg",
        label: "Wi-Fi",
      },
      {
        id: 5,
        img: "/images/Detail/fans.svg",
        label: "Fans",
      },
      {
        id: 6,
        img: "/images/Detail/gps.svg",
        label: "GPS",
      },
      {
        id: 7,
        img: "/images/Detail/stove.svg",
        label: "Stove",
      },
      {
        id: 8,
        img: "/images/Detail/depth.svg",
        label: "Depth Sounder",
      },
      {
        id: 9,
        img: "/images/Detail/wind.svg",
        label: "Wind Generator",
      },
    ],
  },
];

export interface DetaibtnlItem {
  id: number;
  arraybtn: {
    label: string;
  }[];
}

export const DetailbtnData: DetaibtnlItem[] = [
  {
    id: 1,
    arraybtn: [
      {
        label: "Description",
      },
      {
        label: "Amenities",
      },
      {
        label: "Add-on services",
      },
      {
        label: "Good to know",
      },
      {
        label: "Location",
      },
      {
        label: "FAQs",
      },
      {
        label: "Reviews",
      },
      {
        label: "Availability",
      },
    ],
  },
];

export interface DescriptionItem {
  id: number;
  img: string;
  label: string;
  desp: string;
  boldText: string;
  despt: string;
  ready: string;
  imgA: string;
  amenities: string;
  amen: {
    title: string;
    img: string;
    items: {
      img: string;
      label: string;
    }[];
  }[];
  btn: string;
  imgAdd: string;
  add: string;
  jacuzzi: {
    img: string;
    label: string;
  }[];
  btnv: string;
  watch: {
    img: string;
    label?: string;
    title?: string;
  }[];
  imgg: string;
  good: string;
  gooda: {
    title: string;
    detail: string[];
  }[];
  iconl: IconType;
  location: string;
  locationmap: string;
  loc: string;
  question: IconType;
  freq: string;
  faq: {
    question: string;
    answer: string;
  }[];
  missing: string;
  yes: string;
  imgreview: string;
  review: string;
  reviewA: {
    number?: string;
    excellent?: string;
    ex?: string;
    quality?: {
      label: string;
      number: string;
    }[];
  }[];
  calendar: string;
  calendarl: string;
  unA: {
    label: string;
  }[];
  dateAvailability:{
    startDate: string;
    endDate: string;
    status: string;
  }[];
  imgalways: string;
  always: string;
  luxury: string;
  starting: string;
  check: string;
  not: string;
  discover: string;
  request: string;
  booknow: string;
  imgpopular: string;
  popular: string;
}

export const DescriptionData: DescriptionItem[] = [
  {
    id: 1,
    img: "/images/Detail/description.svg",
    label: "Description",
    desp: "Step aboard the {label}, a masterpiece of elegance and performance designed for those who seek unparalleled comfort and adventure on the open water. Crafted with sophisticated styling, top-tier amenities, and smooth sailing capabilities, this yacht offers a truly ",
    boldText: "immersive luxury experience.",
    despt:
      "The {label} is more than just a yacht—it’s a floating retreat where luxury and relaxation meet. Enjoy the spacious sun deck, unwind in the lounge-style seating areas, or sip cocktails on the flybridge while watching the sunset. Whether you're planning a romantic getaway, family trip, or an unforgettable celebration, this yacht offers the perfect setting.",
    ready:
      "Ready to experience the ultimate in luxury yachting? Book Ocean Serenity 75 now and embark on an unforgettable journey across crystal-clear waters.",
    imgA: "/images/Detail/amenities.svg",
    amenities: "Amenities",
    amen: [
      {
        img: "/images/Detail/comfort.svg",
        title: "Comfort & Relaxation",
        items: [
          {
            img: "/images/Detail/jacuzzi.svg",
            label: "Jacuzzi & Swim Platform",
          },
          { img: "/images/Detail/water.svg", label: "Watermaker" },
          { img: "/images/Detail/air.svg", label: "Air Conditioner" },
          { img: "/images/Detail/fan.svg", label: "Fans" },
          { img: "/images/Detail/heating.svg", label: "Heating" },
        ],
      },
      {
        img: "/images/Detail/dining.svg",
        title: "Dining & Hospitality",
        items: [
          { img: "/images/Detail/fridge.svg", label: "Fridge" },
          { img: "/images/Detail/freezer.svg", label: "Freezer" },
          { img: "/images/Detail/oven.svg", label: "Oven/stovetop" },
          { img: "/images/Detail/bbq.svg", label: "BBQ grill" },
          { img: "/images/Detail/microwave.svg", label: "Microwave" },
        ],
      },
      {
        img: "/images/Detail/enter.svg",
        title: "Entertainment",
        items: [
          {
            img: "/images/Detail/snork.svg",
            label: "Snorkelling equipment",
          },
          { img: "/images/Detail/kayak.svg", label: "Kayak" },
          { img: "/images/Detail/wi.svg", label: "Wi-Fi" },
          { img: "/images/Detail/usb.svg", label: "USB socket" },
          { img: "/images/Detail/fishing.svg", label: "Fishing equipment" },
        ],
      },
    ],
    btn: "View All Amenities (60+)",
    imgAdd: "/images/Detail/add.svg",
    add: "Add-on Services",
    jacuzzi: [
      {
        img: "/images/Detail/jacuzzi.svg",
        label: "Jacuzzi & Swim Platform",
      },
      {
        img: "/images/Detail/premium.svg",
        label: "Premium Sound System",
      },
    ],
    btnv: "View All Amenities (10+)",
    watch: [
      {
        img: "/images/Detail/watch.svg",
        label: "261 people are also interested",
      },
      {
        img: "/images/Detail/verify.svg",
        label: "Verified information",
        title: "{label} has verified information and real pictures",
      },
    ],
    imgg: "/images/Detail/good.svg",
    good: "Good to know",
    gooda: [
      {
        title: "Charter company",
        detail: [
          "SailMe | #20 of 601 charter companies in Spain",
          "Customers rate SailMe 8.1/10",
        ],
      },
      {
        title: "Cancellation / Payment policies",
        detail: [
          "Cancellation and prepayment policies vary according to your selection.",
          "Please check the payment conditions when selecting the price above.",
          "Check price",
        ],
      },
      {
        title: "Sailing licence required",
        detail: ["Licence required"],
      },
      {
        title: "Pets",
        detail: ["Pets are welcome. Additional charges may apply."],
      },
      {
        title: "Payment methods accepted by charter company",
        detail: ["Euro", "Visa", "MasterCard"],
      },
    ],
    iconl: CiLocationOn,
    location: "Yacht location on the map",
    locationmap: "Location of the sailboat:",
    loc: "La Rochelle, French Riviera",
    question: CiCircleQuestion,
    freq: "Frequently Asked Questions",
    faq: [
      {
        question: "Can I modify or cancel my booking?",
        answer:
          "Yes, modifications and cancellations are possible, depending on the charter policy. We recommend adding cancellation insurance for extra flexibility.",
      },
      {
        question: "What is included in the charter price?",
        answer: "Yes",
      },
      {
        question: "Can I bring my own food and drinks onboard?",
        answer: "Yes, modifications",
      },
      {
        question: "Is there a security deposit required?",
        answer: "Yes, modifications and cancellations",
      },
      {
        question: "How do I confirm my boat reservation?",
        answer: "Yes, modifications and cancellations are possible",
      },
    ],
    missing: "Missing some information?",
    yes: "Yes",
    imgreview: "/images/Detail/review.svg",
    review: "Reviews for {label}",
    reviewA: [
      {
        number: "10",
        excellent: "Excellent",
        ex: "| 50 review",
      },
      {
        quality: [
          {
            label: "Yacht quality",
            number: "10",
          },
          {
            label: "Pick-up experience",
            number: "10",
          },
          {
            label: "Charter company",
            number: "10",
          },
          {
            label: "Marina",
            number: "10",
          },
          {
            label: "Value for money",
            number: "10",
          },
          {
            label: "Overall experience",
            number: "10",
          },
        ],
      },
    ],
    calendar: "/images/Detail/calendar.svg",
    calendarl: "Availability",
    unA:[
      {
        label: "Unavailable",
      },
      {
        label: "Available",
      },
    ],
    dateAvailability: [
      {
        startDate: "Mar. 25, 2025",
        endDate: "Mar. 29, 2025",
        status: "Reserved",
      },
      {
        startDate: "Mar. 29, 2025",
        endDate: "Apr. 5, 2025",
        status: "Reserved",
      },
      {
        startDate: "Apr. 5, 2025",
        endDate: "Apr. 12, 2025",
        status: "Available",
      },
      {
        startDate: "Apr. 12, 2025",
        endDate: "Apr. 19, 2025",
        status: "Available",
      },
      {
        startDate: "Apr. 19, 2025",
        endDate: "Apr. 26, 2025",
        status: "Available",
      },
    ],
    imgalways: "/images/Detail/always.svg",
    always: "Always the best prices",
    luxury: "Luxury on the Waves!",
    starting: "Starting from",
    check: "Starting from",
    not: "Not sure yet?",
    discover: "Discover your personal quote",
    request: "Request a quote",
    booknow: "BookNow",
    imgpopular: "/images/Detail/popular.svg",
    popular: "Popular yachts close to your destination"
  },
];
