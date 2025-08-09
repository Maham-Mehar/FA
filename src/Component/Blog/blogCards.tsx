"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface BlogData {
    _id: string;
    title: string;
    slug: string;
    shortDescription: string;
    detailDescription: string;
    image: string;
    status: string;
}

interface BlogProps {
    slug?: string;
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

const limitWords = (text: string, wordLimit: number): string => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit 
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
};

const BlogCards: React.FC<BlogProps> = ({ slug }) => {
    const router = useRouter();
    const [data, setData] = useState<BlogData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(9);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {

                const res = await axios.get("https://faraway.thedevapp.online/blog/all-blogs");
                const allBlogs: BlogData[] = res.data?.data?.blogs || [];

                const publishedBlogs = allBlogs.filter(
                    (blog) => blog.status?.toLowerCase().trim() === "published"
                );
                const filteredBlogs = slug
                    ? publishedBlogs.filter((blog) => slugify(blog.slug) === slug)
                    : publishedBlogs;

                setData(filteredBlogs);
            } catch (err: any) {
                console.error("Error fetching blogs:", err);
                setError(err?.response?.data?.message || "Failed to fetch blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[40rem]">
                <div className="w-10 h-10 border-4 border-t-transparent border-[#2185D0] rounded-full animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <p className="text-center text-red-500 text-xl py-10">{error}</p>
        );
    }

    if (data.length === 0) {
        return (
            <p className="text-center text-gray-500 text-xl py-10">No blogs found.</p>
        );
    }

    const visibleBlogs = data.slice(0, visibleCount);
    const hasMore = visibleCount < data.length;

    return (
        <div className="px-3">
            <div className="max-w-7xl mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-7 xl:gap-9">
                    {visibleBlogs.map((blog) => {
                        const slugLink = slugify(blog.slug);
                        return (
                            <div
                                key={blog._id}
                                onClick={() => slugLink && router.push(`/blog/${slugLink}`)}
                                className="group cursor-pointer mb-3 pb-5 border border-gray-300 rounded-tl-3xl rounded-b-lg overflow-hidden bg-white hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                            >
                                <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
                                    <img
                                        src={blog.image || "/images/default-blog.jpg"}
                                        alt={blog.title}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="px-4 pt-4">
                                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] font-semibold font-playfair text-zink mb-2">
                                        {limitWords(blog.title, 4)}
                                    </h3>
                                    <p className="text-base md:text-lg text-black font-normal font-sourceSanspro">
                                        {blog.shortDescription}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
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
        </div>
    );
};

export default BlogCards;