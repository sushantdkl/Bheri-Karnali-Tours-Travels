"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_ICON } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/inquiries", label: "Inquiries" },
  { href: "/admin/packages", label: "Packages" },
  { href: "/admin/vehicles", label: "Vehicles" },
  { href: "/admin/destinations", label: "Destinations" },
  { href: "/admin/cms/blog", label: "Blog" },
  { href: "/admin/cms/gallery", label: "Gallery" },
  { href: "/admin/cms/faqs", label: "FAQs" },
  { href: "/admin/cms/services", label: "Services" },
  { href: "/admin/cms/pages", label: "Pages" },
  { href: "/admin/cms/settings", label: "Site Settings" },
  { href: "/admin/media", label: "Media Library" },
  { href: "/admin/testimonials", label: "Testimonials" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r border-navyInk/10 bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-72">
      <div className="flex h-full flex-col p-5">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <Image src={BRAND_ICON} alt="Bheri Karnali Tours & Travels logo" width={44} height={44} className="h-11 w-11 rounded-lg object-contain" />
          <span>
            <span className="block text-sm font-black text-navyInk">Admin Panel</span>
            <span className="text-xs font-semibold text-forest">Bheri Karnali</span>
          </span>
        </Link>
        <nav className="mt-8 grid max-h-[calc(100vh-190px)] gap-2 overflow-y-auto pr-1">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-bold text-navyInk/70 hover:bg-cream hover:text-forest",
                  active && "bg-emeraldDeep text-white hover:bg-emeraldDeep hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/" className="mt-auto rounded-lg px-4 py-3 text-sm font-bold text-forest hover:bg-cream">
          View Website
        </Link>
      </div>
    </aside>
  );
}
