import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
