import { Button } from "@/components/ui/button";

export default function GetStarted() {
    return (
        <section className="bg-[#3F5F5B] py-32 px-8 text-center text-white">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                   Ready to feel more steady and supported?
                </h2>
                <p className="text-xs md:text-sm mb-12 max-w-lg leading-relaxed font-medium">
                  Therapy can help you better understand your patterns, feel more regulated, and build a stronger relationship with yourself over time.
                </p>

                <Button variant="outline" className="rounded-none border-white text-white hover:bg-[#B87333] hover:border-[#B87333] transition-colors uppercase tracking-widest text-[10px] font-bold px-8 py-6 bg-transparent">
                    Contact Dr. Reynolds →
                </Button>
            </div>
        </section>
    );
}
