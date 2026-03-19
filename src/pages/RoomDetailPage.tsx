import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, Maximize, Star, Check, ArrowRight, 
  Calendar, Coffee, Tv, Wind, Wifi, Waves, Utensils,
  MapPin, Phone, Mail, Bed, Eye, Dumbbell
} from 'lucide-react';
import { ROOMS } from '../constants/rooms';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const room = ROOMS.find(r => r.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Không tìm thấy phòng</h1>
          <Link to="/rooms" className="text-gold hover:underline">Quay lại danh sách phòng</Link>
        </div>
      </div>
    );
  }

  const otherRooms = ROOMS.filter(r => r.id !== room.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={room.image} 
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">{room.name}</h1>
            <div className="flex flex-wrap gap-6 text-white/80 text-sm uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <Maximize size={16} className="text-gold" />
                <span>{room.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-gold" />
                <span>{room.guests}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed size={16} className="text-gold" />
                <span>{(room as any).bedType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} className="text-gold" />
                <span>{(room as any).view}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Details */}
            <div className="lg:w-2/3">
              <div className="mb-12">
                <h2 className="text-3xl font-serif text-stone-900 mb-6">Mô Tả Chi Tiết</h2>
                <p className="text-stone-600 leading-relaxed text-lg mb-8">
                  {room.description}
                </p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Mỗi phòng tại Blue Ocean Hotel đều được thiết kế để mang lại sự thoải mái tối đa cho quý khách. 
                  Với phong cách kiến trúc hiện đại hòa quyện cùng nét tinh tế địa phương, chúng tôi tạo ra một 
                  không gian nghỉ dưỡng lý tưởng, nơi bạn có thể thực sự thư giãn và tận hưởng vẻ đẹp của biển Dốc Lết.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-serif text-stone-900 mb-8">Tiện Nghi Phòng</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  {room.amenities.map((Icon, i) => (
                    <div key={i} className="flex items-center gap-4 text-stone-700">
                      <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-gold">
                        <Icon size={20} />
                      </div>
                      <span className="text-sm font-medium uppercase tracking-wider">
                        {Icon === Wifi && 'Wi-Fi Miễn Phí'}
                        {Icon === Wind && 'Điều Hòa'}
                        {Icon === Tv && 'TV Truyền Hình Cáp'}
                        {Icon === Coffee && 'Máy Pha Cà Phê'}
                        {Icon === Utensils && 'Dịch Vụ Ăn Tại Phòng'}
                        {Icon === Waves && 'Hồ Bơi Riêng'}
                        {Icon === Dumbbell && 'Dụng Cụ Tập Gym'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-serif text-stone-900 mb-8">Quy Định Chung</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Check size={20} className="text-gold mt-1 shrink-0" />
                    <p className="text-stone-600"><strong>Nhận phòng:</strong> Từ 14:00 chiều. Quý khách có thể yêu cầu nhận phòng sớm tùy vào tình trạng phòng trống.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check size={20} className="text-gold mt-1 shrink-0" />
                    <p className="text-stone-600"><strong>Trả phòng:</strong> Trước 12:00 trưa. Trả phòng muộn có thể phát sinh thêm phí.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check size={20} className="text-gold mt-1 shrink-0" />
                    <p className="text-stone-600"><strong>Hủy phòng:</strong> Miễn phí hủy phòng trước 48 giờ kể từ ngày nhận phòng.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check size={20} className="text-gold mt-1 shrink-0" />
                    <p className="text-stone-600"><strong>Trẻ em:</strong> Trẻ em dưới 6 tuổi được ở miễn phí nếu sử dụng giường có sẵn.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-stone-50 p-8 border border-stone-100 shadow-sm">
                  <div className="text-center mb-8">
                    <span className="text-stone-400 text-xs uppercase tracking-widest block mb-2">Giá Phòng Chỉ Từ</span>
                    <div className="text-3xl font-serif text-stone-900">{room.price} VNĐ <span className="text-sm font-sans text-stone-400">/ Đêm</span></div>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Ngày Nhận Phòng</label>
                      <div className="relative">
                        <input type="date" className="w-full bg-white border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Ngày Trả Phòng</label>
                      <div className="relative">
                        <input type="date" className="w-full bg-white border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Người Lớn</label>
                        <select className="w-full bg-white border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Trẻ Em</label>
                        <select className="w-full bg-white border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors">
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                      </div>
                    </div>
                    <button type="button" className="w-full bg-stone-900 text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors duration-300">
                      Kiểm Tra Phòng Trống
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-stone-200 text-center">
                    <p className="text-stone-400 text-xs mb-4 italic">Hoặc liên hệ trực tiếp để được tư vấn</p>
                    <div className="flex justify-center gap-6">
                      <a href="tel:0949263768" className="text-stone-900 hover:text-gold transition-colors">
                        <Phone size={20} />
                      </a>
                      <a href="mailto:info@blueocean.com" className="text-stone-900 hover:text-gold transition-colors">
                        <Mail size={20} />
                      </a>
                      <a href="#" className="text-stone-900 hover:text-gold transition-colors">
                        <MapPin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-8 bg-stone-900 text-white text-center">
                  <h3 className="text-xl font-serif mb-4">Ưu Đãi Đặc Biệt</h3>
                  <p className="text-stone-400 text-sm mb-6">Giảm ngay 15% cho khách hàng đặt phòng trực tiếp qua website.</p>
                  <div className="text-gold font-bold text-lg uppercase tracking-widest">CODE: BLUE2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Gợi Ý</span>
            <h2 className="text-4xl font-serif text-stone-900">Các Loại Phòng Khác</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherRooms.map((r) => (
              <Link key={r.id} to={`/rooms/${r.id}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src={r.image} 
                    alt={r.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 text-stone-900 font-serif text-sm">
                    Từ {r.price} VNĐ
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-2 group-hover:text-gold transition-colors">{r.name}</h3>
                <div className="flex items-center gap-4 text-stone-400 text-[10px] uppercase tracking-widest font-bold">
                  <span>{r.size}</span>
                  <span>•</span>
                  <span>{r.guests}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
