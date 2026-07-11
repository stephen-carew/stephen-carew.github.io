"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
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
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 sm:gap-2.5 text-cream-50 font-semibold tracking-tight text-base sm:text-lg shrink-0"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-white/[0.08] ring-1 ring-white/[0.10]">
              <img
                src="/IMG_3191.jpg"
                alt="Stephen Carew"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden sm:inline">Stephen Carew</span>
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

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.href}
                variant="ghost"
                size="sm"
                className="h-9 w-9 rounded-xl text-text-secondary hover:text-cream-50 hover:bg-white/[0.06]"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            <div className="ml-2 h-6 w-px bg-white/[0.10]" />
            <a
              href="#contact"
              className="ml-1 rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-cream-100 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-ink-950 transition-all duration-200 active:scale-95"
            >
              Contact
            </a>
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
              <SheetContent
                side="right"
                className="w-full max-w-[300px] border-l border-white/[0.08] bg-ink-900/95 backdrop-blur-2xl p-0 [&>button]:top-4 [&>button]:right-4 [&>button]:text-text-secondary [&>button]:hover:text-cream-50"
              >
                {/* Sheet header */}
                <div className="flex items-center gap-2.5 px-5 h-16 border-b border-white/[0.06]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-white/[0.08] ring-1 ring-white/[0.10] shrink-0">
                    <img
                      src="/IMG_3191.jpg"
                      alt="Stephen Carew"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="text-cream-50 font-semibold text-base">
                    Stephen Carew
                  </span>
                </div>

                {/* Nav items */}
                <div className="flex flex-col gap-1 px-3 pt-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <a
                        href={item.href}
                        className="px-4 py-3.5 text-base font-medium text-text-secondary hover:text-cream-50 hover:bg-white/[0.04] rounded-2xl transition-colors"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                <div className="h-px bg-white/[0.08] mx-5 my-4" />

                {/* Social + CTA */}
                <div className="px-5 space-y-4">
                  <div className="flex items-center gap-3">
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
                  <SheetClose asChild>
                    <a
                      href="#contact"
                      className="block w-full text-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-cream-100"
                    >
                      Get in touch
                    </a>
                  </SheetClose>
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
