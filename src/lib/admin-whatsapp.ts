export function toNepalWhatsAppNumber(phone?: string | null) {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("977")) return digits;
  if (digits.length === 10 && digits.startsWith("9")) return `977${digits}`;
  return digits;
}

export function getCustomerWhatsAppUrl(phone?: string | null, message = "Hello, this is Bheri Karnali Tours & Travels regarding your inquiry.") {
  const number = toNepalWhatsAppNumber(phone);
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "#";
}
