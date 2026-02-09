import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-[#F9F7F2]">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-full" /> {/* Logo Placeholder */}
                <span className="text-xl font-bold tracking-tight">Lilac Template</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-lg font-medium hover:underline">
                    Home
                </Link>


                <Link href="/blog" className="text-lg font-medium hover:underline">
                    Blog
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:underline">
                    Contact
                </Link>
                <Link href="/office" className="text-lg font-medium hover:underline">
                    Our Office
                </Link>
            </div>
        </nav>
    );
}
