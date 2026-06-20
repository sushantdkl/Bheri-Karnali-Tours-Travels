# Product Requirements Document

## Product Name

Bheri Karnali Tours & Travels Website and Admin System

Business owner/proprietor: Gyanendra Gautam

## Product Vision

Create a trustworthy, locally discoverable travel and vehicle rental platform for Karnali-focused tourism, with WhatsApp-first lead conversion and simple admin lead management.

## Problem Statement

Travelers interested in Karnali often need local guidance, route planning, reliable vehicles, and quick communication. The business needs a professional website that generates qualified leads, promotes high-value Karnali experiences, and gives staff a secure place to review and manage inquiries.

## Target Users

- Domestic tourists
- International tourists
- Families
- Student groups
- Corporate and official groups
- Pilgrims
- Trekkers
- Adventure travelers
- People needing vehicle rental from Surkhet

## Business Goals

- Generate qualified leads.
- Make WhatsApp booking easy.
- Promote Karnali travel.
- Promote Surkhet vehicle rental.
- Build trust with professional content and clear flows.
- Improve discoverability on Google.
- Support admin lead management.

## User Goals

- Understand Karnali tour options.
- Ask about Rara, Phoksundo, Dolpo, Humla, Jumla, Dailekh, Surkhet, rafting, and custom trips.
- Request vehicle rental from Surkhet.
- Contact quickly through WhatsApp or phone.
- Submit inquiries without needing a complete itinerary.

## Core Features

- Public website with travel packages, vehicles, destinations, gallery, blog, about, contact, and booking pages.
- WhatsApp and call CTAs.
- Inquiry forms.
- Vehicle rental inquiry form.
- Admin dashboard.
- Inquiry status management.
- Package, vehicle, destination, and testimonial management.
- Local SEO, sitemap, robots, JSON-LD, and Open Graph image.

## Public Website Requirements

- Mobile-first responsive design.
- Clear navigation.
- Premium but practical travel styling.
- Fast-loading public pages using static data where possible.
- Safe image fallbacks until approved client photos are available.

## Booking And Inquiry Requirements

- Forms must validate required fields.
- Forms must save valid inquiries to the database.
- API errors must be user-friendly.
- WhatsApp fallback must be visible.

## Vehicle Rental Requirements

- Vehicle catalog.
- Route-based rental guidance.
- Vehicle inquiry form.
- Road condition and quote dependency notes.

## Admin Dashboard Requirements

- Secure login.
- Protected admin routes.
- Inquiry list and detail views.
- Inquiry status updates.
- Quick filters.
- CSV export.
- CRUD screens for packages, vehicles, destinations, and testimonials.

## SEO Requirements

- Unique metadata for key pages.
- Sitemap and robots.
- Local business structured data.
- Travel agency structured data.
- TouristTrip and FAQ schema where practical.
- Blog foundation for future content marketing.

## WhatsApp-First Booking Requirement

WhatsApp must remain a primary conversion channel because travelers often need route, vehicle, date, and price guidance before confirming a booking.

## Non-Functional Requirements

- Build-safe on Vercel.
- No exposed secrets.
- Accessible forms and links.
- Production-safe error handling.
- Maintainable documentation.

## Success Metrics

- Inquiry submissions.
- WhatsApp clicks.
- Phone clicks.
- Vehicle rental leads.
- Package-specific leads.
- Organic search impressions.
- Admin response time.

## MVP Scope

- Public website.
- Static content catalog.
- Inquiry database.
- Admin lead management.
- SEO foundation.
- Vercel deployment readiness.

## Out Of Scope

- Online payment.
- Customer login.
- Mobile app.
- Real-time GPS tracking.
- Multi-vendor marketplace.
- Full accounting system.

## Future Enhancements

- Email notifications.
- Analytics.
- Availability calendar.
- Payment planning.
- Customer portal.
- English/Nepali support.
## CMS Product Scope

The admin dashboard includes a simple CMS for non-technical website management. Admin users can update homepage/about/contact page content, business details, FAQs, services, blog posts, gallery items, media assets, packages, vehicles, destinations, testimonials, and inquiries without editing code. Public pages read database content first and fall back to static content when CMS records are missing.

Development login is `karnali@admin.com` / `123456`; this is testing-only and must be changed before production.
