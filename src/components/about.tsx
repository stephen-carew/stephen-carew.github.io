'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Award,
  Brain,
  Briefcase,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Shield,
  Smartphone,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
  } as const;

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5
      }
    })
  } as const;
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Globe className="h-5 w-5" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      level: 90
    },
    {
      category: 'Backend Development',
      icon: <Database className="h-5 w-5" />,
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
      level: 85
    },
    {
      category: 'Blockchain Development',
      icon: <Shield className="h-5 w-5" />,
      technologies: ['Solana', 'Anchor', 'Web3.js', 'Smart Contracts', 'DeFi'],
      level: 70
    },
    {
      category: 'Mobile Development',
      icon: <Smartphone className="h-5 w-5" />,
      technologies: ['React Native', 'Expo', 'iOS', 'Android'],
      level: 50
    },
    {
      category: 'DevOps & Tools',
      icon: <Zap className="h-5 w-5" />,
      technologies: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux'],
      level: 70
    }
  ];

  const experiences = [
    {
      title: 'Blockchain Engineer',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Developing decentralized applications and smart contracts on Solana blockchain',
      achievements: [
        'Built various DeFi applications',
        'Created NFT marketplaces and staking platforms',
        'Optimized smart contracts for gas efficiency'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Various Projects',
      period: '2021 - Present',
      description: 'Creating modern web applications with React, Next.js, and Node.js',
      achievements: [
        'Delivered 15+ production applications',
        'Improved application performance by 40%',
        'Mentored junior developers'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science',
      field: 'Instrumentation and Control Engineering',
      institution: 'Teesside University',
      period: '2025 - Present',
      status: 'In Progress'
    },
    {
      degree: 'Bachelor of Engineering',
      field: 'Electrical and Electronics Engineering',
      institution: 'Curtin University',
      period: '2019 - 2023',
      status: 'Completed'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden" ref={ref}>


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Passionate full-stack developer with expertise in modern web technologies,
            blockchain development, and creating innovative digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="h-6 w-6" />
              </motion.div>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        {skill.category}
                      </CardTitle>
                      <div className="relative">
                        <Progress value={0} className="h-2 bg-muted" />
                        <motion.div
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                          variants={skillVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                      <motion.span
                        className="text-sm text-muted-foreground group-hover:text-primary transition-colors"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.8 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="secondary" className="group-hover:bg-primary/10 transition-colors">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats & Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >

              </motion.div>
              Quick Stats
            </h3>
            <div className="space-y-6">
              {/* Stats Cards */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                    <motion.div
                      className="text-2xl font-bold text-blue-600 dark:text-blue-400"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      2+
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                    <motion.div
                      className="text-2xl font-bold text-green-600 dark:text-green-400"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.7, type: "spring" }}
                    >
                      20+
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                    <motion.div
                      className="text-2xl font-bold text-purple-600 dark:text-purple-400"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.9, type: "spring" }}
                    >
                      10+
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
                    <motion.div
                      className="text-2xl font-bold text-orange-600 dark:text-orange-400"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1.1, type: "spring" }}
                    >
                      3+
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >

                      </motion.div>
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "Built full-stack applications with 99.9% uptime",
                        "Developed blockchain solutions for real-world use cases",
                        "Mentored junior developers in modern web technologies",
                      ].map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 1.3 + index * 0.1 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >

                          </motion.div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Current Focus */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Brain className="h-5 w-5" />
                      </motion.div>
                      Current Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        "AI/ML Integration in Web Applications",
                        "Advanced Blockchain Development",
                        "Cloud-Native Architecture",
                        "Performance Optimization"
                      ].map((focus, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 1.7 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="outline" className="mr-2 mb-2 hover:bg-primary/10 transition-colors">
                            {focus}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.description}
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <Award className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription>
                      {edu.field} • {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                      <Badge variant={edu.status === 'In Progress' ? 'default' : 'secondary'}>
                        {edu.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Personal Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center  pt-10"
      >

      </motion.div>
    </section>

  );
};

export default About;