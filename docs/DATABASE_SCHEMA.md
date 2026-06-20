# Database Schema

The project uses Prisma ORM with PostgreSQL.

## Inquiry

Stores all lead submissions.

Important fields:

- `id`: unique inquiry ID.
- `fullName`: customer name.
- `phone`: customer phone.
- `email`: optional email.
- `inquiryType`: tour, custom trip, vehicle rental, or general contact.
- `destination`: optional destination.
- `packageSlug`: optional package reference.
- `vehicleType`: optional vehicle request.
- `travelDate`: optional date.
- `returnDate`: optional return date.
- `numberOfPeople`: optional group size.
- `pickupLocation`: optional pickup.
- `dropoffLocation`: optional dropoff.
- `preferredContact`: WhatsApp, call, or email.
- `message`: optional message.
- `status`: lead lifecycle status.
- `source`: lead source.
- `createdAt`, `updatedAt`: timestamps.

Why it exists: central lead management for the business.

## TourPackage

Stores admin-managed tour packages.

Fields include title, slug, destination, duration, difficulty, starting point, descriptions, price, includes, excludes, itinerary, images, featured flag, and active flag.

## Vehicle

Stores admin-managed vehicles.

Fields include name, slug, type, seating capacity, luggage capacity, best use case, pricing, driver availability, 4WD flag, image, and active flag.

## Destination

Stores admin-managed destinations.

Fields include name, slug, district, province, category, descriptions, best season, altitude, difficulty, image, featured flag, and active flag.

## Testimonial

Stores client-approved testimonials.

Fields include name, location, rating, message, package name, published flag, and timestamps.

## AdminUser

Stores admin accounts.

Fields:

- `name`
- `email`
- `passwordHash`
- `role`
- `isActive`

`passwordHash` must never be exposed to the client.

## Enums

### InquiryType

- `TOUR_PACKAGE`
- `CUSTOM_TRIP`
- `VEHICLE_RENTAL`
- `GENERAL_CONTACT`

### PreferredContact

- `WHATSAPP`
- `CALL`
- `EMAIL`

### InquiryStatus

- `NEW`
- `CONTACTED`
- `IN_PROGRESS`
- `CONFIRMED`
- `CANCELLED`
- `COMPLETED`

### LeadSource

- `WEBSITE`
- `WHATSAPP`
- `PHONE`
- `FACEBOOK`
- `INSTAGRAM`
- `REFERRAL`
- `OTHER`

### AdminRole

- `ADMIN`
- `MANAGER`
- `STAFF`

## Relationships

The current schema uses independent models without relational foreign keys between inquiries and packages. This keeps lead capture flexible even when users inquire about custom trips or free-text routes.

## Migration Commands

Local development:

```bash
npx prisma migrate dev
```

Production:

```bash
npm run prisma:deploy
```

## Seed Commands

```bash
npx prisma db seed
```

## Production Notes

- Use a managed PostgreSQL provider.
- Keep `DATABASE_URL` secret.
- Back up production data.
- Run migrations before deploying schema-dependent code.
## CMS Tables

The CMS uses these Prisma models: `SiteSettings`, `PageContent`, `Service`, `FAQ`, `BlogPost`, `GalleryItem`, and `MediaAsset`. Existing operational models for inquiries, packages, vehicles, destinations, testimonials, and admin users remain in place. `AdminUser.passwordHash` stores bcrypt hashes only; the default development admin is seeded only if missing.
