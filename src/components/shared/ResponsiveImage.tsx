"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageFallback } from "@/components/shared/ImageFallback";

type ResponsiveImageProps = {
  src?: string;
  alt: string;
  title: string;
  subtitle?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ResponsiveImage({ src, alt, title, subtitle, className = "h-56 w-full", priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: ResponsiveImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ImageFallback title={title} subtitle={subtitle} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
