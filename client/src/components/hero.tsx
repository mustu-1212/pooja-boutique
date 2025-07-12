import { Button } from "@/components/ui/button";
import heroImage from "@assets/image_1752295421571.png";

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
                onClick={() => window.open('https://wa.me/918319243373', '_blank')}
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
          
          {/* Right side - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Hero Image */}
              <div className="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <img 
                  src={heroImage}
                  alt="Elegant Indian Fashion Model"
                  className="w-full h-full object-contain relative z-10 transform hover:scale-105 transition-transform duration-300"
                />
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
