"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#skills", label: "Expertise" },
  { href: "#projects", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/stephen-carew",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/stephen-carew",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:stephen.carw@outlook.com",
    icon: Mail,
    label: "Email",
  },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass border-b border-white/[0.06]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2.5 text-cream-50 font-semibold tracking-tight text-lg"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-white/[0.08] ring-1 ring-white/[0.10]">
              <img
                src="/IMG_3191.jpg"
                alt="Stephen Carew"
                className="h-full w-full object-cover"
              />
            </span>
            Stephen Carew
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-cream-50 transition-colors duration-200 rounded-xl hover:bg-white/[0.04]"
              >
                {item.label}
              </a>
            ))}
          </div>


            <div className="ml-2 h-6 w-px bg-white/[0.10]" />
            <a
              href="#contact"
              className="ml-1 rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-cream-100 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 rounded-xl text-text-secondary hover:text-cream-50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l border-white/[0.08] bg-ink-900/95 backdrop-blur-2xl">
                <div className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="px-4 py-3 text-lg font-medium text-text-secondary hover:text-cream-50 hover:bg-white/[0.04] rounded-2xl transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="h-px bg-white/[0.08] my-4" />
                  <div className="flex items-center gap-3 px-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-text-secondary hover:text-cream-50 hover:bg-white/[0.06] transition-colors"
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navigation;
