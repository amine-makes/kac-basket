import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Cart from "@/components/Cart";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";

import tshirtImg from "@/assets/product-tshirt.jpg";
import shoesImg from "@/assets/product-shoes.jpg";
import ballImg from "@/assets/product-ball.jpg";

interface CartItem extends Product {
  quantity: number;
}

const jerseys: Product[] = [
  { id: 1, name: "Home Jersey", price: 89, category: "Jersey", image: tshirtImg },
  { id: 2, name: "Away Jersey", price: 89, category: "Jersey", image: tshirtImg },
  { id: 3, name: "Third Jersey", price: 99, category: "Jersey", image: tshirtImg },
];

const shoes: Product[] = [
  { id: 4, name: "Court Dominator X", price: 189, category: "Shoes", image: shoesImg },
  { id: 5, name: "Air Strike Pro", price: 219, category: "Shoes", image: shoesImg },
];

const balls: Product[] = [
  { id: 6, name: "Official Game Ball", price: 49, category: "Basketball", image: ballImg },
];

const Index = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderFormOpen, setOrderFormOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setOrderFormOpen(true);
  };

  const handleOrderSubmit = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
        onCartClick={() => setCartOpen(true)} 
      />
      
      <Hero />

      <div id="products">
        <ProductSection 
          id="jerseys"
          title="Basketball Jerseys" 
          products={jerseys} 
          onAddToCart={addToCart} 
        />

        <ProductSection 
          id="shoes"
          title="Basketball Shoes" 
          products={shoes} 
          onAddToCart={addToCart} 
        />

        <ProductSection 
          id="balls"
          title="Basketballs" 
          products={balls} 
          onAddToCart={addToCart} 
        />
      </div>

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
        total={cartTotal}
        onSubmit={handleOrderSubmit}
      />
    </div>
  );
};

export default Index;
