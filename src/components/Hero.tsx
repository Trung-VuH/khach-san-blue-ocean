import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Search } from 'lucide-react';

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
          Welcome to Luxury
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight"
        >
          A Place to <br /> Experience Life
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <button className="px-10 py-4 bg-gold hover:bg-gold-dark text-white uppercase tracking-widest text-xs transition-all duration-300">
            Discover More
          </button>
        </motion.div>
      </div>

      {/* Booking Bar */}
      <div className="absolute bottom-0 left-0 w-full px-6 pb-12 hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto bg-white shadow-2xl flex items-stretch"
        >
          <div className="flex-1 grid grid-cols-3 divide-x divide-stone-100">
            <div className="p-6 flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Check In</label>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gold" />
                <span className="text-stone-800 font-medium">18 March, 2026</span>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Check Out</label>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gold" />
                <span className="text-stone-800 font-medium">22 March, 2026</span>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Guests</label>
              <div className="flex items-center gap-3">
                <Users size={18} className="text-gold" />
                <span className="text-stone-800 font-medium">2 Adults, 1 Child</span>
              </div>
            </div>
          </div>
          <button className="bg-stone-900 hover:bg-stone-800 text-white px-12 flex items-center gap-3 transition-colors">
            <Search size={20} />
            <span className="uppercase tracking-widest text-xs font-semibold">Check Availability</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
