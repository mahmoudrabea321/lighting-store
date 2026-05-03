import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ShopPage() {
  return (
    <div className="bg-bg min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-white mb-4">All Collections</h1>
          <div className="w-20 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto font-sans">
            Discover our complete range of architectural lighting, curated to elevate your space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
