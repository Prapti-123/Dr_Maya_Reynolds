"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch("/blogData.json");
                const data = await response.json();
                const blog = data.find((b) => b.blog_id === parseInt(params.id));

                if (blog) {
                    setBlogData(blog);
                } else {
                    router.push("/blog");
                }
            } catch (error) {
                console.error("Error fetching blog data:", error);
                router.push("/blog");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [params.id, router]);

    if (loading) {
        return (
            <main className="flex-grow font-sans flex items-center justify-center min-h-screen">
                <p className="text-deep-teal text-xl">Loading...</p>
            </main>
        );
    }

    if (!blogData) {
        return null;
    }

    return (
        <main className="flex-grow font-sans">
            <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Blog Heading with fade-up animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <p className="text-xs font-bold tracking-widest text-deep-teal uppercase mb-4">
                        NEWS
                    </p>
                    <h1 className="text-4xl md:text-6xl font-medium text-deep-teal mb-8">
                        {blogData.heading}
                    </h1>
                </motion.div>

                {/* Blog Content with fade animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="prose prose-lg max-w-none mb-16"
                >
                    <p className="text-lg text-deep-teal/90 leading-relaxed whitespace-pre-line">
                        {blogData.content}
                    </p>
                </motion.div>

                {/* Navigation Buttons with fade-up animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex justify-between items-center pt-8 border-t border-deep-teal/20"
                >
                    {/* Previous Blog Button */}
                    <div className="flex-1">
                        {blogData.prev_blog_id && (
                            <Link
                                href={`/blog/${blogData.prev_blog_id}`}
                                className="group inline-flex items-center gap-2 text-deep-teal hover:text-warm-copper transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs font-bold tracking-widest uppercase">
                                        Previous
                                    </p>
                                    <p className="text-sm font-medium">
                                        {blogData.prev_blog_heading}
                                    </p>
                                </div>
                            </Link>
                        )}
                    </div>

                    {/* Next Blog Button */}
                    <div className="flex-1 flex justify-end">
                        {blogData.next_blog_id && (
                            <Link
                                href={`/blog/${blogData.next_blog_id}`}
                                className="group inline-flex items-center gap-2 text-deep-teal hover:text-warm-copper transition-colors duration-300"
                            >
                                <div className="text-right">
                                    <p className="text-xs font-bold tracking-widest uppercase">
                                        Next
                                    </p>
                                    <p className="text-sm font-medium">
                                        {blogData.next_blog_heading}
                                    </p>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        )}
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
