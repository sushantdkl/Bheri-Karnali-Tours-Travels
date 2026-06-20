# API Documentation

All responses use a safe JSON envelope.

Success:

```json
{ "success": true, "message": "Done.", "data": {} }
```

Error:

```json
{ "success": false, "message": "Validation failed.", "errors": {} }
```

## POST /api/inquiries

Purpose: Create tour, custom trip, vehicle rental, or general inquiries.

Auth required: No

Request body:

```json
{
  "fullName": "Test User",
  "phone": "9858032357",
  "email": "guest@example.com",
  "inquiryType": "TOUR_PACKAGE",
  "destination": "Rara Lake",
  "packageSlug": "rara-lake-tour-from-surkhet",
  "travelDate": "2026-10-01",
  "numberOfPeople": 4,
  "preferredContact": "WHATSAPP",
  "message": "We want a family tour.",
  "companyName": ""
}
```

Validation rules:

- `fullName` minimum 2 characters.
- `phone` must be a valid Nepal phone format.
- `inquiryType` must be `TOUR_PACKAGE`, `CUSTOM_TRIP`, `VEHICLE_RENTAL`, or `GENERAL_CONTACT`.
- `preferredContact` must be `WHATSAPP`, `CALL`, or `EMAIL`.
- Honeypot `companyName` must be empty.

Success response:

```json
{ "success": true, "message": "Inquiry submitted successfully. Our team will contact you soon.", "data": { "id": "..." } }
```

## POST /api/contact

Purpose: Create a general contact inquiry.

Auth required: No

Request body:

```json
{
  "fullName": "Test User",
  "phone": "9858032357",
  "email": "guest@example.com",
  "message": "I need help planning a Karnali trip.",
  "preferredContact": "WHATSAPP",
  "companyName": ""
}
```

Validation rules:

- Message minimum 10 characters.
- Shared contact and honeypot validation from inquiry schema.

Saved as: `GENERAL_CONTACT`

## POST /api/vehicle-inquiries

Purpose: Create vehicle rental leads.

Auth required: No

Request body:

```json
{
  "fullName": "Test User",
  "phone": "9858032357",
  "vehicleType": "Scorpio Jeep",
  "pickupLocation": "Surkhet",
  "dropoffLocation": "Rara route",
  "travelDate": "2026-10-01",
  "returnDate": "2026-10-06",
  "preferredContact": "WHATSAPP",
  "message": "Need route guidance.",
  "companyName": ""
}
```

Validation rules:

- `vehicleType` required.
- `pickupLocation` required.
- Optional return date must be valid if provided.

Saved as: `VEHICLE_RENTAL`

## POST /api/admin/auth/login

Purpose: Authenticate admin.

Auth required: No

Request body:

```json
{ "email": "admin@example.com", "password": "strong-password" }
```

Success: Sets HTTP-only session cookie and returns safe admin fields.

Error: Invalid credentials return a safe message.

## POST /api/admin/auth/logout

Purpose: Clear admin session cookie.

Auth required: Existing cookie optional.

Request body: none

Success response:

```json
{ "success": true, "message": "Logged out successfully." }
```

## GET /api/admin/auth/me

Purpose: Return current authenticated admin session.

Auth required: Yes

Response includes safe admin fields only.

## GET /api/admin/inquiries/export

Purpose: Export inquiries as CSV.

Auth required: Yes

Fields:

```text
id, fullName, phone, email, inquiryType, destination, packageSlug, vehicleType, preferredContact, status, source, createdAt
```

Filename:

```text
bheri-karnali-inquiries.csv
```

## Admin CRUD

Admin package, vehicle, destination, testimonial, and inquiry status changes are handled through protected server actions in `src/server/admin/actions.ts`, not public API routes.
