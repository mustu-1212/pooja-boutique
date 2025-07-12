import { Star } from "lucide-react";

import testimonial1 from "@assets/images_1752294686165.jpg";
import testimonial2 from "@assets/download_1752294731719.jpg";
import testimonial3 from "@assets/download_1752294744738.jpg";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Amazing collection! The quality is exceptional and the designs are so elegant. I've bought 3 kurtis and each one is perfect. Pooja's boutique has become my go-to place for all ethnic wear.",
    image: testimonial1
  },
  {
    id: 2,
    name: "Anita Patel",
    location: "Delhi",
    rating: 5,
    comment: "The gowns are absolutely stunning! Wore one to a wedding and got so many compliments. The fabric quality and stitching is top-notch. Will definitely order again.",
    image: testimonial2
  },
  {
    id: 3,
    name: "Ritu Gupta",
    location: "Bangalore",
    rating: 5,
    comment: "Fast delivery and excellent customer service. The suit set I ordered fits perfectly and the fabric is so comfortable. Pooja personally ensures every detail is perfect.",
    image: testimonial3
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[hsl(var(--boutique-light-red))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-[hsl(var(--boutique-primary))]">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[hsl(var(--boutique-primary))]"
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[hsl(var(--boutique-primary))]/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[hsl(var(--boutique-primary))] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-[hsl(var(--boutique-dark))]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">{testimonial.location}</p>
                  <p className="text-xs text-[hsl(var(--boutique-primary))] font-medium">Verified Customer</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="bg-[hsl(var(--boutique-light-red))]/30 rounded-lg p-4 border-l-2 border-[hsl(var(--boutique-primary))]">
                <p className="text-gray-700 italic text-sm leading-relaxed">"{testimonial.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}