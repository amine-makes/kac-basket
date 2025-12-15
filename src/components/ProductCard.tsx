import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="card-product group">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <Button
          size="icon"
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-primary hover:bg-primary/90"
          onClick={() => onAddToCart(product)}
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>
      
      <div className="p-4">
        <span className="text-xs uppercase tracking-wider text-primary">{product.category}</span>
        <h3 className="font-display text-xl mt-1">{product.name}</h3>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
