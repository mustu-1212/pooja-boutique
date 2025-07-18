# Boutique Website - Replit.md

## Overview

This project is a full-stack web application for "Pooja Boutique", a women's fashion boutique. It's built as a single-page application (SPA) showcasing various clothing categories with a modern, elegant design. The application features a React frontend with TypeScript, Express.js backend, and PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Structure**: RESTful API with `/api` prefix

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized schema definition in `shared/schema.ts`

## Key Components

### Core Application Structure
- **Client**: React SPA located in `/client` directory
- **Server**: Express.js API server in `/server` directory
- **Shared**: Common types and schemas in `/shared` directory

### Frontend Components
- **Landing Page**: Single-page boutique website with sections for:
  - Hero section with call-to-action
  - Product categories (Short Kurtis, Long Kurtis, Suit Sets, Tops, Co-ord Sets, Gowns)
  - Featured products showcase
  - About section
  - Contact form
  - Footer with social links

### UI Components
- **Design System**: shadcn/ui components with custom boutique theming
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Product gallery modal, WhatsApp integration
- **Color Scheme**: Purple-based boutique theme with custom CSS variables

### Backend Components
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Route Handler**: Centralized route registration system
- **Development Server**: Vite integration for hot module replacement

## Data Flow

### Frontend Data Flow
1. React components use TanStack Query for server state management
2. API requests are handled through a centralized query client
3. Form submissions trigger API calls to backend endpoints
4. UI updates reactively based on query state changes

### Backend Data Flow
1. Express.js routes handle API requests
2. Storage interface abstracts database operations
3. Drizzle ORM manages database queries and migrations
4. PostgreSQL stores persistent data

### Database Schema
- **Users Table**: Basic user management with username/password
- **Extensible Design**: Schema can be extended for products, orders, etc.

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React-DOM, React Query)
- UI libraries (Radix UI primitives, shadcn/ui components)
- Styling (Tailwind CSS, class-variance-authority)
- Routing (Wouter)
- Forms (React Hook Form, Zod validation)

### Backend Dependencies
- Express.js for web server
- Drizzle ORM for database operations
- PostgreSQL client (@neondatabase/serverless)
- Session management (connect-pg-simple)

### Development Dependencies
- Vite for build tooling
- TypeScript for type safety
- ESBuild for server bundling

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `/dist/public`
2. **Backend**: ESBuild bundles server code to `/dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Production Setup
- **Static Files**: Frontend served from `/dist/public`
- **API**: Backend serves API routes and static files
- **Database**: PostgreSQL database (Neon serverless recommended)
- **Environment**: Requires `DATABASE_URL` environment variable

### Development Mode
- **Hot Reloading**: Vite dev server with HMR
- **API Proxy**: Express server integrates with Vite middleware
- **Database**: Local PostgreSQL or Neon development database

### Hosting Options
- **Vercel**: Pre-configured with `vercel.json` for SPA routing
- **Replit**: Optimized for Replit environment with dev banner
- **Traditional VPS**: Can be deployed as Node.js application

## Security Considerations
- CORS headers configured for security
- Input validation using Zod schemas
- Session-based authentication ready (storage interface supports users)
- Environment variable protection for database credentials

## Recent Changes: Latest modifications with dates

### July 11, 2025 - Enhanced Website with Premium Features & Red Theme Migration
- **Enhanced Visual Design**: Updated all category cards with hover effects, image scaling, and modern overlays
- **Improved Product Showcase**: Added 6 featured products with detailed pricing, size options, and order buttons
- **Added Pricing Section**: New comprehensive price showcase with category-wise pricing ranges and special offers
- **Enhanced Hero Section**: Added statistics counters, dual call-to-action buttons, and decorative background patterns
- **Customer Testimonials**: Added testimonials section with customer reviews and ratings
- **Enhanced Gallery Modal**: Product gallery now includes pricing, sizes, and direct ordering capability
- **Better Image Quality**: Upgraded all images to higher resolution and better composition
- **Interactive Elements**: Added hover animations, scale effects, and smooth transitions throughout
- **Pricing Information**: All products now include current prices, original prices, and available sizes
- **WhatsApp Integration**: Enhanced WhatsApp ordering system with direct product links
- **Frontend-Only Architecture**: Removed backend dependencies to make it fully Vercel-deployable
- **Updated Color Scheme**: Changed from purple/white to warm yellowish tones, then migrated to red theme with black/white text for better visual appeal
- **Replit Migration Completed**: Successfully migrated project from Replit Agent to Replit environment with red styling theme
- **Button Styling Consistency**: Made "Explore Collection" button match "Get Help" button styling for consistent user experience

### July 12, 2025 - Testimonials & Contact Updates
- **Real Customer Testimonials**: Updated testimonials section with authentic customer photos and detailed reviews
- **Contact Information Update**: Updated all contact details with correct WhatsApp number (+91 8319243373), Instagram link, and email (95poojamarkam@gmail.com)
- **Enhanced Form Functionality**: Contact form now opens default email client with pre-filled order details using mailto functionality
- **Visual Improvements**: Added verified customer badges and better styling to testimonial cards with message boxes
- **About Section Image**: Replaced generic image with clothing rack photo for better boutique representation
- **Contact Form Styling**: Enhanced contact form with white box styling for better visual separation
- **Vercel Deployment Ready**: Ensured all features work without backend dependencies for seamless Vercel deployment

### July 12, 2025 - Contact Information & Testimonials Update
- **Updated Contact Information**: Replaced all placeholder contact details with real information
  - WhatsApp: +91 8319243373 (updated across all components)
  - Email: 95poojamarkam@gmail.com (with mailto functionality)
  - Instagram: @poojamarkam308 (with working links)
  - Address: Updated to Fashion District, Mumbai, Maharashtra, India
- **Enhanced Testimonials**: Added real customer photos and improved testimonial styling
  - Added verification badges and enhanced message boxes
  - Improved visual design with borders and better spacing
- **Form Functionality**: Contact form now uses mailto to send emails directly to 95poojamarkam@gmail.com
- **Vercel Deployment Ready**: Ensured all functionality works without backend dependencies for Vercel deployment

### July 12, 2025 - Final Hero Image & Vercel Deployment Setup
- **Hero Image Updated**: Replaced SVG illustration with high-quality PNG image of Indian woman in traditional attire
  - Used transparent background image (Q44-removebg-preview_1752295771542.png)
  - Optimized sizing and positioning for better visual appeal
- **Vercel Deployment Configuration**: Completed full setup for seamless Vercel deployment
  - Updated vercel.json with proper build commands and output directory
  - Created .vercelignore to exclude unnecessary files
  - Added comprehensive README.md and DEPLOYMENT.md guides
  - Verified frontend-only architecture works without backend dependencies
  - Optimized asset loading and caching headers for production
- **Production Ready**: Website is now fully configured and ready for Vercel deployment with all features working