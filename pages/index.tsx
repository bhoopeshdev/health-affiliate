import { Hero } from '../components/Hero'
import { ProductGrid } from '../components/ProductGrid'
import { items } from '../data/items'
import AutoScrollCarousel from '@/components/AutoScollCarousel'

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col roboto-regular">
      <main>
        <Hero />
        <AutoScrollCarousel />
        <ProductGrid title="Trending" products={items.filter((item) => item.trending === true)} />
        <ProductGrid title="Supplements" products={items.filter((item) => item.category == 'supplement')} />
        <ProductGrid title="Herbal Products" products={items.filter((item) => item.category == 'herb')} />
        <ProductGrid title="Healthy Snacks and Food" products={items.filter((item) => item.category == 'food')} />
      </main>
    </div>
  )
}