// components/AutoScrollCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // ShadCN utility function for conditional classnames

interface Banner {
  image: string;
  link: string;
}

const banners: Banner[] = [
  {
    image: "/banner/blue_tea_butterfly_pea_flower.jpg",
    link: "/product/14",
  },
  {
    image: "/banner/sova_gut_health_booster.jpg",
    link: "/product/18",
  },
  {
    image: "/banner/kapiva_dia_free_juice.jpg",
    link: "/product/20",
  }
];

const AutoScrollCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      } else {
        // Swipe right
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative overflow-hidden my-4 flex flex-col items-center">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex transition-transform overflow-hidden px-4 gap-4 lg:mx-20 container mx-auto"
        style={{ scrollSnapType: "x mandatory" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {banners.map((banner, index) => (
          <a
            key={index}
            href={banner.link}
            className={cn(
              "flex-shrink-0 w-[calc(100%-16px)] md:w-[calc(33.333%-16px)] snap-center rounded-lg overflow-hidden",
              "hover:opacity-90"
            )}
          >
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto"
            />
          </a>
        ))}
      </div>

      {/* Indicators */}
      <div className="mt-4 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full border border-gray-400 transition-all",
              index === currentIndex
                ? "bg-black border-black shadow-md" // Active dot
                : "bg-white border-gray-400 shadow-sm" // Inactive dot
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;