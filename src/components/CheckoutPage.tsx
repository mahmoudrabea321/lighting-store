import React, { useState } from 'react';
import { CreditCard, Banknote, ShieldCheck } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const cartItems = useCartStore(state => state.items);
  const total = useCartStore(state => state.getTotalPrice());
  const clearCart = useCartStore(state => state.clearCart);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    building: '',
    city: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    // Quick validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const order = {
        ...formData,
        paymentMethod,
        total,
        status: 'pending',
        createdAt: Date.now(),
        items: cartItems.map(item => ({
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity
        }))
      };

      await addDoc(collection(db, 'orders'), order);
      clearCart();
      setIsSuccess(true);
    } catch (e) {
      console.error("Error creating order", e);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-bg min-h-screen text-white pt-32 pb-16 px-4 flex flex-col items-center">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-4xl font-serif mb-4">Order Confirmed</h1>
        <p className="text-white/60 text-center max-w-md font-sans mb-8 leading-relaxed">
          Thank you for choosing Lumina. Your piece is being prepared for delivery.
          Our team will contact you shortly via WhatsApp to confirm the delivery schedule.
        </p>
        <button onClick={() => navigate('/')} className="bg-gold text-black px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-all">
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="bg-bg min-h-screen pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Form Section */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="text-2xl font-serif mb-6 text-white border-b border-white/10 pb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name *" className="bg-card border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name *" className="bg-card border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address *" className="bg-card border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors md:col-span-2" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number (WhatsApp) *" className="bg-card border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors md:col-span-2" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-6 text-white border-b border-white/10 pb-4">Shipping Details</h2>
            <div className="grid grid-cols-1 gap-4">
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Street Address *" className="bg-card border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" />
              <input type="text" name="building" value={formData.building} onChange={handleInputChange} placeholder="Building / Apartment / Floor" className="bg-card border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <select name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-card border border-white/10 p-4 text-white focus:border-gold outline-none appearance-none transition-colors">
                    <option value="" disabled>Select Governorate *</option>
                    <option value="cairo">Cairo</option>
                    <option value="giza">Giza</option>
                    <option value="alexandria">Alexandria</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <input type="text" placeholder="Postal Code (Optional)" className="bg-card border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-6 text-white border-b border-white/10 pb-4">Payment Method</h2>
            <div className="space-y-4">
              <label className={`block border p-5 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-gold bg-gold/5' : 'border-white/10 bg-card hover:border-white/30'}`}>
                <div className="flex items-center space-x-4">
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="accent-gold w-4 h-4 cursor-pointer" />
                  <Banknote className={`w-6 h-6 ${paymentMethod === 'cod' ? 'text-gold' : 'text-white/50'}`} />
                  <span className="font-semibold tracking-wide text-sm uppercase">Cash on Delivery (COD)</span>
                </div>
                {paymentMethod === 'cod' && <p className="text-white/60 text-xs mt-3 ml-8 leading-relaxed">Pay in cash when your chandelier is delivered. Free premium installation is included with your purchase.</p>}
              </label>

              <label className={`block border p-5 cursor-pointer transition-all opacity-50 ${paymentMethod === 'card' ? 'border-gold bg-gold/5' : 'border-white/10 bg-card/50 hover:border-white/30'}`}>
                <div className="flex items-center space-x-4">
                  <input type="radio" name="payment" value="card" disabled className="accent-gold w-4 h-4 cursor-not-allowed" />
                  <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-gold' : 'text-white/50'}`} />
                  <span className="font-semibold tracking-wide text-sm uppercase">Credit Card (Coming Soon)</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-card border border-white/10 p-6 md:p-8">
            <h2 className="text-xl font-serif mb-6 text-white border-b border-white/10 pb-4">Order Summary</h2>
            
            <div className="space-y-6 mb-8 max-h-60 overflow-y-auto pr-2">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-20 h-20 bg-bg border border-white/10 flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="flex flex-col flex-1 justify-center">
                    <h3 className="font-serif text-sm mb-1 text-white/90 leading-tight">{item.product.name}</h3>
                    <p className="text-white/50 text-xs font-mono uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                    <p className="text-gold text-sm font-semibold mt-auto font-mono">{item.product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm text-white/70 border-b border-white/20 pb-8 mb-8">
              <div className="flex justify-between font-mono">
                <span>Subtotal</span>
                <span>EGP {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="flex items-center">Shipping <span className="ml-2 text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded-sm">Premium</span></span>
                <span>Free</span>
              </div>
            </div>

            <div className="flex justify-between items-end text-lg font-serif mb-8">
              <span className="text-white/80">Total</span>
              <span className="text-3xl text-gold font-light">EGP {total.toLocaleString()}</span>
            </div>

            <button 
              onClick={handleCheckout} 
              disabled={isSubmitting || cartItems.length === 0}
              className="w-full bg-gold text-black py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(212,175,55,0.3)] mb-6 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Processing...' : (paymentMethod === 'cod' ? 'Complete Order (COD)' : 'Proceed to Payment')}
            </button>

            <div className="flex items-center justify-center space-x-3 text-white/40 text-[10px] uppercase tracking-widest mt-6">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>Secure Checkout & Premium Local Delivery</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
