import Hero from './Hero';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Featured Collections</h2>
          <div className="w-20 h-px bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
