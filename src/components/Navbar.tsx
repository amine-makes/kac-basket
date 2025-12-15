import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import kacLogo from "@/assets/kac-logo.jpeg";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar = ({ cartCount, onCartClick }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={kacLogo} 
            alt="KAC Logo" 
            className="w-12 h-12 rounded-full object-cover border-2 border-primary shadow-md"
          />
          <div className="flex flex-col">
            <span className="font-display text-3xl tracking-[0.15em] text-primary leading-none">KAC</span>
            <span className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">Basketball</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm">Products</a>
          <a href="#jerseys" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm">Jerseys</a>
          <a href="#shoes" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm">Shoes</a>
          <a href="#balls" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm">Balls</a>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">Products</a>
            <a href="#jerseys" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">Jerseys</a>
            <a href="#shoes" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">Shoes</a>
            <a href="#balls" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">Balls</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
