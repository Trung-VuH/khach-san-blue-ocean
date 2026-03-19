import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/80 uppercase tracking-[0.4em] text-sm mb-6"
        >
          Chào mừng tới
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight"
        >
          Blue Ocean Hotel <br /> Dốc Lết
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <button className="px-10 py-4 bg-gold hover:bg-gold-dark text-white uppercase tracking-widest text-xs transition-all duration-300">
            Khám Phá Thêm
          </button>
        </motion.div>
      </div>
    </section>
  );
};
