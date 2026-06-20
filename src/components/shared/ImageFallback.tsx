type ImageFallbackProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function ImageFallback({ title, subtitle, className = "" }: ImageFallbackProps) {
  const initials = title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className={`relative isolate grid min-h-48 place-items-center overflow-hidden rounded-lg bg-[linear-gradient(135deg,#102033_0%,#0f4f3d_52%,#1aa7a1_100%)] p-6 text-center text-white ${className}`}>
      <div className="absolute inset-x-[-10%] bottom-[-28%] h-2/3 rounded-[50%] bg-white/12" />
      <div className="absolute left-[-8%] top-[20%] h-40 w-56 rotate-[-16deg] rounded-[48%] bg-saffron/18" />
      <div className="relative">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-white/15 text-2xl font-black backdrop-blur">
          {initials || "BK"}
        </div>
        <p className="mt-4 text-lg font-black">{title}</p>
        {subtitle ? <p className="mt-1 text-sm text-white/75">{subtitle}</p> : null}
      </div>
    </div>
  );
}
