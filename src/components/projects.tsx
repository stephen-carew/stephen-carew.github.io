"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { projects as localProjects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { sectionReveal, cardReveal, easeSmoothOut } from "@/lib/motion";

const FLAGSHIP_ID = "tenora";

const categoryLabels: Record<string, string> = {
  all: "All work",
  saas: "SaaS",
  web: "Web",
  blockchain: "Web3",
  bot: "Bots",
};

const categories = Object.entries(categoryLabels).map(([id, label]) => ({
  id,
  label,
}));

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Tenora is presented as the flagship case study above this section.
  const listProjects = localProjects.filter(
    (project) => project.id !== FLAGSHIP_ID,
  );

  const filteredProjects =
    selectedCategory === "all"
      ? listProjects
      : listProjects.filter(
          (project) => project.category === selectedCategory,
        );

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={sectionReveal}
          className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 font-mono text-sm tracking-[0.22em] text-accent-sand">
              SYS.03 — MORE WORK
            </p>
            <h2 className="font-serif text-5xl tracking-[-0.02em] text-cream-50 md:text-[60px]">
              Everything else.
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "rounded-[4px] px-4 py-2 font-mono text-sm transition-colors duration-150",
                  selectedCategory === category.id
                    ? "bg-cream-50 text-ink-950"
                    : "border border-white/[0.12] text-text-secondary hover:text-cream-50 hover:border-white/[0.3]",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={cardReveal(index * 0.06)}
            >
              <div className="overflow-hidden rounded-[4px] border border-white/[0.10] bg-ink-900 transition-colors duration-200 hover:border-white/[0.22]">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Main content */}
                  <div
                    className={cn(
                      "p-7 sm:p-8 border-b lg:border-b-0 border-white/[0.08]",
                      project.problem
                        ? "lg:col-span-8 lg:border-r lg:border-white/[0.08]"
                        : "lg:col-span-12",
                    )}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.14em]">
                          <span className="text-accent-sand">
                            {categoryLabels[project.category] || project.category}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-white/[0.2]" />
                          <span className="text-text-muted">{project.year}</span>
                        </div>
                        <h3 className="font-serif text-3xl tracking-[-0.01em] text-cream-50">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex gap-1.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Live"
                            className="flex h-8 w-8 items-center justify-center rounded-[4px] text-text-secondary transition-colors duration-150 hover:text-cream-50 hover:bg-white/[0.08]"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Code"
                            className="flex h-8 w-8 items-center justify-center rounded-[4px] text-text-secondary transition-colors duration-150 hover:text-cream-50 hover:bg-white/[0.08]"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="max-w-xl font-mono text-[15px] leading-7 text-text-secondary">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[4px] border border-white/[0.08] px-2.5 py-1 font-mono text-xs text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.problem && (
                      <div className="mt-6 border-t border-white/[0.08] pt-5">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary transition-colors duration-150 hover:text-cream-50"
                        >
                          {expandedProject === project.id ? (
                            <>
                              Hide technical detail
                              <ChevronUp className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              View technical case study
                              <ChevronDown className="h-4 w-4" />
                            </>
                          )}
                        </button>

                        <AnimatePresence>
                          {expandedProject === project.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: easeSmoothOut }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                <div>
                                  <h4 className="mb-3 font-mono text-sm tracking-[0.14em] text-accent-sand">
                                    PROBLEM
                                  </h4>
                                  <p className="font-mono text-sm leading-6 text-text-secondary">
                                    {project.problem}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="mb-3 font-mono text-sm tracking-[0.14em] text-accent-sand">
                                    DECISION
                                  </h4>
                                  <p className="font-mono text-sm leading-6 text-text-secondary">
                                    {project.solution || project.longDescription}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Right features column */}
                  {project.features && (
                    <div className="lg:col-span-4 bg-ink-950 p-7 sm:p-8 flex flex-col justify-center">
                      <h4 className="mb-4 font-mono text-sm tracking-[0.14em] text-cream-50">
                        KEY FEATURES
                      </h4>
                      <ul className="space-y-3">
                        {project.features.slice(0, 4).map((feature, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 font-mono text-sm leading-6 text-text-secondary"
                          >
                            <span className="text-accent-sand/60">—</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
