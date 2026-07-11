"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Layers,
} from "lucide-react";
import { projects as localProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Work" },
  { id: "saas", label: "SaaS" },
  { id: "web", label: "Web Applications" },
  { id: "blockchain", label: "Blockchain & Web3" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? localProjects
      : localProjects.filter(
          (project) => project.category === selectedCategory,
        );

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="mb-3 text-sm font-medium text-accent-sand tracking-wide uppercase">
              Case studies
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-cream-50">
              Selected work
            </h2>
            <p className="mt-3 text-text-secondary max-w-lg">
              Deep dives into complex technical challenges, architectural
              decisions, and measurable outcomes.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                  selectedCategory === category.id
                    ? "bg-white text-ink-950"
                    : "bg-white/[0.04] text-text-secondary hover:text-cream-50 hover:bg-white/[0.08] border border-white/[0.06]",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 hover:border-white/[0.14]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Main content */}
                  <div
                    className={cn(
                      "p-6 md:p-8 border-b lg:border-b-0 border-white/[0.06]",
                      project.problem
                        ? "lg:col-span-8 lg:border-r lg:border-white/[0.06]"
                        : "lg:col-span-12",
                    )}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-accent-sand font-mono text-xs uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-white/[0.18]" />
                          <span className="text-xs text-text-muted">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-cream-50">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-1.5">
                        {project.liveUrl && (
                          <Button
                            size="icon"
                            variant="ghost"
                            asChild
                            className="h-8 w-8 rounded-xl text-text-secondary hover:text-cream-50 hover:bg-white/[0.08]"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View Live"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="icon"
                            variant="ghost"
                            asChild
                            className="h-8 w-8 rounded-xl text-text-secondary hover:text-cream-50 hover:bg-white/[0.08]"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View Code"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <p className="text-text-secondary mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-xs text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand toggle */}
                    {project.problem && (
                      <div className="mt-2 pt-5 border-t border-white/[0.06]">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-cream-50 transition-colors"
                        >
                          {expandedProject === project.id ? (
                            <>
                              Hide technical details
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
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                <div>
                                  <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 text-cream-50">
                                    <Layers className="h-4 w-4 text-accent-sand" />
                                    Challenge & Solution
                                  </h4>
                                  <div className="space-y-4 text-sm text-text-secondary">
                                    <div>
                                      <strong className="text-cream-50 block mb-1">
                                        Problem:
                                      </strong>
                                      {project.problem}
                                    </div>
                                    <div>
                                      <strong className="text-cream-50 block mb-1">
                                        Solution:
                                      </strong>
                                      {project.solution ||
                                        project.longDescription}
                                    </div>
                                  </div>
                                </div>
                                <div />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Right features column */}
                  {project.features && (
                    <div className="lg:col-span-4 bg-white/[0.02] p-6 md:p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-cream-50">
                          Key Features
                        </h4>
                        <ul className="space-y-2.5">
                          {project.features.slice(0, 4).map((feature, i) => (
                            <li
                              key={i}
                              className="text-sm text-text-secondary flex gap-2.5"
                            >
                              <span className="text-accent-sand/50 mt-0.5">
                                •
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
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
