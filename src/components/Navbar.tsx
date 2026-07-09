/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ShoppingBag, Heart, Cookie, HelpCircle, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  likedCount: number;
}

export default function Navbar({ activeSection, setActiveSection, likedCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Cookie },
    { id: 'catalog', label: 'Katalog Rasa', icon: ShoppingBag },
    { id: 'about', label: 'Tentang & Kontak', icon: PhoneCall },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white backdrop-blur-md border-b-4 border-brand-orange shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 bg-white border border-orange-100 flex items-center justify-center">
              <img
                src="/src/assets/images/snackly_new_logo_1782877194521.jpg"
                alt="Snackly Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl sm:text-2xl text-[#2D3436] tracking-tight">
                SNACK<span className="text-brand-orange bg-orange-50 px-1.5 py-0.5 rounded ml-0.5">LY</span>
              </span>
              <p className="text-[10px] text-neutral-400 font-mono tracking-wider -mt-1 hidden sm:block">GOURMET INDONESIAN SNACK</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-sm'
                      : 'text-neutral-600 hover:bg-orange-50 hover:text-brand-orange'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Interactions (Likes & Order CTA) */}
          <div className="hidden sm:flex items-center space-x-3">
            <button className="relative p-2 text-neutral-600 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all duration-200 group">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {likedCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-rose-500 rounded-full">
                  {likedCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('catalog')}
              className="bg-brand-teal text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full hover:bg-brand-teal-dark transition-all duration-300 shadow-md transform active:scale-95"
            >
              Order Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button className="relative p-2 text-neutral-600 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all duration-200">
              <Heart className="w-5 h-5" />
              {likedCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-rose-500 rounded-full">
                  {likedCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg focus:outline-none transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b-2 border-brand-orange px-4 pt-2 pb-6 space-y-2 shadow-inner"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-left text-base font-bold transition-all ${
                  isActive
                    ? 'bg-brand-orange text-white'
                    : 'text-neutral-700 hover:bg-orange-50 hover:text-brand-orange'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-mono">Usaha Snackly Indonesia</span>
            <button
              onClick={() => handleNavClick('catalog')}
              className="bg-brand-teal text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-brand-teal-dark w-2/3 text-center transition-all shadow-md"
            >
              Order Sekarang
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
