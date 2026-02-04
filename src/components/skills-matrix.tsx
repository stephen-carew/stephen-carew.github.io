'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Architecture",
    items: [
      { name: "React / Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "State Management (Redux/Zustand)", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
    ]
  },
  {
    category: "Backend Systems",
    items: [
      { name: "Node.js", level: "Advanced" },
      { name: "PostgreSQL / SQL", level: "Advanced" },
      { name: "Prisma / Drizzle ORM", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
    ]
  },
  {
    category: "Blockchain & Web3",
    items: [
      { name: "Solana (Rust/Anchor)", level: "Advanced" },
      { name: "Smart Contract Integration", level: "Advanced" },
      { name: "Web3.js / Ethers.js", level: "Advanced" },
      { name: "Tokenomics", level: "Intermediate" },
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker / Containerization", level: "Advanced" },
      { name: "CI/CD (GitHub Actions)", level: "Advanced" },
      { name: "AWS Services", level: "Intermediate" },
      { name: "Vercel / Netlify", level: "Expert" },
    ]
  }
];

const SkillsMatrix = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across the full stack development lifecycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="flex justify-between items-center group">
                        <span className="font-medium group-hover:text-foreground transition-colors text-muted-foreground">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="bg-secondary/50 text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
