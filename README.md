# Bheri Karnali Tours & Travels

GitHub repository: https://github.com/sushantdkl/Bheri-Karnali-Tours-Travels.git

## Project Overview

Bheri Karnali Tours & Travels is a production-ready Next.js travel website and admin system for a Surkhet-based travel company serving Karnali Province and Nepal-wide routes. The site promotes Karnali tour packages, Rara Lake tours, Shey Phoksundo trips, Dolpo and Humla adventures, Jumla/Sinja cultural travel, Dailekh heritage tours, Surkhet sightseeing, Karnali river rafting support, and vehicle rental from Surkhet.

The business goal is to generate qualified travel and vehicle rental leads, make WhatsApp booking easy, improve Google discoverability, and give the team an admin dashboard for managing inquiries and content.

Contact:

- Proprietor: Gyanendra Gautam
- Phone: `+977 970-5432357`
- WhatsApp: https://wa.me/9779705432357
- Location: Surkhet, Karnali Province, Nepal

## Key Features

- Public travel website with home, packages, vehicles, destinations, gallery, blog, about, contact, booking, privacy, and terms pages.
- Karnali-focused tour package catalog and route guidance.
- Vehicle rental page for Jeep, 4WD, Hiace, bus, car, and group travel needs.
- WhatsApp-first conversion flow and phone CTA support.
- Inquiry, contact, and vehicle rental APIs with Zod validation.
- Prisma/PostgreSQL database foundation.
- Secure admin login using bcryptjs and signed HTTP-only session cookies.
- Protected admin dashboard for inquiries, packages, vehicles, destinations, and testimonials.
- Admin inquiry CSV export.
- SEO metadata, JSON-LD, sitemap, robots, and dynamic Open Graph image.
- Placeholder-safe image/media system and gallery.
- Vercel-ready deployment structure.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Zod
- bcryptjs
- jose
- Vercel deployment

## Folder Structure

```text
docs/                       Project documentation, launch guides, QA, security, API, PRD, and TRD
prisma/                     Prisma schema and seed script
public/images/              Brand, hero, destination, package, vehicle, gallery, icon, and OG images
src/app/                    App Router pages and route handlers
src/components/             Public, admin, form, layout, SEO, and shared UI components
src/data/                   Static package, vehicle, destination, route, FAQ, blog, and gallery data
src/lib/                    Constants, Prisma client, auth, rate limit, SEO, WhatsApp, analytics, email prep
src/server/                 Server-side admin and inquiry operations
src/types/                  Shared TypeScript types
src/validations/            Zod schemas
```

## Environment Variables

Create `.env` from `.env.example`.

```env
DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=9779705432357
NEXT_PUBLIC_PHONE_NUMBER=+9779705432357
ADMIN_JWT_SECRET=
ADMIN_COOKIE_NAME=bheri_karnali_admin_session
ADMIN_EMAIL=
ADMIN_PASSWORD=
EMAIL_PROVIDER=
ADMIN_NOTIFICATION_EMAIL=
UPLOAD_PROVIDER=local
UPLOAD_MAX_MB=5
```

Security notes:

- Never expose `DATABASE_URL`.
- Never expose `ADMIN_JWT_SECRET`.
- Never commit `.env`.
- Use a strong `ADMIN_JWT_SECRET` of at least 24 characters.
- Public phone and WhatsApp values use `NEXT_PUBLIC_` because they are intended for the public website.

## Local Setup

```bash
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Open:

```text
http://localhost:3000
```

Windows note: the local folder name contains `&`, so package scripts call Next, Prisma, ESLint, and TypeScript directly to avoid path shim issues.
If `npx prisma generate` fails on this machine with a path that includes `Bheri Karnali Tours & Travels`, use the verified project script instead:

```bash
npm run prisma:generate
```

The `npx` commands are still valid on normal paths and in Vercel/Linux environments.

## Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Create local database tables:

```bash
npx prisma migrate dev
```

Seed packages, vehicles, destinations, testimonials, and admin user:

```bash
npx prisma db seed
```

## Admin Setup

Set these variables before seeding:

```env
ADMIN_EMAIL=
ADMIN_PASSWORD=
ADMIN_JWT_SECRET=
```

The seed script hashes the admin password before saving it. Admin pages are available under `/admin/*`.

Development fallback admin:

```text
Email: karnali@admin.com
Password: 123456
```

Change this password before any real production launch.

## Build

```bash
npm run build
```

Useful QA commands:

```bash
npm run lint
npm run typecheck
npm run prisma:generate
```

## Vercel Deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add all environment variables.
4. Connect a PostgreSQL database provider.
5. Use the provider-recommended production or pooled `DATABASE_URL`.
6. Run production migrations with `npm run prisma:deploy`.
7. Run `npm run prisma:seed` once for the initial admin.
8. Deploy.
9. Test public pages, forms, admin login, `/sitemap.xml`, and `/robots.txt`.

## Public Pages

- `/`
- `/packages`
- `/packages/[slug]`
- `/vehicles`
- `/destinations`
- `/gallery`
- `/about`
- `/contact`
- `/booking`
- `/blog`
- `/blog/[slug]`
- `/privacy-policy`
- `/terms-and-conditions`

## Admin Pages

- `/admin/login`
- `/admin/dashboard`
- `/admin/inquiries`
- `/admin/inquiries/[id]`
- `/admin/packages`
- `/admin/vehicles`
- `/admin/destinations`
- `/admin/testimonials`
- `/admin/cms`
- `/admin/cms/pages`
- `/admin/cms/settings`
- `/admin/cms/faqs`
- `/admin/cms/services`
- `/admin/cms/blog`
- `/admin/cms/gallery`
- `/admin/media`

## API Routes

- `POST /api/inquiries`
- `POST /api/contact`
- `POST /api/vehicle-inquiries`
- `POST /api/admin/auth/login`
- `POST /api/admin/auth/logout`
- `GET /api/admin/auth/me`
- `GET /api/admin/inquiries/export`
- `POST /api/admin/upload`

## Security Notes

- Admin passwords are hashed with bcryptjs.
- Admin sessions use signed JWTs in HTTP-only cookies.
- Cookies use `secure: true` in production and `sameSite: lax`.
- Public form APIs validate with Zod and include honeypot/rate-limit protection.
- API errors return safe messages and do not expose stack traces.
- `passwordHash` is never returned to the client.

## Future Roadmap Summary

- Real client-owned image replacement.
- Email notifications and admin lead alerts.
- Analytics and conversion tracking.
- Package availability calendar.
- Online payment planning.
- Customer booking portal.
- English/Nepali multilingual support.
- Advanced SEO content engine.
- Review collection workflow.
- Vehicle availability and driver management.

## Documentation

Full project documentation lives in [`docs/`](docs/README.md):

- Product and technical requirements
- Business logic and app flow
- API and database documentation
- Security, QA, launch, deployment, and roadmap notes

## Admin CMS and Media

- Default development admin: `karnali@admin.com` / `123456`. This account is for testing only and the password must be changed before production launch.
- The admin CMS manages site settings, page hero/content blocks, FAQs, services, blog posts, gallery items, media assets, packages, vehicles, destinations, testimonials, and inquiries.
- Local image uploads are available at `/admin/media` and stored in `public/uploads` during development. Vercel serverless file storage is not persistent, so production uploads should use Cloudinary, UploadThing, S3, Supabase Storage, or Vercel Blob.
- After schema changes run `npm run prisma:generate`, apply a Prisma migration, seed the database, then run `npm run build`.
