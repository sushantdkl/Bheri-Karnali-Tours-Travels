import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { ZodError } from "zod";
import { apiError, apiSuccess } from "@/lib/api-response";
import { ADMIN_COOKIE_NAME, signAdminToken } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import { loginSchema } from "@/validations/admin";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(`admin-login:${ip}`, 8, 5 * 60_000)) {
      return apiError("Too many login attempts. Please try again later.", { status: 429 });
    }

    const input = loginSchema.parse(await request.json());
    const admin = await prisma.adminUser.findUnique({
      where: { email: input.email },
      select: { id: true, name: true, email: true, role: true, passwordHash: true, isActive: true },
    });

    if (!admin || !admin.isActive || !(await bcrypt.compare(input.password, admin.passwordHash))) {
      return apiError("Invalid email or password.", { status: 401 });
    }

    const token = await signAdminToken({
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    });

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return apiSuccess("Logged in successfully.", {
      data: { admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role } },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return apiError("Validation failed.", { status: 400, errors: error.flatten().fieldErrors });
    }
    console.error("Admin login failed", error);
    return apiError("Something went wrong. Please try again.", { status: 500 });
  }
}
