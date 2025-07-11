const featuredProducts = [
  {
    id: 1,
    title: 'Designer Kurti',
    description: 'Floral print with mirror work',
    image: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  },
  {
    id: 2,
    title: 'Elegant Suit Set',
    description: 'Traditional embroidery',
    image: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  },
  {
    id: 3,
    title: 'Co-ord Set',
    description: 'Vibrant prints',
    image: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  },
  {
    id: 4,
    title: 'Evening Gown',
    description: 'Glamorous evening wear',
    image: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-[hsl(var(--boutique-primary))]">
          Featured Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[hsl(var(--boutique-light))] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-playfair font-semibold text-[hsl(var(--boutique-dark))] mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
