"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "@/Component/YachtDetail/gallery";
import VideoSection from "./videoSection";
import YachtAdventure from "../Charter/yachtAdventure";
import TabSection from "./tabSection";
import ContactDetail from "./contactDetail";

interface Hero {
  id: string | number;
}

export interface Yacht {
  _id: string;
  lengthOverall: string;
  boatType: string;
  length: string;
  cabins: string;
  bathrooms: string;
  passengerDayTrip: string;
  passengerOvernight: string;
  capacity: string;
  title: string;
  primaryImage: string;
  daytripPriceEuro: string;
  lengthRange: string;
  galleryImages: string[];
  videoLink: string;
  guests: string;
  aboutThisBoat: string;
  dayCharter: string;
  overnightCharter: string;
}

const HeroSection: React.FC<Hero> = ({ id }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [data, setData] = useState<Yacht | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://faraway.thedevapp.online/yacht?id=${id}`
        );
        setData(response.data.data);
        setError(null);
      } catch (err: any) {
        setError(err?.response?.data?.message || "Failed to fetch");
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <div className="animate-spin w-10 h-10 border-4 border-t-transparent border-zink rounded-full" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center mt-10">{error}</div>;
  }

  return (
    <div>
      <div className="max-w-[78.2rem] mx-auto px-4 xl:px-0">
        {/* Breadcrumb */}
        <p className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-playfair font-extrabold text-zink mt-3">
          {data ? data.title : ""}
        </p>

        {/* Gallery + Tabs + Sticky Sidebar */}
        <div className="flex flex-col md:flex-row gap-5 relative mt-6">
          <div className="w-full md:w-[70%]">
            <Gallery data={data} />
            <TabSection data={data} />
          </div>
          <div
            className={`w-full md:w-[30%] self-start sticky transition-all duration-300 ${isScrolled ? "top-[8.4rem]" : "top-13"
              }`}
          >
            <ContactDetail data={data} />
          </div>
        </div>

        {/* Video & Adventure */}
        <div className="mt-6">
          <VideoSection data={data} />
        </div>
      </div>
      <YachtAdventure />
    </div>
  );
};

export default HeroSection;
