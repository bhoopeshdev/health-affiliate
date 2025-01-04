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
    image: "/banner/banner1.jpg",
    link: "/product/20",
  },
  {
    image: "/banner/banner2.jpg",
    link: "/product/13",
  },
  {
    image: "/banner/banner3.jpg",
    link: "/product/18",
  }
];

const AutoScrollCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="relative overflow-hidden my-4 flex flex-row justify-center">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex transition-transform overflow-hidden px-4 gap-4 lg:mx-20 container mx-auto"
        style={{ scrollSnapType: "x mandatory" }}
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentIndex ? "bg-white" : "bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

  );
};

export default AutoScrollCarousel;