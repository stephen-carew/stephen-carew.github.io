import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import SkillsMatrix from "@/components/skills-matrix";
import Projects from "@/components/projects";
import Education from "@/components/education";
import EnhancedContact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-cream-50">
      {/* Fixed atmospheric background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-warm-atmosphere" />
        <div className="noise-overlay" />
      </div>

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <SkillsMatrix />
        <Projects />
        <Education />
        <EnhancedContact />
      </main>
      <Footer />
    </div>
  );
}
