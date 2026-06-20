import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/admin/dashboard");

  return (
    <main className="grid min-h-screen place-items-center bg-cream px-5 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg bg-emeraldDeep text-lg font-black text-saffron">BK</div>
          <h1 className="mt-5 text-3xl font-black text-navyInk">Admin Login</h1>
          <p className="mt-2 text-sm text-navyInk/65">Manage Bheri Karnali leads and travel content.</p>
        </div>
        <AdminLoginForm />
      </div>
    </main>
  );
}
