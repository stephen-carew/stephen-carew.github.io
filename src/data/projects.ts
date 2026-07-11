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
    year: 2026,
    liveUrl: "https://tenora.app",
    problem:
      "UK landlords typically juggle 5-10 disconnected tools — spreadsheets for finances, email for contracts, separate apps for tenant screening, standalone payment processors. Existing solutions are either US-centric (no HMO support, no council tax tracking, no open banking) or cost-prohibitive for small landlords. There was no single platform that handled the full landlord-tenant lifecycle with UK-specific compliance.",
    solution:
      "Built the entire platform as a solo developer — database schema through UI. PostgreSQL with Row Level Security on every table ensures tenants only access their own data and landlords only see their own properties. A multi-layer feature gating system (server middleware, client hooks, database RPC functions) enforces the 5-tier subscription model. The contract negotiation engine uses a JSON-based clause state machine where both parties must agree 100% before signing. The AI pipeline (OpenAI + DeepSeek) parses message intent with structured JSON output to auto-detect maintenance needs, rent inquiries, and lease renewal intent.",
    metrics: [],
  },
  {
    id: "plume-trait-marketplace",
    title: "Plume — Trait Marketplace",
    description:
      "A full-stack Solana-based platform enabling users to customize their NFTs through overlays and trait upgrades, with an admin dashboard controlling trait economics and user interactions.",
    longDescription:
      "Plume is a comprehensive NFT customization platform built on Solana. Users can layer overlays, apply styled text, add effects, and export previews of their customized NFTs. The on-chain trait marketplace handles purchases, rarity recalculation, and tracks upgrade history. An admin dashboard provides full control over trait management, token payment settings, and community overlays.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Vercel Blob",
      "Solana Web3.js",
      "Metaplex Bubblegum",
    ],
    category: "blockchain",
    featured: true,
    status: "new",
    year: 2025,
    problem:
      "NFT collections typically ship with static metadata — once minted, the asset never changes. Collections needed a way to let holders customize their NFTs with overlays, effects, and traits, while giving project admins economic control over the trait marketplace. Existing tools lacked the combination of on-chain trait tracking and rich visual customization.",
    solution:
      "Built a full-stack platform where users preview customizations client-side with layered canvas rendering, then purchase and apply traits on-chain via Solana transactions. Traits are stored as Metaplex Bubblegum compressed NFTs to minimize costs. The admin dashboard uses Express.js + Prisma to manage trait pricing, rarity tiers, and community overlay packs. Rarity is recalculated server-side after each trait purchase using a weighted probability model.",
    metrics: [],
  },
  {
    id: "restauranter",
    title: "Restauranter — Restaurant Management",
    description:
      "All-in-one platform for customers, staff, and managers enabling seamless restaurant operations with QR code ordering, live status tracking, and M-Pesa payment support.",
    longDescription:
      "A multi-role restaurant management platform. Customers scan QR codes to order and pay via M-Pesa with live order status. Staff manage real-time orders, seating, and tips. Admins control inventory, QR generators, role management, and analytics — all from a single dashboard.",
    technologies: [
      "Next.js 15",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Server-Sent Events",
      "M-Pesa API",
    ],
    category: "saas",
    featured: true,
    year: 2025,
    problem:
      "Restaurants in Kenya rely on fragmented systems — paper orders, manual payment reconciliation, and no real-time visibility between kitchen, waitstaff, and customers. M-Pesa integration was critical but poorly served by existing POS systems.",
    solution:
      "Built a three-role platform with real-time order sync via Server-Sent Events. Customers place orders via QR-scanned menus with live preparation tracking. Staff see a kanban-style order board updated in real time. Full M-Pesa integration handles payments, with automatic receipt generation and transaction logging. Redis caching keeps the SSE layer responsive under load.",
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
      "A gamified Solana NFT staking experience where users stake NFTs to earn rewards, complete quests, and level up through team or solo events.",
    longDescription:
      "A staking ecosystem on Solana where users stake NFTs to earn rewards through quests and expeditions. Uses a time-weighted reward algorithm, dynamic loot drops, and probability-based reward system — all verified on-chain via Anchor. Includes Pilgrimage events, NFT upgrades, and a full admin dashboard for farm and quest configuration.",
    technologies: [
      "Solana",
      "Anchor",
      "Rust",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Theme UI",
      "SPL Tokens",
      "Metaplex Bubblegum",
    ],
    category: "blockchain",
    liveUrl: "https://staking.dummifiedlabs.xyz",
    featured: true,
    year: 2024,
    problem:
      "Standard NFT staking is passive — users lock tokens and wait. This leads to high churn once initial hype fades. The project needed a mechanism to sustain engagement and incentivize long-term holding without constant manual intervention.",
    solution:
      "Designed a quest-based staking engine where staked NFTs participate in expeditions. Rewards are calculated using a time-weighted algorithm that favors longer stakes, and loot drops use on-chain verifiable randomness. The entire state machine — stake, quest, claim, unstake — is enforced by an Anchor program deployed to Solana mainnet. Admin dashboard enables live farm configuration and leaderboard monitoring.",
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
      "A suite of Python Discord bots handling Solana wallet verification, a battle royale mini-game, and community management — running across 50+ servers with SQL-backed persistence.",
    longDescription:
      "A collection of modular Discord bots built in Python. Includes wallet verification via Solana SDK, a custom battle royale game engine with team and solo modes, automated tournament scheduling, on-chain prize distribution, and interactive embed-based admin panels.",
    technologies: [
      "Python",
      "Discord.py",
      "Solana SDK",
      "MySQL",
      "Redis",
      "interactions.py",
      "BIP-39",
    ],
    category: "bot",
    featured: true,
    year: 2023,
    problem:
      "Crypto communities on Discord needed reliable, automated wallet verification to gate channels by token/NFT holdings. Existing verification bots were expensive, unreliable under load, or lacked the flexibility to support custom token-gating rules and tournament prize distribution.",
    solution:
      "Built a modular bot architecture where each feature (verification, game, moderation, tournaments) is a standalone cog that can be enabled/disabled per server. Wallet verification queries the Solana RPC directly and caches results in Redis. The battle royale game uses MySQL for persistent character stats across server restarts. Tournament system supports entry fees, role-based access, and automated on-chain payouts via SPL tokens.",
    metrics: [],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};
