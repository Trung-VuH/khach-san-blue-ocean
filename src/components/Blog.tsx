import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Discover the Secrets of Our Award-Winning Spa',
    category: 'Wellness',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Top 10 Local Attractions Near Rivora Hotel',
    category: 'Travel',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'A Culinary Journey: Meet Our Executive Chef',
    category: 'Dining',
    date: 'March 05, 2026',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Our Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Latest News & Articles
            </h2>
          </div>
          <button className="flex items-center gap-2 text-stone-900 hover:text-gold transition-colors uppercase tracking-widest text-xs font-semibold group">
            View All Posts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-gold text-white text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                  {post.category}
                </div>
              </div>
              <div className="text-stone-400 text-[10px] uppercase tracking-widest mb-3 font-semibold">
                {post.date}
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-gold transition-colors leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-stone-900 group-hover:text-gold transition-colors text-xs uppercase tracking-widest font-bold">
                Read More <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
