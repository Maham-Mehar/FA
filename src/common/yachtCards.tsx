"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

interface Yacht {
  _id: string;
  capacity: string;
  primaryImage: string;
  daytripPriceEuro: string;
  lengthRange: string;
  title: string;
  guests: string;
  length: string;
  passengerDayTrip: string;
  passengerOvernight: string;
  lengthOverall: string;
  type: string;
  status: string;
  slug: string;
}

interface YachtCardsProps {
  columns?: number;
}

// ✅ Safe Slugify Function
const slugify = (text: string | undefined | null): string => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/ *\([^)]*\) */g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

const gridWrapperClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

const YachtCards: React.FC<YachtCardsProps> = ({ columns = 3 }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState<Yacht[]>([]);
  console.log(data, "data from yacht cards");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const fetchYachts = async () => {
      try {
        const res = await axios.get("https://faraway.thedevapp.online/yacht/all-yachts");
        const allYachts: Yacht[] = res.data.data.yachts;

        const normalizedPath = pathname?.replace(/\/+$/, "").trim() || "/";
        let filteredYachts: Yacht[] = [];

        filteredYachts = allYachts.filter((yacht) => {
          const yachtStatus = yacht.status?.toLowerCase().trim() || "";
          const yachtType = yacht.type?.toLowerCase().trim() || "";

          if (normalizedPath === "/") {
            return yachtStatus === "published";
          }

          if (normalizedPath === "/bareboat-charter-thailand") {
            return yachtStatus === "published" && yachtType === "bareboat";
          }

          if (normalizedPath === "/yacht-charter-phuket") {
            return yachtStatus === "published" && yachtType === "crewed";
          }

          return yachtStatus === "published";
        });

        setData(filteredYachts);
      } catch (err: any) {
        setError(err?.response?.data?.message || "Failed to fetch yachts.");
      } finally {
        setLoading(false);
      }
    };

    fetchYachts();
  }, [pathname]);

  const gridCols = gridWrapperClasses[columns as 1 | 2 | 3] || gridWrapperClasses[3];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40rem]">
        <div className="w-10 h-10 border-4 border-t-transparent border-[#2185D0] rounded-full animate-spin" />
      </div>
    );
  }

  if (data.length === 0) {
    return <p className="text-center text-gray-500 text-xl py-10">No yachts found for this page.</p>;
  }

  const visibleYachts = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  return (
    <div className="px-3">
      <div className={`grid ${gridCols} gap-4 md:gap-6 lg:gap-7 xl:gap-9`}>
        {visibleYachts.map((boat) => (
          <div
            key={boat._id} //
            onClick={() => {
              const base = boat.type === "bareboat" ? "bareboat" : "crewed_boats";
              const slug = slugify(boat.slug);
              console.log("slug:", slug);
              const fullPath = `/${base}/${slug}`;
              console.log("Navigating to:", fullPath); 
              if (slug) {
                router.push(fullPath);
              }
            }}

            className="group cursor-pointer mb-3 pb-5 border border-gray-300 rounded-tl-3xl rounded-b-lg overflow-hidden bg-white hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
          >

            <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <img src={boat.primaryImage} alt={boat.title} className="w-full h-64 object-cover" />
            </div>
            <div className="mt-3 space-y-1 xl:space-y-2 px-3">
              <p className="text-base md:text-xl text-red-500 font-medium font-poppins">
                from {boat.daytripPriceEuro} EUR
              </p>
              <p className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] font-semibold font-playfair text-zink">
                {boat.title}
              </p>
              <p className="text-xl text-black font-normal font-sourceSanspro">{boat.capacity}</p>
            </div>
            <div className="mt-4 px-3 pt-3 flex justify-between border-t border-gray-300 text-gray-700 font-semibold text-base md:text-xl">
              {[
                { icon: "/images/icon1.png", value: `${boat.length.replace(/[<>]/g, "")} ft` },
                { icon: "/images/icon2.png", value: boat.passengerDayTrip },
                { icon: "/images/icon3.png", value: boat.passengerOvernight },
              ].map(({ icon, value }, i) => (
                <div key={i} className="flex items-center space-x-1">
                  <img src={icon} alt="" className="w-8" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-7 lg:px-9 xl:px-11 py-2 rounded-lg text-white bg-zink hover:bg-[#D6AB62] text-lg font-medium transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default YachtCards;
