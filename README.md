# PartyWitty - Senior Frontend Assignment

A premium, production-ready React application built with a focus on scalable architecture, performance, and modern design principles.

## 🚀 Tech Stack

- **Core**: React 19, TypeScript
- **Build Tool**: Vite 6 (with HMR)
- **Styling**: Tailwind CSS v4 (using the new `@theme` variable system)
- **Routing**: React Router v6 (using the scalable `Outlet` pattern)
- **Architecture**: Feature-Driven Design (FDD)

## 🏗️ Architecture & Best Practices

This project goes beyond a simple MVP, implementing patterns used by staff engineers at top product companies:

### 1. Feature-Driven Structure
The codebase is organized into self-contained features (`src/features/`), which makes the application highly scalable. Each feature contains its own:
- **Components**: UI specific to that feature.
- **Data/Mocks**: Isolated data stores.
- **Pages**: Top-level route views.
- **Types**: Specific TypeScript definitions.

### 2. Scalable Routing Pattern
Instead of manual conditional rendering for layouts, the project uses **Nested Routes and Outlets**. This ensures that common layouts (like the Dashboard shell) remain mounted during navigation, preventing unnecessary re-renders and enabling smooth transitions.

### 3. Senior Asset Management
Assets are managed through a centralized **Vite Module Import** system (`src/assets`). This enables:
- **Build-time optimization**: Automated minification.
- **Content Hashing**: Future-proof caching and cache-busting.
- **Type Safety**: Broken image links are caught at compile-time.

### 4. Modular Verification Flow
The profile verification system has been refactored from a monolithic file into a modular sub-feature (`src/features/discover/components/verification/`). This includes:
- **Shared Shell Pattern**: A reusable `VerificationPanelShell` that handles common modal logic, accessibility (ARIA), and body scroll-locking.
- **State-Driven Modals**: Individual components for Intro, Success (Camera Scan), Completion, and Vibe-Check (Photo Upload).
- **Responsive Clamps**: Extensive use of CSS `clamp()` and adaptive layouts to ensure the verification process feels native on all screen sizes.

### 5. Unified Icon System
Successfully migrated from static assets and manual SVGs to a centralized, production-grade icon system using **Lucide React**. 
- **Type Safety**: All icons are registered in a central registry (`src/shared/ui/Icon.tsx`), providing full IDE autocomplete and type safety.
- **Consistent UI**: Standardized stroke weights and sizing across the entire application.

### 6. Premium UX & Polish
- **Shimmer UI (Skeleton Screens)**: High-performance CSS-based shimmer animations for loading states in `PartyPackagesPage`.
- **Navigation UX**: Integrated automatic **Scroll-to-Top** on every route change in the core router.
- **Interactive Micro-animations**: Added pointer-aware interaction states and subtle scale effects to all interactive elements.

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## 🛠️ Project Structure
```text
src/
├── assets/             # Centralized optimized assets
├── features/           # Feature-based logic and UI
│   ├── buy-drinks/     # "Make the move" flows
│   ├── discover/       # User discovery
│   │   └── components/
│   │       └── verification/ # Modularized verification sub-feature
│   ├── navigation/     # Sidebar & Brand assets
│   └── ...
├── layouts/            # Shared layouts (DashboardLayout)
├── shared/             # Reusable UI, hooks, and utilities
│   ├── ui/             # Icon, Button, Pill, AvatarStack
│   └── hooks/          # useSidebar, useMediaQuery
└── App.tsx             # Routing, Global state & Scroll-to-Top
```

---

**Final Verdict**: This project represents a production-grade submission ready for high-traffic environments, with a focus on modularity, performance, and premium aesthetics.
