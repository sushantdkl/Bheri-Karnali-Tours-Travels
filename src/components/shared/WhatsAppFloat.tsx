import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const planningUrl = getWhatsAppUrl("Hello Bheri Karnali Tours & Travels, I need help planning a Karnali trip.");

  return (
    <div className="group fixed bottom-5 right-5 z-50">
      <div className="pointer-events-none absolute bottom-16 right-0 w-64 translate-y-2 rounded-lg border border-navyInk/10 bg-white px-4 py-3 text-sm shadow-premium opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:hidden">
        <p className="font-black text-navyInk">Need help planning a Karnali trip?</p>
        <p className="mt-1 text-xs leading-5 text-navyInk/65">Message us on WhatsApp.</p>
      </div>
      <a
        href={planningUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Bheri Karnali Tours and Travels"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-lg font-black text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(37,211,102,0.42)]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/25" />
        WA
      </a>
    </div>
  );
}
