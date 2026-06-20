import { COMPANY_NAME, PHONE_NUMBER, SITE_URL } from "@/lib/constants";

export function TravelAgencyJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: COMPANY_NAME,
    telephone: PHONE_NUMBER,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surkhet",
      addressCountry: "NP",
    },
    areaServed: ["Karnali Province", "Surkhet", "Nepal"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
