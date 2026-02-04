'use client';

import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Terminal, FileCode } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-24 pb-12">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-2 text-primary font-mono text-sm tracking-wide uppercase"
            >
              <Terminal className="w-4 h-4" />
              <span>Full-Stack Engineer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-foreground"
            >
              Building Scalable <br />
              <span className="text-primary">Distributed Systems</span> & <br />
              Blockchain Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              I architect and deliver enterprise-grade web applications and decentralized solutions.
              Specializing in high-performance React architectures, Solana smart contracts,
              and cloud-native infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <a href="#projects">
                  View Technical Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt pt-8 border-t border-border/50 flex flex-wrap gap-8 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                <a href="https://github.com/stephen-carew" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  github.com/stephen-carew
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                <a href="https://linkedin.com/in/stephen-carew" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  linkedin.com/in/stephen-carew
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-5 h-5" />
                <span className="font-mono text-sm">2+ Years Experience</span>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/IMG_3191.jpg"
                  alt="Stephen Carew"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
