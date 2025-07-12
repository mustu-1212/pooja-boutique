import { Truck, Award } from "lucide-react";
import clothingRackImage from "@assets/image_1752295168761.png";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[hsl(var(--boutique-light-red))]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-[hsl(var(--boutique-primary))]">
              About Pooja Boutique
            </h2>
            <p className="text-lg text-[hsl(var(--boutique-dark))] mb-6">
              Founded with a passion for bringing elegance and style to every woman's wardrobe, 
              Pooja Boutique has been a trusted name in fashion for over a decade.
            </p>
            <p className="text-[hsl(var(--boutique-dark))] mb-8">
              We specialize in curating the finest collection of ethnic wear, contemporary styles, 
              and timeless pieces that celebrate the beauty and grace of modern women. From traditional 
              kurtis to glamorous gowns, each piece is carefully selected to ensure quality and style.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Truck className="text-[hsl(var(--boutique-primary))] text-2xl mb-2" />
                <h3 className="font-semibold text-[hsl(var(--boutique-dark))]">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Quick and reliable shipping</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Award className="text-[hsl(var(--boutique-primary))] text-2xl mb-2" />
                <h3 className="font-semibold text-[hsl(var(--boutique-dark))]">Quality Assured</h3>
                <p className="text-sm text-gray-600">Premium materials and craftsmanship</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={clothingRackImage}
              alt="Boutique Collection"
              className="rounded-2xl shadow-lg w-full object-cover h-96"
            />
            <div className="absolute -bottom-4 -right-4 bg-[hsl(var(--boutique-primary))] text-white rounded-full w-24 h-24 flex items-center justify-center font-playfair font-bold text-lg shadow-lg">
              10+ <br />Years
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm font-semibold text-[hsl(var(--boutique-primary))]">Premium Quality</p>
              <p className="text-xs text-gray-600">Handpicked Collection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
