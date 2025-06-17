import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { IconType } from "react-icons";

export interface MenuItem {
  id: number;
  label: string;
  href: string;
}

export const MenuItems: MenuItem[] = [
  { id: 1, label: "Sign up", href: "" },
  { id: 2, label: "Sign in", href: "" },
  { id: 3, label: "Help Center", href: "#" },
];

export const MenusItems: MenuItem[] = [
  { id: 1, label: "Help Center", href: "#" },
  { id: 2, label: "Logout", href: "#" },
];

export interface LangItem {
  id: number;
  label: string;
  value: string;
}

export const LanData: LangItem[] = [
  { id: 1, label: 'ENG', value: 'en' },
  { id: 2, label: 'FER', value: 'fr' },
];

export interface CurItem {
  id: number;
  label: string;
}

export const CurData: CurItem[] = [
  { id: 1, label: "$USD" },
  { id: 2, label: "€EUR" },
];

export interface DropdownMenuItem {
  id: number;
  icon?: IconType;
  ico?: string;
  label: string;
  placeholder: string;
  serchicon?: IconType;
  dropdownType: string;
  dropdownContent?: {
    img?: string;
    name?: string;
    type?: string;
  }[];
  dropdown?:{
    name?: string;
    description?: string;
    checked?: boolean;
  }[];
}

export const DropdownData: DropdownMenuItem[] = [
  {
    id: 1,
    icon: CiLocationOn,
    label: "Sail From",
    placeholder: "Destination",
    dropdownType: "location",
    dropdownContent: [
      { img:"/images/europe.svg", name: "Greece", type: "Country" },
      {img:"/images/med.svg", name: "Mediterranean region", type: "Region" },
      {img:"/images/turkey.svg", name: "Turkey", type: "Country" },
    ],
  },
  {
    id: 2,
    icon: CiCalendar,
    label: "Plan",
    placeholder: "Select Date",
    dropdownType: "calendar",
  },
  {
    id: 3,
    ico: "/images/guest.svg",
    label: "Guests",
    placeholder: "Add guests",
    dropdownType: "guestCount",
    dropdown:[
      { name: "Adults", description: "Age 13 or above" },
      { name: "Children", description: "Age 2-12" },
    ]
  },
  {
    id: 4,
    ico: "/images/yacht.svg",
    label: "Yacht Type",
    placeholder: "Select Yacht",
    serchicon: IoSearch,
    dropdownType: "checkboxList",
    dropdown:[
      { name: "Bareboat", checked: false },
      { name: "Cabin Charter", checked: false },
      { name: "Private Charter", checked: false },
    ]
  },
];

export interface DropdownMenuNavbarItem {
  id: number;
  label: string;
  icon?: IconType;
  ico?: string;
  serchicon?: IconType;
}

export const NavbarData: DropdownMenuNavbarItem[] = [
  {
    id: 1,
    icon: CiLocationOn,
    label: "Anywhere",
  },
  {
    id: 2,
    icon: CiCalendar,
    label: "Any week",
  },
  {
    id: 3,
    ico: "/images/guest.svg",
    label: "Guests",
  },
  {
    id: 4,
    ico: "/images/yacht.svg",
    label: "Yacht Type",
    serchicon: IoSearch,
  },
];