import React from 'react';
import { Phone } from 'lucide-react';

const ZaloIcon = ({ size = 24, className = "" }) => (
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

const MessengerIcon = ({ size = 24, className = "" }) => (
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

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Messenger */}
      <a 
        href="https://m.me/yourpage" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white text-[#0084FF] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-gray-100"
        title="Chat Messenger"
      >
        <MessengerIcon size={28} />
      </a>

      {/* Zalo */}
      <a 
        href="https://zalo.me/0949263768" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0068FF] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        title="Chat Zalo"
      >
        <ZaloIcon size={28} />
      </a>

      {/* Phone */}
      <a 
        href="tel:0949263768" 
        className="w-14 h-14 bg-gold text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce"
        title="Gọi điện ngay"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
};
