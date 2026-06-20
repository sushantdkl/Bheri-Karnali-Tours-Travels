# Application Flow

## Public User Flow

1. User visits the website.
2. User browses packages, vehicles, destinations, gallery, or blog.
3. User clicks WhatsApp, calls, or submits a form.
4. Inquiry is saved or direct communication begins.
5. Admin follows up.

## Tour Package Browsing Flow

1. User visits `/packages`.
2. User filters or scans package cards.
3. User opens package detail.
4. User reviews overview, highlights, itinerary, notes, and FAQs.

## Package Detail Inquiry Flow

1. User clicks inquiry or WhatsApp.
2. If form is submitted, API validates data.
3. Valid data is saved as `Inquiry`.
4. Admin sees inquiry in dashboard.
5. Admin contacts user.
6. Admin updates status.

## Vehicle Rental Flow

1. User visits `/vehicles`.
2. User reviews vehicle catalog and route guidance.
3. User submits vehicle quote form or opens WhatsApp.
4. API saves valid vehicle inquiry as `VEHICLE_RENTAL`.

## Contact Form Flow

1. User visits `/contact`.
2. User submits message.
3. API validates minimum message length and contact fields.
4. Inquiry is saved as `GENERAL_CONTACT`.

## Booking Form Flow

1. User visits `/booking`.
2. User enters trip type, destination, date, people, and message.
3. API validates and saves inquiry.

## WhatsApp Flow

1. User clicks WhatsApp CTA.
2. Browser opens `https://wa.me/9779705432357`.
3. User sends direct message to the company.

## Admin Login Flow

1. Admin visits `/admin/login`.
2. Admin submits email and password.
3. API verifies bcrypt password.
4. API sets signed HTTP-only cookie.
5. Admin is redirected to dashboard.

## Admin Dashboard Flow

1. Middleware verifies admin cookie.
2. Dashboard loads summary data.
3. Admin opens inquiries or content management pages.

## Inquiry Management Flow

1. Admin opens `/admin/inquiries`.
2. Admin filters by quick filters, status, type, or search.
3. Admin opens inquiry detail.
4. Admin calls, opens WhatsApp, or updates status.
5. Admin can export inquiry CSV.

## Package CRUD Flow

1. Admin opens packages.
2. Admin creates or edits package.
3. Server action validates data.
4. Prisma creates or updates record.

## Vehicle CRUD Flow

Vehicle CRUD follows the same server-action validation and Prisma persistence pattern.

## Destination CRUD Flow

Destination CRUD follows the same server-action validation and Prisma persistence pattern.

## Testimonial Flow

1. Admin creates testimonial.
2. Admin marks it published only after approval.
3. Public use can be expanded later.

## SEO And Blog Flow

Static blog data powers guide pages and sitemap entries. Detail pages include metadata and breadcrumb schema.

## Error Handling Flow

Validation errors return field messages. Server errors return safe fallback messages. Missing package/blog routes use the branded 404 page.

## Deployment Flow

1. Push to GitHub.
2. Import into Vercel.
3. Configure environment variables.
4. Run migrations and seed.
5. Deploy and smoke test.
## CMS Content Flow

1. Admin logs in at `/admin/login`.
2. Admin opens `/admin/cms` or a CMS sidebar item.
3. Admin edits page content, site settings, FAQs, services, blog, gallery, or media.
4. Data is saved to the database through protected server actions or admin-only upload APIs.
5. Public paths are revalidated where relevant.
6. Visitors see updated CMS content on refresh, with static fallback content if a CMS record is absent.
