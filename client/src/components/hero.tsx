import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
          Elegant Fashion <br />
          <span className="text-[hsl(var(--boutique-secondary))]">For Every Occasion</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover our curated collection of ethnic wear, contemporary styles, and timeless elegance
        </p>
        <Button 
          onClick={scrollToCategories}
          className="bg-white text-[hsl(var(--boutique-primary))] px-8 py-3 rounded-full font-semibold hover:bg-[hsl(var(--boutique-secondary))] transition-all"
        >
          Explore Collection
        </Button>
      </div>
    </section>
  );
}
