import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import kacLogo from "@/assets/kac-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={kacLogo} 
                alt="KAC Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-[0.15em] text-primary leading-none">KAC</span>
                <span className="font-display text-xs tracking-[0.3em] text-foreground/70 uppercase">Basketball</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Premium basketball gear for champions. Elevate your game with quality equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-muted-foreground hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#jerseys" className="text-muted-foreground hover:text-primary transition-colors">Jerseys</a></li>
              <li><a href="#shoes" className="text-muted-foreground hover:text-primary transition-colors">Shoes</a></li>
              <li><a href="#balls" className="text-muted-foreground hover:text-primary transition-colors">Basketballs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@kacbasketball.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                123 Basketball Ave, Court City
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/clubkacoffbasket" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:text-primary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group">
                  <Facebook className="w-5 h-5 group-hover:text-primary-foreground" />
                </a>
              </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2024 KAC Basketball Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
