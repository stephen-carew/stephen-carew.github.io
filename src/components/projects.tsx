'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight, Layers, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import { projects as localProjects } from '@/data/projects';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web Applications' },
    { id: 'blockchain', label: 'Blockchain & Web3' },
  ];

  // Helper for mapping category IDs if needed, though simple matching works
  const categoryMap = {
    'web': 'web',
    'blockchain': 'blockchain'
  };

  const filteredProjects = selectedCategory === 'all'
    ? localProjects
    : localProjects.filter(project => project.category === categoryMap[selectedCategory as keyof typeof categoryMap] || project.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Selected Case Studies</h2>
            <p className="text-muted-foreground max-w-xl">
              Deep dives into complex technical challenges, architectural decisions, and measurable outcomes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/60 bg-card/40 hover:bg-card/60 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Core Info */}
                  <div className="lg:col-span-8 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border/60">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-primary font-mono text-xs uppercase tracking-wider mb-2">
                          {project.category} • {project.year}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button size="icon" variant="ghost" asChild className="h-8 w-8 text-muted-foreground hover:text-primary">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View Live">
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="icon" variant="ghost" asChild className="h-8 w-8 text-muted-foreground hover:text-primary">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Code">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-md px-2 py-1 text-xs font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Case Study Details - Toggleable or Always Visible on Desktop? 
                        Let's make it expandable for a cleaner initial view but rich detail.
                    */}
                    <div className="mt-6 pt-6 border-t border-border/60">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(project.id)}
                        className="pl-0 hover:bg-transparent hover:text-primary"
                      >
                        {expandedProject === project.id ? (
                          <>Hide Technical Details <ChevronUp className="ml-2 h-4 w-4" /></>
                        ) : (
                          <>View Technical Case Study <ChevronDown className="ml-2 h-4 w-4" /></>
                        )}
                      </Button>

                      <AnimatePresence>
                        {expandedProject === project.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                              <div>
                                <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                                  <Layers className="h-4 w-4 text-primary" /> Challenge & Solution
                                </h4>
                                <div className="space-y-4 text-sm text-muted-foreground">
                                  <div>
                                    <strong className="text-foreground block mb-1">Problem:</strong>
                                    {project.problem || "Addressing complex scalability and user experience challenges in a competitive market."}
                                  </div>
                                  <div>
                                    <strong className="text-foreground block mb-1">Solution:</strong>
                                    {project.solution || project.longDescription}
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                                  <BarChart3 className="h-4 w-4 text-primary" /> Key Metrics
                                </h4>
                                {project.metrics ? (
                                  <ul className="space-y-2 text-sm text-muted-foreground">
                                    {project.metrics.map((metric, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        {metric}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-sm text-muted-foreground italic">
                                    Performance metrics and analytics data available upon request.
                                  </p>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Right Column: Visual/Status (Simplified) */}
                  <div className="lg:col-span-4 bg-muted/30 p-6 md:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-foreground">Project Status</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={cn(
                          "w-2 h-2 rounded-full",
                          project.status === 'new' ? "bg-emerald-500" : "bg-blue-500"
                        )} />
                        {project.status === 'new' ? 'Active Development' : 'Production Stable'}
                      </div>
                      {project.features && (
                        <div className="mt-6">
                          <div className="text-sm font-semibold text-foreground mb-3">Key Features</div>
                          <ul className="space-y-2">
                            {project.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                <span className="text-primary/50">•</span> {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
