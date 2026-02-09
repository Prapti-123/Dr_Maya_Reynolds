"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <div className="bg-soft-linen min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=1500w"
                        alt="Contact Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="relative h-full flex items-center justify-center px-8">
                    <Reveal>
                        <div className="text-center text-white">
                            <h1 className="text-5xl md:text-7xl font-serif mb-4">Get in Touch</h1>
                            <p className="text-lg md:text-xl font-light tracking-wide">
                                Let's start your journey together
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Book an Appointment Section */}
            <section className="px-8 md:px-24 py-24 bg-soft-linen">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-serif text-deep-teal mb-6">
                            Book an appointment.
                        </h2>
                        <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-10 max-w-2xl mx-auto">
                            I'm here to support you on your journey to wellness. Schedule your first session today
                            and take the first step towards a healthier, more fulfilling life. I look forward to working with you.
                        </p>
                        <div className="inline-block">
                            <Button
                                className="bg-deep-teal hover:bg-warm-copper text-white px-10 py-6 rounded-none font-bold uppercase tracking-widest text-sm transition-colors shadow-md hover:shadow-lg"
                            >
                                Book Now →
                            </Button>
                            <p className="text-xs text-neutral-500 mt-4 italic">
                                Available Monday – Friday, 10am – 6pm
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* My Office Section */}
            <section className="px-8 md:px-24 py-20 bg-deep-teal">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Office Info */}
                    <div className="text-white space-y-8">
                        <Reveal width="100%">
                            <h2 className="text-4xl md:text-5xl font-serif mb-8">
                                My Office
                            </h2>
                            <div>
                                <p className="text-base font-medium leading-relaxed">
                                    123 Example Street<br />
                                    Minneapolis, MN
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-serif mb-4">
                                    Hours
                                </h3>
                                <p className="text-base font-medium leading-relaxed">
                                    Monday – Friday<br />
                                    10am – 6pm
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column - Map */}
                    <Reveal width="100%">
                        <div className="w-full h-[400px] md:h-[500px] bg-white shadow-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.6454239267!2d-93.26518368444!3d44.97997997909845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location Map"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Find me on social Section */}
            <section className="px-8 md:px-24 py-20 bg-soft-linen">
                <div className="max-w-7xl mx-auto">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-serif text-deep-teal mb-12">
                            Find me on social.
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Image 1 - Lilac flowers */}
                            <div className="aspect-square overflow-hidden bg-neutral-200">
                                <img
                                    src="/contact-lilac-bouquet.jpg"
                                    alt="Lilac flowers bouquet"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Image 2 - Person reading */}
                            <div className="aspect-square overflow-hidden bg-neutral-200">
                                <img
                                    src="/contact-person-reading.jpg"
                                    alt="Person reading by bookshelf"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Image 3 - Coffee and journal */}
                            <div className="aspect-square overflow-hidden bg-neutral-200">
                                <img
                                    src="/contact-coffee-journal.jpg"
                                    alt="Coffee and journal flatlay"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Image 4 - Lilac bouquet with ribbon */}
                            <div className="aspect-square overflow-hidden bg-neutral-200">
                                <img
                                    src="/contact-lilac-ribbon.jpg"
                                    alt="Lilac bouquet with ribbon"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Contact Information & Form Section */}
            <section className="px-8 md:px-24 py-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-12">
                        <Reveal width="100%">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif text-deep-teal mb-8">
                                    Let's Connect
                                </h2>
                                <p className="text-base text-neutral-700 leading-relaxed mb-6">
                                    Whether you're ready to begin therapy or just have questions,
                                    I'm here to help. Reach out and let's discuss how we can work
                                    together to support your mental health journey.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-subheading font-bold text-deep-teal uppercase tracking-widest mb-4">
                                        Location
                                    </h3>
                                    <p className="text-sm text-neutral-700 font-medium">
                                        123 Example Road<br />
                                        Minneapolis, MN 55401
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-subheading font-bold text-green-900 uppercase tracking-widest mb-4">
                                        Contact
                                    </h3>
                                    <div className="space-y-2">
                                        <a
                                            href="mailto:email@example.com"
                                            className="block text-sm text-neutral-700 font-medium hover:underline underline-offset-4"
                                        >
                                            email@example.com
                                        </a>
                                        <a
                                            href="tel:5555555555"
                                            className="block text-sm text-neutral-700 font-medium hover:underline underline-offset-4"
                                        >
                                            (555) 555-5555
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-subheading font-bold text-green-900 uppercase tracking-widest mb-4">
                                        Hours
                                    </h3>
                                    <div className="space-y-1">
                                        <p className="text-sm text-neutral-700 font-medium">
                                            Monday – Friday
                                        </p>
                                        <p className="text-sm text-neutral-700 font-medium">
                                            10am – 6pm
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-sm font-subheading font-bold text-green-900 uppercase tracking-widest mb-4">
                                    Follow
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-sm text-neutral-700 font-medium hover:underline underline-offset-4"
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm text-neutral-700 font-medium hover:underline underline-offset-4"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm text-neutral-700 font-medium hover:underline underline-offset-4"
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <Reveal width="100%">
                            <Card className="bg-white border-none shadow-lg rounded-none p-8 md:p-12">
                                <h3 className="text-2xl font-serif text-deep-teal mb-6">
                                    Send a Message
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="firstName"
                                                className="block text-xs font-subheading font-bold text-deep-teal uppercase tracking-widest mb-2"
                                            >
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-neutral-300 focus:border-deep-teal focus:outline-none transition-colors bg-soft-linen"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="lastName"
                                                className="block text-xs font-subheading font-bold text-green-900 uppercase tracking-widest mb-2"
                                            >
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-neutral-300 focus:border-deep-teal focus:outline-none transition-colors bg-soft-linen"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-xs font-subheading font-bold text-green-900 uppercase tracking-widest mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-neutral-300 focus:border-deep-teal focus:outline-none transition-colors bg-soft-linen"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-xs font-subheading font-bold text-green-900 uppercase tracking-widest mb-2"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-neutral-300 focus:border-deep-teal focus:outline-none transition-colors bg-soft-linen"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-xs font-subheading font-bold text-green-900 uppercase tracking-widest mb-2"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-neutral-300 focus:border-deep-teal focus:outline-none transition-colors resize-none bg-soft-linen"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-deep-teal hover:bg-warm-copper text-white py-6 rounded-none font-bold uppercase tracking-widest text-sm transition-colors"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </Card>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
