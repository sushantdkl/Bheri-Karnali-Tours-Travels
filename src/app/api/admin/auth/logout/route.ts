import { cookies } from "next/headers";
import { apiSuccess } from "@/lib/api-response";
import { ADMIN_COOKIE_NAME } from "@/lib/admin-auth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });

  return apiSuccess("Logged out successfully.");
}
