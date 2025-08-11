'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Globe, Link, Bot, Zap, Filter, Code2, RefreshCw, Bitcoin, AlertCircle, Calendar, Star } from 'lucide-react';
import { Project } from '@/types';
import { useGitHubProjects } from '@/hooks/useGitHubProjects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { projects, isLoading, error, refreshProjects, githubProjects } = useGitHubProjects();

  const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
  };

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : getProjectsByCategory(selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const categories = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'blockchain', label: 'Blockchain', icon: Link },
    { id: 'bot', label: 'Bots', icon: Bot },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Globe className="h-4 w-4" />;
      case 'blockchain':
        return <Link className="h-4 w-4" />;
      case 'bot':
        return <Bot className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      variants={itemVariants}
      layout
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group"
    >
      <Card className="h-full relative overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />

        {/* Floating icons */}
        <motion.div
          className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {project.category === 'blockchain' && <Bitcoin className="h-6 w-6" />}
          {project.category === 'web' && <Code2 className="h-6 w-6" />}
          {project.category === 'bot' && <Zap className="h-6 w-6" />}
        </motion.div>

        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {getCategoryIcon(project.category)}
              </motion.div>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
            </div>
            {project.status && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge
                  variant={project.status === 'new' ? 'default' : 'secondary'}
                  className="animate-pulse"
                >
                  {project.status}
                </Badge>
              </motion.div>
            )}
          </div>
          <CardDescription className="line-clamp-3 group-hover:text-foreground/80 transition-colors">
            {project.description}
          </CardDescription>

          {/* GitHub Stats */}
          {(project.stars !== undefined || project.forks !== undefined) && (
            <motion.div
              className="flex items-center gap-4 mt-2 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.stars !== undefined && (
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  <span>{project.stars}</span>
                </div>
              )}
              {project.forks !== undefined && (
                <div className="flex items-center gap-1">
                  <Github className="h-3 w-3" />
                  <span>{project.forks}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{project.year}</span>
              </div>
            </motion.div>
          )}
        </CardHeader>

        <CardContent className="relative z-10 flex flex-col h-full">
          <motion.div
            className="flex flex-wrap gap-2 mb-4 flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Fixed button container at bottom */}
          <motion.div
            className="flex items-center gap-2 mt-auto pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Always render Live Demo button space */}
            {project.liveUrl ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" asChild className="group/btn">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3 group-hover/btn:rotate-45 transition-transform" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
            ) : (
              <div className="w-[88px]"></div> /* Placeholder to maintain layout */
            )}
            
            {/* Always render GitHub button space */}
            {project.githubUrl ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" asChild className="group/btn">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-3 w-3 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </a>
                </Button>
              </motion.div>
            ) : (
              <div className="w-[64px]"></div> /* Placeholder to maintain layout */
            )}
            
            {/* Learn More button - always in same position */}
            {(project.longDescription || project.features) ? (
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                      Learn More
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>
                      {project.longDescription || project.description}
                    </DialogDescription>
                  </DialogHeader>
                  {project.features && (
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            • {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex gap-2 mt-4">
                      {project.liveUrl && (
                        <Button asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ) : (
              <div className="w-[88px]"></div> /* Placeholder for Learn More button */
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-primary/5"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Code2 size={120} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-primary/5"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Bitcoin size={100} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my recent work in web development, blockchain technology, and automation
          </motion.p>

          {/* GitHub Integration Status */}
          {githubProjects.length > 0 && (
            <motion.div
              className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Github className="h-4 w-4" />
              <span>Live projects from GitHub • {githubProjects.length} repositories</span>
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleProjects(6);
                }}
                className="flex items-center gap-2 relative overflow-hidden group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon className="h-4 w-4" />
                </motion.div>
                {category.label}
                {selectedCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <RefreshCw className="h-8 w-8 text-primary" />
            </motion.div>
            <p className="mt-4 text-muted-foreground">Loading projects...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Failed to load projects</h3>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={refreshProjects} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </motion.div>
        )}

        {/* Load More Button */}
        {!isLoading && !error && hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setVisibleProjects(prev => prev + 6)}
                variant="outline"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Load More Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;