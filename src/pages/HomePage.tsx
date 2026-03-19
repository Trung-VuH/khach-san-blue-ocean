import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Rooms } from '../components/Rooms';
import { Amenities } from '../components/Amenities';
import { Testimonials } from '../components/Testimonials';
import { Blog } from '../components/Blog';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingContact } from '../components/FloatingContact';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};
