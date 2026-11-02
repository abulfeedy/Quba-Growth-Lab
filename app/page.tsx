import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-obsidian">
      <Navbar />
      <Hero />
      <Pillars />
      <CaseStudies />
      <Pricing />
      <Process />
      <CTA />
    </main>
  );
}
