import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Traveler',
    content: 'The attention to detail at Rivora is simply unmatched. From the moment I arrived, I felt like royalty. The room was pristine and the service was impeccable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Luxury Enthusiast',
    content: 'I have stayed in hotels all over the world, but Rivora stands out for its elegant atmosphere and world-class dining experience. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Vacationer',
    content: 'The spa facilities are incredible. It was the most relaxing weekend of my life. The staff goes above and beyond to ensure you have everything you need.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
  },
];

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 shadow-sm relative group hover:shadow-xl transition-shadow duration-500"
            >
              <Quote className="absolute top-6 right-6 text-cream group-hover:text-gold/10 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-stone-600 italic leading-relaxed mb-8 relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-stone-900 text-lg">{item.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
