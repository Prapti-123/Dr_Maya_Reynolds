import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FullBloom({ image }) {
    return (
        <section className="bg-[#F9F7F2] py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Arch Image */}
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-[300px] h-[480px] md:w-[480px] md:h-[600px] rounded-t-full overflow-hidden">
                        {image ? (
                            <Image
                                src={image}
                                alt="Flowers in full bloom"
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                                Arch Image
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Text */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#3F5F5B] mb-4 leading-tight">
                        Anxiety & Trauma Therapy in Santa Monica, CA <br />
                    </h2>
                    <p className="text-xs font-subheading font-bold uppercase tracking-widest text-neutral-600 mb-12">
                        Support for high-achieving adults feeling overwhelmed, burned out, or stuck in patterns of stress and overthinking.
                    </p>

                    <Button variant="outline" className="rounded-none border-[#3F5F5B] text-[#3F5F5B] px-10 py-6 hover:bg-[#3F5F5B] hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">
                        Start Therapy
                    </Button>
                </div>
            </div>
        </section>
    );
}
