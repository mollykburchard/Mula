# MULA Fysio Website

## Overview
Professional physiotherapy practice website for MULA Fysio, located in Amsterdam-Noord. The site is bilingual (Dutch/English) with a clean, editorial design.

## Architecture
- **Frontend**: React + TypeScript + Wouter routing + TanStack Query
- **Backend**: Express.js + PostgreSQL (Drizzle ORM)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion (scroll-triggered reveals, parallax, image clip-path animations)
- **Language**: Dutch (default) / English toggle
- **Auth**: Session-based (express-session + connect-pg-simple)
- **Design**: Clean, editorial, minimal — full-bleed images, generous whitespace, Inter font for all headings

## Key Pages
- `/` - Home page with parallax hero, stats bar, team preview, services preview, philosophy, reviews, CTA
- `/over-ons` - About us / team page with parallax hero, staggered specialty tags
- `/diensten` - Services page with card grid layout (3 columns desktop, 2 tablet, 1 mobile)
- `/afspraak` - Book appointment page with underline-style form inputs
- `/reviews` - Patient reviews
- `/contact` - Contact page with map and form
- `/faq` - FAQ with accordion
- `/tarieven` - Pricing page
- `/blog` - Blog (placeholder)
- `/admin` - Admin CMS dashboard (protected with login)

## Admin Inline Editing System
- Login at `/admin` with username/password, then redirected to live site
- Floating admin toolbar appears on all pages when logged in
- "Bewerk modus" toggle enables click-to-edit on all text elements across the site
- All text content uses `EditableText` component with content keys stored in `site_content` table
- **Pages with inline editing**: Home, About, Services, Tarieven, Contact, Booking, FAQ, Blog, Reviews
- **Services page**: Admin can change service photos (click image to upload), edit names/descriptions, add/remove services via database
- **Tarieven page**: Admin can edit category names, item names/prices/notes, add/remove items and categories; saves as JSON to content API
- **Contact/Booking**: Phone, email, address, labels all editable; links remain functional
- **Blog/Reviews/FAQ**: All text content editable inline
- Image uploads stored in `/uploads/` directory
- Session-based auth with PostgreSQL session store

## Database Schema
- `users` - Admin accounts (id, username, password)
- `site_content` - Key-value text content (key, valueNl, valueEn)
- `services` - Treatment services (slug, nameNl, nameEn, descriptionNl, descriptionEn, insured, imageUrl, sortOrder, visible)
- `session` - Express sessions (auto-created by connect-pg-simple)

## Design System
- Typography: Inter font for all headings (negative letter-spacing, mixed case), Inter for body
- Layout: max-w-[1400px] container, px-6 sm:px-10 lg:px-16 padding
- Colors: `#EBF1F8` (soft blue sections), `#7C8C6E` (sage green accent sections)
- Images: Full-bleed hero images, 4:3 aspect ratio for service cards
- CTAs: Text-based with arrow icon + animated underline on hover
- Navbar: Transparent on hero, white on scroll, uppercase links

## Key Components
- `client/src/lib/i18n.tsx` - Language context + full NL/EN translations
- `client/src/components/Navbar.tsx` - Minimal nav with language toggle
- `client/src/pages/Admin.tsx` - Full admin CMS dashboard
- `server/routes.ts` - API routes with auth, content, services, and file upload
- `server/storage.ts` - Database storage interface (PostgreSQL via Drizzle)
- `server/db.ts` - Database connection

## Practice Info
- Name: MULA Fysio
- Team: Guylian Kick (MSc Manuele Therapie) & Roos van der Deen (Fysiotherapeut)
- Address: Schaafstraat 20F, 1021 KE Amsterdam
- Phone: +31 6 29 55 46 89
- Email: info@mulafysio.nl
- Hours: Mon–Thu 7:30–20:00, Fri 7:30–18:00, Sat–Sun closed
