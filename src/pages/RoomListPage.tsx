import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Maximize, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants/rooms';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const RoomListPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Danh mục phòng nghỉ"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.4em] text-sm font-semibold mb-4 block"
          >
            Khám Phá
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif leading-tight"
          >
            Danh Mục Phòng Nghỉ
          </motion.h1>
        </div>
      </section>

      {/* Room List Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {ROOMS.map((room, index) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group"
              >
                {/* Image Section */}
                <Link to={`/rooms/${room.id}`} className="lg:w-1/2 relative overflow-hidden aspect-[16/10] lg:aspect-auto">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 text-stone-900 font-serif shadow-md">
                    Từ {room.price} VNĐ / Đêm
                  </div>
                </Link>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  
                  <Link to={`/rooms/${room.id}`}>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 group-hover:text-gold transition-colors">
                      {room.name}
                    </h2>
                  </Link>
                  
                  <Link to={`/rooms/${room.id}`}>
                    <p className="text-stone-500 leading-relaxed mb-8">
                      {room.description}
                    </p>
                  </Link>

                  <div className="grid grid-cols-2 gap-6 mb-10 border-y border-stone-100 py-6">
                    <div className="flex items-center gap-3 text-stone-600">
                      <Maximize size={20} className="text-gold" />
                      <span className="text-sm uppercase tracking-widest font-medium">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-3 text-stone-600">
                      <Users size={20} className="text-gold" />
                      <span className="text-sm uppercase tracking-widest font-medium">{room.guests}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-10">
                    {room.amenities.map((Icon, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:text-gold hover:bg-stone-100 transition-colors">
                        <Icon size={18} />
                      </div>
                    ))}
                  </div>

                  <Link to={`/rooms/${room.id}`} className="w-fit flex items-center gap-3 bg-stone-900 text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors duration-300">
                    Đặt Phòng Ngay <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
