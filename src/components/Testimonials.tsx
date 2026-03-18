import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Khách Công Tác',
    content: 'Sự tỉ mỉ đến từng chi tiết tại Blue Ocean thực sự không gì sánh bằng. Từ lúc mới đến, tôi đã cảm thấy mình như một vị khách quý. Phòng nghỉ sạch sẽ và dịch vụ vô cùng hoàn hảo.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Người Yêu Sự Sang Trọng',
    content: 'Tôi đã ở nhiều khách sạn trên thế giới, nhưng Blue Ocean nổi bật với không gian thanh lịch và trải nghiệm ẩm thực đẳng cấp thế giới. Rất đáng để trải nghiệm!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Khách Du Lịch',
    content: 'Cơ sở vật chất spa thật tuyệt vời. Đó là kỳ nghỉ cuối tuần thư giãn nhất trong đời tôi. Nhân viên luôn nỗ lực hết mình để đảm bảo bạn có mọi thứ mình cần.',
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
            Đánh Giá
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
            Cảm Nhận Của Khách Hàng
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
