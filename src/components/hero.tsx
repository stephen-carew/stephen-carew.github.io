'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Github, Linkedin, Twitter, Code2, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const titles = useMemo(() => [
    'Blockchain Engineer',
    'Full Stack Developer',
    'Web3 Enthusiast',
    'Problem Solver'
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullTitle = titles[currentTitle];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullTitle.substring(0, displayText.length - 1)
            : currentFullTitle.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle, titles]);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 text-primary/20"
        >
          <Code2 size={60} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-20 text-primary/20"
        >
          <Zap size={40} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-40 left-20 text-primary/20"
        >
          <Github size={50} />
        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-32 left-1/3 text-yellow-400/60"
        >

        </motion.div>
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: '1.5s' }}
          className="absolute bottom-32 right-1/3 text-yellow-400/60"
        >

        </motion.div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className="mb-6"
          >
            <Badge variant="outline" className="text-lg px-4 py-2 animate-pulse">
              👋 Hello, I&apos;m
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 80
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-black bg-clip-text text-transparent"
          >
            Stephen Carew
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 flex items-center justify-center gap-2 flex-wrap"
          >
            <span className="text-muted-foreground">I am a</span>
            <motion.span
              key={displayText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary font-semibold min-w-[300px] text-left relative"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A passionate <strong className="text-primary">Full-Stack Developer</strong> and{' '}
            <strong className="text-primary">Blockchain Engineer</strong> with 2+ years of experience creating
            innovative web applications and decentralized solutions. Currently pursuing
            a Master&apos;s in Instrumentation and Control in the UK.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mb-8 max-w-md mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="p-4 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-0">
                    <motion.div
                      className="text-2xl md:text-3xl font-bold text-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 1 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild className="group relative overflow-hidden">
                <a href="#projects">
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" asChild className="group">
                <a href="#contact">
                  Let&apos;s Talk
                  <MessageCircle className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center gap-4 mt-8"
          >
            {[
              { icon: Github, href: "https://github.com/stephen-carew" },
              { icon: Linkedin, href: "https://linkedin.com/in/stephen-carew" },
              { icon: Twitter, href: "https://twitter.com/stephen_carew" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default Hero;