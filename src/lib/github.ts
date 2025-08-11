import { Project } from '@/types';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  languages_url: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  private: boolean;
}

export interface GitHubLanguages {
  [key: string]: number;
}

class GitHubService {
  private baseUrl = 'https://api.github.com';
  private username = 'stephen-carew'; // Your GitHub username
  private cache: { repos: GitHubRepo[]; timestamp: number } | null = null;
  private cacheTimeout = 10 * 60 * 1000; // 10 minutes

  async fetchRepositories(): Promise<GitHubRepo[]> {
    // Check cache first
    if (this.cache && Date.now() - this.cache.timestamp < this.cacheTimeout) {
      console.log('Using cached GitHub repositories');
      return this.cache.repos;
    }

    try {
      // Add headers for better rate limiting
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Website'
      };

      // If you have a GitHub token, uncomment this line:
      // headers['Authorization'] = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;

      const response = await fetch(
        `${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=50&type=owner`, 
        { headers }
      );
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('GitHub API Response:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: errorText
        });

        // Handle specific error cases
        if (response.status === 403) {
          const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
          const rateLimitReset = response.headers.get('X-RateLimit-Reset');
          
          if (rateLimitRemaining === '0') {
            const resetTime = rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000) : new Date();
            throw new Error(`GitHub API rate limit exceeded. Resets at ${resetTime.toLocaleTimeString()}`);
          }
          
