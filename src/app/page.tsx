import { AdventureCategories } from "@/components/home/AdventureCategories";
import { DestinationHighlights } from "@/components/home/DestinationHighlights";
import { Hero } from "@/components/home/Hero";
import { InquirySection } from "@/components/home/InquirySection";
import { PopularPackages } from "@/components/home/PopularPackages";
import { VehicleRentalPreview } from "@/components/home/VehicleRentalPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CTASection } from "@/components/shared/CTASection";
import { FAQSection, SafetySupportSection, TestimonialsSection } from "@/components/shared/TrustSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AdventureCategories />
      <PopularPackages />
      <VehicleRentalPreview />
      <WhyChoose />
      <DestinationHighlights />
      <SafetySupportSection />
      <InquirySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
