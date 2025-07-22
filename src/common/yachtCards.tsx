"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

interface Yacht {
    _id: string;
    capacity: string;
    primaryImage: string;
    daytripPriceEuro: string;
    lengthRange: string;
    guests: string;
    cabins: string;
    lengthOverall: string;
}
interface YachtCardsProps {
    columns?: number;
}

const YachtCards: React.FC<YachtCardsProps> = ({ columns = 3 }) => {
    const router = useRouter();
    const [data, setData] = useState<Yacht[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://faraway.thedevapp.online/yacht/all-yachts"
                );
                setData(response.data.data.yachts);
                setError(null);
            } catch (err: any) {
                setError(err?.response?.data?.message || "Failed to fetch");
                setData([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const columnClass =
        columns === 1
            ? "grid-cols-1 md:grid-cols-2"
            : columns === 2
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    return (
        <div>
            {loading ? (
                <div className="flex items-center justify-center min-h-[40rem]">
                    <div className="w-10 h-10 border-4 border-t-transparent border-[#2185D0] rounded-full animate-spin" />
                </div>
            ) : (
                <div className={`grid ${columnClass} gap-9`}>
                    {data.map((boat, index) => (
                        <div
                            key={index}
                            className="mb-3 pb-5 cursor-pointer group overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:scale-[1.03] bg-white"
                            onClick={() =>
                                router.push(`/yacht-charter-phuket/crewed_boats/${boat._id}`)
                            }
                        >
                            <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
                                <img
                                    src={boat.primaryImage}
                                    alt="Yacht"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="mt-3 space-y-1 px-3">
                                <p className="text-lg font-poppins text-red-500 font-semibold">
                                    from {boat.daytripPriceEuro}
                                </p>
                                <h3 className="text-[26px] font-playfair text-zinc-800">
                                    {boat.lengthOverall}
                                </h3>
                                <p className="text-lg font-sourceSanspro text-gray-600">
                                    {boat.capacity}
                                </p>
                            </div>
                            <div className="mt-4 px-3 pt-3 flex justify-between border-t border-gray-300 text-gray-700 text-sm">
                                <div className="flex items-center space-x-1">
                                    <img src="/images/icon1.png" alt="" className="w-5" />
                                    <span>{boat.lengthRange.replace(/[<>]/g, "")} ft</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <img src="/images/icon2.png" alt="" className="w-5" />
                                    <span>{boat.guests}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <img src="/images/icon3.png" alt="" className="w-5" />
                                    <span>{boat.cabins}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default YachtCards;
