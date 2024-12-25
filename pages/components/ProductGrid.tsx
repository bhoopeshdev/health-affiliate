import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Review, Product, ProductGridProps } from "../data/types";

export function ProductGrid({ title, products }: ProductGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2; // Adjust the scroll amount
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="product-grid" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-flex-start items-center gap-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>

          {/* Centered Scroll Buttons */}
          <div className="flex justify-center items-center mb-4 gap-4">
            <button
              className="p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
              onClick={() => scroll("left")}
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              className="p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
              onClick={() => scroll("right")}
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

        </div>

        {/* Scrollable Product Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-2 hide-scrollbar"
        >
          {products.map((product) => (
            <Card key={product.id} className="flex-none w-64 hover:shadow-2xl transition duration-300">
              <CardContent className="p-4">
                <Image
                  src="/placeholder.svg"
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                <p className="text-orange-600 font-bold">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link href={`/product/${product.id}`}>View Product</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}