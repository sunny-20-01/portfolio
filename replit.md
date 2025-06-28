# Portfolio Website - Architecture Overview

## Overview

This is a modern React-based portfolio website built for Sunny, a finance and technology professional studying at SKEMA Business School. The application showcases education, experience, research projects, and skills through a clean, responsive interface. It follows a full-stack architecture with a React frontend, Express backend, and PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Component Library**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON responses
- **File Serving**: Static file serving for CV downloads
- **Development**: Hot reload with Vite integration

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with TypeScript integration
- **Schema**: User management system (expandable)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless PostgreSQL

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Professional introduction with CTA buttons
3. **Education**: Academic background with coursework details
4. **Experience**: Professional work history with achievements
5. **Research**: Academic research projects and findings
6. **Projects**: Technical and finance-related projects
7. **Skills**: Programming languages, tools, and certifications
8. **Contact**: Contact information and availability status

### Backend Services
1. **File Download**: CV download endpoint with proper headers
2. **Storage Interface**: Abstracted storage layer for future database operations
3. **Error Handling**: Centralized error management with proper HTTP status codes

### Shared Resources
1. **Schema Definitions**: Drizzle schema with Zod validation
2. **Type Safety**: End-to-end TypeScript type definitions

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **API Calls**: TanStack Query manages HTTP requests to Express backend
3. **Backend Processing**: Express routes handle business logic
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **Response Handling**: JSON responses with proper error handling
6. **UI Updates**: React components re-render based on state changes

## External Dependencies

### UI/Design
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library
- **Google Fonts**: Inter and JetBrains Mono fonts

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and development experience
- **ESLint/Prettier**: Code quality and formatting
- **PostCSS**: CSS processing with Autoprefixer

### Backend Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle**: TypeScript ORM and query builder
- **Express**: Web application framework
- **Zod**: Runtime type validation

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: ESBuild bundles Node.js server
3. **Database Setup**: Drizzle migrations ensure schema consistency
4. **Asset Optimization**: Automatic code splitting and optimization

### Production Configuration
- **Environment Variables**: Database URL and configuration
- **Static Serving**: Express serves built React application
- **Error Handling**: Production-ready error responses
- **Performance**: Optimized bundles with tree-shaking

### Development Workflow
- **Hot Reload**: Vite provides instant feedback during development
- **Type Checking**: TypeScript ensures code quality
- **Database Sync**: Drizzle push command for schema updates

## Changelog
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.