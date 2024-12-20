import { Star, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ProductDetailsProps {
  title: string
  description: string
  rating: number
  affiliateLink: string
}

export function ProductDetails({ title, description, rating, affiliateLink }: ProductDetailsProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
        <span className="text-gray-600">({rating}/5)</span>
      </div>
      <div className="flex space-x-4">
        <Button onClick={() => window.open(affiliateLink, '_blank')}>
          Buy Now
        </Button>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </div>
    </div>
  )
}