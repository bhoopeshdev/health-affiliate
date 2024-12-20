import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

export function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                <p className="text-orange-600 font-bold">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Product</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}