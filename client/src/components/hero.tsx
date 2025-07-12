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
    <section id="home" className="relative bg-black text-white py-16 overflow-hidden min-h-[90vh] flex items-center">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0">
        <div className="w-full h-full opacity-80" style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(255, 0, 0, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 40% 40%, rgba(255, 0, 0, 0.1) 0%, transparent 20%)
          `,
        }}>
        </div>
        {/* Matrix rain effect simulation */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff0000' fill-opacity='0.3'%3E%3Crect x='2' y='2' width='1' height='3'/%3E%3Crect x='6' y='7' width='1' height='2'/%3E%3Crect x='10' y='1' width='1' height='4'/%3E%3Crect x='14' y='5' width='1' height='3'/%3E%3Crect x='18' y='3' width='1' height='2'/%3E%3Crect x='4' y='12' width='1' height='3'/%3E%3Crect x='8' y='15' width='1' height='2'/%3E%3Crect x='12' y='11' width='1' height='4'/%3E%3Crect x='16' y='13' width='1' height='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
          animation: 'matrix-rain 3s linear infinite'
        }}>
        </div>
      </div>
      
      {/* CSS Animation for matrix effect */}
      <style jsx>{`
        @keyframes matrix-rain {
          0% { transform: translateY(-20px); }
          100% { transform: translateY(20px); }
        }
      `}</style>
      
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
