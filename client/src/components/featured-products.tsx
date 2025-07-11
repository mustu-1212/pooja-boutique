const featuredProducts = [
  {
    id: 1,
    title: 'Designer Kurti',
    description: 'Floral print with mirror work',
    price: '₹2,499',
    originalPrice: '₹3,999',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  },
  {
    id: 2,
    title: 'Elegant Suit Set',
    description: 'Traditional embroidery',
    price: '₹3,299',
    originalPrice: '₹4,999',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  },
  {
    id: 3,
    title: 'Co-ord Set',
    description: 'Vibrant prints',
    price: '₹1,999',
    originalPrice: '₹2,999',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  },
  {
    id: 4,
    title: 'Evening Gown',
    description: 'Glamorous evening wear',
    price: '₹4,999',
    originalPrice: '₹7,999',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  },
  {
    id: 5,
    title: 'Silk Kurti',
    description: 'Premium silk fabric',
    price: '₹3,599',
    originalPrice: '₹5,499',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  },
  {
    id: 6,
    title: 'Party Wear Top',
    description: 'Sequined glamour',
    price: '₹1,799',
    originalPrice: '₹2,499',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
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
