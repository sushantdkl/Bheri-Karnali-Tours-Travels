import Link from "next/link";
import { DISPLAY_PHONE, PHONE_NUMBER } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 hidden lg:block">
        <div className="mb-3 w-72 rounded-lg border border-emeraldDeep/10 bg-white p-4 shadow-premium">
        <p className="text-sm font-black text-navyInk">Planning Karnali trip?</p>
        <p className="mt-1 text-xs leading-5 text-navyInk/65">Message or call for route, vehicle, and price guidance.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25d366] px-3 py-2 text-center text-xs font-black text-white">
            WhatsApp
          </a>
          <a href={`tel:${PHONE_NUMBER}`} className="rounded-full bg-navyInk px-3 py-2 text-center text-xs font-black text-white">
            Call {DISPLAY_PHONE}
          </a>
        </div>
      </div>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Bheri Karnali Tours and Travels"
        className="ml-auto grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-xl font-black text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] hover:-translate-y-1"
      >
        WA
      </a>
      </div>
      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 gap-2 rounded-lg border border-navyInk/10 bg-white/95 p-2 shadow-premium backdrop-blur lg:hidden">
        <a href={`tel:${PHONE_NUMBER}`} aria-label={`Call ${DISPLAY_PHONE}`} className="rounded-lg bg-navyInk px-3 py-3 text-center text-xs font-black text-white">
          Call
        </a>
        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat" className="rounded-lg bg-[#25d366] px-3 py-3 text-center text-xs font-black text-white">
          WhatsApp
        </a>
        <Link href="/booking" aria-label="Open booking inquiry form" className="rounded-lg bg-saffron px-3 py-3 text-center text-xs font-black text-navyInk">
          Book
        </Link>
      </div>
    </>
  );
}
