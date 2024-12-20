import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-600">HealthyChoices</Link>
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Input type="text" placeholder="Search products..." className="w-full pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-orange-600">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-orange-600">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-orange-600">Contact</Link>
        </div>
      </div>
    </nav>
  )
}