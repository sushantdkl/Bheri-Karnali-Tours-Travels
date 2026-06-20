import { ResponsiveImage } from "@/components/shared/ResponsiveImage";

export function HeroVisual() {
  return (
    <div className="hidden lg:block">
      <div className="premium-panel p-3">
        <ResponsiveImage
          src="/images/hero/karnali-gateway-hero.jpg"
          alt="Karnali mountain route visual"
          title="Karnali Gateway"
          subtitle="Rara, Phoksundo, Dolpo, Humla, Jumla"
          className="h-[420px] w-full"
          priority
          sizes="40vw"
        />
      </div>
    </div>
  );
}
