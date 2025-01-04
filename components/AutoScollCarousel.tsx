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
    image: "/images/banner1.jpg",
    link: "/link1",
  },
  {
    image: "/images/banner2.jpg",
    link: "/link2",
  },
  {
    image: "/images/banner3.jpg",
    link: "/link3",
  },
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
    <div className="relative overflow-hidden">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex transition-transform overflow-hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {banners.map((banner, index) => (
          <a
            key={index}
            href={banner.link}
            className={cn(
              "flex-shrink-0 w-full md:w-1/3 snap-center",
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