import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants/rooms';

export const Rooms = () => {
  // Show only first 3 rooms on home page
  const displayRooms = ROOMS.slice(0, 3);

  return (
    <section id="rooms" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Chỗ Nghỉ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Phòng & Suite Sang Trọng
            </h2>
          </div>
          <Link 
            to="/rooms" 
            className="flex items-center gap-2 text-stone-900 hover:text-gold transition-colors uppercase tracking-widest text-xs font-semibold group"
          >
            Xem Tất Cả Phòng <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/rooms/${room.id}`} className="relative aspect-[4/5] overflow-hidden mb-6 block">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 text-stone-900 font-serif">
                  Từ {room.price} VNĐ
                </div>
              </Link>
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
              <Link to={`/rooms/${room.id}`}>
                <h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-gold transition-colors">
                  {room.name}
                </h3>
              </Link>
              <Link to={`/rooms/${room.id}`} className="text-xs uppercase tracking-widest font-semibold border-b border-stone-200 pb-1 hover:border-gold transition-colors">
                Đặt Phòng Này
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
