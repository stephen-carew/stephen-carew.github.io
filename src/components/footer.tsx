"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { sectionReveal, cardReveal } from "@/lib/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/stephen-carew", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/stephen-carew", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/stephen_carew", label: "Twitter" },
    { icon: Mail, href: "mailto:hi@stephencarew.dev", label: "Email" },
  ];

  const quickLinks = [
    { label: "Capabilities", href: "#skills" },
    { label: "Case Studies", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-ink-950">
      <div className="mx-auto max-w-[1180px] px-6 py-12">
        <div className="grid grid-cols-1 gap-10 mb-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionReveal}
            className="space-y-4"
          >
            <span className="font-serif text-lg text-cream-50">
              Stephen Carew
            </span>
            <p className="max-w-xs font-mono text-sm leading-6 text-text-secondary">
              Product engineer. I build SaaS end-to-end and ship to production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={cardReveal(0.08)}
            className="space-y-4"
          >
            <h4 className="font-mono text-sm tracking-[0.14em] text-cream-50">
              INDEX
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-text-secondary transition-colors duration-150 hover:text-cream-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={cardReveal(0.16)}
            className="space-y-4"
          >
            <h4 className="font-mono text-sm tracking-[0.14em] text-cream-50">
              CONNECT
            </h4>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/[0.12] text-text-secondary transition-colors duration-150 hover:text-cream-50 hover:border-white/[0.3] hover:bg-white/[0.04]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="font-mono text-xs text-text-muted">
              Available for freelance and full-time roles.
            </p>
          </motion.div>
        </div>

        <div className="h-px bg-white/[0.08] mb-6" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-[13px] tracking-[0.12em] text-text-muted">
            © {currentYear} STEPHEN CAREW — ENGINEERED, NOT TEMPLATED
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-[4px] px-4 py-2 font-mono text-sm text-text-secondary transition-colors duration-150 hover:text-cream-50 hover:bg-white/[0.04]"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
