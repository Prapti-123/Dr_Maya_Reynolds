import { react } from 'react'
import { Button } from "@/components/ui/button"
import Reveal from "@/components/Reveal"

export default function OurOffice() {
    return (
        <div className="w-full bg-background min-h-screen">
            {/* Header and First Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <Reveal width="100%">
                    <h1 className="font-serif text-5xl md:text-6xl font-medium text-center text-foreground mb-16 md:mb-24">
                        Our Office
                    </h1>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto mb-24">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <Reveal width="100%">
                            <h2 className="font-serif text-3xl md:text-4xl text-[#8C9A68]">
                                The Story
                            </h2>

                            <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
                                <p>
                                    Therapeute was started by five friends in the wake of the Covid 19
                                    pandemic, which brought with it a massive mental health crisis.
                                </p>
                                <p>
                                    We want to build a community that feels safe in talking about
                                    mental health. Grounded in reflective practice, we strive to create a
                                    space where one can focus on professional and personal growth.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative aspect-[4/5] w-[80%] mx-auto bg-muted rounded-lg overflow-hidden">
                        <Reveal width="100%" className="h-full">
                            <img
                                src="/our-office.jpg"
                                alt="Our Office Letter Board"
                                className="object-cover w-full h-full"
                            />
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Second Section - Our Approach (Full Width Background) */}
            <div className="w-full bg-[#F9F7F2] py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
                        {/* Left Column - Image */}
                        <div className="relative aspect-[4/5] w-[80%] mx-auto bg-muted rounded-lg overflow-hidden order-last md:order-first">
                            <Reveal width="100%" className="h-full">
                                <img
                                    src="/our-approach-stones.jpg"
                                    alt="Stacked stones representing balance"
                                    className="object-cover w-full h-full"
                                />
                            </Reveal>
                        </div>

                        {/* Right Column - Text Content */}
                        <div className="space-y-8">
                            <Reveal width="100%">
                                <h2 className="font-serif text-3xl md:text-4xl text-[#8C9A68]">
                                    Our Approach
                                </h2>

                                <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
                                    <p>
                                        The therapy sessions we provide are based in years of research.
                                        Our approach is person - centered, tailoring therapy to the unique
                                        needs clients bring. Our therapists are trained in cognitive
                                        behavior therapy, acceptance and commitment therapy,
                                        emotionally focused therapy, mindfulness, trauma therapy, queer
                                        affirmative therapy and other evidence based approaches
                                    </p>
                                </div>

                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Section - The Space */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <Reveal width="100%">
                            <h2 className="font-serif text-3xl md:text-4xl text-[#8C9A68]">
                                The Space
                            </h2>

                            <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
                                <p>
                                    We believe that the environment plays a crucial role in the healing process.
                                    Our office is designed to be a sanctuary where you can feel at ease,
                                    away from the hustle and bustle of daily life.
                                </p>
                                <p>
                                    Every corner is thoughtfully curated to promote tranquility and
                                    mindfulness, ensuring that your time with us is restorative.
                                </p>
                            </div>

                            
                        </Reveal>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative aspect-[4/5] w-[80%] mx-auto bg-muted rounded-lg overflow-hidden">
                        <Reveal width="100%" className="h-full">
                            <img
                                src="/office-interior.jpg"
                                alt="Office Interior"
                                className="object-cover w-full h-full"
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
