import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import FeaturedCaseStudy from "@/components/featured-case-study";
import Projects from "@/components/projects";
import SkillsMatrix from "@/components/skills-matrix";
import SignalSystems from "@/components/signal-systems";
import EnhancedContact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      {/* Vellum: drafting grid + paper grain under everything */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-draft"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-grain"
        aria-hidden="true"
      />
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
