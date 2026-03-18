import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Coffee, Utensils, Waves, Dumbbell, Car } from 'lucide-react';

const amenities = [
  { icon: Wifi, name: 'Free High-Speed Wi-Fi', desc: 'Stay connected with our complimentary gigabit internet.' },
  { icon: Coffee, name: 'Premium Coffee Bar', desc: 'Start your morning with artisan coffee and pastries.' },
  { icon: Utensils, name: 'Fine Dining Restaurant', desc: 'Experience exquisite flavors from our Michelin-star chef.' },
  { icon: Waves, name: 'Infinity Pool & Spa', desc: 'Relax and rejuvenate in our heated pool and full-service spa.' },
  { icon: Dumbbell, name: '24/7 Fitness Center', desc: 'Keep up with your routine in our state-of-the-art gym.' },
  { icon: Car, name: 'Valet Parking', desc: 'Professional valet service for your convenience and safety.' },
];

export const Amenities = () => {
  return (
    <section id="amenities" className="py-24 px-6 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Hotel Amenities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {amenities.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold transition-all duration-500">
                <item.icon size={28} className="text-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif mb-3">{item.name}</h3>
              <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
