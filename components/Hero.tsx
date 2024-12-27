import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProducts = () => {
    const productGrid = document.getElementById("product-grid");
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 animate-gradient-x"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-6 sm:text-5xl">Discover Nature's Best for Your Health</h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Curated selection of premium health supplements, herbs, and superfoods to boost your wellbeing.</p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button variant="secondary" size="lg" onClick={scrollToProducts}>Explore Products</Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {['Natural Ingredients', 'Expert-Vetted', 'Quality Assured'].map((benefit, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white">{benefit}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}