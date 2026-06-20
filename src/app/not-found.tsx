import Link from "next/link";
import { CTASection } from "@/components/shared/CTASection";

export default function NotFound() {
  return (
    <>
      <section className="section-pad section-gradient">
        <div className="container-main max-w-3xl text-center">
          <p className="eyebrow">Page not found</p>
          <h1 className="mt-4 text-4xl font-black text-navyInk sm:text-6xl">This route is not available</h1>
          <p className="mt-5 text-lg leading-8 text-navyInk/70">
            The page may have moved, or the package or guide you opened is not published.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/packages" className="btn-dark">
              Explore Packages
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Team
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
