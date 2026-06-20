import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <div className="min-h-screen bg-slate-50 text-navyInk">
      <AdminSidebar />
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-navyInk/10 bg-white/90 px-5 py-4 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-navyInk">{admin.name}</p>
              <p className="text-xs text-navyInk/55">{admin.email} / {admin.role}</p>
            </div>
            <LogoutButton />
          </div>
        </header>
        <div className="px-5 py-8 sm:px-8 lg:px-10">{children}</div>
      </div>
    </div>
  );
}
