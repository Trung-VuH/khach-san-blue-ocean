import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

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
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang Chủ', href: '#' },
    { name: 'Phòng Nghỉ', href: '#rooms' },
    { name: 'Giới Thiệu', href: '#about' },
    { name: 'Tiện Nghi', href: '#amenities' },
    { name: 'Đánh Giá', href: '#reviews' },
    { name: 'Tin Tức', href: '#blog' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4',
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn("p-2 lg:hidden", isScrolled ? "text-stone-900" : "text-white")}
            >
              <Menu size={24} />
            </button>
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors',
                    isScrolled ? 'text-stone-800' : 'text-white'
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className={cn(
              "text-3xl md:text-4xl font-serif tracking-tighter transition-colors",
              isScrolled ? "text-stone-900" : "text-white"
            )}>
              BLUE OCEAN
            </h1>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors',
                    isScrolled ? 'text-stone-800' : 'text-white'
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button className={cn(
              "hidden md:block px-6 py-2 border text-xs uppercase tracking-widest transition-all duration-300",
              isScrolled 
                ? "border-gold text-gold hover:bg-gold hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-stone-900"
            )}>
              Đặt Phòng
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-stone-900 text-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-serif">BLUE OCEAN</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3 text-stone-400">
                  <Phone size={18} />
                  <span>0949263768</span>
                </div>
                <div className="flex items-center gap-3 text-stone-400">
                  <Mail size={18} />
                  <span>info@blueocean.com</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} className="text-stone-400 hover:text-gold cursor-pointer" />
                </a>
                <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer">
                  <MessengerIcon size={20} className="text-stone-400 hover:text-gold cursor-pointer" />
                </a>
                <a href="https://zalo.me/yourphone" target="_blank" rel="noopener noreferrer">
                  <ZaloIcon size={20} className="text-stone-400 hover:text-gold cursor-pointer" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} className="text-stone-400 hover:text-gold cursor-pointer" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
