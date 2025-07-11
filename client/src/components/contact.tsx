import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Plus, Minus, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  title: string;
  price: string;
  originalPrice: string;
  sizes: string[];
  image: string;
}

interface SelectedProduct {
  product: Product;
  quantity: number;
  selectedSize: string;
}

const availableProducts: Product[] = [
  {
    id: 1,
    title: 'Blue Floral Print Kurti',
    price: '₹1,999',
    originalPrice: '₹2,999',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti1.webp'
  },
  {
    id: 2,
    title: 'Black Embroidered Kurti',
    price: '₹2,499',
    originalPrice: '₹3,499',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/kurti2.png'
  },
  {
    id: 3,
    title: 'Green White Work Kurti',
    price: '₹1,799',
    originalPrice: '₹2,499',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti3.png'
  },
  {
    id: 4,
    title: 'Pink Paisley Print Kurti',
    price: '₹2,199',
    originalPrice: '₹3,199',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti4.png'
  },
  {
    id: 5,
    title: 'Cream Embroidered Kurti',
    price: '₹2,299',
    originalPrice: '₹3,299',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti5.png'
  },
  {
    id: 6,
    title: 'Pink Designer Kurti',
    price: '₹2,599',
    originalPrice: '₹3,599',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/kurti6.png'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  const { toast } = useToast();

  // Update message when products change
  useEffect(() => {
    const productMessage = generateProductMessage();
    setFormData(prev => ({
      ...prev,
      message: productMessage
    }));
  }, [selectedProducts]);

  const generateProductMessage = () => {
    if (selectedProducts.length === 0) {
      return "Hello! I'm interested in your products. Please provide more information.";
    }

    let message = "Hello! I would like to inquire about the following products:\n\n";
    
    selectedProducts.forEach((item, index) => {
      message += `${index + 1}. ${item.product.title}\n`;
      message += `   - Price: ${item.product.price}\n`;
      message += `   - Size: ${item.selectedSize}\n`;
      message += `   - Quantity: ${item.quantity}\n\n`;
    });

    const total = calculateTotal();
    message += `Total Estimated Cost: ₹${total.toLocaleString()}\n\n`;
    message += "Please let me know about availability and delivery details. Thank you!";
    
    return message;
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, item) => {
      const price = parseInt(item.product.price.replace('₹', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const addProduct = (product: Product) => {
    const existingIndex = selectedProducts.findIndex(item => 
      item.product.id === product.id && item.selectedSize === product.sizes[0]
    );

    if (existingIndex >= 0) {
      const updated = [...selectedProducts];
      updated[existingIndex].quantity += 1;
      setSelectedProducts(updated);
    } else {
      setSelectedProducts([...selectedProducts, {
        product,
        quantity: 1,
        selectedSize: product.sizes[0]
      }]);
    }
  };

  const removeProduct = (productId: number, size: string) => {
    setSelectedProducts(selectedProducts.filter(item => 
      !(item.product.id === productId && item.selectedSize === size)
    ));
  };

  const updateQuantity = (productId: number, size: string, change: number) => {
    const updated = selectedProducts.map(item => {
      if (item.product.id === productId && item.selectedSize === size) {
        const newQuantity = Math.max(0, item.quantity + change);
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean) as SelectedProduct[];
    
    setSelectedProducts(updated);
  };

  const updateSize = (productId: number, oldSize: string, newSize: string) => {
    const updated = selectedProducts.map(item => {
      if (item.product.id === productId && item.selectedSize === oldSize) {
        return { ...item, selectedSize: newSize };
      }
      return item;
    });
    setSelectedProducts(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
    setSelectedProducts([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-[hsl(var(--boutique-light-red))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-[hsl(var(--boutique-primary))]">
          Get In Touch & Order
        </h2>
        
        {/* Product Calculator Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-[hsl(var(--boutique-dark))] flex items-center">
              <ShoppingCart className="mr-2" />
              Select Products to Order
            </h3>
            
            {/* Available Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {availableProducts.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold text-sm mb-2">{product.title}</h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[hsl(var(--boutique-primary))] font-bold">{product.price}</span>
                    <span className="text-gray-500 text-xs line-through">{product.originalPrice}</span>
                  </div>
                  <Button
                    onClick={() => addProduct(product)}
                    className="w-full bg-[hsl(var(--boutique-primary))] text-white hover:bg-[hsl(var(--boutique-primary))]/90 text-xs py-2"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Add to Order
                  </Button>
                </div>
              ))}
            </div>

            {/* Selected Products Cart */}
            {selectedProducts.length > 0 && (
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4 text-[hsl(var(--boutique-dark))]">Your Order ({selectedProducts.length} items)</h4>
                <div className="space-y-3 mb-4">
                  {selectedProducts.map((item, index) => (
                    <div key={`${item.product.id}-${item.selectedSize}`} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={item.product.image} 
                          alt={item.product.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-sm">{item.product.title}</p>
                          <p className="text-xs text-gray-600">{item.product.price} each</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select
                          value={item.selectedSize}
                          onChange={(e) => updateSize(item.product.id, item.selectedSize, e.target.value)}
                          className="border rounded px-2 py-1 text-xs"
                        >
                          {item.product.sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                        <div className="flex items-center space-x-1">
                          <Button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                            className="w-6 h-6 p-0 bg-gray-200 text-gray-700 hover:bg-gray-300"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                            className="w-6 h-6 p-0 bg-gray-200 text-gray-700 hover:bg-gray-300"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <Button
                          onClick={() => removeProduct(item.product.id, item.selectedSize)}
                          className="w-6 h-6 p-0 bg-red-500 text-white hover:bg-red-600"
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total: ₹{calculateTotal().toLocaleString()}</span>
                    <Button
                      onClick={() => setSelectedProducts([])}
                      className="bg-gray-500 text-white hover:bg-gray-600 text-sm"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-[hsl(var(--boutique-dark))]">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text-[hsl(var(--boutique-primary))] text-xl" />
                <div>
                  <p className="font-semibold text-[hsl(var(--boutique-dark))]">Address</p>
                  <p className="text-gray-600">123 Fashion Street, Style City, SC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[hsl(var(--boutique-primary))] text-xl" />
                <div>
                  <p className="font-semibold text-[hsl(var(--boutique-dark))]">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-[hsl(var(--boutique-primary))] text-xl" />
                <div>
                  <p className="font-semibold text-[hsl(var(--boutique-dark))]">Email</p>
                  <p className="text-gray-600">info@poojaboutique.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-[hsl(var(--boutique-primary))] text-xl" />
                <div>
                  <p className="font-semibold text-[hsl(var(--boutique-dark))]">Hours</p>
                  <p className="text-gray-600">Mon-Sat: 10AM-8PM, Sun: 12PM-6PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-playfair font-semibold mb-4 text-[hsl(var(--boutique-dark))]">
                Follow Us
              </h4>
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
                <a 
                  href="https://wa.me/1234567890" 
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
          </div>
          
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-[hsl(var(--boutique-dark))]">
              Send Order Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-[hsl(var(--boutique-dark))] font-semibold mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-[hsl(var(--boutique-dark))] font-semibold mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-[hsl(var(--boutique-dark))] font-semibold mb-2">
                  Order Details (Auto-generated)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Select products above to auto-generate your order message..."
                  className="w-full bg-gray-50"
                  rows={8}
                  required
                />
                <p className="text-xs text-gray-600 mt-1">
                  Message is automatically updated when you select products above. You can edit it if needed.
                </p>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[hsl(var(--boutique-primary))] text-white hover:bg-[hsl(var(--boutique-primary))]/90 py-3"
              >
                Send Order Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
