'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Instrumentation and Control, MSc",
    institution: "United Kingdom",
    year: "Current",
    description: "Specializing in advanced control systems, industrial automation, and distributed sensor networks. Research focused on real-time data processing and system reliability.",
    tags: ["Control Systems", "Automation", "IoT", "Data Processing"]
  },
  {
    degree: "Electrical and Electronics Engineering, BSc Hons",
    institution: "Australia",
    year: "Graduated",
    description: "Foundation in circuit theory, digital electronics, and signal processing. Developed strong analytical and problem-solving skills applied to hardware-software integration.",
    tags: ["Circuit Design", "Digital Electronics", "Embedded Systems", "Signal Processing"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education & Research</h2>
          <p className="text-muted-foreground">
            Academic background and ongoing research in advanced engineering systems.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:border-primary/20 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="font-semibold text-lg">{item.degree}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                    </div>

                    <div className="text-primary font-medium mb-2">{item.institution}</div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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

export default Education;
