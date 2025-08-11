'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/stephen-carew',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com/in/stephen-carew',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://twitter.com/stephen_carew',
      label: 'Twitter'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:stephen.carew@example.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Stephen Carew</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Blockchain Engineer & Full Stack Developer passionate about creating 
              innovative solutions that bridge traditional web development with 
              cutting-edge blockchain technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border hover:bg-muted transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Available for freelance projects and collaborations
            </p>
          </motion.div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Stephen Carew. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using Next.js & Shadcn UI</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;