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

      {/* Newsletter Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-card border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-bg to-bg pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-serif text-white mb-6">Join the Inner Circle</h2>
          <p className="text-white/60 font-sans mb-10 leading-relaxed">
            Subscribe to receive exclusive access to new collections, design inspiration, and private events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-bg border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors font-sans text-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-gold text-black px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
