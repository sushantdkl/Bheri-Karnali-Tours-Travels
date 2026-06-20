# Launch Checklist

## Pre-Launch

- [ ] Confirm company phone number: `+977 970-5432357`.
- [ ] Confirm WhatsApp number: `9779705432357`.
- [ ] Confirm business address before adding an exact map address.
- [ ] Replace placeholder images with approved client-owned images.
- [ ] Confirm tour package wording.
- [ ] Confirm rental pricing policy.
- [ ] Confirm legal and privacy content.
- [ ] Confirm admin credentials.
- [ ] Confirm database provider.
- [ ] Confirm domain.
- [ ] Confirm Vercel environment variables.

## Technical

- [ ] `npm run build` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] Prisma migration applied.
- [ ] Seed completed.
- [ ] Admin login works.
- [ ] Inquiry form works.
- [ ] Contact form works.
- [ ] Vehicle form works.
- [ ] Admin CSV export works.
- [ ] Sitemap works.
- [ ] Robots works.
- [ ] No broken links.
- [ ] Mobile responsive.
- [ ] No exposed secrets.

## SEO

- [ ] Page titles checked.
- [ ] Meta descriptions checked.
- [ ] Open Graph checked.
- [ ] JSON-LD checked.
- [ ] Sitemap submitted after launch.
- [ ] Google Search Console planned.
- [ ] Google Business Profile planned.

## Security

- [ ] Strong `ADMIN_JWT_SECRET`.
- [ ] Strong admin password.
- [ ] `.env` ignored.
- [ ] `DATABASE_URL` server-only.
- [ ] Protected admin routes redirect.
- [ ] API validation works.
- [ ] Honeypot works.

## Post-Launch

- [ ] Test live site.
- [ ] Test live forms.
- [ ] Test admin dashboard.
- [ ] Test WhatsApp and call buttons.
- [ ] Monitor Vercel logs.
- [ ] Monitor database.
- [ ] Collect real testimonials.
- [ ] Add real photos.
- [ ] Add analytics if needed.
## CMS Launch Checklist

- [ ] Change or remove the development admin password `123456` before production.
- [ ] Confirm CMS migrations are applied in the production database.
- [ ] Replace local filesystem uploads with persistent storage such as Cloudinary, UploadThing, S3, Supabase Storage, or Vercel Blob.
- [ ] Review site settings, page content, gallery, FAQs, blog posts, packages, vehicles, destinations, and testimonials from the admin dashboard.
