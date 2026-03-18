import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-serif tracking-tighter">BLUE OCEAN</h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              Trải nghiệm đỉnh cao của sự sang trọng và thoải mái tại Blue Ocean Hotel. 
              Đội ngũ tận tâm của chúng tôi cam kết mang đến một kỳ nghỉ khó quên 
              cho mọi du khách.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
              <Facebook size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
              <Twitter size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Liên Kết Nhanh</h4>
            <ul className="flex flex-col gap-4 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Trang Chủ</a></li>
              <li><a href="#rooms" className="hover:text-gold transition-colors">Phòng & Suite</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#amenities" className="hover:text-gold transition-colors">Tiện Nghi</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Đánh Giá</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Liên Hệ</h4>
            <ul className="flex flex-col gap-6 text-stone-400 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-gold shrink-0" />
                <span>TTC World Dốc Lết, Đông Ninh Hòa, <br /> Ninh Hòa, Khánh Hòa</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-gold shrink-0" />
                <span>0949263768</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-gold shrink-0" />
                <span>info@blueocean.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Bản Tin</h4>
            <p className="text-stone-400 text-sm mb-6">
              Đăng ký nhận bản tin để nhận các ưu đãi và cập nhật độc quyền.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Địa chỉ Email của bạn" 
                className="bg-stone-800 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none"
              />
              <button className="bg-gold hover:bg-gold-dark text-white py-3 text-xs uppercase tracking-widest font-bold transition-colors">
                Đăng Ký
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2026 Blue Ocean Hotel. Bảo lưu mọi quyền.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều Khoản & Điều Kiện</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
