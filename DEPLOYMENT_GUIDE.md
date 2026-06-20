# Deployment Guide

## Local Setup

```bash
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run dev
```

## GitHub Setup

Expected repository:

```text
https://github.com/sushantdkl/Bheri-Karnali-Tours-Travels.git
```

Initial Git commands:

```bash
git init
git add .
git commit -m "initial production-ready setup"
git branch -M main
git remote add origin https://github.com/sushantdkl/Bheri-Karnali-Tours-Travels.git
git push -u origin main
```

If remote already exists:

```bash
git remote -v
git remote set-url origin https://github.com/sushantdkl/Bheri-Karnali-Tours-Travels.git
```

Do not force push unless you explicitly understand the risk and intend to replace remote history.

## Vercel Setup

1. Import the GitHub repository.
2. Keep the default Next.js framework preset.
3. Add environment variables.
4. Deploy after database is ready.

Business contact for production verification:

- Proprietor: Gyanendra Gautam
- Phone/WhatsApp: `+977 970-5432357`
- WhatsApp link: `https://wa.me/9779705432357`

## PostgreSQL Provider Setup

Use Vercel Postgres, Neon, Supabase, Railway, or another managed PostgreSQL provider. Copy the provider-recommended pooled or production connection string into `DATABASE_URL`.

## Environment Variables

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
```

## Prisma Migration

Local:

```bash
npx prisma migrate dev
```

If local Windows `npx` fails because the project folder path contains `&`, use the matching npm scripts:

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

Production:

```bash
npm run prisma:deploy
```

## Prisma Seed

Run once after production database is ready:

```bash
npm run prisma:seed
```

## Admin User Creation

Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` before seeding. The seed script hashes the password and creates the admin user if it does not already exist.

## Build Command

```bash
npm run build
```

## Domain Setup

After deployment, add the custom domain in Vercel and update:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Post-Deployment Testing

- Public pages load.
- Inquiry forms submit.
- Admin login works.
- CSV export works for authenticated admin.
- `/sitemap.xml` loads.
- `/robots.txt` loads.
- WhatsApp links open correct number.
- Phone links use `tel:+9779705432357`.

## Common Errors And Fixes

- Prisma client missing: run `npx prisma generate`.
- Database connection error: verify `DATABASE_URL`.
- Admin login fails: verify seed ran and admin env values were set.
- Build fails from missing env: ensure required env vars exist in Vercel.
- Sitemap uses wrong domain: update `NEXT_PUBLIC_SITE_URL`.
