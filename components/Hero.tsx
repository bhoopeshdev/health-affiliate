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
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 lg:mx-20 lg:my-4 mx-2 rounded-lg"></div>
      <div className="relative text-center py-4 md:py-20 rounded-lg lg:mx-32 px-4">
        <h1 className="font-bold text-white mb-2 mx-4 text-xl md:text-4xl dela-gothic-one-bold">Discover Nature's Best for Your Health</h1>
        <p className="text-sm text-sm md:text-lg text-white mb-2 max-w-2xl mx-auto">Curated selection of premium health supplements, herbs, snacks, and foods, carefully selected through in-depth research of ingredients, effectiveness, user reviews, and competitive ratings.</p>
        <div className="mt-4 mx-8 sm:mt-12 flex flex-row justify-center gap-2 sm:gap-8">
          {['Natural Ingredients', 'Expert Vetted', 'Quality Assured'].map((benefit, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-2 sm:p-4 sm:w-1/3 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-xs font-semibold text-white sm:text-lg">{benefit}</h3>
            </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-16 flex justify-center space-x-4">
          <Button variant="secondary" className="lg sm:md md:sm lg:lg xl:xl rounded-lg"  onClick={scrollToProducts}>Explore Products</Button>
        </div>
      </div>
    </div>
  )
}