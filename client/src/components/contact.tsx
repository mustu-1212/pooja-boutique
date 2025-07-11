import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-[hsl(var(--boutique-primary))]">
          Get In Touch
        </h2>
        
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
              Send Message
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
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full"
                  rows={4}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[hsl(var(--boutique-primary))] text-white hover:bg-[hsl(var(--boutique-primary))]/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
