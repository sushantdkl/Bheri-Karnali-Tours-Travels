"use client";

import { useEffect } from "react";
import type { GalleryItem } from "@/types";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";

type LightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-navyInk/80 p-5" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="w-full max-w-4xl rounded-lg bg-white p-4 shadow-premium">
        <div className="flex items-center justify-between gap-4 pb-4">
          <div>
            <p className="eyebrow">{item.category}</p>
            <h2 className="text-2xl font-black text-navyInk">{item.title}</h2>
          </div>
          <button type="button" className="btn-dark px-4 py-2" onClick={onClose} aria-label="Close gallery preview">
            Close
          </button>
        </div>
        <ResponsiveImage src={item.image} alt={item.alt} title={item.title} subtitle={item.location} className="h-[60vh] w-full" sizes="100vw" />
        <p className="mt-4 text-sm leading-7 text-navyInk/70">{item.description}</p>
      </div>
    </div>
  );
}
