import type { FAQ, TourPackage } from "@/types";
import { COMPANY_NAME, PHONE_NUMBER, PROPRIETOR_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/constants";

const areaServed = ["Surkhet", "Karnali Province", "Nepal"];
const services = [
  "Tour packages",
  "Karnali travel planning",
  "Rara Lake tour",
  "Phoksundo Lake tour",
  "Vehicle rental from Surkhet",
  "Jeep rental",
  "Custom trips",
  "Group tours",
];

const address = {
  "@type": "PostalAddress",
  addressLocality: "Surkhet",
  addressRegion: "Karnali Province",
  addressCountry: "NP",
};

const founder = {
  "@type": "Person",
  name: PROPRIETOR_NAME,
};

export function travelAgencyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: COMPANY_NAME,
    founder,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    address,
    areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER,
      contactType: "customer service",
      availableLanguage: ["English", "Nepali"],
    },
    knowsAbout: services,
    potentialAction: {
      "@type": "CommunicateAction",
      target: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    founder,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    address,
    areaServed,
    priceRange: "Contact for quote",
  };
}

export function vehicleRentalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle rental from Surkhet",
    provider: {
      "@type": "TravelAgency",
      name: COMPANY_NAME,
      telephone: PHONE_NUMBER,
    },
    areaServed,
    serviceType: ["Jeep rental", "Car rental", "Hiace rental", "Bus rental", "Karnali route vehicle support"],
  };
}

export function faqPageJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function touristTripJsonLd(tour: TourPackage) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.summary,
    touristType: tour.bestFor,
    itinerary: tour.itinerary,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "NPR",
        description: tour.priceFrom,
      },
    },
    provider: {
      "@type": "TravelAgency",
      name: COMPANY_NAME,
      telephone: PHONE_NUMBER,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
