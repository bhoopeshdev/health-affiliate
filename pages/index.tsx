'use client'

import { useRouter } from 'next/navigation'
import { Hero } from '../components/Hero'
import { ProductGrid } from '../components/ProductGrid'
import { items } from '../data/items'
import AutoScrollCarousel from '@/components/AutoScollCarousel'

export async function getServerSideProps() {
  const slides = [
    {
      type: "hero",
      title: "Discover Nature's Best for Your Health",
      description: "Curated selection of premium health supplements, herbs, and superfoods to boost your wellbeing.",
      benefits: ["Natural Ingredients", "Expert Vetted", "Quality Assured"],
      bgGradient: "from-orange-400 to-red-500",
    },
    {
      type: "image",
      image: "/images/slide2.jpg",
      link: "/products/category1",
      alt: "Hero Image - Category 1",
    },
    {
      type: "image",
      image: "/images/slide3.jpg",
      link: "/products/category2",
      alt: "Hero Image - Category 2",
    },
  ];

  // Calculate current slide based on server time
  const currentTime = Date.now();
  const currentSlide = Math.floor((currentTime / 5000) % slides.length);

  return { props: { slides, currentSlide } };
}

export default function Home() {
  const router = useRouter()

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Hero />
        <AutoScrollCarousel />
        <ProductGrid title="Trending Products" products={items.filter((item) => item.trending === true)} onProductClick={handleProductClick} />
        <ProductGrid title="Supplements" products={items.filter((item) => item.category == 'supplement')} onProductClick={handleProductClick} />
        <ProductGrid title="Herbal Products" products={items.filter((item) => item.category == 'herb')} onProductClick={handleProductClick} />
        <ProductGrid title="Healthy Snacks and Food" products={items.filter((item) => item.category == 'food')} onProductClick={handleProductClick} />
      </main>
    </div>
  )
}