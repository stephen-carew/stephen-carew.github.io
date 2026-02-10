import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'dummified-trait-marketplace',
    title: 'Dummified Labs – NFT Trait Marketplace',
    description: 'An innovative Solana-based marketplace for modular NFT enhancement.',
    longDescription: 'Pioneered the concept of modular NFT enhancement through purchasable traits and attributes. The platform allows users to customize their NFTs by purchasing and applying new traits on-chain.',
    technologies: ['Next.js', 'TypeScript', 'Solana', 'Rust', 'Tailwind'],
    category: 'blockchain',
    featured: true,
    year: 2024,
    problem: 'NFT collections often suffer from static metadata, leading to reduced engagement after the initial mint. Users had no way to customize or upgrade their assets without centralized intervention.',
    solution: 'Architected a decentralized marketplace using Solana smart contracts (Anchor) where traits are tokenized assets. Implemented a "trait application" program that securely modifies on-chain metadata while burning/swapping trait tokens.',
    metrics: [
      'Processed 50k+ transactions',
      'Zero downtime during peak mint events',
      '<400ms transaction confirmation time'
    ]
  },
  {
    id: 'dummified-staking',
    title: 'Dummified Labs – Gamified Staking',
    description: 'A RPG-style staking ecosystem transforming DeFi mechanics into gameplay.',
    longDescription: 'Transforms traditional DeFi mechanics into an engaging RPG-like experience with quests, loot drops, and leveling systems.',
    technologies: ['Solana', 'Anchor', 'Rust', 'Next.js', 'PostgreSQL'],
    category: 'blockchain',
    featured: true,
    status: 'new',
    year: 2024,
    problem: 'Traditional staking protocols are passive and boring, leading to high churn rates. Projects needed a way to incentivize long-term holding while keeping the community active.',
    solution: 'Built a gamified staking engine with "Expeditions" (quests). Used a time-weighted algorithm for rewards and a probability-based loot system for item drops, all verified on-chain.',
    metrics: [
      '$2M+ TVL (Total Value Locked)',
      '1500+ Daily Active Users',
      '95% Holder Staking Ratio'
    ]
  },
  {
    id: 'car-parts-finder',
    title: 'Car Parts Finder Enterprise',
    description: 'A multi-tenant marketplace for automotive parts with inventory management.',
    longDescription: 'A comprehensive B2B/B2C marketplace platform connecting car parts stores with customers. Features role-based access control, advanced search, and analytics.',
    technologies: ['Next.js 14', 'Drizzle ORM', 'PostgreSQL', 'NextAuth.js'],
    category: 'web',
    featured: true,
    year: 2025,
    problem: 'Local auto parts stores struggle with inventory digitization and lack a unified platform to reach wider audiences. Existing solutions were clunky and expensive.',
    solution: 'Developed a multi-tenant SaaS platform using Next.js 14 and Drizzle ORM. Implemented complex filtering logic for vehicle compatibility (Make/Model/Year) and a real-time inventory sync system.',
    metrics: [
      'Sub-100ms Search Latency',
      'Scalable to 1M+ SKUs',
      '100% Lighthouse Performance Score'
    ]
  },
  {
    id: 'naomis-ecommerce',
    title: 'Naomi\'s Little Corner',
    description: 'AI-powered boutique fashion e-commerce platform.',
    longDescription: 'A beautifully crafted e-commerce platform featuring AI-powered product recommendations and seasonal collections.',
    technologies: ['Next.js', 'OpenAI API', 'Stripe', 'Tailwind'],
    category: 'web',
    featured: true,
    year: 2024,
    problem: 'Boutique fashion needs high-touch personalization that standard Shopify templates cannot provide without expensive plugins.',
    solution: 'Integrated OpenAI to analyze user browsing patterns and generate personalized outfit recommendations. Built a custom cart and checkout flow optimized for conversion.',
    metrics: [
      '25% Increase in Average Order Value',
      '3x Faster Page Loads vs Shopify',
      '4.8/5 Customer Satisfaction'
    ]
  },
  {
    id: 'discord-bots-ecosystem',
    title: 'Discord Bot Ecosystem',
    description: 'A collection of high-performance Discord bots for community management, verification, and gaming.',
    longDescription: 'Developed a suite of Python-based Discord bots serving diverse communities. Features include crypto wallet verification, battle royale game mechanics, and automated server management.',
    technologies: ['Python', 'Discord.py', 'Solana Web3.py', 'SQL', 'Redis'],
    category: 'bot',
    featured: true,
    year: 2023,
    problem: 'Discord communities needed robust tools for verifying crypto assets (NFTs/Tokens) and engaging users with interactive content, but existing solutions were fragmented or expensive.',
    solution: 'Built a modular bot architecture using Python and Discord.py. Implemented wallet verification via Solana Web3.py and created a custom "Rumble Royale" game engine with persistent stats using SQL.',
    metrics: [
      'Verified 10k+ Wallets',
      'Active in 50+ Servers',
      '99.9% Uptime with Redis Caching'
    ]
  },
  {
    id: 'restauranter',
    title: 'Restauranter POS',
    description: 'Restaurant management and Point of Sale system.',
    technologies: ['Next.js', 'Redis', 'Tailwind'],
    category: 'web',
    featured: false,
    year: 2024
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};
