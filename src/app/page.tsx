import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import SkillsMatrix from '@/components/skills-matrix';
import Projects from '@/components/projects';
import Education from '@/components/education';
import EnhancedContact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
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
