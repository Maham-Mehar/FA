"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./gallery";
import VideoSection from "./videoSection";
import TabSection from "./tabSection";
import ContactDetail from "./contactDetail";
import YachtAdventure from "../Charter/yachtAdventure";

interface HeroProps {
  slug: string;
}

export interface Yacht {
  _id: string;
  slug: string;
  title: string;
  primaryImage: string;
  daytripPriceEuro: string;
  length: string;
  passengerDayTrip: string;
  passengerOvernight: string;
  galleryImages: string[];
  videoLink: string;
  aboutThisBoat: string;
  dayCharter: string;
  overnightCharter: string;
  lengthOverall: string;
  boatType: string;
  cabins: string;
  bathrooms: string;
  capacity: string;
  guests: string;
  lengthRange: string;
  status: string;
  type: string;
}

const slugify = (text: string | undefined | null): string => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/ *\([^)]*\) */g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

const HeroSection: React.FC<HeroProps> = ({ slug }) => {
  const [data, setData] = useState<Yacht | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://faraway.thedevapp.online/yacht/all-yachts");
        const allYachts: Yacht[] = res.data.data.yachts;

        const matched = allYachts.find(
          (boat) => slugify(boat.slug) === slugify(slug)
        );

        if (!matched) {
          setError("Yacht not found.");
          return;
        }

        setData(matched);
      } catch {
        setError("Failed to load yacht data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <div className="animate-spin w-10 h-10 border-4 border-t-transparent border-zinc-700 rounded-full" />
      </div>
    );
  }

  if (error || !data) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  return (
    <div className="max-w-[78.2rem] mx-auto px-4 xl:px-0">
      <p className="text-[32px] font-playfair font-bold text-zink mt-3">{data.title}</p>

      <div className="flex flex-col md:flex-row gap-5 mt-6">
        <div className="w-full md:w-[70%]">
          <Gallery data={data} />
          <TabSection data={data} />
        </div>
        <div className="w-full md:w-[30%] sticky top-[8rem]">
          <ContactDetail data={data} />
        </div>
      </div>

      <div className="mt-6">
        <VideoSection data={data} />
      </div>

      <YachtAdventure />
    </div>
  );
};

export default HeroSection;
