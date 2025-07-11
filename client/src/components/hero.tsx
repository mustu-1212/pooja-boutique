import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative hero-gradient text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat bg-center" style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><path d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/></g></g></svg>')"
        }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
            Elegant Fashion <br />
            <span className="text-[hsl(var(--boutique-secondary))]">
              For Every Occasion
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of ethnic wear, contemporary styles, and timeless elegance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={scrollToCategories}
              className="bg-white text-[hsl(var(--boutique-primary))] px-8 py-3 rounded-full font-semibold hover:bg-[hsl(var(--boutique-secondary))] transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Collection
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[hsl(var(--boutique-primary))] transition-all transform hover:scale-105"
            >
              Get Help
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-playfair font-bold text-2xl mb-2">500+</h3>
              <p className="text-sm opacity-90">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-playfair font-bold text-2xl mb-2">100+</h3>
              <p className="text-sm opacity-90">Unique Designs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-playfair font-bold text-2xl mb-2">24/7</h3>
              <p className="text-sm opacity-90">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
