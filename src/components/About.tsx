import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Từ Năm 1992
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
            Trải Nghiệm Nghỉ Dưỡng <br /> Thượng Lưu Giữa Lòng <br /> Biển Xanh Dốc Lết
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8 max-w-lg">
            Blue Ocean Hotel mang đến sự kết hợp hoàn hảo giữa vẻ đẹp cổ điển sang trọng và tiện nghi hiện đại. 
            Với cam kết về chất lượng dịch vụ đẳng cấp, chúng tôi đảm bảo mỗi vị khách đều có một kỳ nghỉ 
            thoải mái và đáng nhớ. Từ những trải nghiệm ẩm thực tinh tế đến không gian spa thư giãn, 
            mọi chi tiết đều được chăm chút tỉ mỉ vì sự hài lòng của quý khách.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-3xl font-serif text-gold mb-1">250+</h4>
              <p className="text-xs uppercase tracking-widest text-stone-500">Phòng Nghỉ Sang Trọng</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif text-gold mb-1">15+</h4>
              <p className="text-xs uppercase tracking-widest text-stone-500">Giải Thưởng Đạt Được</p>
            </div>
          </div>
          <button className="px-8 py-3 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white uppercase tracking-widest text-xs transition-all duration-300">
            Khám Phá Câu Chuyện
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
              alt="Hotel Exterior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square overflow-hidden border-[12px] border-cream hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" 
              alt="Hotel Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