          throw new Error('GitHub API access forbidden. This might be due to rate limiting or repository privacy settings.');
        }
        
        if (response.status === 404) {
          throw new Error(`GitHub user '${this.username}' not found`);
        }
        
        throw new Error(`GitHub API error: ${response.status} - ${response.statusText}`);
      }

      const repos: GitHubRepo[] = await response.json();
      
      // Filter out forks, archived, and private repos
      const filteredRepos = repos.filter(repo => 
        !repo.archived && 
        !repo.disabled && 
        !repo.private &&
        repo.description && // Only include repos with descriptions
        repo.name !== this.username // Exclude profile README repo
      );

      // Cache the results
      this.cache = {
        repos: filteredRepos,
        timestamp: Date.now()
      };

      console.log(`Fetched ${filteredRepos.length} repositories from GitHub`);
      return filteredRepos;
      
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      
      // Return cached data if available, even if expired
      if (this.cache) {
        console.log('Using expired cache due to API error');
        return this.cache.repos;
      }
      
      // Return empty array as fallback
      return [];
    }
  }

  async fetchLanguages(repo: GitHubRepo): Promise<string[]> {
    try {
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Website'
      };

      const response = await fetch(repo.languages_url, { headers });
      
      if (!response.ok) {
        // If we hit rate limits or other errors, fall back to the primary language
        console.warn(`Failed to fetch languages for ${repo.name}: ${response.status}`);
        return repo.language ? [repo.language] : ['JavaScript']; // Default fallback
      }

      const languages: GitHubLanguages = await response.json();
      
      // Sort languages by usage and return top 5
      const sortedLanguages = Object.keys(languages)
        .sort((a, b) => languages[b] - languages[a])
        .slice(0, 5);

      // Ensure we have at least one language
      if (sortedLanguages.length === 0 && repo.language) {
        return [repo.language];
      }

      return sortedLanguages.length > 0 ? sortedLanguages : ['JavaScript'];
    } catch (error) {
      console.warn(`Error fetching languages for ${repo.name}:`, error);
      return repo.language ? [repo.language] : ['JavaScript'];
    }
  }

  private categorizeProject(repo: GitHubRepo, languages: string[]): 'web' | 'blockchain' | 'bot' | 'fullstack' {
    const name = repo.name.toLowerCase();
    const description = repo.description?.toLowerCase() || '';
    const topics = repo.topics.map(topic => topic.toLowerCase());
    
    // Check for blockchain/crypto keywords
    const blockchainKeywords = ['solana', 'blockchain', 'crypto', 'nft', 'defi', 'web3', 'smart-contract', 'dex', 'staking'];
    if (blockchainKeywords.some(keyword => 
      name.includes(keyword) || 
      description.includes(keyword) || 
      topics.includes(keyword) ||
      languages.includes('Rust')
    )) {
      return 'blockchain';
    }

    // Check for bot keywords
    const botKeywords = ['bot', 'discord', 'telegram', 'automation'];
    if (botKeywords.some(keyword => 
      name.includes(keyword) || 
      description.includes(keyword) || 
      topics.includes(keyword) ||
      languages.includes('Python')
    )) {
      return 'bot';
    }

    // Default to web
    return 'web';
  }

  private getProjectStatus(repo: GitHubRepo): 'new' | 'updated' | 'completed' | 'featured' | undefined {
    const daysSinceUpdate = Math.floor((Date.now() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysSinceUpdate <= 30) {
      return 'new';
    }
    
    if (repo.stargazers_count >= 10) {
      return 'featured';
    }
    
    return 'completed';
  }

  async transformToProjects(repos: GitHubRepo[]): Promise<Project[]> {
    const projects: Project[] = [];

    // Limit the number of repos to process to avoid rate limits
    const limitedRepos = repos.slice(0, 20); // Process only top 20 repos

    for (const repo of limitedRepos) {
      try {
        // Use a simplified approach to reduce API calls
        const languages = this.getLanguagesFromRepo(repo);
        const category = this.categorizeProject(repo, languages);
        const status = this.getProjectStatus(repo);

        const project: Project = {
          id: `github-${repo.id}`,
          title: repo.name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          description: repo.description || 'No description available',
          technologies: languages,
          category,
          featured: repo.stargazers_count >= 5 || status === 'new',
          githubUrl: repo.html_url,
          liveUrl: repo.homepage || undefined,
          year: new Date(repo.created_at).getFullYear(),
          status,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          lastUpdated: repo.updated_at
        };

        projects.push(project);
      } catch (error) {
        console.error(`Error processing repo ${repo.name}:`, error);
      }
    }

    // Sort by stars and last updated
    return projects.sort((a, b) => {
      const aScore = (a.stars || 0) * 2 + (a.status === 'new' ? 10 : 0);
      const bScore = (b.stars || 0) * 2 + (b.status === 'new' ? 10 : 0);
      return bScore - aScore;
    });
  }

  // Simplified method that doesn't make additional API calls
  private getLanguagesFromRepo(repo: GitHubRepo): string[] {
    const languages: string[] = [];
    
    // Use primary language if available
    if (repo.language) {
      languages.push(repo.language);
    }

    // Infer additional technologies from repo name, description, and topics
    const text = `${repo.name} ${repo.description || ''} ${repo.topics.join(' ')}`.toLowerCase();
    
    const techMap: { [key: string]: string[] } = {
      'react': ['React'],
      'next': ['Next.js'],
      'vue': ['Vue.js'],
      'angular': ['Angular'],
      'svelte': ['Svelte'],
      'typescript': ['TypeScript'],
      'javascript': ['JavaScript'],
      'node': ['Node.js'],
      'express': ['Express'],
      'mongodb': ['MongoDB'],
      'postgres': ['PostgreSQL'],
      'mysql': ['MySQL'],
      'redis': ['Redis'],
      'docker': ['Docker'],
      'aws': ['AWS'],
      'vercel': ['Vercel'],
      'netlify': ['Netlify'],
      'tailwind': ['Tailwind CSS'],
      'css': ['CSS'],
      'html': ['HTML'],
      'python': ['Python'],
      'django': ['Django'],
      'flask': ['Flask'],
      'rust': ['Rust'],
      'solana': ['Solana'],
      'blockchain': ['Blockchain'],
      'web3': ['Web3'],
      'ethereum': ['Ethereum']
    };

    Object.entries(techMap).forEach(([keyword, techs]) => {
      if (text.includes(keyword)) {
        techs.forEach(tech => {
          if (!languages.includes(tech)) {
            languages.push(tech);
          }
        });
      }
    });

    // Ensure we have at least one technology
    if (languages.length === 0) {
      languages.push('JavaScript');
    }

    return languages.slice(0, 5); // Limit to 5 technologies
  }

  async getProjects(): Promise<Project[]> {
    try {
      const repos = await this.fetchRepositories();
      if (repos.length === 0) {
        console.warn('No repositories found, using fallback data');
        return this.getFallbackProjects();
      }
      return this.transformToProjects(repos);
    } catch (error) {
      console.error('GitHub API completely unavailable, using fallback data:', error);
      return this.getFallbackProjects();
    }
  }

  // Fallback projects when GitHub API is unavailable
  private getFallbackProjects(): Project[] {
    return [
      {
        id: 'fallback-1',
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and TypeScript',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        category: 'web',
        featured: true,
        githubUrl: 'https://github.com/stephen-carew/portfolio-v2',
        liveUrl: 'https://stephen-carew.github.io',
        year: 2024,
        status: 'featured',
        stars: 0,
        forks: 0
      },
      {
        id: 'fallback-2',
        title: 'Web Development Projects',
        description: 'Collection of web development projects showcasing various technologies',
        technologies: ['JavaScript', 'React', 'Node.js', 'CSS'],
        category: 'web',
        featured: false,
        year: 2024,
        status: 'completed',
        stars: 0,
        forks: 0
      },
      {
        id: 'fallback-3',
        title: 'Open Source Contributions',
        description: 'Various contributions to open source projects and community tools',
        technologies: ['TypeScript', 'JavaScript', 'Python'],
        category: 'fullstack',
        featured: false,
        year: 2024,
        status: 'updated',
        stars: 0,
        forks: 0
      }
    ];
  }
}

export const githubService = new GitHubService();