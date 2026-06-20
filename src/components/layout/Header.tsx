"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY_NAME, DISPLAY_PHONE, NAV_LINKS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/90 backdrop-blur-xl">
      <div className="container-main flex min-h-20 items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-emeraldDeep text-sm font-black text-saffron">BK</span>
          <span>
            <span className="block text-sm font-black leading-tight text-navyInk sm:text-base">{COMPANY_NAME}</span>
            <span className="text-xs font-semibold text-forest">Karnali tours and Surkhet rental</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-navyInk/72 hover:text-forest">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${DISPLAY_PHONE.replace("-", "")}`} className="text-sm font-black text-forest">
            {DISPLAY_PHONE}
          </a>
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-dark px-5 py-2.5">
            WhatsApp
          </a>
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
        <div className="border-t border-navyInk/10 bg-white px-5 py-5 lg:hidden">
          <nav className="container-main grid gap-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-bold text-navyInk hover:bg-cream">
                {link.label}
              </Link>
            ))}
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-dark mt-2">
              WhatsApp Booking
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
