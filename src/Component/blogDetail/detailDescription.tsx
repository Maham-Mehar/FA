"use client";
import DOMPurify from "dompurify";
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

// Use the same slugify function as in blogCards.tsx for consistency
const slugify = (text: string | undefined | null): string => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/ *\([^)]*\) */g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

const BlogDetail: React.FC<BlogProps> = ({ slug }) => {
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Get all blogs from the API
        const allBlogsRes = await axios.get("https://faraway.thedevapp.online/blog/all-blogs");
        const allBlogs: BlogData[] = allBlogsRes.data?.data?.blogs || [];

        // Find the blog that matches our slug using the same slugify logic
        const matchingBlog = allBlogs.find(blog => {
          const blogSlugified = slugify(blog.slug);
          const inputSlugified = slugify(slug);
          
          return blogSlugified === inputSlugified || 
                 blogSlugified === slug.toLowerCase() ||
                 blog.slug.toLowerCase() === slug.toLowerCase();
        });

        if (matchingBlog) {
          setData(matchingBlog);
        } else {
          // Try direct API calls with different slug formats
          const slugVariations = [
            slug,
            slug.toLowerCase(),
            slugify(slug),
            slug.replace(/-/g, ' '),
            slug.replace(/-/g, '_'),
            slug.replace(/-/g, ''),
          ];
          
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
              } else if (res.data && res.data.title) {
                setData(res.data);
                found = true;
                break;
              }
            } catch (directErr: any) {
              continue;
            }
          }

          if (!found) {
            const errorMessage = `Blog not found. Searched for slug: "${slug}". Available slugs: ${allBlogs.map(b => slugify(b.slug)).join(", ")}`;
            throw new Error(errorMessage);
          }
        }
      } catch (err: any) {
        const errorMessage = err?.response?.data?.message || err.message || "Failed to fetch blog";
        setError(errorMessage);
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
      <div className="max-w-7xl mx-auto py-10 px-4">
        <p className="text-red-500 text-lg font-semibold mb-4">Error loading blog:</p>
        <p className="text-red-500 text-base">{error}</p>
        <p className="text-gray-600 text-sm mt-4">
          Searched for slug: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto py-10 px-4">
        <p className="text-gray-500 text-lg">No blog found with slug: {slug}</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="relative">
        <div className="bg-[url('/images/blogimg1.png')] bg-cover bg-center bg-no-repeat min-h-[30vh] md:min-h-[40vh] lg:min-h-[58vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[#034250]/40 z-0" />
          <div className="relative z-10">
            <p className="text-[40px] font-playfair font-bold mb-4 text-white max-w-2xl mx-auto text-center">{data.title}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-10 px-4">
        <img
          src={data.image || "/images/default-blog.jpg"}
          alt={data.title}
          className="w-full h-94 object-cover mb-4 "
        />
        <p className="text-lg text-black font-normal font-sourceSanspro leading-relaxed">
          {data.shortDescription}
        </p>
        <div
          className="text-lg text-black font-normal font-sourceSanspro leading-relaxed"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.detailDescription || "") }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
