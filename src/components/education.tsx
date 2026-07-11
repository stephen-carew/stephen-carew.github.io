"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Instrumentation and Control, MSc",
    institution: "United Kingdom",
    year: "Current",
    description:
      "Specializing in advanced control systems, industrial automation, and distributed sensor networks. Research focused on real-time data processing and system reliability.",
    tags: ["Control Systems", "Automation", "IoT", "Data Processing"],
  },
  {
    degree: "Electrical and Electronics Engineering, BSc Hons",
    institution: "Australia",
    year: "Graduated",
    description:
      "Foundation in circuit theory, digital electronics, and signal processing. Developed strong analytical and problem-solving skills applied to hardware-software integration.",
    tags: [
      "Circuit Design",
      "Digital Electronics",
      "Embedded Systems",
      "Signal Processing",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium text-accent-sand tracking-wide uppercase">
            Academic background
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-cream-50">
            Education & research
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary leading-relaxed">
            Academic background and ongoing research in advanced engineering
            systems.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-6 md:p-7 transition-colors duration-300 hover:border-white/[0.14]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl">
                      <GraduationCap className="h-5 w-5 text-accent-sand" />
                    </div>
                    <h3 className="text-lg font-semibold text-cream-50">
                      {item.degree}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Calendar className="h-4 w-4" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-2">
                  {item.institution}
                </p>

                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
