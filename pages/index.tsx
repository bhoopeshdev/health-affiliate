'use client'

import { useRouter } from 'next/navigation'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { ProductGrid } from '../components/ProductGrid'
import { Footer } from '../components/Footer'
import { items } from '../data/items'

// Sample product data (replace with real data later)
const trendingProducts = [
  { id: 1, name: "Multivitamin Complex", image: "/placeholder.svg?height=200&width=300", price: 29.99 },
  { id: 2, name: "Omega-3 Fish Oil", image: "/placeholder.svg?height=200&width=300", price: 19.99 },
  { id: 3, name: "Probiotics Blend", image: "/placeholder.svg?height=200&width=300", price: 24.99 },
  { id: 4, name: "Vitamin D3 Supplement", image: "/placeholder.svg?height=200&width=300", price: 14.99 },
]

const healthSupplements = [
  { id: 5, name: "Calcium & Magnesium", image: "/placeholder.svg?height=200&width=300", price: 22.99 },
  { id: 6, name: "Vitamin C with Rose Hips", image: "/placeholder.svg?height=200&width=300", price: 17.99 },
  { id: 7, name: "B-Complex Vitamins", image: "/placeholder.svg?height=200&width=300", price: 21.99 },
  { id: 8, name: "Iron Supplement", image: "/placeholder.svg?height=200&width=300", price: 16.99 },
]

const herbs = [
  { id: 9, name: "Turmeric Curcumin", image: "/placeholder.svg?height=200&width=300", price: 23.99 },
  { id: 10, name: "Echinacea Extract", image: "/placeholder.svg?height=200&width=300", price: 18.99 },
  { id: 11, name: "Ginkgo Biloba", image: "/placeholder.svg?height=200&width=300", price: 20.99 },
  { id: 12, name: "Ashwagandha Root", image: "/placeholder.svg?height=200&width=300", price: 25.99 },
]

const organicFoods = [
  { id: 13, name: "Organic Chia Seeds", image: "/placeholder.svg?height=200&width=300", price: 12.99 },
  { id: 14, name: "Organic Quinoa", image: "/placeholder.svg?height=200&width=300", price: 15.99 },
  { id: 15, name: "Organic Spirulina Powder", image: "/placeholder.svg?height=200&width=300", price: 19.99 },
  { id: 16, name: "Organic Coconut Oil", image: "/placeholder.svg?height=200&width=300", price: 13.99 },
]

export default function Home() {
  const router = useRouter()

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Hero />
        <ProductGrid title="Trending Products" products={items.filter((item) => item.trending === true)} onProductClick={handleProductClick} />
        <ProductGrid title="Health Supplements" products={items.filter((item) => item.category == 'supplement')} onProductClick={handleProductClick} />
        <ProductGrid title="Herbal Remedies" products={items.filter((item) => item.category == 'herb')} onProductClick={handleProductClick} />
        <ProductGrid title="Organic Superfoods" products={items.filter((item) => item.category == 'organic-food')} onProductClick={handleProductClick} />
      </main>
    </div>
  )
}