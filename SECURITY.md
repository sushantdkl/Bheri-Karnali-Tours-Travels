# Security Policy

## Security Overview

This project uses server-side validation, hashed admin credentials, signed HTTP-only cookies, protected admin middleware, and safe environment variable practices.

## Supported Version

The current production-ready version in this repository is supported for launch preparation and Vercel deployment.

## Environment Variable Safety

- Never expose `DATABASE_URL`.
- Never expose `ADMIN_JWT_SECRET`.
- Never commit `.env`.
- Use `.env.example` only for safe placeholders.
- Public variables must use `NEXT_PUBLIC_` only when the value is intended for browser use.

## Admin Authentication Security

- Admin users are stored in the `AdminUser` table.
- Passwords are hashed with bcryptjs.
- Login returns only safe admin fields.
- `passwordHash` is never returned to the client.

## HTTP-Only Cookie Session

- Admin session is signed with jose.
- Session cookie is HTTP-only.
- Cookie uses `sameSite: lax`.
- Cookie uses `secure: true` in production.
- Cookie has an expiry.
- Logout clears the cookie.

## API Validation

All public form APIs validate with Zod:

- `POST /api/inquiries`
- `POST /api/contact`
- `POST /api/vehicle-inquiries`

## Anti-Spam And Honeypot Logic

Public forms include a hidden `companyName` honeypot. If filled, validation fails safely.

## Rate Limiting Notes

Lightweight in-memory rate limiting is used for public form submissions and admin login attempts. For higher traffic, use a provider-backed store such as Upstash Redis.

## Database Safety

- Prisma ORM is used for database access.
- No unsafe raw SQL is required.
- Public pages do not require database access at build time.

## Secret Management

Set secrets in Vercel Project Settings. Do not store real secrets in documentation, screenshots, or committed files.

## XSS Prevention

React escapes rendered content by default. JSON-LD rendering serializes data and escapes `<` characters.

## CSRF Considerations

Admin session cookies use `sameSite: lax`. Future high-risk mutations can add CSRF tokens if needed.

## External Link Safety

External links opened in a new tab should use `rel="noopener noreferrer"`.

## Error Handling Safety

Public APIs return safe generic messages on server errors and do not expose stack traces.

## Deployment Security Checklist

- Strong `ADMIN_JWT_SECRET`.
- Strong `ADMIN_PASSWORD`.
- `.env` not committed.
- Production `DATABASE_URL` configured.
- HTTPS enabled through Vercel.
- Admin login tested.
- Protected admin routes redirect when unauthenticated.

## Vulnerability Reporting

Report security issues privately to the project owner or maintainer. Do not open public issues containing secrets or exploit details.

## Security Limitations

- In-memory rate limiting resets across serverless instances.
- No role-based permission matrix beyond stored admin role.
- No audit log yet.
- No CSRF token system yet.

## Recommended Future Improvements

- Provider-backed rate limiting.
- Audit logs.
- Admin activity history.
- Role-based permissions.
- Optional two-factor authentication.
