import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-serif tracking-tighter">RIVORA</h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              Experience the pinnacle of luxury and comfort at Rivora Hotel. 
              Our dedicated team is committed to providing an unforgettable 
              stay for every guest.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
              <Facebook size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
              <Twitter size={20} className="text-stone-400 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-gold transition-colors">Rooms & Suites</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-6 text-stone-400 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-gold shrink-0" />
                <span>123 Luxury Avenue, <br /> Downtown City, 10001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-gold shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-gold shrink-0" />
                <span>info@rivora.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-6">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-stone-800 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none"
              />
              <button className="bg-gold hover:bg-gold-dark text-white py-3 text-xs uppercase tracking-widest font-bold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2026 Rivora Luxury Hotel. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
