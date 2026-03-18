import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Coffee, Utensils, Waves, Dumbbell, Car } from 'lucide-react';

const amenities = [
  { icon: Wifi, name: 'Wi-Fi Tốc Độ Cao Miễn Phí', desc: 'Luôn kết nối với internet băng thông rộng miễn phí của chúng tôi.' },
  { icon: Coffee, name: 'Quầy Cà Phê Cao Cấp', desc: 'Bắt đầu buổi sáng với cà phê nghệ thuật và bánh ngọt.' },
  { icon: Utensils, name: 'Nhà Hàng Ẩm Thực Tinh Tế', desc: 'Trải nghiệm hương vị tinh tế từ đầu bếp đạt sao Michelin của chúng tôi.' },
  { icon: Waves, name: 'Hồ Bơi Vô Cực & Spa', desc: 'Thư giãn và trẻ hóa tại hồ bơi nước ấm và spa dịch vụ đầy đủ.' },
  { icon: Dumbbell, name: 'Trung Tâm Thể Hình 24/7', desc: 'Duy trì thói quen tập luyện tại phòng gym hiện đại của chúng tôi.' },
  { icon: Car, name: 'Dịch Vụ Đỗ Xe', desc: 'Dịch vụ đỗ xe chuyên nghiệp mang lại sự tiện lợi và an toàn cho bạn.' },
];

export const Amenities = () => {
  return (
    <section id="amenities" className="py-24 px-6 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Dịch Vụ Của Chúng Tôi
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Tiện Nghi Khách Sạn
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
