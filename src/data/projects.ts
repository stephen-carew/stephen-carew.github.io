import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'dummified-trait-marketplace',
    title: 'Dummified Labs – NFT Trait Marketplace & Ambassador Program',
    description: 'An innovative Solana-based marketplace that pioneered the concept of modular NFT enhancement through purchasable traits and attributes.',
    longDescription: 'Built with Next.js and TypeScript, the platform implements complex trait compatibility algorithms that ensure visual and metadata consistency across different NFT collections. The system features dynamic pricing based on trait rarity, bundle optimization algorithms for cost-effective purchases, and real-time rarity recalculation as traits are applied.',
    technologies: ['Next.js', 'TypeScript', 'Solana', 'NFT'],
    category: 'blockchain',
    featured: true,
    liveUrl: 'https://traitshop.dummifiedlabs.xyz',
    year: 2024,
    features: [
      'Advanced Multi-Collection Support: Cross-collection trait compatibility algorithms, automated metadata validation',
      'Intelligent Bundle System: Dynamic pricing optimization based on trait rarity, bulk purchase discounts',
      'Comprehensive Admin Dashboard: Real-time sales analytics with profit tracking, trait popularity metrics',
      'Smart Contract Features: On-chain trait ownership verification, automated royalty splits to creators'
    ]
  },
  {
    id: 'dummified-staking',
    title: 'Dummified Labs – NFT Staking Platform',
    description: 'An innovative gamified Solana NFT staking ecosystem that transforms traditional DeFi mechanics into an engaging RPG-like experience.',
    longDescription: 'Built using Anchor framework and Rust smart contracts, the platform implements complex multi-farm reward calculations with time-weighted distributions and compound interest mechanics. The quest system features dynamic loot drops, seasonal events, and progressive NFT upgrades that permanently modify on-chain metadata.',
    technologies: ['Solana', 'Next.js', 'Anchor', 'Rust'],
    category: 'blockchain',
    featured: true,
    status: 'new',
    liveUrl: 'https://staking.dummifiedlabs.xyz',
    year: 2024,
    features: [
      'Advanced Staking Logic: Multi-farm architecture with independent reward pools, time-weighted calculations',
      'Gamified Quest System: Dynamic loot drop algorithms with rarity tiers, seasonal Pilgrimage events',
      'Comprehensive Admin Controls: Real-time farm configuration with APY adjustments, quest creation tools',
      'Social & Integration Features: Discord bot integration for notifications, referral system with bonus rewards'
    ]
  },
  {
    id: 'gannet-marketplace',
    title: 'Gannet (Booby) Trait Marketplace',
    description: 'A cutting-edge Solana blockchain platform that pioneered the concept of progressive NFT evolution through staking mechanics.',
    technologies: ['Solana', 'Next.js', 'React'],
    category: 'blockchain',
    featured: true,
    year: 2024
  },
  {
    id: 'board-sol-staking',
    title: 'Board Sol Staking – NFT Staking & Farming Platform',
    description: 'A cutting-edge Solana blockchain platform that pioneered the concept of progressive NFT evolution through staking mechanics.',
    longDescription: 'The system implements a sophisticated leveling algorithm that tracks staking duration, quest completion, and community engagement to evolve NFTs through multiple tiers.',
    technologies: ['Solana', 'TypeScript', 'Next.js'],
    category: 'blockchain',
    featured: true,
    year: 2024
  },
  {
    id: 'dex-exchange',
    title: 'DEX – Decentralized Exchange',
    description: 'A sophisticated decentralized exchange built on Solana with advanced trading features and liquidity management.',
    technologies: ['Rust', 'React', 'TypeScript', 'Solana'],
    category: 'blockchain',
    featured: true,
    year: 2024
  },
  {
    id: 'bart-management',
    title: 'Bart – Self-Service Bar Management System',
    description: 'A comprehensive bar management platform with inventory tracking, sales analytics, and customer management.',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
    category: 'web',
    featured: true,
    liveUrl: 'https://bartender-blond.vercel.app',
    year: 2024
  },
  {
    id: 'naomis-ecommerce',
    title: 'Naomi\'s Little Corner – Floral Fashion E-Commerce',
    description: 'A beautifully crafted e-commerce platform built with Next.js, React, and Tailwind CSS, specifically designed for boutique fashion retail.',
    longDescription: 'The platform features advanced product filtering by size, color, season, and style preferences, with AI-powered recommendation algorithms that suggest complementary items based on purchase history and browsing patterns.',
    technologies: ['Next.js', 'React', 'Tailwind'],
    category: 'web',
    featured: true,
    year: 2024,
    features: [
      'Advanced Shopping Experience: AI-powered product recommendations, multi-criteria filtering',
      'Custom Admin Dashboard: Inventory management with automatic low-stock alerts, seasonal collection planning',
      'Payment & Shipping: Multiple payment gateways, automated email marketing campaigns',
      'Social Integration: Social media integration for seamless brand promotion'
    ]
  },
  {
    id: 'restauranter',
    title: 'Restauranter – Restaurant Management Platform',
    description: 'A comprehensive restaurant management solution with POS integration, inventory tracking, and business analytics.',
    technologies: ['Next.js', 'Tailwind', 'Redis'],
    category: 'web',
    featured: true,
    liveUrl: 'https://restauranter.vercel.app/',
    year: 2024
  },
  {
    id: 'rumble-royale-bot',
    title: 'Rumble Royale – Battle Royale Discord Bot',
    description: 'An interactive Discord bot that brings battle royale gaming mechanics to Discord servers.',
    technologies: ['Python', 'Discord', 'SQL'],
    category: 'bot',
    featured: true,
    year: 2023
  },
  {
    id: 'champion-vault-bot',
    title: 'Champion Vault – Solana Wallet Discord Bot',
    description: 'A Discord bot that integrates Solana wallet functionality with Discord servers for seamless crypto interactions.',
    technologies: ['Python', 'Solana', 'Discord'],
    category: 'bot',
    featured: true,
    year: 2023
  },
  {
    id: 'crypto-verification-bot',
    title: 'Crypto Wallet Discord Verification Bot',
    description: 'A Discord bot for verifying crypto wallet ownership and NFT holdings for exclusive server access.',
    technologies: ['Python', 'Discord', 'Solana', 'NFT'],
    category: 'bot',
    featured: true,
    year: 2023
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};