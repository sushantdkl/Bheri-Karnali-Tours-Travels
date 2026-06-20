# Technical Requirements Document

## System Overview

The system is a Next.js App Router application with a public travel website, secure admin dashboard, Prisma/PostgreSQL persistence, and API route handlers for inquiry submission and admin authentication.

## Architecture

- Next.js App Router for pages and APIs.
- Server components by default.
- Client components only for interactivity such as forms, filters, menus, gallery lightbox, and admin UI controls.
- Prisma ORM with PostgreSQL.
- Zod validation at API and admin form boundaries.
- HTTP-only cookie session for admin authentication.
- Vercel deployment target.

## Frontend Architecture

Public pages use reusable sections, cards, CTA components, fallback-safe media components, and static data files. Client components are limited to interactive elements.

## Backend Architecture

Backend logic lives in route handlers and server modules:

- Public APIs accept inquiry, contact, and vehicle rental submissions.
- Admin auth APIs handle login, logout, and session lookup.
- Server actions support admin CRUD and status updates.

## Database Architecture

Prisma models represent inquiries, tour packages, vehicles, destinations, testimonials, and admin users. Static public data supports fast builds while database models support admin-managed content.

## Authentication Architecture

- Admin login validates credentials against `AdminUser`.
- Passwords are verified with bcryptjs.
- Session is signed using jose.
- Session token is stored in an HTTP-only cookie.
- Middleware protects `/admin/*` except `/admin/login`.

## API Design

APIs return consistent JSON:

```json
{ "success": true, "message": "...", "data": {} }
```

or:

```json
{ "success": false, "message": "...", "errors": {} }
```

## Validation Strategy

Zod schemas validate public forms and admin forms. Inputs are trimmed and optional empty strings become undefined where appropriate.

## Error Handling Strategy

Server errors are logged safely and public responses use generic messages. Validation errors return field-level messages.

## SEO Architecture

- App Router metadata.
- Dynamic sitemap and robots.
- Dynamic Open Graph image.
- JSON-LD helpers for TravelAgency, LocalBusiness, Service, FAQPage, TouristTrip, and BreadcrumbList.

## Deployment Architecture

The app deploys to Vercel with PostgreSQL configured through `DATABASE_URL`. Production migrations should run with `npm run prisma:deploy`.

## Environment Variables

- `DATABASE_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_PHONE_NUMBER`
- `ADMIN_JWT_SECRET`
- `ADMIN_COOKIE_NAME`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `EMAIL_PROVIDER`
- `ADMIN_NOTIFICATION_EMAIL`

## Folder Structure

See `README.md` for the current folder map.

## Data Flow

1. User opens a public page.
2. User clicks WhatsApp/call or submits a form.
3. API validates form payload.
4. Valid inquiry is saved with source `WEBSITE`.
5. Admin views inquiry in dashboard.
6. Admin contacts lead and updates status.

## Security Requirements

- No client exposure of server secrets.
- Strong admin JWT secret.
- HTTP-only cookies.
- Zod validation.
- Rate limiting and honeypot protection.
- No `passwordHash` returned to client.

## Performance Requirements

- Static public pages where possible.
- Avoid heavy animation libraries.
- Use image fallbacks and responsive images.
- Keep Prisma out of client components.

## Scalability Considerations

- Database-backed admin content can replace static public data later.
- Email provider can be added without changing form contracts.
- Analytics helper prepares future conversion tracking.

## Testing Strategy

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Smoke test public routes.
- Smoke test protected admin redirects.
- Test invalid API submissions and honeypot behavior.

## Build And Deployment Commands

```bash
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run build
```
