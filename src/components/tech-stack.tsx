'use client';

import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TechItem {
  name: string;
  category: string;
  proficiency: number;
  description: string;
}

const techStack: TechItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 90, description: 'Modern UI library' },
  { name: 'Next.js', category: 'Frontend', proficiency: 85, description: 'Full-stack React framework' },
  { name: 'TypeScript', category: 'Frontend', proficiency: 88, description: 'Type-safe JavaScript' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 92, description: 'Utility-first CSS framework' },
  { name: 'Framer Motion', category: 'Animation', proficiency: 80, description: 'React animation library' },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 85, description: 'JavaScript runtime' },
  { name: 'Express.js', category: 'Backend', proficiency: 82, description: 'Web application framework' },
  { name: 'Python', category: 'Backend', proficiency: 78, description: 'Versatile programming language' },

  // Database
  { name: 'MongoDB', category: 'Database', proficiency: 80, description: 'NoSQL database' },
  { name: 'PostgreSQL', category: 'Database', proficiency: 75, description: 'Relational database' },
  { name: 'Prisma', category: 'Database', proficiency: 85, description: 'Database ORM' },
  { name: 'Redis', category: 'Database', proficiency: 70, description: 'In-memory data store' },

  // Blockchain
  { name: 'Solana', category: 'Blockchain', proficiency: 75, description: 'High-performance blockchain' },
  { name: 'Web3.js', category: 'Blockchain', proficiency: 72, description: 'Ethereum JavaScript API' },
  { name: 'Anchor', category: 'Blockchain', proficiency: 70, description: 'Solana development framework' },

  // DevOps
  { name: 'Docker', category: 'DevOps', proficiency: 75, description: 'Containerization platform' },
  { name: 'Vercel', category: 'DevOps', proficiency: 88, description: 'Deployment platform' },
  { name: 'Git', category: 'Tools', proficiency: 90, description: 'Version control system' },
  { name: 'GitHub', category: 'Tools', proficiency: 85, description: 'Code hosting platform' },

  // Testing
  { name: 'Jest', category: 'Testing', proficiency: 75, description: 'JavaScript testing framework' },

  // Languages
  { name: 'JavaScript', category: 'Languages', proficiency: 90, description: 'Dynamic programming language' },
  { name: 'SQL', category: 'Database', proficiency: 80, description: 'Database query language' }
];

const categories = ['Frontend', 'Backend', 'Database', 'Blockchain', 'DevOps', 'Testing', 'Tools', 'Animation', 'Languages'];

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  } as const;

  const getCategoryColor = (category: string) => {
    const colors = {
      'Frontend': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      'Backend': 'bg-green-500/10 text-green-600 border-green-500/20',
      'Database': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      'Blockchain': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
      'DevOps': 'bg-red-500/10 text-red-600 border-red-500/20',
      'Testing': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      'Tools': 'bg-pink-500/10 text-pink-600 border-pink-500/20',
      'Animation': 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-600 border-gray-500/20';
  };

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies I work with, from frontend frameworks to blockchain development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className={`${getCategoryColor(category)} cursor-pointer hover:scale-105 transition-all duration-200`}
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6 text-center">


                  {/* Tech Name */}
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>

                  {/* Category Badge */}
                  <Badge
                    variant="outline"
                    className={`text-xs mb-3 ${getCategoryColor(tech.category)}`}
                  >
                    {tech.category}
                  </Badge>

                  {/* Proficiency Bar */}
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{tech.proficiency}%</span>

                  {/* Hover Description */}
                  <motion.div
                    className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-sm text-center text-muted-foreground">
                      {tech.description}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies', value: techStack.length, color: 'text-blue-500' },
            { label: 'Categories', value: categories.length, color: 'text-green-500' },
            { label: 'Avg Proficiency', value: `${Math.round(techStack.reduce((acc, tech) => acc + tech.proficiency, 0) / techStack.length)}%`, color: 'text-purple-500' },
            { label: 'Years Experience', value: '2+', color: 'text-orange-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-muted/50"
            >
              <motion.div
                className={`text-2xl font-bold ${stat.color}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;