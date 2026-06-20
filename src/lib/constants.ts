export const COMPANY_NAME = "Bheri Karnali Tours & Travels";
export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "9858032357";
export const DISPLAY_PHONE =
  PHONE_NUMBER.length === 10 ? `${PHONE_NUMBER.slice(0, 3)}-${PHONE_NUMBER.slice(3)}` : PHONE_NUMBER;
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779858032357";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bherikarnalitours.com";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Guide" },
  { href: "/contact", label: "Contact" },
];
