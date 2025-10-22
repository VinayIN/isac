"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

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
      <div className="absolute top-4 right-4 opacity-30 flex gap-2">
        {/* Indian Flag */}
        <svg width="64" height="42" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
          {/* Saffron */}
          <rect width="900" height="200" fill="#FF9933" />
          {/* White */}
          <rect y="200" width="900" height="200" fill="#FFFFFF" />
          {/* Green */}
          <rect y="400" width="900" height="200" fill="#138808" />
          
          {/* Ashoka Chakra (Blue wheel in white section) */}
          <circle cx="450" cy="300" r="60" fill="none" stroke="#000080" strokeWidth="3" />
          
          {/* Chakra spokes */}
          <g stroke="#000080" strokeWidth="2">
            {/* 12 spokes */}
            <line x1="450" y1="240" x2="450" y2="180" />
            <line x1="450" y1="360" x2="450" y2="420" />
            <line x1="510" y1="300" x2="570" y2="300" />
            <line x1="390" y1="300" x2="330" y2="300" />
            <line x1="500" y1="250" x2="539" y2="211" />
            <line x1="400" y1="350" x2="361" y2="389" />
            <line x1="550" y1="250" x2="589" y2="211" />
            <line x1="450" y1="350" x2="489" y2="389" />
            <line x1="500" y1="350" x2="539" y2="389" />
            <line x1="400" y1="250" x2="361" y2="211" />
            <line x1="550" y1="350" x2="589" y2="389" />
            <line x1="450" y1="250" x2="489" y2="211" />
          </g>
          
          {/* Central circle */}
          <circle cx="450" cy="300" r="15" fill="#000080" />
        </svg>
        
        {/* German Flag */}
        <svg width="64" height="42" viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg">
          {/* Black */}
          <rect width="5" height="1" fill="#000000" />
          {/* Red */}
          <rect y="1" width="5" height="1" fill="#D00000" />
          {/* Gold/Yellow */}
          <rect y="2" width="5" height="1" fill="#FFCE00" />
        </svg>
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

      {/* Hero Content Overlay - Positioned at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-20 pb-24 px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-1">Welcome to ISAC</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-2">
            Indian Student Association at BTU Cottbus
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Building bridges between cultures amongst international students.
            Check out our events and celebrate with our vibrant community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/events">
              <Button
                label="Explore Events"
                icon="pi pi-calendar"
                className="p-button-lg"
              />
            </Link>
            <Link href="/resources">
              <Button
                label="Student Resources"
                icon="pi pi-book"
                className="p-button-lg"
              />
            </Link>
            <Link href="https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK">
              <Button
                label="Join WhatsApp Community"
                icon="pi pi-whatsapp"
                className="p-button-lg"
              />
            </Link>
          </div>
        </div>
      </div>

      {children && <div className="relative z-10">{children}</div>}
    </section>
  );
}
