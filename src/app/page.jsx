import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import FullBloom from "@/components/FullBloom";
import FulfillingLife from "@/components/FulfillingLife";
import AboutLilac from "@/components/AboutLilac";
import FAQ from "@/components/FAQ";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import GetStarted from "@/components/GetStarted";
import Reveal from "@/components/Reveal";

export default function Home() {
  // Image paths (will be replaced with actual generated paths)
  const images = {
    hero: "/hero.jpg",
    specialties: {
      selfEsteem: "/self-esteem.jpg",
      relationships: "/relationships.jpg",
      burnout: "/burnout.jpg"
    },
    fullBloom: "/full-bloom.jpg",
    fulfillingLife: "/fulfilling-life.jpg",
    aboutLilac: {
      arch: "/about-arch.jpg",
      circle: "/about-circle.jpg"
    },
    faq: "/faq-new.jpg"
  };

  return (
    <>
      <Reveal width="100%">
        <FullBloom image={images.fullBloom} />
      </Reveal>
      <Reveal width="100%">
        <FulfillingLife image={images.fulfillingLife} />
      </Reveal>
      <Reveal width="100%">
        <Specialties images={images.specialties} />
      </Reveal>
      <Reveal width="100%">
        <Hero heroImage={images.hero} />
      </Reveal>
      <Reveal width="100%">
        <AboutLilac images={images.aboutLilac} />
      </Reveal>
      <Reveal width="100%">
        <FAQ image={images.faq} />
      </Reveal>
      <Reveal width="100%">
        <ProfessionalBackground />
      </Reveal>
      <Reveal width="100%">
        <GetStarted />
      </Reveal>
    </>
  );
}
