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
              <div key={index} className="bg-[hsl(var(--boutique-light))] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-[hsl(var(--boutique-dark))]">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
