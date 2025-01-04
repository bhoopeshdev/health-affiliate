import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProducts = () => {
    const productGrid = document.getElementById("product-grid");
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative overflow-hidden">
      <div className="relative container px-2 text-center bg-gradient-to-r from-orange-400
              to-red-500 py-4 md:py-24 lg:w-[90%]">
        <h1 className="font-bold text-white mb-2 text-2xl md:text-4xl">Discover Nature's Best for Your Health</h1>
        <p className="text-sm md:text-lg text-white mb-2 max-w-2xl mx-auto">Curated selection of premium health supplements, herbs, snacks, and foods, carefully selected through in-depth research of ingredients, effectiveness, user reviews, and competitive ratings.</p>
        <div className="mt-4 sm:mt-12 flex flex-row justify-center gap-2 sm:gap-8">
          {['Natural Ingredients', 'Expert Vetted', 'Quality Assured'].map((benefit, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-2 sm:p-4 sm:w-1/3 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-xs font-semibold text-white sm:text-lg">{benefit}</h3>
            </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-16 flex justify-center space-x-4">
          <Button variant="secondary" className="lg sm:md md:sm lg:lg xl:xl"  onClick={scrollToProducts}>Explore Products</Button>
        </div>
      </div>
    </div>
  )
}