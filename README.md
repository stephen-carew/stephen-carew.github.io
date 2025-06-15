# Stephen Carew's Portfolio

Welcome to my portfolio! This website showcases my projects, skills, and experience as a developer.

## About Me

I'm Stephen Carew, a passionate software developer with a Bachelor's Degree with Honours in Electrical and Electronics Engineering, currently pursuing Instrumentation and Contorl in the UK. I specialize in web development, and Web3 technology. I love building solutions that tackle real-world challenges and am eager to continuously enhance my skills.

Thesis: Gait Phase Detection using Inertial Measurement Unit and Neural Networks

## Projects

### Project 1: [Boobies NFT Customizer & Trait Marketplace](https://plume.bluefoot.xyz)

A full-stack application for customizing and upgrading Boobies NFTs on the Solana blockchain. Users can personalize their NFTs with overlays, buy traits, and manage digital assets—while admins handle collections, traits, and payments through a robust dashboard.

---

## 🌟 Core Features

### 🖌️ NFT Customization

* **Overlay System**: Apply and layer categorized overlays (daily, events, community, etc.)
* **Text & Effects**: Add styled text, blur, glow, shadow, and outlines
* **Community Contributions**: Upload and share custom overlays
* **Preview & Export**: Real-time preview and export for social media

### 🛍️ Trait Marketplace

* **Trait Purchasing**: Upgrade NFTs by buying traits
* **Dynamic Rarity**: Plume Protocol ensures rarity balance
* **Transaction History**: View past purchases and upgrades

### 🔧 Admin Dashboard

* **Collection & Trait Management**: Add, price, and manage traits and collections
* **Overlay Management**: Curate official and community overlays
* **Payment Tools**: Configure tokens, track purchases, verify transactions

---

## ⚙️ Tech Stack

### 🖥️ Frontend

* **Framework**: Next.js 15 (React 19)
* **Styling**: Tailwind CSS, SCSS, Radix UI, Framer Motion
* **UI Libraries**: MUI, Headless UI, Radix Themes
* **State**: React Context API

### 🔗 Blockchain

* **Solana Web3.js**: Core blockchain integration
* **Wallet Adapter**: Multi-wallet support
* **Metaplex**: Compressed NFTs (Bubblegum), token metadata, UMI

### 🧠 Backend

* **Framework**: Express.js with TypeScript
* **Database**: PostgreSQL with Prisma ORM
* **Storage**: Vercel Blob for asset management
* **API Routes**: For traits, collections, purchases, previews, admin auth

---

## 🔐 Blockchain Services

* **Purchases & Token Transfers**: Supports SOL & SPL tokens
* **Metadata Updates**: Reflect trait changes on-chain
* **Transaction Verification**: Ensures secure, valid operations

---

## 🧪 Development Tools

* **TypeScript** for type safety
* **ESLint & Prettier** for consistent code
* **Yarn** for dependency management

---

### Project 2: [Dummified Labs NFT Staking Platform](staking.dummifiedlabs.xyz)
Here's an improved and more polished version of your README that emphasizes clarity, structure, and professionalism while retaining all technical details:

---

# 

## 🧭 Overview

**SacredDAO** is a decentralized NFT staking platform on the **Solana blockchain** that enables users to stake NFTs, embark on time-based quests (called *Pilgrimages*), and earn dynamic rewards. The platform blends gamified mechanics with on-chain utility, offering an engaging and rewarding experience for NFT holders and developers alike.

---

## 🚀 Core Features

### 🧱 NFT Staking

* **Multi-Farm Support**: Stake NFTs across various farm types (standard & quest farms)
* **Time-Based Rewards**: Earn tokens based on staking duration
* **Level Progression**: NFTs level up while staked
* **Flexible Claiming**: Claim rewards at any time

### ✨ Pilgrimages / Quests

* **Duration-Based Incentives**: Longer quests yield better rewards
* **Dynamic Loot System**: Decreasing odds encourage early participation
* **Team-Based Bonuses**: Collaborate for enhanced rewards
* **Level Requirements**: Unlock advanced quests with higher-level NFTs

### 🎁 Loot System

* **Time-Sensitive Drops**: Reward probability changes over time
* **Multi-Type Rewards**: Earn both tokens and NFTs
* **Custom Loot Boxes**: Configurable containers with rarity-based rewards

### 🛠️ Admin Controls

* **Farm Management**: Deploy and configure farms with reward logic
* **Quest Designer**: Create and manage custom pilgrimage parameters
* **Reward Pool Funding**: Allocate SPL tokens for farm and quest rewards
* **Analytics Dashboard**: Real-time monitoring of user activity and farm performance

