import { Star, Heart, ShoppingBag } from "lucide-react";

const priceRanges = [
  {
    category: "Short Kurtis",
    priceRange: "₹1,699 - ₹2,799",
    originalRange: "₹2,299 - ₹3,999",
    sizes: ["S", "M", "L", "XL", "XXL"],
    icon: <ShoppingBag className="w-8 h-8" />,
    features: ["Casual wear", "Comfortable fit", "Easy care"]
  },
  {
    category: "Long Kurtis",
    priceRange: "₹2,199 - ₹3,599",
    originalRange: "₹3,199 - ₹5,499",
    sizes: ["S", "M", "L", "XL", "XXL"],
    icon: <Heart className="w-8 h-8" />,
    features: ["Elegant design", "Premium fabric", "Versatile styling"]
  },
  {
    category: "Gowns",
    priceRange: "₹2,999 - ₹8,999",
    originalRange: "₹4,499 - ₹12,999",
    sizes: ["S", "M", "L", "XL"],
    icon: <Star className="w-8 h-8" />,
    features: ["Evening wear", "Premium quality", "Designer collection"]
  },
  {
    category: "Suit Sets",
    priceRange: "₹2,299 - ₹4,499",
    originalRange: "₹3,299 - ₹6,999",
    sizes: ["S", "M", "L", "XL"],
    icon: <ShoppingBag className="w-8 h-8" />,
    features: ["Traditional style", "Complete set", "Occasion wear"]
  }
];

export default function PriceShowcase() {
  return (
    <section className="py-16 bg-[hsl(var(--boutique-light-red))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4 text-[hsl(var(--boutique-primary))]">
          Our Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Affordable luxury for every woman. All prices include free shipping and 30-day return guarantee.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {priceRanges.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[hsl(var(--boutique-primary))]"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[hsl(var(--boutique-secondary))] rounded-full mb-4">
                  <div className="text-[hsl(var(--boutique-primary))]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold text-[hsl(var(--boutique-dark))] mb-2">
                  {item.category}
                </h3>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-[hsl(var(--boutique-primary))] mb-1">
                  {item.priceRange}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  {item.originalRange}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2 text-center">Available Sizes:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.sizes.map((size) => (
                    <span 
                      key={size}
                      className="px-3 py-1 bg-[hsl(var(--boutique-secondary))] text-[hsl(var(--boutique-primary))] rounded-full text-xs font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-[hsl(var(--boutique-primary))] mr-2 fill-current" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="w-full bg-[hsl(var(--boutique-primary))] text-white py-3 px-4 rounded-lg hover:bg-[hsl(var(--boutique-primary))]/90 transition-colors font-medium"
              >
                View Collection
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-[hsl(var(--boutique-primary))] mb-4">
              Special Offers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--boutique-primary))] mb-2">Free Shipping</div>
                <p className="text-sm text-gray-600">On orders above ₹2,000</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--boutique-primary))] mb-2">30% Off</div>
                <p className="text-sm text-gray-600">On bulk orders (3+ items)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--boutique-primary))] mb-2">Easy Returns</div>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}