"use client";

import { useEffect, useState } from "react";
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
  slug: string;
}
const reverseSlugify = (slug: string): string[] => {
  // Try different variations of the slug
  const variations = [
    slug, // Original slug as-is
    slug.replace(/-/g, ' '),
    slug.replace(/-/g, '_'), // Replace hyphens with underscores
    slug.replace(/-/g, ''), // Remove hyphens completely
  ];
  return variations;
};

const BlogDetail: React.FC<BlogProps> = ({ slug }) => {
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // First, try to get all blogs and find the matching one
        const allBlogsRes = await axios.get("https://faraway.thedevapp.online/blog/all-blogs");
        const allBlogs: BlogData[] = allBlogsRes.data?.data?.blogs || [];

        // Find the blog that matches our slug
        const matchingBlog = allBlogs.find(blog => {
          const blogSlug = blog.slug;
          const slugVariations = reverseSlugify(slug);
          return slugVariations.some(variation =>
            blogSlug.toLowerCase() === variation.toLowerCase() ||
            blogSlug.toLowerCase().replace(/[^a-z0-9]/g, '-') === slug.toLowerCase()
          );
        });

        if (matchingBlog) {
          setData(matchingBlog);
        } else {
          // If not found in all blogs, try direct API call

          const slugVariations = reverseSlugify(slug);
          let found = false;

          for (const variation of slugVariations) {
            try {
              const res = await axios.get(`https://faraway.thedevapp.online/blog/${variation}`);

              if (res.data?.data?.blog) {
                setData(res.data.data.blog);
                found = true;
                break;
              } else if (res.data?.blog) {
                setData(res.data.blog);
                found = true;
                break;
              } else if (res.data) {
                setData(res.data);
                found = true;
                break;
              }
            } catch (directErr) {
              continue;
            }
          }

          if (!found) {
            throw new Error("Blog not found with any slug variation");
          }
        }
      } catch (err: any) {
        setError(err?.response?.data?.message || err.message || "Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    } else {
      setError("No slug provided");
      setLoading(false);
    }
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
      <p className="text-red-500 text-lg">{error}</p>
    );
  }

  if (!data) {
    return (
      <p className="text-gray-500 text-lg">No blog found with slug: {slug}</p>
    );
  }

      return (
      <div className="">
        <div className="relative">
          <div className="bg-[url('/images/blogimg1.png')] bg-cover bg-center bg-no-repeat min-h-[30vh] md:min-h-[40vh] lg:min-h-[58vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[#034250]/40 z-0" />
            <div className="relative z-10">
              <p className="text-[40px] font-playfair font-bold mb-4 text-white">{data.title}</p>
            </div>
          </div>
        </div>


      <div className="max-w-7xl mx-auto py-10 px-4">
        <img
          src={data.image || "/images/default-blog.jpg"}
          alt={data.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <p className="text-lg text-black font-normal font-sourceSanspro leading-relaxed">
          {data.shortDescription}
        </p>
        <p className="text-lg text-black font-normal font-sourceSanspro leading-relaxed">
          {data.detailDescription}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
