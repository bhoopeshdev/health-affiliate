import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { ImageSlider } from '../../components/ImageSlider'
import { ProductDetails } from '../../components/ProductDetails'
import { UserReviews } from '../../components/UserReviews'
import { ProductGrid } from '../../components/ProductGrid'

// Sample product data (replace with real data later)
const product = {
  id: 1,
  title: "Premium Multivitamin Complex",
  description: "A comprehensive blend of essential vitamins and minerals to support overall health and wellbeing.",
  rating: 4.5,
  affiliateLink: "https://example.com/affiliate/multivitamin",
  images: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ],
  fullDescription: [
    "Contains a balanced blend of vitamins A, C, D, E, and B-complex",
    "Supports immune function and energy metabolism",
    "Promotes healthy skin, hair, and nails",
    "Aids in maintaining strong bones and teeth",
    "Suitable for adults of all ages",
  ],
  reviews: [
    { id: 1, user: "John D.", rating: 5, comment: "Great product! I feel more energetic since I started taking it." },
    { id: 2, user: "Sarah M.", rating: 4, comment: "Good quality multivitamin. Noticed an improvement in my overall health." },
    { id: 3, user: "Mike R.", rating: 5, comment: "Excellent supplement. Will definitely buy again!" },
  ],
}

const relatedProducts = [
  { id: 2, name: "Omega-3 Fish Oil", image: "/placeholder.svg?height=200&width=300", price: 19.99 },
  { id: 3, name: "Probiotics Blend", image: "/placeholder.svg?height=200&width=300", price: 24.99 },
  { id: 4, name: "Vitamin D3 Supplement", image: "/placeholder.svg?height=200&width=300", price: 14.99 },
  { id: 5, name: "Calcium & Magnesium", image: "/placeholder.svg?height=200&width=300", price: 22.99 },
]

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ImageSlider images={product.images} />
          <ProductDetails
            title={product.title}
            description={product.description}
            rating={product.rating}
            affiliateLink={product.affiliateLink}
          />
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <ul className="list-disc pl-5 space-y-2">
            {product.fullDescription.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="mb-12">
          <UserReviews reviews={product.reviews} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </main>
      <Footer />
    </div>
  )
}