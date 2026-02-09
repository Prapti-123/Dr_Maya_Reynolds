import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutLilac({ images }) {
    return (
        <section className="bg-[#F9F7F2] py-24 px-8 md:px-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Text */}
                <div className="flex flex-col items-start max-w-md">
                    <h2 className="text-3xl font-serif text-[#3F5F5B] mb-6">
                        Hi, I’m Dr. Maya Reynolds.
                    </h2>
                    <p className="text-xs font-bold text-neutral-600 mb-12 leading-relaxed">
                        I’m a licensed clinical psychologist in Santa Monica, California, working with adults navigating anxiety, trauma, and burnout. Many of the people I see are thoughtful, capable, and high-achieving — yet privately struggling with stress, emotional exhaustion, or the lingering impact of earlier experiences.
                    </p>
                    <p className="text-xs font-bold text-neutral-600 mb-12 leading-relaxed">
                        My approach to therapy is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while leaving room for reflection and depth. I integrate evidence-based approaches including CBT, EMDR, mindfulness practices, and body-oriented techniques to address both the emotional and physiological sides of what you’re experiencing.
                    </p>

                    <Button variant="outline" className="rounded-none border-[#3F5F5B] text-[#3F5F5B] px-8 py-3 hover:bg-[#3F5F5B] hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold bg-transparent">
                        Let's Chat →
                    </Button>
                </div>

                {/* Right: Image Composition */}
                <div className="relative h-[500px] w-full flex justify-center md:justify-end">
                    {/* Main Arch Image */}
                    <div className="relative w-[300px] h-[450px] z-10 rounded-t-full overflow-hidden">
                        <Image
                            src={images.arch}
                            alt="Person holding flowers"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Overlapping Circle Image */}
                    <div className="absolute bottom-0 right-0 md:-right-12 z-20 w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-[#F9F7F2]">
                        <Image
                            src={images.circle}
                            alt="White lilac flowers"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
