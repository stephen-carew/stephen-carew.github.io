import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ebenor",
    tag: "EBN-101",
    service: "Rent collection, contracts & maintenance for UK landlords",
    loopNote:
      "Interlock logic: the signing stage stays disabled until both parties' clause inputs agree 100%.",
    title: "Ebenor — UK Property Management SaaS",
    description:
      "Property management for UK landlords: 110+ features, five billing tiers, AI-assisted tenant messaging, clause-level contract negotiation, and Stripe + open-banking rent collection. Built solo.",
    longDescription:
      "One platform replacing the 5–10 tools UK landlords juggle: listings, tenant screening, contract building with clause-by-clause negotiation, digital signatures, rent collection via Stripe and Plaid/TrueLayer, maintenance tickets, message triage, and reporting. 55+ database migrations, 30+ API route groups, subscription gating enforced at three layers.",
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
    liveUrl: "https://ebenor.co.uk",
    problem:
      "UK landlords juggle 5-10 disconnected tools: spreadsheets for finances, email for contracts, separate apps for tenant screening, standalone payment processors. Existing platforms are either US-centric (no HMO support, no council tax tracking, no open banking) or priced for portfolios, not small landlords. No single product covered the full UK landlord-tenant lifecycle.",
    solution:
      "Built solo, database schema through UI. PostgreSQL with Row Level Security on every table keeps tenants inside their own data and landlords inside their own properties. A three-layer gating system (server middleware, client hooks, database RPC functions) enforces the five subscription tiers. The contract negotiation engine is a JSON clause state machine: both parties must agree 100% before signing. The AI pipeline (OpenAI + DeepSeek) parses tenant messages into structured JSON intent, flagging maintenance needs, rent enquiries, and lease-renewal signals before a human reads them.",
    metrics: [],
  },
  {
    id: "plume-trait-marketplace",
    tag: "PLU-201",
    service: "Letting NFT owners customise their tokens",
    loopNote:
      "Closed loop: every on-chain purchase re-measures rarity, which re-prices the market.",
    title: "Plume — Trait Marketplace",
    description:
      "Solana platform for customising minted NFTs: layered overlays, styled text, effects, and trait upgrades, with an admin dashboard controlling trait pricing and rarity.",
    longDescription:
      "Customisations render client-side as layered canvases with preview export; purchases apply traits on-chain. Traits live as Metaplex Bubblegum compressed NFTs to keep storage costs near zero. The Express + Prisma admin dashboard manages trait pricing, rarity tiers, and community overlay packs, and rarity recalculates server-side after every purchase.",
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
      "NFT metadata is static once minted, so the asset never changes and holders cannot customise without the collection team pushing metadata updates. Collections wanted holder-driven customisation while keeping economic control of the traits.",
    solution:
      "Users preview customisations client-side with layered canvas rendering, then purchase and apply traits on-chain via Solana transactions. Traits are stored as Metaplex Bubblegum compressed NFTs to minimise costs. The admin dashboard uses Express.js + Prisma to manage trait pricing, rarity tiers, and community overlay packs. Rarity recalculates server-side after each purchase using a weighted probability model.",
    metrics: [],
  },
  {
    id: "restauranter",
    tag: "RES-202",
    service: "QR menu ordering with M-Pesa payments",
    loopNote:
      "Sensor → controller → actuator in seconds: order in, kitchen board, live status out.",
    title: "Restauranter — Restaurant Management",
    description:
      "QR ordering with live status and M-Pesa payment for customers, a real-time order board for staff, and inventory, QR generation, and analytics for managers.",
    longDescription:
      "A three-role restaurant platform. Customers order from QR-scanned menus, pay through M-Pesa, and track preparation live. Staff work a kanban order board updated over Server-Sent Events. Admins manage inventory, seat plans, roles, and reporting from the same database.",
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
      "Restaurants in Mozambique ran on paper orders, manual M-Pesa reconciliation, and no shared visibility between kitchen, waitstaff, and customers. Existing POS products treated M-Pesa as an afterthought.",
    solution:
      "Three-role platform with real-time order sync over Server-Sent Events. Customers place orders from QR-scanned menus with live preparation tracking; staff work a kanban board updated in real time. M-Pesa payments complete in-flow with automatic receipts and transaction logs. Redis caching keeps the SSE layer responsive under peak service.",
    metrics: [],
  },
  {
    id: "car-parts-finder",
    tag: "CPF-203",
    service: "An online marketplace for car-parts shops",
    loopNote:
      "Sub-100ms Make/Model/Year resolution — a measurement, not a search.",
    title: "Car Parts Finder Enterprise",
    description:
      "Multi-tenant marketplace for auto parts stores: real-time inventory sync, Make/Model/Year compatibility search, and role-based dashboards for owners, staff, and buyers.",
    longDescription:
      "Stores manage inventory, pricing, and orders per tenant; buyers search parts filtered by vehicle fitment. A denormalised compatibility schema answers Make/Model/Year queries in sub-100ms, and Drizzle optimistic locking prevents oversells during concurrent checkout.",
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
      "Local auto parts stores had no affordable way to publish inventory online. Buyers cross-referenced part numbers across multiple sites because no platform fit parts to a specific Make/Model/Year.",
    solution:
      "Each store gets an isolated tenant dashboard. A denormalised vehicle-compatibility schema resolves Make/Model/Year lookups in sub-100ms, and Drizzle ORM optimistic locking on stock rows prevents oversells during concurrent purchases.",
    metrics: [],
  },
  {
    id: "dummified-staking",
    tag: "DUM-204",
    service: "NFT staking with quests and rewards",
    loopNote:
      "Time-weighted rewards are integral control on hold duration.",
    title: "Dummified Labs — Gamified Staking",
    description:
      "Solana NFT staking with quests: staked NFTs join solo or team expeditions, earn time-weighted rewards, take loot drops, and upgrade — all enforced by an Anchor program.",
    longDescription:
      "Time-weighted reward maths favours longer stakes; loot drops use on-chain verifiable randomness. The full state machine — stake, quest, claim, unstake — runs in an Anchor program on Solana mainnet. Pilgrimage events, NFT upgrades, and a dashboard for live farm and quest configuration included.",
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
      "Passive staking churns holders once the mint wave fades. The collection needed engagement that rewarded long holds without someone manually running campaigns every week.",
    solution:
      "Designed a quest-based staking engine where staked NFTs participate in expeditions. Rewards are calculated using a time-weighted algorithm that favors longer stakes, and loot drops use on-chain verifiable randomness. The entire state machine — stake, quest, claim, unstake — is enforced by an Anchor program deployed to Solana mainnet. Admin dashboard enables live farm configuration and leaderboard monitoring.",
    metrics: [],
  },
  {
    id: "dummified-trait-marketplace",
    tag: "DMT-205",
    service: "A marketplace for single-use NFT add-ons",
    loopNote:
      "Single-use actuators: the trait burns when applied, so no duplicate strokes exist.",
    title: "Dummified Labs — NFT Trait Marketplace",
    description:
      "Solana marketplace for modular NFT traits: holders buy, sell, and apply traits to existing tokens without a metadata push from the original team.",
    longDescription:
      "Traits are tokenised SPL tokens. An Anchor program burns the trait token and updates the NFT metadata extension atomically in one transaction, so each trait is provably single-use and cannot be duplicated.",
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
      "Minted NFT collections cannot change their artwork without the original team pushing metadata updates, leaving holders with static assets and no way to customise.",
    solution:
      "Traits ship as SPL tokens with an Anchor application program: buying a trait, burning it, and updating the target NFT's metadata extension happens atomically in one transaction. Traits are provably scarce because the burn is enforced on-chain, not by convention.",
    metrics: [],
  },
  {
    id: "discord-bots-ecosystem",
    tag: "BOT-301",
    service: "Wallet verification and games for Discord",
    loopNote:
      "50+ servers polling RPC with Redis caching — a distributed sensor net with role logic.",
    title: "Discord Bot Ecosystem",
    description:
      "Python Discord bots for Solana wallet verification, a battle-royale game, and community management — deployed across 50+ servers with SQL-backed persistence.",
    longDescription:
      "Each feature (verification, game, moderation, tournaments) is a standalone cog enabled per server. Verification queries Solana RPC directly with Redis caching; game state persists in MySQL across restarts; tournaments take entry fees and pay out SPL tokens automatically.",
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
      "Crypto communities needed channel gating by token or NFT holdings. Off-the-shelf verification bots were expensive, fell over under load, or could not express custom gating rules and tournament payouts.",
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
