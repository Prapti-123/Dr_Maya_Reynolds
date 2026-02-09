import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="flex-grow font-sans">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="relative">
                        <Reveal width="100%">
                            <div className="overflow-hidden rounded-t-[150px] aspect-[3/4] w-full max-w-md mx-auto">
                                <img
                                    src="/blog-person-reading.jpg"
                                    alt="Person reading a book"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex flex-col space-y-6 text-center md:text-left max-w-lg mx-auto md:mx-0">
                        <Reveal width="100%">
                            <h1 className="text-5xl md:text-7xl font-medium text-deep-teal">
                                Discover The Latest Article On Mental Health
                            </h1>
                            <p className="text-xl text-deep-teal/80 leading-relaxed">
                                My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
                            </p>
                            <p className="text-xl font-bold text-deep-teal">
                                Glad you're here.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Blog Post Grid Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto">
                    {[
                        {
                            id: 1,
                            title: "Embracing Change",
                            image: "/blog-embracing-change.jpg"
                        },
                        {
                            id: 2,
                            title: "Unprocessed Emotions",
                            image: "/blog-unprocessed-emotions.jpg"
                        },
                        {
                            id: 3,
                            title: "Unfaking It",
                            image: "/blog-un-faking-it.jpg"
                        },
                        {
                            id: 4,
                            title: "Meditation Practices",
                            image: "/blog-meditation-practices.jpg"
                        }
                    ].map((post) => (
                        <Reveal key={post.id} width="100%">
                            <div className="flex flex-col space-y-4">
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    
                                    <h3 className="text-2xl font-medium text-deep-teal">
                                        {post.title}
                                    </h3>
                                    <Link href={`/blog/${post.id}`} className="text-sm font-bold border-b border-warm-copper w-max pb-0.5 hover:opacity-70 transition-opacity text-deep-teal">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Subscribe Section */}
            <section className="w-full bg-deep-teal py-20 px-4">
                <Reveal width="100%">
                    <div className="max-w-3xl mx-auto border-2 border-soft-linen/30 p-12 md:p-16">
                        <div className="text-center space-y-6">
                            <h2 className="text-4xl md:text-5xl font-medium text-soft-linen">
                                Subscribe
                            </h2>
                            <p className="text-soft-linen text-lg">
                                Sign up with your email address to receive news and updates.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="px-6 py-3 w-full sm:w-auto sm:min-w-[300px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-warm-copper/50"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-warm-copper border-2 border-warm-copper text-white font-bold tracking-wider hover:bg-warm-copper/80 transition-colors duration-300"
                                >
                                    SIGN UP
                                </button>
                            </form>
                            <p className="text-soft-linen/80 text-sm mt-6">
                                We respect your privacy.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
