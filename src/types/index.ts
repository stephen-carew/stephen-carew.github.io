export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web' | 'blockchain' | 'bot' | 'fullstack';
  featured: boolean;
  status?: 'new' | 'updated' | 'completed' | 'featured';
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  features?: string[];
  year: number;
  stars?: number;
  forks?: number;
  lastUpdated?: string;
  // Case Study Fields
  problem?: string;
  solution?: string;
  metrics?: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'blockchain' | 'tools' | 'languages';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description?: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}