import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Specialties({ images }) {
    const specialties = [
        {
            title: "Anxiety",
            description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
            image: images?.selfEsteem
        },
        {
            title: "Trauma",
            description: "Navigating relationships can be complex. I'm here to guide you through these complications to help you form healthier connections.",
            image: images?.relationships
        },
        {
            title: "Burnout",
            description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
            image: images?.burnout
        }
    ];

    return (
        <section className="py-20 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-serif text-center text-[#3F5F5B] mb-16">My Specialties</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {specialties.map((item, index) => (
                        <Card key={index} className="bg-[#F2ECE6] border-[#3F5F5B] rounded-none h-full hover:shadow-lg transition-shadow">
                            <CardHeader className="p-6">
                                <CardTitle className="text-sm font-subheading font-bold uppercase tracking-wide">{item.title}</CardTitle>
                                <p className="mt-4 text-xs text-neutral-600 leading-relaxed min-h-[60px]">
                                    {item.description}
                                </p>
                            </CardHeader>
                            <CardContent className="p-0 flex justify-center pb-8 pt-4">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-xs text-neutral-500">
                                            Image
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
