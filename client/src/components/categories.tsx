import { useState } from "react";

const categories = [
  {
    id: 'short-kurtis',
    title: 'Short Kurtis',
    description: 'Casual elegance for everyday wear',
    image: '/kurti1.webp'
  },
  {
    id: 'long-kurtis',
    title: 'Long Kurtis',
    description: 'Grace and sophistication combined',
    image: '/kurti2.png'
  },
  {
    id: 'suit-sets',
    title: 'Suit Sets',
    description: 'Traditional charm with modern flair',
    image: '/kurti3.png'
  },
  {
    id: 'tops',
    title: 'Tops',
    description: 'Contemporary styles for modern women',
    image: '/kurti4.png'
  },
  {
    id: 'coord-sets',
    title: 'Co-ord Sets',
    description: 'Perfectly matched outfits',
    image: '/kurti5.png'
  },
  {
    id: 'gowns',
    title: 'Gowns',
    description: 'Glamorous evening wear',
    image: '/kurti6.png'
  }
];

interface CategoriesProps {
  onCategoryClick?: (categoryId: string) => void;
}

export default function Categories({ onCategoryClick }: CategoriesProps) {
  const handleCategoryClick = (categoryId: string) => {
    if (onCategoryClick) {
      onCategoryClick(categoryId);
    }
    // Dispatch custom event for modal
    const event = new CustomEvent('openGallery', { detail: { categoryId } });
    window.dispatchEvent(event);
  };

  return (
    <section id="categories" className="py-16 bg-[hsl(var(--boutique-light-red))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-[hsl(var(--boutique-primary))]">
          Our Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="aspect-square relative group">
                <img 
                  src={category.image} 
                  alt={`${category.title} Collection`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-playfair font-bold mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
