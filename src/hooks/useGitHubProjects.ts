import { useState, useEffect } from 'react';
import { Project } from '@/types';
import { githubService } from '@/lib/github';
import { projects as staticProjects } from '@/data/projects';

export interface UseGitHubProjectsReturn {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  refreshProjects: () => Promise<void>;
  githubProjects: Project[];
  staticProjects: Project[];
}

export function useGitHubProjects(): UseGitHubProjectsReturn {
  const [githubProjects, setGitHubProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const projects = await githubService.getProjects();
      setGitHubProjects(projects);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch GitHub projects');
      console.error('Error fetching GitHub projects:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  // Combine and deduplicate projects
  const allProjects = [...staticProjects, ...githubProjects].reduce((acc, project) => {
    // Check if a similar project already exists (by title similarity)
    const existingIndex = acc.findIndex(p => 
      p.title.toLowerCase().replace(/\s+/g, '') === project.title.toLowerCase().replace(/\s+/g, '') ||
      (p.githubUrl && project.githubUrl && p.githubUrl === project.githubUrl)
    );

    if (existingIndex >= 0) {
      // Merge projects, preferring static project data but adding GitHub stats
      acc[existingIndex] = {
        ...acc[existingIndex],
        stars: project.stars || acc[existingIndex].stars,
        forks: project.forks || acc[existingIndex].forks,
        lastUpdated: project.lastUpdated || acc[existingIndex].lastUpdated,
        githubUrl: project.githubUrl || acc[existingIndex].githubUrl,
      };
    } else {
      acc.push(project);
    }

    return acc;
  }, [] as Project[]);

  // Sort projects: featured first, then by stars, then by year
  const sortedProjects = allProjects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    
    const aStars = a.stars || 0;
    const bStars = b.stars || 0;
    if (aStars !== bStars) return bStars - aStars;
    
    return b.year - a.year;
  });

  return {
    projects: sortedProjects,
    isLoading,
    error,
    refreshProjects: fetchGitHubProjects,
    githubProjects,
    staticProjects,
  };
}