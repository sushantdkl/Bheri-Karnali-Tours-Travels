# Business Logic

## Business Model Overview

Bheri Karnali Tours & Travels generates travel and vehicle rental leads through a public website, then converts those leads through WhatsApp, phone, and direct admin follow-up.

The company is led by proprietor Gyanendra Gautam from Surkhet, Karnali Province, Nepal.

## Public User Journey

Users discover packages, destinations, vehicle rental routes, gallery content, or blog guides. They then submit an inquiry, call, or message the company on WhatsApp.

## Tour Inquiry Logic

Tour inquiries are collected from package pages, booking forms, and general inquiry forms. A tour inquiry may include destination, travel date, group size, preferred contact method, and message.

## Vehicle Rental Inquiry Logic

Vehicle rental leads include vehicle type, pickup location, dropoff location, dates, preferred contact method, and route details.

## Contact Inquiry Logic

Contact messages are saved as general contact inquiries.

## WhatsApp Booking Logic

WhatsApp is used for fast inquiry and conversion. Public users can directly message the company. Admin users can message leads from inquiry detail pages.

Company WhatsApp number: `9779705432357`

## Phone Call Logic

Phone links use `tel:+9779705432357` for quick mobile calling.

## Admin Lead Management Logic

Admins log in securely, view inquiries, filter leads, export CSV, open inquiry details, contact customers, and update status.

## Inquiry Status Lifecycle

Primary lifecycle:

```text
NEW -> CONTACTED -> IN_PROGRESS -> CONFIRMED -> COMPLETED
```

Alternative status:

```text
CANCELLED
```

## Package Management Logic

Admin package management supports title, slug, destination, duration, descriptions, price fields, itinerary, images, featured status, and active status.

## Vehicle Management Logic

Admin vehicle management supports vehicle type, seating, luggage, driver availability, 4WD flag, pricing fields, image, and active status.

## Destination Management Logic

Admin destination management supports name, slug, district, province, category, descriptions, season, altitude, difficulty, image, featured status, and active status.

## Testimonial Publishing Logic

Testimonials can be created and published/unpublished from the admin dashboard. Only approved real testimonials should be published.

## Pricing Logic

Prices can be shown as "price from" or "contact for latest price." Vehicle rental can be route-based. Final quote depends on route, season, road condition, vehicle type, travel date, group size, and availability. The website should not guarantee a final price before confirmation.

## Route-Based Rental Quote Logic

Route cards explain the best vehicle type, travel nature, road condition note, and WhatsApp CTA. Quotes are finalized after route and date confirmation.

## Custom Trip Planning Logic

Custom trips are planned after collecting destination, time, group size, route, vehicle comfort, and budget preferences.

## SEO And Content Logic

Static content targets Karnali and Surkhet search intent. Blog guides support informational SEO, while package and vehicle pages support commercial search intent.

## Data Ownership And Client Handover

The client owns approved business copy, images, package descriptions, pricing policies, inquiry data, and admin credentials. Placeholder images should be replaced before final launch.
