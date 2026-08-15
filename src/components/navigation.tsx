"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeSmoothOut } from "@/lib/motion";

const navItems = [
  { href: "#skills", label: "Capabilities" },
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
    href: "mailto:hi@stephencarew.dev",
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
      transition={{ duration: 0.5, ease: easeSmoothOut }}
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-200",
        isScrolled
          ? "bg-ink-950/90 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2.5 text-cream-50 shrink-0"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-white/[0.08] ring-1 ring-white/[0.10]">
              <Image
                src="/IMG_3191.jpg"
                alt="Stephen Carew"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="hidden sm:inline font-serif text-lg tracking-tight">
              Stephen Carew
            </span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-mono text-sm text-text-secondary hover:text-cream-50 transition-colors duration-150 rounded-[4px] hover:bg-white/[0.04]"
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
                className="h-9 w-9 rounded-[4px] text-text-secondary hover:text-cream-50 hover:bg-white/[0.06]"
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
              className="ml-1 rounded-[4px] bg-cream-50 px-5 py-2 font-mono text-sm font-medium text-ink-950 transition-colors duration-150 hover:bg-cream-100"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="rounded-[4px] bg-cream-50 px-3 py-1.5 font-mono text-xs font-medium text-ink-950 transition-colors duration-150 active:bg-cream-100"
            >
              Contact
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 rounded-[4px] text-text-secondary hover:text-cream-50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-[300px] border-l border-white/[0.08] bg-ink-950 p-0 [&>button]:top-4 [&>button]:right-4 [&>button]:text-text-secondary [&>button]:hover:text-cream-50"
              >
                <div className="flex items-center gap-2.5 px-5 h-16 border-b border-white/[0.08]">
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-white/[0.08] ring-1 ring-white/[0.10] shrink-0">
                    <Image
                      src="/IMG_3191.jpg"
                      alt="Stephen Carew"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </span>
                  <span className="font-serif text-base text-cream-50">
                    Stephen Carew
                  </span>
                </div>

                <div className="flex flex-col gap-1 px-3 pt-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <a
                        href={item.href}
                        className="px-4 py-3.5 font-mono text-base text-text-secondary hover:text-cream-50 hover:bg-white/[0.04] rounded-[4px] transition-colors"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                <div className="h-px bg-white/[0.08] mx-5 my-4" />

                <div className="px-5 space-y-4">
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/[0.08] text-text-secondary hover:text-cream-50 hover:bg-white/[0.06] transition-colors"
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                  <SheetClose asChild>
                    <a
                      href="#contact"
                      className="block w-full text-center rounded-[4px] bg-cream-50 px-6 py-3 font-mono text-sm font-medium text-ink-950 transition-colors duration-150 hover:bg-cream-100"
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
