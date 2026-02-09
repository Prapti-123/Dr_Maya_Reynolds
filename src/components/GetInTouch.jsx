import Link from "next/link";

export default function GetInTouch() {
    return (
        <section className="bg-[#F9F7F2] px-12 md:px-24 py-12">
            <div className="border-t border-neutral-300 pt-8">
                <Link href="#" className="flex items-center gap-2 group">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 group-hover:underline decoration-1 underline-offset-4">
                        Get in touch
                    </span>
                    <span className="text-[10px] font-bold text-neutral-400">...</span>
                </Link>
            </div>
        </section>
    );
}
