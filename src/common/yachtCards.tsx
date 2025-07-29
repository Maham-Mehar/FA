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
    cabins: string;
    lengthOverall: string;
    type: string;
}

interface YachtCardsProps {
    columns?: number;
}

const gridWrapperClasses = {
    1: "grid-cols-1 md:grid-cols-2",
    2: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

const YachtCards: React.FC<YachtCardsProps> = ({ columns = 3 }) => {
    const router = useRouter();
    const [data, setData] = useState<Yacht[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const pathname = usePathname();


    useEffect(() => {
        const fetchYachts = async () => {
            try {
                const res = await axios.get("https://faraway.thedevapp.online/yacht/all-yachts");

                const allYachts: Yacht[] = res.data.data.yachts;

                // Filter by type based on route
                const filteredYachts = pathname === "/bareboat-charter-thailand"
                    ? allYachts.filter((yacht) => yacht.type === "bareboat")
                    : allYachts.filter((yacht) => yacht.type === "crewed");

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

    return (
        <div className={`grid ${gridCols} gap-4 md:gap-6 lg:gap-7 xl:gap-9 px-3`}>
            {data.map((boat) => (
                <div
                    key={boat._id}
                    onClick={() => router.push(`/yacht-charter-phuket/crewed_boats/${boat._id}`)}
                    className="group cursor-pointer mb-3 pb-5 border border-gray-300 rounded-tl-3xl rounded-b-lg overflow-hidden bg-white hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                >
                    <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
                        <img src={boat.primaryImage} alt="Yacht" className="w-full h-64 object-cover" />
                    </div>
                    <div className="mt-3 space-y-1 xl:space-y-2 px-3">
                        <p className="text-base md:text-xl text-red-500 font-medium font-poppins">
                            from {boat.daytripPriceEuro}
                        </p>
                        <h3 className="text-[36px] font-bold font-playfair text-zink">
                            {boat.title}
                        </h3>
                        <p className="text-xl text-black font-normal font-sourceSanspro">{boat.capacity}</p>
                    </div>
                    <div className="mt-4 px-3 pt-3 flex justify-between border-t border-gray-300 text-gray-700 font-semibold text-base md:text-xl">
                        {[
                            { icon: "/images/icon1.png", value: `${boat.lengthRange.replace(/[<>]/g, "")} ft` },
                            { icon: "/images/icon2.png", value: boat.guests },
                            { icon: "/images/icon3.png", value: boat.cabins },
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
    );
};

export default YachtCards;
