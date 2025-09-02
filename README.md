# Yutawir Technologies Website

## Overview

This is a modern, production-ready marketing website for **Yutawir Technologies**, a Dubai-based software company specializing in building custom software solutions for startups, SMBs, and enterprises. The website focuses on their key services in AI/computer vision, cybersecurity, and algorithmic trading (fintech).

The design incorporates **Yutawir’s branding** with an **orange and amber color theme**, creating a sleek, professional look for the site. The site is built using **Next.js** with **React** and **Tailwind CSS** for styling.

---

## Key Features

- **Brand Positioning**: The website represents **Yutawir Technologies** and its core values: **Secure, Intelligent, Scalable**.
- **Tech Stack**:
  - **Framework**: Next.js + React
  - **Styling**: Tailwind CSS
  - **Component Library**: Shadcn/ui (for UI components)
  - **Icons**: Lucide-react (for icons)
  - **Animations**: Framer-motion (for smooth animations)
  
- **Color Palette**:
  - Primary: `#FF8A00` (Ember Orange) and gradients
  - Secondary: `#F59E0B` (Amber)
  - Success: `#22C55E` (Green)
  - Neutral: Soft neutrals like `#FFFFFF` (light) and `#0B0F1A` (dark)

- **Typography**:
  - **Headings**: Sora or Plus Jakarta Sans (600–700 weight)
  - **Body**: Inter (400–500 weight)

- **Responsiveness**: Fully responsive design with breakpoints for mobile (sm), tablet (md), and desktop (lg).

---

## Pages

### 1. **Navigation (Sitewide)**
- **Left**: Yutawir logo
- **Right**: About, Services, Solutions, Case Studies, Contact
- **CTA Button**: **Book a Discovery Call**
- **Mobile Navigation**: Sheet/Drawer with links

### 2. **Home**
- **Hero Section**: Headline **Build secure, intelligent, and scalable software—faster** with a background gradient of orange and amber hues.
- **Trust Strip**: Display small grayscale logos (placeholders).
- **Services Overview**: 3 cards with service details:
  - **Computer & Machine Vision**
  - **Cybersecurity**
  - **Algorithmic Trading (Stock & Crypto)**
- **Solutions/Use-Cases**: Accordion or Tabs listing industries like Manufacturing QA, Retail Analytics, Threat Monitoring.
- **Process**: 4 Steps: Discover → Design → Build → Secure & Scale
- **CTA**: Gradient card **Get a Proposal**

### 3. **About**
- **Story**: Company values (Reliability, Security, Velocity, Impact)
- **Mission & Vision**: Block with amber borders
- **Leadership**: Cards with short bios
- **CTA**: **Let’s Talk**

### 4. **Services**
- **Intro**: Short value proposition
- **Detailed Service Pages**:
  - **Computer & Machine Vision** (AI & computer vision technologies)
  - **Cybersecurity** (Appsec, IAM, Cloud Hardening)
  - **Algorithmic Trading** (Low-latency, Strategy Design, Backtesting)
- **Features/Badges** for each service, mini case highlights, and CTA

### 5. **Solutions / Case Studies**
- **Grid of Cards**: Display short value outcomes like “Reduced manual QA by 72%”.
- **Dialog/Sheet** with problem → approach → outcome metrics
- **CTA**: **Request Full Case Study PDF**

### 6. **Contact**
- **Layout**: Left text, Right form (Shadcn Form)
- **Form Fields**: Name, Work Email, Company, Phone, Message
- **Info**: Dubai, UAE, MapPin, Phone number
- **Secondary CTA**: **Book a Discovery Call**

---

## Components & UI Elements

- **Buttons**:
  - **Primary**: Orange→Amber gradient (`from-#FF8A00 via-#F59E0B to-#FBBF24`), hover darken (`brightness-95`).
  - **Secondary**: Outline with amber border/text; hover `bg-amber-50/10`.
  - **Ghost**: Neutral text; hover underline with amber decoration.
  - All buttons: rounded-2xl, subtle lift on hover.

- **Cards**: Soft borders, shadow, hover: `translate-y-[1px]`, `shadow-md`.

- **Sections**: 80-100px vertical spacing on desktop, 48-64px on mobile.

- **Hero & CTA Bands**: Gradient backgrounds with icons (lucide-react).

---

## Performance

- **Optimization**: Lazy loading of images, prefetch critical routes, no layout shifts.
- **Code Split & Minification**: Tree-shaking and code-splitting.
- **Accessibility**: Ensure WCAG AA contrast minimums, keyboard navigability with visible focus rings (`ring-amber-400`), and clear hit targets for interactive elements.

---

## SEO & Analytics

- **SEO**: Each page has its own `<title>` and meta description, OG/Twitter meta, and JSON-LD structured data.
- **Analytics**: Integration for Google Analytics (GA4) or Plausible, no personally identifiable information (PII) tracked.

