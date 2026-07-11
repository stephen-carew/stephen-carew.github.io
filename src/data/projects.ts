import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "tenora",
    title: "Tenora — UK Property Management SaaS",
    description:
      "A full-featured property management platform for UK landlords. 110+ features, 5-tier SaaS billing, AI-powered tenant messaging, clause-level contract negotiation, and Stripe + Open Banking rent collection — all built solo.",
    longDescription:
      "Tenora is a comprehensive SaaS platform that replaces 5-10 separate tools for UK landlords. It handles the full landlord-tenant lifecycle: property listings, AI tenant screening, drag-and-drop contract building with clause-by-clause negotiation, digital signatures, automated rent collection via Stripe and Plaid/TrueLayer, maintenance ticketing, AI message analysis, and financial reporting. 55+ database migrations, 30+ API route groups, and a sophisticated multi-layer subscription gating system.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "TanStack Query",
      "OpenAI",
      "Plaid",
      "TrueLayer",
    ],
    category: "saas",
    featured: true,
    status: "new",
    year: 2025,
    liveUrl: "https://tenora.app",
    problem:
      "UK landlords typically juggle 5-10 disconnected tools — spreadsheets for finances, email for contracts, separate apps for tenant screening, standalone payment processors. Existing solutions are either US-centric (no HMO support, no council tax tracking, no open banking) or cost-prohibitive for small landlords. There was no single platform that handled the full landlord-tenant lifecycle with UK-specific compliance.",
    solution:
      "Built the entire platform as a solo developer — database schema through UI. PostgreSQL with Row Level Security on every table ensures tenants only access their own data and landlords only see their own properties. A multi-layer feature gating system (server middleware, client hooks, database RPC functions) enforces the 5-tier subscription model. The contract negotiation engine uses a JSON-based clause state machine where both parties must agree 100% before signing. The AI pipeline (OpenAI + DeepSeek) parses message intent with structured JSON output to auto-detect maintenance needs, rent inquiries, and lease renewal intent.",
    metrics: [],
  },
  {
    id: "car-parts-finder",
    title: "Car Parts Finder Enterprise",
    description:
      "A multi-tenant marketplace connecting auto parts stores with customers. Real-time inventory sync, vehicle compatibility search (Make/Model/Year), and role-based access for store owners, staff, and buyers.",
    longDescription:
      "A B2B/B2C marketplace platform where auto parts stores manage inventory, pricing, and orders. Features complex vehicle compatibility filtering, real-time stock sync, and a multi-tenant architecture where each store gets its own dashboard.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
    ],
    category: "web",
    featured: true,
    year: 2025,
    problem:
      "Local auto parts stores had no centralized way to digitize inventory and reach online customers. Existing platforms were expensive, slow, and lacked proper vehicle compatibility search — customers had to cross-reference part numbers across multiple sites.",
    solution:
      "Built a multi-tenant SaaS platform where each store gets an isolated dashboard. Implemented a denormalized vehicle compatibility schema that resolves Make/Model/Year lookups in sub-100ms. Used Drizzle ORM with optimistic locking for inventory sync to prevent oversells during concurrent purchases.",
    metrics: [],
  },
  {
    id: "dummified-staking",
    title: "Dummified Labs — Gamified Staking",
    description:
      "A Solana staking protocol that replaces passive yield with RPG-style quests, loot drops, and leveling — built to increase holder retention and community engagement.",
    longDescription:
      'A staking ecosystem on Solana where users stake NFTs to earn rewards through "Expeditions" (quests). Uses a time-weighted reward algorithm and probability-based loot system, all verified on-chain via Anchor.',
    technologies: [
      "Solana",
      "Anchor",
      "Rust",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
    category: "blockchain",
    liveUrl: "https://staking.dummifiedlabs.xyz",

    featured: true,
    year: 2024,
    problem:
      "Standard NFT staking is passive — users lock tokens and wait. This leads to high churn once initial hype fades. The project needed a mechanism to sustain engagement and incentivize long-term holding without constant manual intervention.",
    solution:
      'Designed a quest-based staking engine where staked NFTs participate in "Expeditions." Rewards are calculated using a time-weighted algorithm that favors longer stakes, and loot drops use on-chain verifiable randomness. The entire state machine — stake, quest, claim, unstake — is enforced by an Anchor program deployed to Solana mainnet.',
    metrics: [],
  },
  {
    id: "dummified-trait-marketplace",
    title: "Dummified Labs — NFT Trait Marketplace",
    description:
      "A Solana marketplace where NFT holders buy, sell, and apply modular traits to their existing tokens — adding customization layers without modifying the original collection.",
    longDescription:
      "A decentralized marketplace for composable NFT traits. Users purchase trait tokens and apply them to their NFTs via an on-chain program that modifies metadata while burning the trait token, ensuring each trait can only be used once.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Solana",
      "Anchor",
      "Rust",
      "Tailwind CSS",
    ],
    category: "blockchain",
    liveUrl: "https://dummifiedlabs.xyz",
    featured: true,
    year: 2024,
    problem:
      "Most NFT collections ship with static metadata — once minted, the asset never changes. This kills engagement after the initial mint wave. Collections needed a way to let holders customize their NFTs without requiring the original team to push metadata updates.",
    solution:
      'Built a marketplace using Anchor smart contracts where traits are tokenized SPL tokens. The "trait application" program atomically burns the trait token and updates the NFT metadata extension — all in a single transaction. This means traits are provably scarce and can\'t be duplicated or reused.',
    metrics: [],
  },

  {
    id: "discord-bots-ecosystem",
    title: "Discord Bot Ecosystem",
    description:
      "A suite of Python Discord bots handling crypto wallet verification, a battle royale mini-game, and community management — running across 50+ servers with Redis-backed persistence.",
    longDescription:
      'A collection of modular Discord bots built in Python. Includes wallet verification via Solana Web3.py, a custom "Rumble Royale" game engine with persistent player stats, and automated moderation tools.',
    technologies: ["Python", "Discord.py", "Solana Web3.py", "SQLite", "Redis"],
    category: "bot",
    featured: true,
    year: 2023,
    problem:
      "Crypto communities on Discord needed reliable, automated wallet verification to gate channels by token/NFT holdings. Existing verification bots were expensive, unreliable under load, or lacked the flexibility to support custom token-gating rules.",
    solution:
      "Built a modular bot architecture where each feature (verification, game, moderation) is a standalone cog that can be enabled/disabled per server. Wallet verification queries the Solana RPC directly and caches results in Redis with a configurable TTL. The Rumble Royale game uses SQLite for persistent character stats across server restarts.",
    metrics: [],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};
