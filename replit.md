# Overview

This is a personal portfolio website for Jignesh D Maru, a frontend developer. The project is built with Next.js 13 and serves as a showcase for the developer's skills and work. The site features a modern, clean design with dark/light theme support and smooth animations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 13 with App Router for modern React development
- **Language**: TypeScript for type safety and better development experience
- **Styling**: Tailwind CSS for utility-first styling approach
- **Theme System**: next-themes for seamless dark/light mode switching
- **Animations**: Framer Motion for smooth, professional animations and transitions
- **Icons**: Lucide React for consistent iconography

## Component Structure
- **Layout Pattern**: Root layout with global providers for theme management
- **Component Organization**: Modular components stored in `/app/components/` directory
- **Theme Toggle**: Dedicated component with proper hydration handling to prevent mismatches

## Styling Approach
- **CSS Framework**: Tailwind CSS with custom configuration
- **Dark Mode**: Class-based dark mode implementation with smooth transitions
- **Typography**: Inter font from Google Fonts for clean, readable text
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities
- **Custom Scrollbar**: Styled webkit scrollbars for enhanced user experience

## Development Configuration
- **Build Tool**: Next.js built-in compiler and bundler
- **Code Quality**: ESLint with Next.js specific rules
- **PostCSS**: Configured for Tailwind CSS processing
- **TypeScript**: Strict mode enabled with path aliases for clean imports
- **Replit Optimization**: React Strict Mode disabled for Replit environment compatibility

## Design Patterns
- **Server Components**: Leveraging Next.js 13 App Router with client components only where needed
- **Provider Pattern**: Theme provider wrapping the entire application
- **Motion Components**: Framer Motion for entrance animations and micro-interactions
- **Responsive Navigation**: Fixed header with backdrop blur and smooth scrolling

# External Dependencies

## Core Framework
- **Next.js 13.5.1**: React framework for production applications
- **React 18.2.0**: Core React library
- **TypeScript 5.2.2**: Type system for JavaScript

## Styling & UI
- **Tailwind CSS 3.3.3**: Utility-first CSS framework
- **Framer Motion 12.23.22**: Animation library for React
- **next-themes 0.4.6**: Theme management for Next.js applications
- **Lucide React 0.544.0**: Icon library with consistent design

## Development Tools
- **ESLint**: Code linting with Next.js configuration
- **PostCSS**: CSS processing tool
- **Autoprefixer**: CSS vendor prefix automation

## Font Optimization
- **next/font**: Built-in font optimization with Google Fonts integration
- **Inter**: Primary typeface loaded via Google Fonts

## Deployment Target
- **Vercel Platform**: Optimized for Vercel deployment with Next.js
- **Replit Environment**: Configured for development in Replit with appropriate settings