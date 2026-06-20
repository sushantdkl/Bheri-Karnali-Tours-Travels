import { WHATSAPP_NUMBER } from "./constants";

export function getWhatsAppUrl(message?: string) {
  const text =
    message ||
    "Hello Bheri Karnali Tours & Travels, I want to inquire about a tour/vehicle rental.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
