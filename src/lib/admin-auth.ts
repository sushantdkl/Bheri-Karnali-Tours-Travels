import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify, SignJWT } from "jose";
import { prisma } from "@/lib/prisma";

export type AdminSession = {
  id: string;
  email: string;
  name: string;
  role: string;
};

export const ADMIN_COOKIE_NAME = process.env.ADMIN_COOKIE_NAME || "bheri_karnali_admin_session";

function getSecret() {
  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret || secret.length < 24) {
    throw new Error("ADMIN_JWT_SECRET must be set to at least 24 characters.");
  }
  return new TextEncoder().encode(secret);
}

export async function signAdminToken(admin: AdminSession) {
  return new SignJWT(admin)
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(admin.id)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function verifyAdminToken(token?: string): Promise<AdminSession | null> {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (!payload.id || !payload.email || !payload.name || !payload.role) return null;
    return {
      id: String(payload.id),
      email: String(payload.email),
      name: String(payload.name),
      role: String(payload.role),
    };
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  return verifyAdminToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value);
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const admin = await prisma.adminUser.findFirst({
    where: { id: session.id, isActive: true },
    select: { id: true, name: true, email: true, role: true },
  });

  if (!admin) redirect("/admin/login");
  return admin;
}