---

## 🧰 Tech Stack

### 🖥️ Frontend

* **Framework**: Next.js + React
* **Styling**: Theme UI + Emotion
* **State Management**: React Hooks & Context API
* **UI**: Custom components with responsive design

### 🔗 Blockchain Integration

* **Chain**: Solana
* **Dev Framework**: Anchor (for smart contracts)
* **Standards**: SPL tokens & Metaplex NFTs
* **Wallet Support**: Solana Wallet Adapter

### 🧠 Backend

* **Database**: PostgreSQL + Prisma ORM
* **Auth**: Wallet-based authentication
* **API**: Next.js API Routes

---

## 🗂️ Project Structure

### 📦 Components

* `Header`, `Layout`: UI structure & navigation
* `NFTGallery`, `NFTSelectInput`, `TokenSelectModal`: NFT and token UI
* `WalletManager`: Wallet integration

### ⚓ Hooks

* `useAnchorStakingProgram`: Connect with Anchor programs
* `useStaking`, `useQuests`: Core business logic
* `useWalletNFTs`, `useTotalStaked`: NFT and staking data
* `useFarmToasts`: Notifications

### 🧱 Lib

* `pda`: Program-Derived Address utilities
* `utils`: Utility helpers
* `gen`: Auto-generated Anchor integration code

  * `accounts`, `instructions`, `types`, `errors`

### 🧭 Pages

* **Main**: Home, Pilgrimage, Crash Course
* **Admin**: Dashboard, Farm/Quest Management
* **API**: Backend endpoints

---

## ⚙️ Smart Contract Architecture

Built with **Anchor**, SacredDAO’s smart contract includes modular programs to manage staking, progression, and rewards.

### 📜 State Accounts

* **Farm**: Controls staking parameters and rewards
* **Farmer**: Tracks individual stakers and claims
* **Level**: Stores NFT progression data
* **Quest**: Defines quest structure and rewards
* **StakeReceipt**: Records each staking action

### 🛠️ Instructions

* `initializeFarm`, `initializeFarmer`: Setup functions
* `stake`, `unstake`: Handle deposits and withdrawals
* `claimRewards`, `fundRewards`: Reward distribution
* `createQuest`, `manageQuest`: Quest configuration

---


### Project 3: [🌸 Naomi's Little Corner – Elegant Floral Fashion E-Commerce Platform](link-to-project)


## 🛍️ Overview

**Naomi’s Little Corner** is a refined and responsive e-commerce platform tailored for floral-themed fashion. Designed with modern web technologies and a strong aesthetic focus, it delivers a seamless shopping experience and robust administrative tools.

---

## ✨ Key Features

### 🛒 Customer Experience

* **Elegant UI/UX**

  * Floral-inspired design with soft animations and transitions
  * Fully responsive across desktop and mobile devices
* **Product Discovery**

  * Featured product highlights
  * Category-based navigation & search
  * Detailed product pages with image galleries
* **Shopping Flow**

  * Interactive cart with size/color selection
  * Wishlist functionality
  * Secure and smooth checkout process
* **User Accounts**

  * Email-verified sign-up & login
  * Password recovery support
  * Order history and address book

### 🧑‍💼 Admin Capabilities

* **Product Management**

  * Add, update, and delete products
  * Manage inventory and mark featured items
* **Order Processing**

  * View, update, and fulfill orders
  * Process cancellations and refunds
* **Customer Management**

  * Access customer data
  * Manage user accounts and interactions

---

## 🧰 Tech Stack

### 🔧 Frontend

* **Framework**: Next.js 15 (App Router)
* **Library**: React 19
* **Styling**: Tailwind CSS v4 with a custom floral theme
* **UI Components**: Custom-built using Radix UI primitives
* **State Management**: React Context API

### 🗄️ Backend

* **API**: Next.js API Routes
* **Database**: PostgreSQL with Prisma ORM
* **Auth**: NextAuth.js (JWT strategy)
* **Email**: Nodemailer for transactional communications

### ⚙️ DevOps & Tooling

* **Hosting**: Vercel
* **CI/CD**: GitHub Actions
* **Testing**: Jest, Playwright, React Testing Library
* **Code Quality**: ESLint, Prettier, TypeScript


## Contact Me

Feel free to reach out to me via email at [stephen.carw@outlook.com](mailto:stephen.carw@outlook.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/stephen-carew).

## License

This project is licensed under the [MIT License](LICENSE).
