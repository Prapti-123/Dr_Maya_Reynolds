"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ image }) {
    const faqs = [
        {
            question: "Do you offer in-person therapy in Santa Monica?",
            answer: "Yes. I provide in-person sessions at my Santa Monica office as well as secure telehealth therapy for clients across California."
        },
        {
            question: "What types of therapy do you use?",
            answer: "My work integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based approaches, and body-oriented techniques to address both emotional patterns and nervous system regulation."
        },
        {
            question: "Who do you work with?",
            answer: "I work with adults experiencing anxiety, trauma, burnout, perfectionism, and high stress — often individuals who appear high-functioning but feel overwhelmed internally."
        }
    ];

    return (
        <section className="bg-[#F2ECE6] py-24 px-8 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-serif text-[#3F5F5B] text-center mb-16">FAQ</h2>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left: Arch Image */}
                    <div className="flex justify-center md:justify-end order-1 md:order-1">
                        <div className="relative w-[300px] h-[450px] md:w-[350px] md:h-[500px] rounded-t-full overflow-hidden">
                            {image ? (
                                <Image
                                    src={image}
                                    alt="Dried flowers in arch"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-neutral-200" />
                            )}
                        </div>
                    </div>

                    {/* Right: FAQ List */}
                    <div className="flex flex-col items-start order-2 md:order-2 w-full pt-10">

                        <div className="w-full flex flex-col">
                            {faqs.map((item, index) => (
                                <FAQItem key={index} question={item.question} answer={item.answer} />
                            ))}
                            {/* Bottom Border */}
                            <div className="w-full border-t border-[#3F5F5B]/30" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border-t border-[#3F5F5B]/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-4">
                    <span className="text-[#3F5F5B]">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                    <span className="text-sm font-bold text-[#3F5F5B] group-hover:opacity-70 transition-opacity">
                        {question}
                    </span>
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-neutral-600 text-xs leading-relaxed pl-9 pr-4">
                    {answer}
                </p>
            </div>
        </div>
    );
}
