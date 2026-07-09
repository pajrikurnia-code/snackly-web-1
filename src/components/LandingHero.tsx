/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowDown, Sparkles, AlertCircle, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from '../assets/images/snackly_new_logo_1782877194521.jpg';

interface FilterState {
  searchQuery: string;
  category: string;
  maxPrice: number;
  packagingSize: string;
}

interface LandingHeroProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  categories: string[];
  packagingSizes: string[];
}

export default function LandingHero({ filters, setFilters, categories, packagingSizes }: LandingHeroProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchQuery: e.target.value });
  };

  const handleCategorySelect = (category: string) => {
    setFilters({ ...filters, category: category === filters.category ? '' : category });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, maxPrice: Number(e.target.value) });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, packagingSize: e.target.value });
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      category: '',
      maxPrice: 25000,
      packagingSize: '',
    });
  };

  const hasActiveFilters = filters.searchQuery || filters.category || filters.maxPrice < 25000 || filters.packagingSize;

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-brand-bg pt-10 sm:pt-16 pb-12">
      {/* Decorative colored glow spheres */}
      <div className="absolute top-1/4 right-0 -z-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-brand-orange/10 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Brand Logo Display */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[2rem] overflow-hidden shadow-md border-2 border-orange-100 bg-white p-1.5 transform hover:scale-105 transition-transform duration-300">
            <img
              src={logoImg}
              alt="Snackly Brand Logo"
              className="w-full h-full object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Banner Promo Badge */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <span className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full text-xs font-extrabold bg-brand-orange text-white border-2 border-transparent shadow-lg animate-pulse">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Kriuk Mewah Teman Setiap Suasana</span>
          </span>
        </div>

        {/* Master Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2D3436] tracking-tight leading-none">
            Camilan Tradisional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange">
              Sentuhan Modern Mewah
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Menghadirkan kelezatan legendaris resep Nusantara dengan keprimaan kualitas bahan ekologi. Dari tempe renyah hingga karamel pisang lumer — siap diantar segar ke rumah Anda!
          </p>
        </div>

        {/* Interactive Advanced Search/Filter Dashboard */}
        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-3xl border-2 border-orange-100 shadow-xl shadow-orange-100/30">
            {/* Search Input Bar */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={filters.searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari Rasa Favoritmu... (contoh: Tempeh, Balado, Telur Asin)"
                className="w-full pl-11 pr-24 py-3 sm:py-3.5 bg-orange-50 border-2 border-transparent focus:border-brand-orange focus:bg-white focus:outline-none rounded-xl text-neutral-850 text-sm font-semibold transition-all"
              />
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={`absolute right-3 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition-all ${
                  showAdvanced 
                    ? 'border-brand-orange bg-orange-50 text-brand-orange' 
                    : 'border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Filter</span>
              </button>
            </div>

            {/* Quick Categories Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-neutral-400 mr-1 uppercase tracking-wider font-mono">Pilihan Menu:</span>
              {categories.map((cat) => {
                const isSelected = filters.category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                      isSelected
                        ? 'bg-brand-orange text-white shadow-md transform scale-105'
                        : 'bg-orange-50 text-neutral-600 hover:bg-orange-100/60 hover:text-[#2D3436]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Advanced Filters Drawer */}
            {showAdvanced && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 pt-4 border-t-2 border-dashed border-orange-100 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* Max Price Filter */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold text-[#2D3436] uppercase tracking-wide opacity-70">Harga Maksimal</label>
                    <span className="text-xs font-black text-brand-orange">Rp {filters.maxPrice.toLocaleString('id-ID')}</span>
                  </div>
                  <input
                    type="range"
                    min="12000"
                    max="25000"
                    step="1000"
                    value={filters.maxPrice}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                    <span>Rp 12k</span>
                    <span>Rp 18k</span>
                    <span>Rp 25k</span>
                  </div>
                </div>

                {/* Packaging Size Selector */}
                <div>
                  <label className="block text-xs font-bold text-[#2D3436] uppercase tracking-wide mb-1.5 opacity-70">
                    Ukuran Kemasan
                  </label>
                  <select
                    value={filters.packagingSize}
                    onChange={handleSizeChange}
                    className="w-full px-3 py-2 bg-orange-50 border-2 border-transparent focus:border-brand-orange rounded-xl text-xs font-bold text-neutral-750 outline-none"
                  >
                    <option value="">Semua Ukuran</option>
                    {packagingSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}

            {/* Reset Filters Notification */}
            {hasActiveFilters && (
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500 font-bold">Bilah pencarian memfilter daftar produk di bawah.</span>
                <button
                  onClick={resetFilters}
                  className="text-brand-orange hover:text-brand-orange-dark font-black underline hover:no-underline transition-all"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Brand Value Metrics Row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-dashed border-orange-100 pt-8">
          {[
            { value: '100%', label: 'Alami & Higienis' },
            { value: 'No MSG', label: 'Bahan Sintetis 0%' },
            { value: '10K+', label: 'Pelanggan Puas' },
            { value: 'Premium', label: 'Kemasan Zipper Lock' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-3xl bg-white border border-orange-100/50 hover:bg-orange-50/15 hover:shadow-sm transition-all duration-300">
              <span className="block font-display text-xl sm:text-2xl font-black text-brand-orange">{stat.value}</span>
              <span className="text-xs text-neutral-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToCatalog}
            className="group flex flex-col items-center space-y-1 text-xs font-bold text-neutral-400 hover:text-brand-orange transition-colors"
          >
            <span>Eksplorasi Varian Rasa</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
