import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import DevSection from "@/components/DevSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <UseCases />
        <Stats />
        <CaseStudies />
        <DevSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
