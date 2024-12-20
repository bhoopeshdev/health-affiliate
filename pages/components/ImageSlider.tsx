'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ImageSliderProps {
  images: string[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative w-full h-96 md:h-[500px]">
      <Image
        src={images[currentIndex]}
        alt={`Product image ${currentIndex + 1}`}
        fill
        className="object-cover rounded-lg"
      />
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}