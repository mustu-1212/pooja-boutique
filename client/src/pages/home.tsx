import Header from "@/components/header";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/featured-products";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import ProductGalleryModal from "@/components/product-gallery-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <ProductGalleryModal />
    </div>
  );
}
