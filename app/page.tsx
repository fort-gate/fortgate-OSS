import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import UseCases from "@/components/UseCases";
import CaseStudies from "@/components/CaseStudies";
import Stats from "@/components/Stats";
import PrivacyModel from "@/components/PrivacyModel";
import Security from "@/components/Security";
import DevSection from "@/components/DevSection";
import Standards from "@/components/Standards";
import Segments from "@/components/Segments";
import Developers from "@/components/Developers";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <LogoMarquee />
        {/* Fortgate ID */}
        <UseCases />
        <CaseStudies />
        <Stats />
        <PrivacyModel />
        <Security />
        {/* Fortgate AML */}
        <DevSection />
        <Standards />
        <Segments />
        <Developers />
        <FAQ />
        <ContactCTA />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
