"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-[#F9F7F2]">
            <div className="flex items-center justify-center gap-2">
                <Image src="/maya logo.png" alt="Maya Logo" width={32} height={32} className="rounded-full" />
                <span className="text-xl font-serif text-[#3F5F5B] leading-tight tracking-tight">Dr.Maya Reynolds</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-lg font-medium hover:underline">
                    Home
                </Link>
                <Link href="/blog" className="text-lg font-medium hover:underline">
                    Blog
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:underline">
                    Contact
                </Link>
                <Link href="/office" className="text-lg font-medium hover:underline">
                    Our Office
                </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden z-50">
                <button onClick={toggleMenu} className="text-[#3F5F5B] focus:outline-none">
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black z-40"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#F9F7F2] z-50 shadow-xl flex flex-col p-6"
                        >
                            {/* Close Button */}
                            <div className="flex justify-start mb-8">
                                <button onClick={toggleMenu} className="text-[#3F5F5B] focus:outline-none">
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Menu Links */}
                            <div className="flex flex-col gap-6">
                                <Link
                                    href="/"
                                    onClick={toggleMenu}
                                    className="text-xl font-serif text-[#3F5F5B] hover:text-[#2A403D] transition-colors"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/blog"
                                    onClick={toggleMenu}
                                    className="text-xl font-serif text-[#3F5F5B] hover:text-[#2A403D] transition-colors"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={toggleMenu}
                                    className="text-xl font-serif text-[#3F5F5B] hover:text-[#2A403D] transition-colors"
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/office"
                                    onClick={toggleMenu}
                                    className="text-xl font-serif text-[#3F5F5B] hover:text-[#2A403D] transition-colors"
                                >
                                    Our Office
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
