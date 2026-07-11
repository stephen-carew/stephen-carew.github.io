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
      const mailtoUrl = `mailto:stephen.carw@outlook.com?subject=${subject}&body=${body}`;

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
      value: "stephen.carw@outlook.com",
      href: "mailto:stephen.carw@outlook.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "United Kingdom",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/stephen-carew",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/stephen-carew",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/stephen_carew",
    },
  ];

  return (
    <section id="contact" className="relative py-28" ref={ref}>
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium text-accent-sand tracking-wide uppercase">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-cream-50">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-cream-50 mb-4">
                Get in touch
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/[0.14]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                      <info.icon className="h-4 w-4 text-accent-sand" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-cream-50">
                        {info.label}
                      </div>
                      <a
                        href={info.href}
                        className="text-xs text-text-secondary hover:text-cream-50 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
              <h3 className="text-xl font-semibold text-cream-50 mb-1">
                Send me a message
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-cream-50 placeholder:text-text-muted outline-none transition-colors focus:border-white/[0.20] focus:bg-white/[0.06]"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-cream-50 placeholder:text-text-muted outline-none transition-colors focus:border-white/[0.20] focus:bg-white/[0.06]"
                  />
                </div>
                <input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-cream-50 placeholder:text-text-muted outline-none transition-colors focus:border-white/[0.20] focus:bg-white/[0.06]"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-cream-50 placeholder:text-text-muted outline-none transition-colors focus:border-white/[0.20] focus:bg-white/[0.06] resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-cream-100 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="h-4 w-4 animate-pulse" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitStatus === "submitting" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-sm text-text-secondary"
                  >
                    Sending your message...
                  </motion.p>
                )}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 text-sm text-status-success"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 text-sm text-status-danger"
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
