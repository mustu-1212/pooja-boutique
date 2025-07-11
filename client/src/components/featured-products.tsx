const featuredProducts = [
  {
    id: 1,
    title: 'Blue Floral Print Kurti',
    description: 'Beautiful blue kurti with intricate floral patterns',
    price: '₹1,999',
    originalPrice: '₹2,999',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti1.webp'
  },
  {
    id: 2,
    title: 'Black Embroidered Kurti',
    description: 'Elegant black kurti with traditional white embroidery',
    price: '₹2,499',
    originalPrice: '₹3,499',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/kurti2.png'
  },
  {
    id: 3,
    title: 'Green White Work Kurti',
    description: 'Light green kurti with delicate white embroidered work',
    price: '₹1,799',
    originalPrice: '₹2,499',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti3.png'
  },
  {
    id: 4,
    title: 'Pink Paisley Print Kurti',
    description: 'Lovely pink kurti with paisley patterns',
    price: '₹2,199',
    originalPrice: '₹3,199',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti4.png'
  },
  {
    id: 5,
    title: 'Cream Embroidered Kurti',
    description: 'Sophisticated cream kurti with golden embroidery',
    price: '₹2,299',
    originalPrice: '₹3,299',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti5.png'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-[hsl(var(--boutique-secondary))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-[hsl(var(--boutique-primary))]">
          Featured Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative group">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  SALE
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-playfair font-bold text-[hsl(var(--boutique-dark))] text-lg mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[hsl(var(--boutique-primary))]">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Available Sizes:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span 
                        key={size}
                        className="px-3 py-1 bg-[hsl(var(--boutique-secondary))] text-[hsl(var(--boutique-primary))] rounded-full text-xs font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                  className="w-full bg-[hsl(var(--boutique-primary))] text-white py-2 px-4 rounded-lg hover:bg-[hsl(var(--boutique-primary))]/90 transition-colors font-medium"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
