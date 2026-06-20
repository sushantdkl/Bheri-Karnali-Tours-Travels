# Future Roadmap

## Phase 1: Production Launch And Real Content

Goal: Launch with verified business content.

Features:

- Replace placeholder images.
- Confirm pricing wording.
- Confirm office location.
- Add approved testimonials.

Business value: Builds trust and launch confidence.

Technical notes: Keep image paths under `public/images/`.

## Phase 2: Email Notifications And Admin Lead Alerts

Goal: Notify admins when leads arrive.

Features:

- Resend, SendGrid, or SMTP provider.
- Admin notification email.
- Optional customer confirmation email.

Business value: Faster lead response.

Technical notes: Template prep exists in `src/lib/email/templates/inquiryNotification.ts`.

## Phase 3: Advanced Analytics And Conversion Tracking

Goal: Measure conversion behavior.

Features:

- Google Analytics.
- Meta Pixel.
- Vercel Analytics.
- WhatsApp click tracking.
- Form submit tracking.

Business value: Better marketing decisions.

Technical notes: Analytics helper exists in `src/lib/analytics.ts`.

## Phase 4: Package Availability Calendar

Goal: Show available dates or seasonal guidance.

Features:

- Package date windows.
- Admin availability controls.
- Seasonal warnings.

Business value: Improves planning confidence.

Technical notes: Requires schema extension.

## Phase 5: Online Payment Planning

Goal: Prepare deposit or advance payment flow.

Features:

- Payment provider research.
- Booking confirmation flow.
- Receipt records.

Business value: Enables confirmed bookings.

Technical notes: Do not implement until legal, refund, and accounting rules are clear.

## Phase 6: Customer Booking Portal

Goal: Let customers view inquiry and booking status.

Features:

- Customer login.
- Booking dashboard.
- Document uploads.

Business value: Better customer service.

Technical notes: Requires separate auth model.

## Phase 7: Multi-Language Support

Goal: Support English and Nepali.

Features:

- English/Nepali pages.
- Localized package content.
- Localized forms.

Business value: Reaches more domestic and international users.

Technical notes: Add i18n routing and translated data.

## Phase 8: Advanced SEO Content Engine

Goal: Publish more route and destination content.

Features:

- Database-backed blog.
- Admin blog editor.
- Topic clusters.
- Internal linking.

Business value: More organic traffic.

Technical notes: Add BlogPost model and admin editor.

## Phase 9: Review And Testimonial Collection

Goal: Collect approved customer feedback.

Features:

- Testimonial request flow.
- Approval workflow.
- Media attachments.

Business value: Builds social proof.

Technical notes: Extend testimonial model.

## Phase 10: Vehicle Availability And Driver Management

Goal: Manage real rental operations.

Features:

- Vehicle availability.
- Driver assignments.
- Route scheduling.
- Maintenance notes.

Business value: Better operational control.

Technical notes: Requires new vehicle booking and driver models.
