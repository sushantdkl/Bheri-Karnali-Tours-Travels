import { apiError, apiSuccess } from "@/lib/api-response";
import { getAdminSession } from "@/lib/admin-auth";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return apiError("Not authenticated.", { status: 401 });
  return apiSuccess("Authenticated.", { data: { admin: session } });
}
