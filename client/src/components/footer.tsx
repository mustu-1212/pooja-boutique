import { Gem, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[hsl(var(--boutique-dark))] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Gem className="text-[hsl(var(--boutique-accent))] text-2xl" />
              <h3 className="text-2xl font-playfair font-bold">Pooja Boutique</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your destination for elegant fashion and timeless style. 
              Discover the perfect outfit for every occasion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-[hsl(var(--boutique-primary))] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-[hsl(var(--boutique-primary))] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-[hsl(var(--boutique-accent))] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('categories')}
                  className="hover:text-[hsl(var(--boutique-accent))] transition-colors"
                >
                  Categories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[hsl(var(--boutique-accent))] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[hsl(var(--boutique-accent))] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-xl mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[hsl(var(--boutique-accent))] transition-colors">Short Kurtis</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--boutique-accent))] transition-colors">Long Kurtis</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--boutique-accent))] transition-colors">Suit Sets</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--boutique-accent))] transition-colors">Tops</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--boutique-accent))] transition-colors">Co-ord Sets</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--boutique-accent))] transition-colors">Gowns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pooja Boutique. All rights reserved. | Designed with ❤️ for fashion lovers</p>
        </div>
      </div>
    </footer>
  );
}
