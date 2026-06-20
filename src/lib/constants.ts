export const COMPANY_NAME = "Bheri Karnali Tours & Travels";
export const PROPRIETOR_NAME = "Gyanendra Gautam";
export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+9779705432357";
export const TEL_PHONE = PHONE_NUMBER.replace(/\s|-/g, "");
export const DISPLAY_PHONE = "+977 970-5432357";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779705432357";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bherikarnalitours.com";
export const BRAND_LOGO = "/images/brand/bheri-karnali-tours-travels-logo.png";
export const BRAND_ICON = "/images/brand/bheri-karnali-icon-logo.png";
export const DEFAULT_OG_IMAGE = "/images/karnali/rara-lake.jpg";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Booking" },
];
