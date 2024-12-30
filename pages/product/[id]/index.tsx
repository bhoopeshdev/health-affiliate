    import { useRouter } from 'next/router'
    import { Navbar } from '../../../components/Navbar'
    import { Footer } from '../../../components/Footer'
    import { ImageSlider } from '../../../components/ImageSlider'
    import { ProductDetails } from '../../../components/ProductDetails'
    import { UserReviews } from '../../../components/UserReviews'
    import { ProductGrid } from '../../../components/ProductGrid'
    import { items } from '../../../data/items'

    export default function ProductPage() {

      // get the product ID from the URL path, it is in format /product/{id} read from pathname
      const router = useRouter();
      const { id } = router.query;

      // find the product with the matching ID
      const product = items.find((item) => item.id === id);

      if(!product) {
        return (
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
              <p>Product not found</p>
            </main>
            <Footer />
          </div>
        )
      }

      // prepare the related products array from product related_product array
      const relatedProducts = items.filter((item) => product.related_products.includes(item.id));

      return (
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ImageSlider images={product.images} />
              <ProductDetails
                product={product}
              />
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Product Description</h2>
              <h3 className="text-md mb-4">
                {product.full_description.map((desc, index) => (
                    <p key={index} className="mb-2">
                      {desc}
                    </p>
                  ))}
              </h3>
            </div>
            <div className="mb-12">
              <UserReviews reviews={product.reviews} />
            </div>
            <div>
              <ProductGrid title="Related Products" products={relatedProducts} />
            </div>
          </main>
        </div>
      )
    }