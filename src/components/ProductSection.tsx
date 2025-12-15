import ProductCard, { Product } from "./ProductCard";

interface ProductSectionProps {
  title: string;
  id: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductSection = ({ title, id, products, onAddToCart }: ProductSectionProps) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="glow-line w-12" />
          <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
