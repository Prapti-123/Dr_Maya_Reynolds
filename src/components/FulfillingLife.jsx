import Image from "next/image";

export default function FulfillingLife({ image }) {
    return (
        <section className="grid md:grid-cols-2">
            {/* Left: Text */}
            <div className="flex flex-col justify-center px-12 py-20 md:px-24 bg-[#F2ECE6]">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-8">
                        Feel more steady, clear, and like yourself again.
                    </h2>
                    <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                       Life can look “together” on the outside while feeling exhausting on the inside. You might be managing work, relationships, and responsibilities — yet still living with constant worry, tension in your body, trouble sleeping, or the sense that you’re always bracing for something to go wrong.
                    </p>
                    <p className="text-sm text-neutral-600 mb-12 leading-relaxed">
                     Therapy offers space to slow down, understand what’s happening emotionally and physically, and begin responding to stress in ways that feel more sustainable.
                    </p>
                </div>

                <div className="border-t border-neutral-300 pt-6">
                    <a href="#" className="flex items-center gap-2 group w-fit">
                        <span className="text-[10px] font-subheading font-bold uppercase tracking-[0.2em] text-neutral-900 group-hover:underline decoration-1 underline-offset-4">
                            Get in touch
                        </span>
                        <span className="text-[10px] font-bold text-neutral-400">...</span>
                    </a>
                </div>
            </div>

            {/* Right: Image Collage */}
            <div className="relative h-[400px] md:h-auto w-full">
                {image ? (
                    <Image
                        src={image}
                        alt="Collage of calming items"
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-neutral-300 flex items-center justify-center">
                        Collage Image
                    </div>
                )}
            </div>
        </section>
    );
}
