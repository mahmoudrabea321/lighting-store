import React from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
  specs?: any;
  images?: string[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group border border-white/10 hover:border-gold transition duration-500 bg-card block">
      <div className="overflow-hidden h-80">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg text-white mb-2">{product.name}</h3>
        <p className="text-white/60 font-sans text-sm mb-4">{product.price}</p>
        <div className="w-full text-center border border-gold/40 text-gold py-3 text-xs uppercase tracking-widest group-hover:bg-gold group-hover:text-black transition-all">View Details</div>
      </div>
    </Link>
  );
};

export default ProductCard;
