# QA Checklist

## Public Pages

- [ ] Home loads.
- [ ] Packages page loads.
- [ ] Package detail pages load.
- [ ] Vehicles page loads.
- [ ] Destinations page loads.
- [ ] Gallery page loads.
- [ ] About page loads.
- [ ] Contact page loads.
- [ ] Booking page loads.
- [ ] Blog page loads.
- [ ] Blog detail pages load.
- [ ] Privacy policy loads.
- [ ] Terms and conditions load.

## Forms

- [ ] Booking form submits valid inquiry.
- [ ] Booking form shows validation errors.
- [ ] Contact form submits valid message.
- [ ] Contact form blocks short message.
- [ ] Vehicle inquiry form submits valid vehicle lead.
- [ ] Vehicle inquiry form requires pickup location.
- [ ] Honeypot blocks spam payload.

## WhatsApp And Call Links

- [ ] WhatsApp links use `https://wa.me/9779705432357`.
- [ ] Phone links use `tel:+9779705432357`.
- [ ] Sticky mobile contact bar works.
- [ ] Desktop floating contact card works.

## Admin Login

- [ ] Login page loads.
- [ ] Correct credentials log in.
- [ ] Wrong credentials show safe error.
- [ ] Logout clears session.
- [ ] Unauthenticated protected routes redirect.

## Admin Dashboard

- [ ] Dashboard stats load.
- [ ] Empty states are safe.
- [ ] Recent inquiries show correctly.

## Admin CRUD

- [ ] Package create works.
- [ ] Package edit works.
- [ ] Vehicle create works.
- [ ] Vehicle edit works.
- [ ] Destination create works.
- [ ] Destination edit works.
- [ ] Testimonial create works.
- [ ] Testimonial publish/unpublish works.

## API Validation

- [ ] Invalid inquiry returns `400`.
- [ ] Invalid contact returns `400`.
- [ ] Invalid vehicle inquiry returns `400`.
- [ ] Admin login rate limiting works.
- [ ] Server errors do not leak stack traces.

## Database

- [ ] Migration applied.
- [ ] Seed completed.
- [ ] Admin user created.
- [ ] Inquiry records save correctly.

## SEO

- [ ] Metadata checked.
- [ ] Open Graph checked.
- [ ] Twitter card checked.
- [ ] JSON-LD checked.
- [ ] `/sitemap.xml` works.
- [ ] `/robots.txt` works.

## Accessibility

- [ ] Forms have readable labels/placeholders.
- [ ] Buttons have clear text.
- [ ] Icon-only controls have aria labels.
- [ ] Keyboard navigation works.
- [ ] Focus states are visible.
- [ ] Color contrast is acceptable.

## Performance

- [ ] `npm run build` passes.
- [ ] No large unnecessary dependencies.
- [ ] Images use fallbacks.
- [ ] No layout-shifting broken image boxes.

## Security

- [ ] `.env` is not committed.
- [ ] `DATABASE_URL` is not public.
- [ ] `ADMIN_JWT_SECRET` is not public.
- [ ] `passwordHash` is not returned.
- [ ] Admin cookies are HTTP-only.

## Vercel Deployment

- [ ] Env vars configured.
- [ ] Database connected.
- [ ] Migrations deployed.
- [ ] Seed run.
- [ ] Domain configured.

## Business Confirmation

- [ ] Phone number confirmed.
- [ ] WhatsApp number confirmed.
- [ ] Office address confirmed before publishing exact address.
- [ ] Pricing policy confirmed.
- [ ] Package wording approved.

## Content And Image Checklist

- [ ] Real client images added.
- [ ] Placeholder images replaced.
- [ ] Alt text checked.
- [ ] No copyrighted images without permission.
- [ ] Testimonials approved.

## Legal Checklist

- [ ] Privacy policy reviewed.
- [ ] Terms reviewed.
- [ ] Business claims verified.

## Post-Launch

- [ ] Live forms tested.
- [ ] Live admin tested.
- [ ] Search Console planned.
- [ ] Google Business Profile planned.
- [ ] Vercel logs monitored.
## CMS QA Checklist

- [ ] Seed creates `karnali@admin.com` with password `123456` only when missing.
- [ ] Admin login, logout, and protected routes work.
- [ ] CMS pages, settings, FAQs, services, blog, gallery, and media library load inside admin.
- [ ] Media upload rejects non-images and images over 5MB.
- [ ] Public pages show CMS content when records exist and static fallback when records are absent.
- [ ] `npm run prisma:generate`, `npm run typecheck`, `npm run lint`, and `npm run build` pass.
