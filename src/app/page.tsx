import { AdventureCategories } from "@/components/home/AdventureCategories";
import { AdventureActivitiesSection } from "@/components/home/AdventureActivitiesSection";
import { DestinationHighlights } from "@/components/home/DestinationHighlights";
import { Hero } from "@/components/home/Hero";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { InquirySection } from "@/components/home/InquirySection";
import { PopularPackages } from "@/components/home/PopularPackages";
import { VehicleRentalPreview } from "@/components/home/VehicleRentalPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CTASection } from "@/components/shared/CTASection";
import { FAQSection, SafetySupportSection, TestimonialsSection } from "@/components/shared/TrustSections";
import { getPageContent } from "@/lib/cms";

export default async function HomePage() {
  const homeContent = await getPageContent("home");
  return (
    <>
      <Hero heroTitle={homeContent?.heroTitle} heroSubtitle={homeContent?.heroSubtitle} heroImage={homeContent?.heroImage} />
      <AdventureCategories />
      <PopularPackages />
      <AdventureActivitiesSection />
      <VehicleRentalPreview />
      <WhyChoose />
      <DestinationHighlights />
      <GalleryPreview />
      <SafetySupportSection />
      <InquirySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
