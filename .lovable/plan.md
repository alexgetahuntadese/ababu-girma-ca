

# Accounting Firm Website — Addis Ababa

## Overview
A professional, mobile-first website for an accounting & tax advisory firm in Addis Ababa. Deep purple/amethyst theme with institutional authority, a lead-magnet CTA, and an interactive map.

## Pages & Sections

### 1. Sticky Navigation
- Blur header with logo, nav links (Services, About, Contact), and a "File Taxes" primary CTA button
- Mobile hamburger menu

### 2. Hero Section
- Headline: "Precision Accounting for the Addis Ababa Growth Engine"
- Sub-headline with localized messaging
- Primary CTA: "Calculate Your Tax Exposure"
- Staggered entrance animations using Framer Motion

### 3. Service Pillars (L2)
- Three cards: **Audit & Assurance**, **Tax Advisory**, **Outsourcing & Compliance**
- Each with icon, description, hover lift animation
- Purple-tinted card shadows

### 4. Trust & Stats Section
- Key metrics (years in business, clients served, compliance rate) with `tabular-nums`
- Regulatory certifications and partner logos

### 5. The Compliance Engine CTA (Critical)
- 3-step micro-form lead magnet:
  - Step 1: Revenue Bracket selection
  - Step 2: Industry selection
  - Step 3: Employee Count
- Ends with "Request Full Report" button
- Purple gradient card background, high-contrast design
- Progress indicator between steps

### 6. The Addis Hub — Map Section
- Embedded map centered on Kazanchis/Bole area (using an iframe or Mapbox-style embed)
- Floating overlay card with:
  - Address: "Nani Building, 12th Floor, Kazanchis"
  - "Open in Google Maps" deep link
  - Current status indicator (Open/Closed based on EAT time)
- Custom purple styling

### 7. Footer
- Contact info, office hours, social links
- Quick nav links, copyright

## Design System
- **Colors**: Purple-tinted palette (amethyst primary, vibrant purple accent, off-white background)
- **Font**: Geist Sans with precise typographic scale
- **Radius**: Concentric (16px cards, 8px buttons)
- **Shadows**: Custom purple-tinted card shadows
- **Animations**: Framer Motion staggered entrances, hover lifts, button micro-interactions

## Technical
- React + Tailwind + Framer Motion
- Fully responsive (mobile-first)
- No backend needed — form state managed locally with toast confirmation

