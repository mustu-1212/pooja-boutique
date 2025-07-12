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
                href="https://www.instagram.com/poojamarkam308?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(var(--boutique-primary))] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/918319243373" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(var(--boutique-whatsapp))] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
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
