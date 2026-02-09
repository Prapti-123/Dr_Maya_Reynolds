export default function Footer() {
    return (
        <footer className="bg-[#F9F7F2] pt-24 pb-12 px-8 md:px-24 border-t border-transparent">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-24">
                {/* Column 1: Contact */}
                <div className="flex flex-col items-start gap-1">
                    <h3 className="text-lg font-serif text-green-900 mb-6">Dr. Maya Reynolds, PsyD<br />Licensed Clinical Psychologist</h3>
                    <p className="text-xs text-green-900 leading-relaxed font-bold">Santa Monica, California</p>
 <p className="text-xs text-green-900 leading-relaxed font-bold"> 123th Street 45 W, Santa Monica, CA 90401</p>
                    <a href="mailto:email@example.com" className="text-xs text-green-900 font-bold underline decoration-1 underline-offset-4 mb-1">
                        drmaya@511gmail.com
                    </a>
                    <a href="tel:5555555555" className="text-xs text-green-900 font-bold underline decoration-1 underline-offset-4">
                        (555) 555-5555
                    </a>
                </div>

                {/* Column 2: Hours */}
                <div className="flex flex-col items-start md:items-center">
                    <div className="flex flex-col items-start">
                        <h4 className="text-sm font-subheading font-bold text-green-900 uppercase tracking-widest mb-6">Hours</h4>
                        <p className="text-xs text-green-900 font-bold mb-1">Monday – Friday</p>
                        <p className="text-xs text-green-900 font-bold">10am – 6pm</p>
                    </div>
                </div>

                {/* Column 3: Find */}
                <div className="flex flex-col items-start md:items-end">
                    <div className="flex flex-col items-start">
                        <h4 className="text-sm font-subheading font-bold text-green-900 uppercase tracking-widest mb-6">Find</h4>
                        <nav className="flex flex-col gap-1">
                            <a href="#" className="text-xs text-green-900 font-bold underline decoration-1 underline-offset-4">Home</a>
                            <a href="#" className="text-xs text-green-900 font-bold underline decoration-1 underline-offset-4">Contact</a>
                            <a href="#" className="text-xs text-green-900 font-bold underline decoration-1 underline-offset-4">Blog</a>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col items-center gap-4 border-t border-transparent pt-12">
                <div className="flex flex-wrap justify-center gap-4 text-[10px] text-green-900 font-bold underline decoration-1 underline-offset-2 uppercase tracking-wide">
                    <a href="#">Privacy & Cookies Policy</a>
                    <a href="#">Good Faith Estimate</a>
                    <a href="#">Website Terms & Conditions</a>
                    <a href="#">Disclaimer</a>
                </div>
                <p className="text-[10px] text-green-900 font-bold">
                    Website Template Credits: <a href="#" className="underline decoration-1 underline-offset-2">Take Therapy</a>
                </p>
                <p className="text-[10px] text-green-900 mt-8">
                    All Rights Reserved © 2024 Your Business Name Here, LLC.
                </p>
            </div>
        </footer>
    );
}
