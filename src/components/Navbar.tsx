import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
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
    { name: 'Home', href: '#' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Blog', href: '#blog' },
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
              RIVORA
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
              Book Now
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
              <h2 className="text-2xl font-serif">RIVORA</h2>
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
                  <span>+1 (234) 567-890</span>
                </div>
                <div className="flex items-center gap-3 text-stone-400">
                  <Mail size={18} />
                  <span>info@rivora.com</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram size={20} className="text-stone-400 hover:text-gold cursor-pointer" />
                <Facebook size={20} className="text-stone-400 hover:text-gold cursor-pointer" />
                <Twitter size={20} className="text-stone-400 hover:text-gold cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
