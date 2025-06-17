import { TiTick } from "react-icons/ti";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FiGrid } from "react-icons/fi";
import { IconType } from "react-icons";

interface FilterOptionBase {
  category?: string;
  type: string;
}

interface RangeFilter extends FilterOptionBase {
  type: "range";
  min: number;
  max: number;
  step?: number;
  unit?: string;
}

interface ButtonFilter extends FilterOptionBase {
  type: "button";
  options: { category: string }[];
}

interface MinFilter extends FilterOptionBase {
  type: "min";
  category: string;
  label?: { icon: IconType; title: string }[];
}

interface CheckboxFilter extends FilterOptionBase {
  type: "checkbox";
  options?: {
    arrays?:{
      img?: string;
    }[];
    img?: string;
    label?: string;
  }[];
}

type FilterOption = RangeFilter | ButtonFilter | MinFilter | CheckboxFilter;

export const FilterOptions: FilterOption[] = [
  {
    category: "Price per day",
    type: "range",
    min: 0,
    max: 3000,
    step: 50,
    unit: "€",
  },
  {
    type: "button",
    options: [
      { category: "Number of cabins" },
      { category: "Number of berths" },
      { category: "Number of bathrooms" },
    ],
  },
  {
    type: "min",
    category: "Construction year",
  },
  {
    type: "min",
    category: "Length",
    label: [
      {
        icon: TiTick,
        title: "ft.",
      },
      {
        icon: TiTick,
        title: "m.",
      },
    ],
  },
  {
    type: "checkbox",
    category: "Ideal for",
    options: [
      {
        label: "Solo travelers",
      },
      {
        label: "Couples",
      },
      {
        label: "Families",
      },
      {
        label: "Friends",
      },
      {
        label: "Island hopping",
      },
      {
        label: "Cultural experience",
      },
    ],
  },
  {
    category: "Rating",
    type: "checkbox",
    options: [
      {
        label: "Best in Luxury (10)",
        img: "/images/Explore/new.svg",
      },
      {
        arrays:[
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
        label: "(70)",
      },
      {
        arrays:[
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
        label: "(200)",
      },
      {
        arrays:[
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
        label: "(300)",
      },
      {
        arrays:[
          {
            img: "/images/Explore/star-four.svg",
          },
          {
            img: "/images/Explore/star-four.svg",
          },
        ],
        label: "(310)",
      },
      {
        img: "/images/Explore/star-four.svg",
        label: "(25)",
      },
    ],
  },
  {
    category: "Equipment",
    type: "checkbox",
    options: [
      {
        label: "Wi-Fi",
      },
      {
        label: "GPS",
      },
      {
        label: "Depth Sounder",
      },
      {
        label: "Wind Generator",
      },
      {
        label: "Marine Toilets",
      },
      {
        label: "Stove",
      },
      {
        label: "Fishing Rods",
      },
      {
        label: "Paddleboard",
      },
      {
        label: "Autopilot",
      },
    ],
  },
];

export interface BodyHeaderItem {
  id: number;
  title?: string;
  main?: string;
  btng?: {
    id?: number;
    img?: string;
    icon?: IconType;
    label?: string;
  }[];
  sort?: string;
  link?: {
    id: number;
    label: string;
    href: string;
  }[];
}

export const BodyHeaderData: BodyHeaderItem[] = [
  {
    id: 1,
    title: "Home /",
    main: "Australia",
    btng: [
      {
        id: 1,
        img: "/images/Explore/detail.svg",
        label: "List",
      },
      {
        id: 2,
        icon: FiGrid,
        label: "Grids",
      },
    ],
    sort: "Sort by",
    link: [
      { id: 1, label: "Most relevant", href: "#" },
      { id: 2, label: "Recommended", href: "#" },
      { id: 3, label: "Price: High to Low", href: "#" },
      { id: 4, label: "Price: Low to High", href: "#" },
      { id: 5, label: "Make: (A to Z)", href: "#" },
      { id: 6, label: "Make: (Z to A)", href: "#" },
      { id: 7, label: "Distance: Nearest first", href: "#" },
      { id: 8, label: "Distance: Farthest first", href: "#" },
      { id: 9, label: "Listing Date: New to Old", href: "#" },
      { id: 10, label: "Listing Date: Old to New", href: "#" },
    ],
  },
  {
    id: 2,
    title: "50+ yachts available",
  },
];

export interface BodyItem {
  id: number;
  image?: string[];
  feature?: string;
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

export const BodyData: BodyItem[] = [
  {
    id: 1,
    image: [
      "/images/Home/featured.svg",
      "/images/Home/featured.svg",
      "/images/Home/featured.svg",
    ],
    feature: "Featured",
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
    id: 2,
    image: [
      "/images/Home/featured-one.svg",
      "/images/Home/featured-one.svg",
      "/images/Home/featured-one.svg",
    ],
    feature: "Instant booking",
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
    id: 3,
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
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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

export interface DetailItem {
  id: number;
  image: string[];
  feature?: string;
  arrayft: {
    id?: number;
    img?: string;
    icon?: IconType;
    label?: string;
  }[];
  label: string;
  arrays: {
    id?: number;
    imgstar: string;
  }[];
  per: string;
  review: string;
  arraysk: {
    id?: number;
    img?: string;
    label?: string;
  }[];
  arrayv: {
    id?: number;
    img?: string;
  }[];
  icon: IconType;
  location: string;
  luxury: string;
  from: string;
  price: string;
  day: string;
  btn: string;
}

export const DetailData: DetailItem[] = [
  {
    id: 1,
    image: [
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
    ],
    feature: "Featured",
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
    arrays: [
      { id: 1, imgstar: "/images/Explore/star-four.svg" },
      { id: 2, imgstar: "/images/Explore/star-four.svg" },
      { id: 3, imgstar: "/images/Explore/star-four.svg" },
      { id: 4, imgstar: "/images/Explore/star-four.svg" },
      { id: 5, imgstar: "/images/Explore/star-four.svg" },
    ],
    per: "(4.9)",
    review: "50 reviews",
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
      {
        id: 4,
        img: "/images/Explore/wifi.svg",
        label: "Wi-Fi",
      },
      {
        id: 5,
        label: "+5",
      },
    ],
    icon: CiLocationOn,
    location: "Monaco, French Riviera",
    luxury: "Luxury on the Waves!",
    from: "Starting from",
    price: "$2,500",
    day: "Per day",
    btn: "Detail",
    arrayv: [
      { id: 1, img: "/images/Explore/img-one.svg" },
      { id: 2, img: "/images/Explore/img-two.svg" },
      { id: 3, img: "/images/Explore/img-three.svg" },
      { id: 4, img: "/images/Explore/img-four.svg" },
      { id: 5, img: "/images/Explore/img-five.svg" },
      { id: 6, img: "/images/Explore/img-six.svg" },
      { id: 7, img: "/images/Explore/img-seven.svg" },
    ],
  },
  {
    id: 2,
    image: [
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
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
    arrays: [
      { id: 1, imgstar: "/images/Explore/star-four.svg" },
      { id: 2, imgstar: "/images/Explore/star-four.svg" },
      { id: 3, imgstar: "/images/Explore/star-four.svg" },
      { id: 4, imgstar: "/images/Explore/star-four.svg" },
      { id: 5, imgstar: "/images/Explore/star-four.svg" },
    ],
    per: "(4.9)",
    review: "50 reviews",
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
      {
        id: 4,
        img: "/images/Explore/wifi.svg",
        label: "Wi-Fi",
      },
      {
        id: 5,
        label: "+5",
      },
    ],
    icon: CiLocationOn,
    location: "Monaco, French Riviera",
    luxury: "Luxury on the Waves!",
    from: "Starting from",
    price: "$2,500",
    day: "Per day",
    btn: "Detail",
    arrayv: [
      { id: 1, img: "/images/Explore/img-one.svg" },
      { id: 2, img: "/images/Explore/img-two.svg" },
      { id: 3, img: "/images/Explore/img-three.svg" },
      { id: 4, img: "/images/Explore/img-four.svg" },
      { id: 5, img: "/images/Explore/img-five.svg" },
      { id: 6, img: "/images/Explore/img-six.svg" },
      { id: 7, img: "/images/Explore/img-seven.svg" },
    ],
  },
  {
    id: 3,
    image: [
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
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
    arrays: [
      { id: 1, imgstar: "/images/Explore/star-four.svg" },
      { id: 2, imgstar: "/images/Explore/star-four.svg" },
      { id: 3, imgstar: "/images/Explore/star-four.svg" },
      { id: 4, imgstar: "/images/Explore/star-four.svg" },
      { id: 5, imgstar: "/images/Explore/star-four.svg" },
    ],
    per: "(4.9)",
    review: "50 reviews",
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
      {
        id: 4,
        img: "/images/Explore/wifi.svg",
        label: "Wi-Fi",
      },
      {
        id: 5,
        label: "+5",
      },
    ],
    icon: CiLocationOn,
    location: "Monaco, French Riviera",
    luxury: "Luxury on the Waves!",
    from: "Starting from",
    price: "$2,500",
    day: "Per day",
    btn: "Detail",
    arrayv: [
      { id: 1, img: "/images/Explore/img-one.svg" },
      { id: 2, img: "/images/Explore/img-two.svg" },
      { id: 3, img: "/images/Explore/img-three.svg" },
      { id: 4, img: "/images/Explore/img-four.svg" },
      { id: 5, img: "/images/Explore/img-five.svg" },
      { id: 6, img: "/images/Explore/img-six.svg" },
      { id: 7, img: "/images/Explore/img-seven.svg" },
    ],
  },
  {
    id: 4,
    image: [
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
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
    arrays: [
      { id: 1, imgstar: "/images/Explore/star-four.svg" },
      { id: 2, imgstar: "/images/Explore/star-four.svg" },
      { id: 3, imgstar: "/images/Explore/star-four.svg" },
      { id: 4, imgstar: "/images/Explore/star-four.svg" },
      { id: 5, imgstar: "/images/Explore/star-four.svg" },
    ],
    per: "(4.9)",
    review: "50 reviews",
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
      {
        id: 4,
        img: "/images/Explore/wifi.svg",
        label: "Wi-Fi",
      },
      {
        id: 5,
        label: "+5",
      },
    ],
    icon: CiLocationOn,
    location: "Monaco, French Riviera",
    luxury: "Luxury on the Waves!",
    from: "Starting from",
    price: "$2,500",
    day: "Per day",
    btn: "Detail",
    arrayv: [
      { id: 1, img: "/images/Explore/img-one.svg" },
      { id: 2, img: "/images/Explore/img-two.svg" },
      { id: 3, img: "/images/Explore/img-three.svg" },
      { id: 4, img: "/images/Explore/img-four.svg" },
      { id: 5, img: "/images/Explore/img-five.svg" },
      { id: 6, img: "/images/Explore/img-six.svg" },
      { id: 7, img: "/images/Explore/img-seven.svg" },
    ],
  },
  {
    id: 5,
    image: [
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
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
    arrays: [
      { id: 1, imgstar: "/images/Explore/star-four.svg" },
      { id: 2, imgstar: "/images/Explore/star-four.svg" },
      { id: 3, imgstar: "/images/Explore/star-four.svg" },
      { id: 4, imgstar: "/images/Explore/star-four.svg" },
      { id: 5, imgstar: "/images/Explore/star-four.svg" },
    ],
    per: "(4.9)",
    review: "50 reviews",
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
      {
        id: 4,
        img: "/images/Explore/wifi.svg",
        label: "Wi-Fi",
      },
      {
        id: 5,
        label: "+5",
      },
    ],
    icon: CiLocationOn,
    location: "Monaco, French Riviera",
    luxury: "Luxury on the Waves!",
    from: "Starting from",
    price: "$2,500",
    day: "Per day",
    btn: "Detail",
    arrayv: [
      { id: 1, img: "/images/Explore/img-one.svg" },
      { id: 2, img: "/images/Explore/img-two.svg" },
      { id: 3, img: "/images/Explore/img-three.svg" },
      { id: 4, img: "/images/Explore/img-four.svg" },
      { id: 5, img: "/images/Explore/img-five.svg" },
      { id: 6, img: "/images/Explore/img-six.svg" },
      { id: 7, img: "/images/Explore/img-seven.svg" },
    ],
  },
  {
    id: 6,
    image: [
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
      "/images/Explore/list.svg",
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
    arrays: [
      { id: 1, imgstar: "/images/Explore/star-four.svg" },
      { id: 2, imgstar: "/images/Explore/star-four.svg" },
      { id: 3, imgstar: "/images/Explore/star-four.svg" },
      { id: 4, imgstar: "/images/Explore/star-four.svg" },
      { id: 5, imgstar: "/images/Explore/star-four.svg" },
    ],
    per: "(4.9)",
    review: "50 reviews",
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
      {
        id: 4,
        img: "/images/Explore/wifi.svg",
        label: "Wi-Fi",
      },
      {
        id: 5,
        label: "+5",
      },
    ],
    icon: CiLocationOn,
    location: "Monaco, French Riviera",
    luxury: "Luxury on the Waves!",
    from: "Starting from",
    price: "$2,500",
    day: "Per day",
    btn: "Detail",
    arrayv: [
      { id: 1, img: "/images/Explore/img-one.svg" },
      { id: 2, img: "/images/Explore/img-two.svg" },
      { id: 3, img: "/images/Explore/img-three.svg" },
      { id: 4, img: "/images/Explore/img-four.svg" },
      { id: 5, img: "/images/Explore/img-five.svg" },
      { id: 6, img: "/images/Explore/img-six.svg" },
      { id: 7, img: "/images/Explore/img-seven.svg" },
    ],
  },
  
];
