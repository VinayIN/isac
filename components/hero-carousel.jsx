import React, { useState, useEffect } from "react";

export default function HeroCarousel() {
  const [heroImages, setHeroImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const images = [
      { id: 1, src: "/images/hero/1.jpg", alt: "ISAC Hero Image 1" },
      { id: 2, src: "/images/hero/2.jpg", alt: "ISAC Hero Image 2" },
      { id: 3, src: "/images/hero/3.jpg", alt: "ISAC Hero Image 3" },
      { id: 4, src: "/images/hero/4.jpg", alt: "ISAC Hero Image 4" },
      { id: 5, src: "/images/hero/5.jpg", alt: "ISAC Hero Image 5" },
    ];
    setHeroImages(images);
  }, []);

  useEffect(() => {
    if (heroImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (heroImages.length === 0) return null;

  return (
    <div className="hero-carousel-wrapper">
      {heroImages.map((image, index) => (
        <div
          key={image.id}
          className={`hero-carousel-slide ${
            index === currentIndex ? "active" : ""
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="hero-carousel-image"
          />
        </div>
      ))}

      {/* Indicators - bottom center */}
      <div className="hero-carousel-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
