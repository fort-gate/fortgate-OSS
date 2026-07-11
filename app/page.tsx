import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
      </main>
    </>
  );
}
