"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/stephen-carew",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/stephen-carew",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/stephen_carew",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:stephen.carw@outlook.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Expertise", href: "#skills" },
    { label: "Case Studies", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1180px] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-white/[0.08] ring-1 ring-white/[0.10]">
                <img
                  src="/IMG_3191.jpg"
                  alt="Stephen Carew"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-lg font-semibold text-cream-50">
                Stephen Carew
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Full-stack product engineer. I build SaaS applications end-to-end
              — database design, API architecture, UI components, payment
              integrations, and AI features — then ship them to production.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-cream-50">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-cream-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-cream-50">Connect</h4>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-text-secondary hover:text-cream-50 hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-text-muted">
              Available for freelance projects and collaborations
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="h-px bg-white/[0.06] mb-6" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-1.5 text-sm text-text-muted">
            <span>© {currentYear} Stephen Carew. Made with</span>
            <Heart className="h-3.5 w-3.5 text-accent-dust fill-current" />
            <span>using Next.js</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-cream-50 transition-colors rounded-xl px-4 py-2 hover:bg-white/[0.04] border border-white/[0.06]"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
