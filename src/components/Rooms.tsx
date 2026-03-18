import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Maximize } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View',
    price: 299,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    size: '45m²',
    guests: '2 Adults',
  },
  {
    id: 2,
    name: 'Executive Suite',
    price: 450,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop',
    size: '65m²',
    guests: '3 Adults',
  },
  {
    id: 3,
    name: 'Presidential Villa',
    price: 899,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    size: '120m²',
    guests: '4 Adults',
  },
];

export const Rooms = () => {
  return (
    <section id="rooms" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Accommodation
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Luxury Rooms & Suites
            </h2>
          </div>
          <button className="flex items-center gap-2 text-stone-900 hover:text-gold transition-colors uppercase tracking-widest text-xs font-semibold group">
            View All Rooms <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 text-stone-900 font-serif">
                  From ${room.price}
                </div>
              </div>
              <div className="flex items-center gap-6 text-stone-400 text-xs uppercase tracking-widest mb-3">
                <div className="flex items-center gap-2">
                  <Maximize size={14} />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} />
                  <span>{room.guests}</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-gold transition-colors">
                {room.name}
              </h3>
              <button className="text-xs uppercase tracking-widest font-semibold border-b border-stone-200 pb-1 hover:border-gold transition-colors">
                Book This Room
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
