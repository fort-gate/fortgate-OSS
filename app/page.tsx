import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <UseCases />
        <Stats />
      </main>
    </>
  );
}
