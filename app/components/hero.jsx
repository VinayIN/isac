"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Simple dynamic import for Galleria
const Galleria = dynamic(() => import("primereact/galleria").then(mod => ({ default: mod.Galleria })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  ),
});

const HERO_IMAGES = [
  { id: 1, src: "/images/hero/1.jpg", alt: "ISAC Hero Image 1" },
  { id: 2, src: "/images/hero/2.jpg", alt: "ISAC Hero Image 2" },
  { id: 3, src: "/images/hero/3.jpg", alt: "ISAC Hero Image 3" },
  { id: 4, src: "/images/hero/4.jpg", alt: "ISAC Hero Image 4" },
  { id: 5, src: "/images/hero/5.jpg", alt: "ISAC Hero Image 5" },
];

export default function Hero({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemTemplate = (item) => (
    <div className="relative w-full h-screen">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        priority={item.id === 1}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      <div className="absolute top-4 right-4 opacity-20">
        <div className="flex gap-1">
          <div className="w-12 h-8 bg-india-saffron rounded-sm"></div>
          <div className="w-12 h-8 bg-white rounded-sm border"></div>
          <div className="w-12 h-8 bg-india-green rounded-sm"></div>
        </div>
      </div>
    </div>
  );

  const thumbnailTemplate = (item) => (
    <div className="relative w-14 h-14 rounded-lg overflow-hidden border-2 border-white">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
        sizes="56px"
      />
    </div>
  );

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Galleria
          value={HERO_IMAGES}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
          showThumbnails
          thumbnailsPosition="bottom"
          autoPlay
          transitionInterval={5000}
          circular
          showIndicators={false}
          responsiveOptions={[
            { breakpoint: "1024px", numVisible: 5 },
            { breakpoint: "768px", numVisible: 3 },
            { breakpoint: "560px", numVisible: 1 },
          ]}
        />
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </section>
  );
}