'use client'

import { useRouter } from 'next/navigation'
import { Hero } from '../components/Hero'
import { ProductGrid } from '../components/ProductGrid'
import { items } from '../data/items'

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
        <ProductGrid title="Supplements" products={items.filter((item) => item.category == 'supplement')} onProductClick={handleProductClick} />
        <ProductGrid title="Herbal Products" products={items.filter((item) => item.category == 'herb')} onProductClick={handleProductClick} />
        <ProductGrid title="Healthy Snacks and Food" products={items.filter((item) => item.category == 'food')} onProductClick={handleProductClick} />
      </main>
    </div>
  )
}