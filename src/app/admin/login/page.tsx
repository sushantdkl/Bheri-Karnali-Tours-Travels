import Image from "next/image";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getAdminSession } from "@/lib/admin-auth";
import { BRAND_ICON } from "@/lib/constants";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/admin/dashboard");

  return (
    <main className="grid min-h-screen place-items-center bg-cream px-5 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Image src={BRAND_ICON} alt="Bheri Karnali Tours & Travels logo" width={64} height={64} priority className="mx-auto h-16 w-16 rounded-lg object-contain" />
          <h1 className="mt-5 text-3xl font-black text-navyInk">Admin Login</h1>
          <p className="mt-2 text-sm text-navyInk/65">Manage Bheri Karnali leads and travel content.</p>
        </div>
        <AdminLoginForm />
      </div>
    </main>
  );
}
