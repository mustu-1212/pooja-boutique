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