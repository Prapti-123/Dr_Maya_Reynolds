import { Cormorant_Garamond, Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Lilac Template Clone",
  description: "A clone of the Squarespace Lilac template.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${libre.variable} ${source.variable} antialiased bg-background text-foreground font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
