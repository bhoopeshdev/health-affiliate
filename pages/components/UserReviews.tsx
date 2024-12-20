import { Star } from 'lucide-react'

interface Review {
  id: number
  user: string
  rating: number
  comment: string
}

interface UserReviewsProps {
  reviews: Review[]
}

export function UserReviews({ reviews }: UserReviewsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-semibold">{review.user}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}