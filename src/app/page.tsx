import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import BrandSoul from "@/sections/About";
import Experience from "@/sections/Experience";
import SelectedWorks from "@/sections/SelectedWorks";
import CTASection from "@/sections/CTASection";
import Process from "@/sections/Process";
import Testimonial from "@/sections/Testimonial";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <BrandSoul />
      <Experience />
      <SelectedWorks />
      <CTASection />
      <Process />
      <Testimonial />
      <Footer />
    </>
  );
}
