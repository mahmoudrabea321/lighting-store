import { useState, useCallback } from 'react';
import { ShoppingBag, MessageCircle, Truck, ShieldCheck, Star, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { Product } from './ProductCard';

const mockProductData: Product = {
  id: 1,
  name: 'Aurelia Grand Tiered Chandelier',
  price: 'EGP 42,500',
  description: 'An architectural masterpiece of hand-blown glass and brushed gold metalwork, designed to be the centerpiece of luxury living spaces.',
  specs: {
    material: 'Hand-blown glass, Brushed Gold',
    size: '80cm diameter, adjustable height',
    lighting: 'Warm LED integration',
  },
  image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
  images: [
    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000',
  ]
};

export default function ProductDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem(mockProductData);
    navigate('/checkout'); // Optional: redirects or we can show a success toast. Let's redirect since the UI flow demands it.
  };

  return (
    <div className="bg-bg min-h-screen text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden bg-card border border-white/10">
            <img src={mockProductData.images[activeImage]} alt={mockProductData.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {mockProductData.images.map((img, idx) => (
              <button key={idx} onClick={() => setActiveImage(idx)} className={`aspect-square border ${activeImage === idx ? 'border-gold' : 'border-white/10'}`}>
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-4xl font-serif mb-2">{mockProductData.name}</h1>
            <div className="flex items-center space-x-2 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}
              <span className="text-white/60 text-sm font-sans ml-2">(48 Reviews)</span>
            </div>
          </div>
          
          <div className="text-3xl font-serif text-gold mb-6">{mockProductData.price}</div>
          <p className="text-white/70 font-sans leading-relaxed mb-8">{mockProductData.description}</p>
          
          <div className="space-y-4 mb-8 text-sm font-sans border-t border-b border-white/10 py-6">
            {Object.entries(mockProductData.specs).map(([key, val]) => (
              <div key={key} className="grid grid-cols-2">
                <span className="text-white/50 uppercase tracking-widest">{key}</span>
                <span className="text-white">{val as string}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-red-400 mb-6 font-semibold">
            <Zap className="h-4 w-4" />
            <span className="text-xs uppercase tracking-widest">Limited stock - Only 3 left</span>
          </div>

          <div className="flex gap-4 mb-8">
            <button onClick={handleAddToCart} className="flex-1 bg-gold text-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-all text-center flex items-center justify-center cursor-pointer">
              Add to Cart
            </button>
            <button className="flex items-center justify-center bg-white/10 w-16 hover:bg-white/20 transition-all">
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-widest text-white/50">
            <div className="flex items-center space-x-2"><Truck className="h-4 w-4" /> <span>2-5 Days Delivery</span></div>
            <div className="flex items-center space-x-2"><ShieldCheck className="h-4 w-4" /> <span>2 Year Warranty</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
