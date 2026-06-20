import { NextRequest } from "next/server";
import { ZodError } from "zod";
import { apiError, apiSuccess } from "@/lib/api-response";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import { createInquiry } from "@/server/inquiries/createInquiry";
import { inquirySchema } from "@/validations/inquiry";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(`inquiry:${ip}`)) {
      return apiError("Too many submissions. Please wait a minute and try again.", { status: 429 });
    }

    const body = await request.json();
    const input = inquirySchema.parse(body);
    const inquiry = await createInquiry(input);

    return apiSuccess("Inquiry submitted successfully. Our team will contact you soon.", {
      status: 201,
      data: { id: inquiry.id },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return apiError("Validation failed.", { status: 400, errors: error.flatten().fieldErrors });
    }

    console.error("Inquiry submission failed", error);
    return apiError("Something went wrong. Please try again or contact us on WhatsApp.", { status: 500 });
  }
}
