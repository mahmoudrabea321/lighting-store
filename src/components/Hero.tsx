import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOn((prev) => !prev);
    }, 2500); // Toggles automatically every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-bg overflow-hidden pt-20">
      <motion.div 
        animate={{ 
          opacity: isOn ? 0.15 : 0,
          scale: isOn ? 1 : 0.8
        }}
        transition={{ duration: isOn ? 0.4 : 1.5 }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold blur-[120px] rounded-full pointer-events-none"
      ></motion.div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-0 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="col-span-6 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <span className="h-[1px] w-12 bg-gold"></span>
            <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">Exclusive Lighting Design</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white leading-[1.05] mb-8 font-light"
          >
            Transform Your <br/>Space with <span className="italic text-gold">Luxury</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-lg leading-relaxed mb-10 max-w-md font-light"
          >
            Premium chandeliers and bespoke lighting solutions crafted for the most discerning interiors.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-6"
          >
            <Link to="/shop" className="bg-gold text-black px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all inline-block">
              Shop Collection
            </Link>
          </motion.div>
        </div>

        <div className="hidden md:flex col-span-6 items-center justify-center relative">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: isOn ? 1 : 0.2, 
              scale: 1,
              filter: isOn 
                ? 'brightness(1.2) contrast(1.1) drop-shadow(0px 0px 40px rgba(212,175,55,0.4))' 
                : 'brightness(0.5) contrast(1) drop-shadow(0px 0px 0px rgba(212,175,55,0))'
            }}
            transition={{ 
              duration: isOn ? 0.3 : 1.2, 
              delay: isOn ? 0 : 0.2,
              ease: "easeInOut" 
            }}
            src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000" 
            alt="Minimalist Edison Bulb" 
            className="w-[400px] h-[550px] object-cover mix-blend-screen rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
