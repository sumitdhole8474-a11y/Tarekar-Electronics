"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShareWidget from "@/app/components/ShareWidget";

type Blog = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  created_at: string;
};

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data: Blog[] = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("❌ Failed to fetch blogs", error);
      } finally {
        setLoadingBlogs(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-center mb-12">
          <span className="bg-blue-600 text-white text-lg md:text-xl font-semibold px-6 py-3 rounded-full shadow-md">
            Latest Updates
          </span>
        </div>

        {loadingBlogs ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-400 animate-pulse">Loading updates...</p>
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            No updates available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.slice(0, 3).map((blog) => {

              const imageSrc =
                blog.image?.startsWith("data:")
                  ? blog.image
                  : blog.image?.startsWith("/")
                  ? blog.image
                  : blog.image
                  ? `/${blog.image}`
                  : "/blogs/default.jpg";

              return (
                <div
                  key={blog.id}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    {imageSrc.startsWith("data:") ? (
                      <img
                        src={imageSrc}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={imageSrc}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">

                    <h3 className="text-xl font-bold mb-2 text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>

                    {blog.created_at && (
                      <p className="text-xs text-gray-400 mb-3">
                        Published on{" "}
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    )}

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                      {blog.description}
                    </p>

                    <div className="mt-auto pt-4 flex items-center justify-between">

                      {blog.slug ? (
                        <Link
                          href={`/about/${blog.slug}`}
                          className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Read More
                        </Link>
                      ) : (
                        <span className="text-xs text-gray-400">
                          Blog link unavailable
                        </span>
                      )}

                      <ShareWidget title={blog.title} />

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}