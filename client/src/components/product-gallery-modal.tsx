import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { galleryData } from "@/data/gallery-data";

export default function ProductGalleryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenGallery = (event: CustomEvent) => {
      const { categoryId } = event.detail;
      setCurrentCategory(categoryId);
      setIsOpen(true);
    };

    window.addEventListener('openGallery', handleOpenGallery as EventListener);
    return () => {
      window.removeEventListener('openGallery', handleOpenGallery as EventListener);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setCurrentCategory(null);
  };

  const currentData = currentCategory ? galleryData[currentCategory] : null;

  if (!isOpen || !currentData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-playfair font-bold text-[hsl(var(--boutique-primary))]">
              {currentData.title}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="text-gray-500 hover:text-[hsl(var(--boutique-primary))]"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.images.map((image, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative group">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {image.price && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      SALE
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-[hsl(var(--boutique-dark))] mb-2">
                    {image.alt}
                  </h3>
                  
                  {image.price && (
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-[hsl(var(--boutique-primary))]">
                          {image.price}
                        </span>
                        {image.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {image.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {image.sizes && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-600 mb-1">Available Sizes:</p>
                      <div className="flex flex-wrap gap-1">
                        {image.sizes.map((size) => (
                          <span 
                            key={size}
                            className="px-2 py-1 bg-[hsl(var(--boutique-secondary))] text-[hsl(var(--boutique-primary))] rounded-full text-xs font-medium"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => window.open('https://wa.me/918319243373', '_blank')}
                    className="w-full bg-[hsl(var(--boutique-primary))] text-white py-2 px-4 rounded-lg hover:bg-[hsl(var(--boutique-primary))]/90 transition-colors font-medium text-sm"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
