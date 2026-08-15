"use client";

import { motion, useInView } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { useRef, useState } from "react";
import { sectionReveal, cardReveal } from "@/lib/motion";

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch {
      const subject = encodeURIComponent(
        formData.subject || "Contact from Portfolio",
      );
      const body = encodeURIComponent(
        `Hi Stephen,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );
      const mailtoUrl = `mailto:hi@stephencarew.dev?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, "_blank");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hi@stephencarew.dev",
      href: "mailto:hi@stephencarew.dev",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "United Kingdom",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/stephen-carew" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/stephen-carew" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/stephen_carew" },
  ];

  return (
    <section id="contact" className="relative bg-ink-950 py-28" ref={ref}>
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={sectionReveal}
          className="mb-14"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.22em] text-accent-sand">
            SYS.06 — CONTACT
          </p>
          <h2 className="max-w-3xl font-serif text-5xl leading-[1.03] tracking-[-0.02em] text-cream-50 md:text-[86px]">
            Let&apos;s build
            <br />
            something real.
          </h2>
          <p className="mt-6 max-w-xl font-mono text-base leading-7 text-text-secondary">
            Have a product, a hard problem, or a role worth doing well?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={cardReveal(0.1)}
            className="space-y-8 lg:col-span-5"
          >
            <div>
              <a
                href="mailto:hi@stephencarew.dev"
                className="font-mono text-2xl text-cream-50 transition-colors hover:text-accent-sand"
              >
                hi@stephencarew.dev
              </a>
              <div className="mt-2 h-px w-56 bg-accent-sand" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="rounded-[4px] border border-white/[0.12] bg-ink-900 p-5 transition-colors duration-200 hover:border-white/[0.24]"
                >
                  <div className="flex items-center gap-3">
                    <info.icon className="h-4 w-4 text-accent-sand" />
                    <div>
                      <div className="font-mono text-sm text-cream-50">
                        {info.label}
                      </div>
                      <a
                        href={info.href}
                        className="font-mono text-xs text-text-secondary transition-colors hover:text-cream-50"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="mb-3 font-mono text-sm tracking-[0.14em] text-cream-50">
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
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={cardReveal(0.2)}
            className="lg:col-span-7"
          >
            <div className="rounded-[4px] border border-white/[0.12] bg-ink-900 p-6 md:p-8">
              <h3 className="font-serif text-2xl text-cream-50">Send a message</h3>
              <p className="mb-6 mt-1 font-mono text-sm text-text-secondary">
                I&apos;ll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-[4px] border border-white/[0.12] bg-ink-950 px-4 py-3 font-mono text-sm text-cream-50 placeholder:text-text-muted outline-none transition-colors focus:border-white/[0.3] focus:bg-ink-900"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-[4px] border border-white/[0.12] bg-ink-950 px-4 py-3 font-mono text-sm text-cream-50 placeholder:text-text-muted outline-none transition-colors focus:border-white/[0.3] focus:bg-ink-900"
                  />
                </div>
                <input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-[4px] border border-white/[0.12] bg-ink-950 px-4 py-3 font-mono text-sm text-cream-50 placeholder:text-text-muted outline-none transition-colors focus:border-white/[0.3] focus:bg-ink-900"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full rounded-[4px] border border-white/[0.12] bg-ink-950 px-4 py-3 font-mono text-sm text-cream-50 placeholder:text-text-muted outline-none transition-colors focus:border-white/[0.3] focus:bg-ink-900 resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-[4px] bg-cream-50 px-6 py-3 font-mono text-sm font-medium text-ink-950 transition-colors duration-150 hover:bg-cream-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="h-4 w-4 animate-pulse" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 font-mono text-sm text-status-success"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Message sent. I&apos;ll get back to you.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 font-mono text-sm text-status-danger"
                  >
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;
