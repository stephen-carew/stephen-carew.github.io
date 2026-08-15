import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import FeaturedCaseStudy from "@/components/featured-case-study";
import SkillsMatrix from "@/components/skills-matrix";
import Projects from "@/components/projects";
import SignalSystems from "@/components/signal-systems";
import EnhancedContact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-cream-50">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <FeaturedCaseStudy />
        <Projects />
        <SkillsMatrix />
        <SignalSystems />
        <EnhancedContact />
      </main>
      <Footer />
    </div>
  );
}
