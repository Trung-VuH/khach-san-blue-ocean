import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ZaloIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M21.231 13.725c.516-1.077.769-2.27.769-3.525C22 5.828 17.523 2 12 2S2 5.828 2 10.2c0 4.372 4.477 8.2 10 8.2.516 0 1.015-.035 1.5-.103l3.5 2.1c.316.19.715.063.874-.285.06-.13.06-.28.001-.41l-.775-1.7c2.45-1.125 4.131-3.05 4.131-5.277zM12 16.4c-4.418 0-8-3.044-8-6.8s3.582-6.8 8-6.8 8 3.044 8 6.8c0 1.88-1.791 3.58-4 4.8-.18.1-.3.28-.3.48l.4 1.1-1.6-1c-.16-.1-.36-.14-.5-.1-.64.14-1.32.22-2 .22z"/>
    <path d="M12.5 7.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5h1.2l-1.7 2.2c-.1.1-.1.3 0 .4.1.1.2.1.3.1h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1.2l1.7-2.2c.1-.1.1-.3 0-.4-.1-.1-.2-.1-.3-.1zM15.5 7.5h-1c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5zm-.5 3h-.5v-2h.5v2zM8.5 7.5h-1c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5zm-.5 3h-.5v-2h.5v2z"/>
  </svg>
);

const MessengerIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.914 1.45 5.513 3.71 7.248V22l3.322-1.823c.92.255 1.898.394 2.968.394 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.07 12.44l-2.58-2.75-5.04 2.75 5.54-5.89 2.58 2.75 5.04-2.75-5.54 5.89z"/>
  </svg>
);

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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook Fanpage">
                <Facebook size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
              </a>
              <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" title="Messenger">
                <MessengerIcon size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
              </a>
              <a href="https://zalo.me/yourphone" target="_blank" rel="noopener noreferrer" title="Zalo">
                <ZaloIcon size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <Instagram size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
              </a>
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
