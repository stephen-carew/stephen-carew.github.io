import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import EnhancedContact from '@/components/enhanced-contact';
import Footer from '@/components/footer';
import ScrollProgress from '@/components/scroll-progress';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <EnhancedContact />
      </main>
      <Footer />
    </div>
  );
}
