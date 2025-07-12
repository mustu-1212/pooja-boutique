import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-600 text-white py-16 overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
              Elegant Fashion
              <br />
              <span className="text-yellow-300 block">
                For Every Occasion
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed opacity-90">
              Discover our curated collection of ethnic wear, contemporary styles, and timeless elegance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToCategories}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 border-2 border-yellow-400"
              >
                Explore Collection
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105"
              >
                Get Help
              </Button>
            </div>
            
            {/* Stats section */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-red-800/30 backdrop-blur-sm rounded-2xl p-4 text-center">
                <h3 className="font-playfair font-bold text-2xl mb-1 text-yellow-300">500+</h3>
                <p className="text-xs opacity-90">Happy Customers</p>
              </div>
              <div className="bg-red-800/30 backdrop-blur-sm rounded-2xl p-4 text-center">
                <h3 className="font-playfair font-bold text-2xl mb-1 text-yellow-300">100+</h3>
                <p className="text-xs opacity-90">Unique Designs</p>
              </div>
              <div className="bg-red-800/30 backdrop-blur-sm rounded-2xl p-4 text-center">
                <h3 className="font-playfair font-bold text-2xl mb-1 text-yellow-300">24/7</h3>
                <p className="text-xs opacity-90">Customer Support</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular background */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-yellow-200/20 to-orange-300/20 backdrop-blur-sm flex items-center justify-center">
                {/* Indian woman illustration */}
                <svg 
                  width="280" 
                  height="320" 
                  viewBox="0 0 280 320" 
                  className="relative z-10"
                >
                  {/* Background glow */}
                  <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Hair */}
                  <path d="M140 50 C120 45, 100 55, 95 75 C90 95, 95 115, 110 125 L110 140 L170 140 L170 125 C185 115, 190 95, 185 75 C180 55, 160 45, 140 50 Z" fill="#8B4513"/>
                  
                  {/* Face */}
                  <ellipse cx="140" cy="110" rx="35" ry="40" fill="#DEB887"/>
                  
                  {/* Bindi */}
                  <circle cx="140" cy="95" r="3" fill="#DC2626"/>
                  
                  {/* Eyes */}
                  <ellipse cx="130" cy="105" rx="4" ry="3" fill="#000"/>
                  <ellipse cx="150" cy="105" rx="4" ry="3" fill="#000"/>
                  <circle cx="131" cy="104" r="1" fill="#FFF"/>
                  <circle cx="151" cy="104" r="1" fill="#FFF"/>
                  
                  {/* Nose */}
                  <path d="M140 115 L138 120 L142 120 Z" fill="#CD853F"/>
                  
                  {/* Mouth */}
                  <path d="M135 125 Q140 128 145 125" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  
                  {/* Earrings */}
                  <circle cx="110" cy="115" r="6" fill="#FFD700"/>
                  <circle cx="170" cy="115" r="6" fill="#FFD700"/>
                  
                  {/* Necklace */}
                  <ellipse cx="140" cy="145" rx="25" ry="8" fill="#FFD700"/>
                  <circle cx="140" cy="145" r="4" fill="#DC2626"/>
                  
                  {/* Kurti/Dress */}
                  <path d="M115 140 L115 300 Q115 310, 125 310 L155 310 Q165 310, 165 300 L165 140 Z" fill="#FF6B35"/>
                  
                  {/* Decorative patterns on kurti */}
                  <circle cx="125" cy="160" r="8" fill="#FFD700" opacity="0.8"/>
                  <circle cx="140" cy="180" r="8" fill="#22C55E" opacity="0.8"/>
                  <circle cx="155" cy="160" r="8" fill="#FFD700" opacity="0.8"/>
                  <circle cx="125" cy="200" r="8" fill="#22C55E" opacity="0.8"/>
                  <circle cx="155" cy="200" r="8" fill="#FFD700" opacity="0.8"/>
                  <circle cx="140" cy="220" r="8" fill="#FFD700" opacity="0.8"/>
                  
                  {/* Arms */}
                  <ellipse cx="105" cy="160" rx="12" ry="35" fill="#DEB887"/>
                  <ellipse cx="175" cy="160" rx="12" ry="35" fill="#DEB887"/>
                  
                  {/* Dupatta/Scarf */}
                  <path d="M95 150 Q140 130, 185 150 Q185 160, 175 165 Q140 145, 105 165 Q95 160, 95 150 Z" fill="#FEF3C7" opacity="0.9"/>
                  
                  {/* Bangles */}
                  <ellipse cx="105" cy="190" rx="8" ry="4" fill="#FFD700"/>
                  <ellipse cx="175" cy="190" rx="8" ry="4" fill="#FFD700"/>
                </svg>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-20 right-15 w-3 h-3 bg-orange-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-5 w-5 h-5 bg-red-300 rounded-full opacity-60 animate-pulse delay-2000"></div>
              <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-300 rounded-full opacity-60 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
