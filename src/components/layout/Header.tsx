"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND_ICON, BRAND_LOGO, COMPANY_NAME, NAV_LINKS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const desktopLinks = NAV_LINKS.filter((link) => !["/blog", "/booking"].includes(link.href));

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateHeader = () => setCompact(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b border-navyInk/10 bg-white/90 shadow-[0_10px_35px_rgba(8,32,50,0.08)] backdrop-blur-xl transition-all duration-300 ${compact ? "shadow-[0_8px_26px_rgba(8,32,50,0.07)]" : ""}`}>
      <div className={`container-main flex items-center justify-between px-5 transition-[min-height] duration-300 sm:px-8 lg:px-10 ${compact ? "min-h-16" : "min-h-20"}`}>
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label={`${COMPANY_NAME} home`}>
          <Image src={BRAND_ICON} alt="Bheri Karnali Tours & Travels logo" width={44} height={44} priority className={`rounded-lg object-contain transition-all duration-300 sm:hidden ${compact ? "h-9 w-9" : "h-11 w-11"}`} />
          <Image src={BRAND_LOGO} alt="Bheri Karnali Tours & Travels logo" width={210} height={56} priority className={`hidden w-auto object-contain transition-all duration-300 sm:block ${compact ? "h-11" : "h-14"}`} />
          <span className="sr-only">{COMPANY_NAME}</span>
        </Link>
        <nav className="hidden items-center gap-0.5 rounded-full border border-navyInk/10 bg-white/72 p-1 shadow-sm lg:flex">
          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-[13px] font-black transition-colors ${pathname === link.href ? "bg-navyInk text-white shadow-sm" : "text-navyInk/70 hover:bg-cream hover:text-river"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center lg:flex">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={`btn-dark transition-all duration-300 ${compact ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"}`}>
            WhatsApp
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-navyInk/15 text-navyInk transition hover:border-river hover:text-river lg:hidden"
        >
          <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
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
