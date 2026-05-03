import { ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export default function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  
  return (
    <header className="fixed w-full z-50 bg-bg/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-white md:hidden mr-4" />
            <Link to="/"><h1 className="text-2xl font-serif tracking-[0.2em] text-white">LUMINA<span className="text-gold">.</span></h1></Link>
          </div>
          
          <nav className="hidden md:flex space-x-10 font-sans text-xs uppercase tracking-[0.15em] font-medium text-white/70">
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          </nav>

          <div className="flex items-center space-x-6">
            <Link to="/checkout" className="text-white/70 hover:text-gold transition-colors relative block">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="hidden md:flex items-center space-x-2 border border-gold/40 text-gold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all rounded-full">
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
