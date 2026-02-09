import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-[#F9F7F2]">
            <div className="flex items-center justify-center  gap-2">
                <Image src="/maya logo.png" alt="Maya Logo" width={32} height={32} className="rounded-full" />
                <span className="text-xl font-serif text-[#3F5F5B]  leading-tight tracking-tight">Dr.Maya Reynolds</span>
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
