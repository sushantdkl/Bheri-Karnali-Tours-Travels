"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BRAND_ICON, BRAND_LOGO, COMPANY_NAME, DISPLAY_PHONE, NAV_LINKS, TEL_PHONE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-navyInk/10 bg-white/88 shadow-[0_10px_35px_rgba(8,32,50,0.08)] backdrop-blur-xl">
      <div className="container-main flex min-h-20 items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label={`${COMPANY_NAME} home`}>
          <Image src={BRAND_ICON} alt="Bheri Karnali Tours & Travels logo" width={44} height={44} priority className="h-11 w-11 rounded-lg object-contain sm:hidden" />
          <Image src={BRAND_LOGO} alt="Bheri Karnali Tours & Travels logo" width={210} height={56} priority className="hidden h-14 w-auto object-contain sm:block" />
          <span className="sr-only">{COMPANY_NAME}</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-navyInk/10 bg-white/70 p-1 shadow-sm lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-black ${pathname === link.href ? "bg-navyInk text-white shadow-sm" : "text-navyInk/72 hover:bg-cream hover:text-river"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${TEL_PHONE}`} className="text-sm font-black text-forest">
            {DISPLAY_PHONE}
          </a>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-dark px-5 py-2.5">
            WhatsApp
          </a>
          <Link href="/booking" className="btn-primary px-5 py-2.5">
            Book Now
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-navyInk/15 text-xl font-black text-navyInk lg:hidden"
        >
          {open ? "X" : "="}
        </button>
      </div>
      {open ? (
        <div className="border-t border-navyInk/10 bg-white/95 px-5 py-5 shadow-premium backdrop-blur lg:hidden">
          <nav className="container-main grid gap-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-3 text-sm font-black ${pathname === link.href ? "bg-navyInk text-white" : "text-navyInk hover:bg-cream"}`}>
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-dark">
                WhatsApp
              </a>
              <Link href="/booking" onClick={() => setOpen(false)} className="btn-primary">
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
