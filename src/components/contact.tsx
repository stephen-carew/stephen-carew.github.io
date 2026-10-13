"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { sectionReveal, easeSmoothOut } from "@/lib/motion";
import { Annot, Field, SheetStamp, DimRule, SettleBlock } from "@/components/drawing";

const RESUME_HREF = "/Stephen_Carew_Instrumentation_Engineer.pdf";

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
        headers: { "Content-Type": "application/json" },
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
      // Static export has no API; hand the order to the visitor's mail client.
      const subject = encodeURIComponent(
        formData.subject || "Portfolio enquiry",
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
      );
      window.open(
        `mailto:hi@stephencarew.dev?subject=${subject}&body=${body}`,
        "_blank",
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }
  };

  const inputCls =
    "w-full border-b border-rule-strong bg-transparent px-1 py-3 font-sans text-[16px] font-medium text-ink placeholder:text-ink-faint/70 outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="relative py-24 md:py-28" ref={ref}>
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SettleBlock inView className="mb-10">
          <div className="mb-3 flex items-center gap-4">
            <SheetStamp sheet="06" />
            <DimRule className="hidden w-40 md:flex" />
          </div>
          <h2 className="font-sans text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink">
            Get in touch.
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-[16px] leading-7 font-medium text-ink-soft">
            Full-time roles, contract work, and product problems all start
            here. Send the details and I&apos;ll answer directly.
          </p>
        </SettleBlock>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={sectionReveal}
            className="space-y-4 lg:col-span-4"
          >
            <Field label="Email" strong>
              <a
                href="mailto:hi@stephencarew.dev"
                className="break-all text-accent-deep hover:underline"
              >
                hi@stephencarew.dev
              </a>
            </Field>
            <Field label="Elsewhere">
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="https://github.com/stephen-carew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-deep"
                  >
                    github.com/stephen-carew ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/stephen-carew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-deep"
                  >
                    linkedin.com/in/stephen-carew ↗
                  </a>
                </li>
              </ul>
            </Field>
            <Field label="Documents">
              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-deep"
              >
                Résumé — Instrumentation / Product Engineer (PDF) ↗
              </a>
            </Field>

            <div className="border-2 border-ink px-5 py-4 text-center">
              <Annot className="mb-1 block">Availability</Annot>
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink">
                Full-time · Contract · UK / Remote
              </p>
            </div>
          </motion.div>

          {/* The work order form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={sectionReveal}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit}
              className="relative border border-ink bg-paper"
            >
              {/* form header band */}
              <div className="flex items-center justify-between border-b border-ink bg-ink px-6 py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper">
                  Contact — SC-2026
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
                  Form 06-A
                </span>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-2 p-6 sm:grid-cols-2 sm:p-8">
                <div>
                  <Annot className="mb-1 block">Your name</Annot>
                  <input
                    name="name"
                    placeholder="First and last name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={inputCls}
                  />
                </div>
                <div>
                  <Annot className="mb-1 block">Email</Annot>
                  <input
                    name="email"
                    type="email"
                    placeholder="Where the reply goes"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Annot className="mb-1 block">Subject</Annot>
                  <input
                    name="subject"
                    placeholder="Role, project, or problem"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Annot className="mb-1 block">Message</Annot>
                  <textarea
                    name="message"
                    placeholder="Context, constraints, timelines — as much as you have."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 border-t border-rule px-6 pb-6 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-200 hover:bg-accent-deep disabled:opacity-50"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {submitStatus === "success" && (
                  <motion.span
                    initial={{ opacity: 0, scale: 1.1, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: -6 }}
                    transition={{ duration: 0.3, ease: easeSmoothOut }}
                    className="border-2 border-accent px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-deep"
                  >
                    Sent ✓
                  </motion.span>
                )}
                {submitStatus === "error" && (
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-redline">
                    Didn&apos;t send — please email me directly
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;
