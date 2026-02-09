import Image from "next/image";

export default function Hero({ heroImage }) {
    return (
        <section className="grid md:grid-cols-2 min-h-[600px]">
            {/* Left: Image */}
            <div className="relative h-[400px] md:h-auto w-full">
                {heroImage && (
                    <div className="relative w-full h-full">
                        {/* Using a placeholder or the generated image */}
                        <Image
                            src={heroImage}
                            alt="Woman sitting by window"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
                {!heroImage && (
                    <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                        Hero Image Placeholder
                    </div>
                )}
            </div>

            {/* Right: Text */}
            <div className="flex flex-col justify-center px-12 py-16 md:px-24 bg-[#F2ECE6]">
                <h1 className="text-3xl md:text-5xl font-serif font-medium text-neutral-900 mb-8 leading-tight">
                    You don’t have to keep pushing through this alone.
                </h1>
                <p className="text-xs font-bold text-neutral-600 mb-10 uppercase tracking-widest">
                   If any of this feels familiar, therapy may help:
                </p>

                <ul className="space-y-4 mb-16">
                    {[
                        "Constant overthinking or difficulty turning your mind off",
                        "Feeling emotionally on edge or easily overwhelmed",
                        "Panic, anxiety, or persistent worry",
                        "Tension in your body or trouble sleeping",
                        "Feeling burned out, disconnected, or exhausted despite functioning well"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-neutral-700">
                            <span className="mt-2 w-1.5 h-1.5 bg-neutral-900 rounded-full shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>

                <p className="text-sm text-neutral-700 leading-relaxed italic border-l-2 border-[#3F5F5B] pl-6 mb-12">
                    With a supportive and grounded approach, we work together to help you feel more regulated, resilient, and connected to yourself.
                </p>

                <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] hover:underline decoration-1 underline-offset-4">
                    Work with me ...
                </a>
            </div>
        </section>
    );
}
