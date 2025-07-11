import { useState } from "react";

const categories = [
  {
    id: 'short-kurtis',
    title: 'Short Kurtis',
    description: 'Casual elegance for everyday wear',
    image: 'https://images.unsplash.com/photo-1583391733956-3c78bbaaa42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500'
  },
  {
    id: 'long-kurtis',
    title: 'Long Kurtis',
    description: 'Grace and sophistication combined',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500'
  },
  {
    id: 'suit-sets',
    title: 'Suit Sets',
    description: 'Traditional charm with modern flair',
    image: 'https://images.unsplash.com/photo-1583391733981-24c6eacb2a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500'
  },
  {
    id: 'tops',
    title: 'Tops',
    description: 'Contemporary styles for modern women',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500'
  },
  {
    id: 'coord-sets',
    title: 'Co-ord Sets',
    description: 'Perfectly matched outfits',
    image: 'https://images.unsplash.com/photo-1571513722275-4b8c78de4420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500'
  },
  {
    id: 'gowns',
    title: 'Gowns',
    description: 'Glamorous evening wear',
    image: 'https://images.unsplash.com/photo-1566479179817-41cb1775c9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500'
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
    <section id="categories" className="py-16 bg-[hsl(var(--boutique-light))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-[hsl(var(--boutique-primary))]">
          Our Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="aspect-square relative">
                <img 
                  src={category.image} 
                  alt={`${category.title} Collection`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-playfair font-semibold text-[hsl(var(--boutique-dark))] mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
