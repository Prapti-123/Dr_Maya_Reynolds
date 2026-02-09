"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ProfessionalBackground() {
    const items = [
        {
            title: "Education",
            content: "Master of Arts in Counseling Psychology, University of St. Thomas. Bachelor of Arts in Psychology, University of Minnesota."
        },
        {
            title: "Licensure",
            content: "Licensed Professional Clinical Counselor (LPCC) - Minnesota Board of Behavioral Health and Therapy."
        },
        {
            title: "Certifications",
            content: "Certified Clinical Trauma Professional (CCTP). Trained in EMDR Therapy."
        }
    ];

    return (
        <section className="bg-[#F9F7F2] py-24 px-8 md:px-24">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="text-xl font-bold text-[#3F5F5B] mb-12 text-center">
                    My Professional Background
                </h2>

                <div className="w-full border-t border-[#3F5F5B]/30">
                    {items.map((item, index) => (
                        <AccordionItem key={index} title={item.title} content={item.content} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border-b border-[#3F5F5B]/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group"
            >
                <span className="text-xs font-subheading font-bold text-[#3F5F6B] uppercase tracking-widest group-hover:opacity-70 transition-opacity">
                    {title}
                </span>
                <span className="text-[#3F5F6B]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-neutral-600 text-xs leading-relaxed pr-8">
                    {content}
                </p>
            </div>
        </div>
    );
}
