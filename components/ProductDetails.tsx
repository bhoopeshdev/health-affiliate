import { Star, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useWishlist } from '../context/WishlistContext'
import { Product } from '../data/types'

export function ProductDetails({ product }: { product: Product }) {

  const { addToWishlist, wishlist } = useWishlist()

  // Check if the product exists before checking the wishlist
  const isInWishlist = wishlist && wishlist.some(item => item && item.id == product.id);
 
  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      console.log('Adding to wishlist:', product.name);
      addToWishlist(product)
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.short_description}</p>
      <div className="flex items-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
        <span className="text-gray-600">({product.rating}/5)</span>
      </div>
      <div className="flex space-x-4">
        <Button onClick={() => window.open(product.affiliate_link, '_blank')}>
          Buy Now 
        </Button>
        <Button 
          className="mb-4 flex items-center"
          onClick={handleAddToWishlist}
          disabled={isInWishlist}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          {isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
        </Button>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </div>
    </div>
  )
}