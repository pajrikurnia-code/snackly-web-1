/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Product, FlavorVariant } from '../types';
import { X, Shield, Star, RefreshCw, MessageSquareCode, Users, Layers, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  likedProductIds: string[];
  onToggleLike: (productId: string) => void;
}

export default function ProductDetailModal({ product, onClose, likedProductIds, onToggleLike }: ProductDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<string>(product.variants[0].name);
  const [selectedSize, setSelectedSize] = useState<string>(product.packagingSizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'kandungan' | 'gizi' | 'ulasan'>('kandungan');

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  const isLiked = likedProductIds.includes(product.id);

  // Generate WhatsApp message and redirect link
  const getWhatsAppLink = () => {
    const phone = '6281224212891'; // Representative WhatsApp Business Phone
    const currentPrice = product.basePrice * quantity;
    const message = `Halo Kak Mimin Snackly! 👋

Saya mau pesan cemilan premium Snackly berikut dong kak:

🍿 *Produk:* ${product.name} (${product.localName})
✨ *Varian Rasa:* ${selectedVariant}
📦 *Kemasan:* ${selectedSize}
🔢 *Jumlah:* ${quantity} pack
🏷️ *Estimasi Subtotal:* ${formatIDR(currentPrice)}

Mohon info ongkir dan petunjuk transaksi selanjutnya ya kak. Terima kasih! 😊`;

    const encodedText = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
  };

  const selectedVariantObj = product.variants.find(v => v.name === selectedVariant) || product.variants[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      {/* Container Slide Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-orange-100 flex flex-col md:flex-row max-h-[92vh]"
      >
        {/* Close Button Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/85 text-white hover:bg-brand-orange hover:scale-105 transition-all outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Column 1: Gallery & Highlights (Left Side) */}
        <div className="w-full md:w-1/2 p-5 sm:p-7 overflow-y-auto border-r-2 border-orange-100 flex flex-col justify-between">
          <div>
            {/* Active Display Image */}
            <div className="relative pt-[70%] rounded-2xl overflow-hidden bg-orange-50/20 border-2 border-orange-100/30">
              <img
                src={product.images[activeImageIdx]}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-mono tracking-wider">
                {activeImageIdx + 1} / {product.images.length}
              </span>
            </div>

            {/* Thumbnails Gallery */}
            <div className="mt-3 flex items-center space-x-2.5">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-16 sm:w-20 pt-[14%] sm:pt-[16%] rounded-xl overflow-hidden border-2 transition-all ${
                    idx === activeImageIdx ? 'border-brand-orange scale-105 shadow-sm' : 'border-transparent hover:border-orange-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Brand Variant Showcase Info */}
            <div className="mt-6 bg-orange-50/40 rounded-2xl p-4 border-2 border-orange-105/10">
              <span className="text-[10px] uppercase font-black text-brand-orange tracking-wider font-mono">Pratinjau Varian: {selectedVariantObj.tag || 'Terpilih'}</span>
              <p className="font-display font-black text-sm text-[#2D3436] mt-1">{selectedVariantObj.name}</p>
              <p className="text-xs text-neutral-600 leading-relaxed mt-1 font-semibold">{selectedVariantObj.description}</p>
            </div>
          </div>

          {/* Tab Information Box */}
          <div className="mt-6 border-t-2 border-orange-100/40 pt-5">
            {/* Tab Headers */}
            <div className="flex border-b border-orange-100/30 pb-2 mb-3 space-x-4">
              {[
                { id: 'kandungan', label: 'Bahan Olahan' },
                { id: 'gizi', label: 'Nutrisi' },
                { id: 'ulasan', label: `Ulasan (${product.reviews.length})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`text-xs font-black pb-2 transition-all border-b-2 -mb-[10px] ${
                    activeTab === tab.id
                      ? 'border-brand-orange text-brand-orange'
                      : 'border-transparent text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[110px] max-h-[140px] overflow-y-auto pr-1">
              {activeTab === 'kandungan' && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-orange-50/70 text-neutral-700 text-xs font-bold"
                    >
                      🌱 {ing}
                    </span>
                  ))}
                </div>
              )}

              {activeTab === 'gizi' && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {product.nutritionHighlights.map((nut, i) => (
                    <div key={i} className="bg-orange-50/30 p-2.5 rounded-xl border border-orange-100/40">
                      <span className="block text-[10px] font-black text-neutral-400 uppercase tracking-tight">{nut.label}</span>
                      <span className="text-xs font-black text-[#2D3436] mt-0.5">{nut.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'ulasan' && (
                <div className="space-y-3 pt-1">
                  {product.reviews.map((rev, i) => (
                    <div key={i} className="border-b border-dashed border-orange-100 pb-2.5 last:border-0 font-bold">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-black text-[#2D3436]">{rev.name}</span>
                        <span className="text-[10px] text-neutral-400 font-mono">{rev.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`w-3 h-3 ${starIdx < Math.floor(rev.rating) ? 'text-brand-yellow fill-current' : 'text-neutral-200'}`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed font-semibold">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Column 2: Order Panel & Specifications (Right Side) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-orange-50/10 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Header Title Title */}
            <div className="border-b-2 border-orange-50 pb-4 mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <span className="px-3 py-1 rounded-lg text-[10px] bg-brand-orange text-white font-black tracking-wide uppercase">
                  {product.category}
                </span>
                <span className="flex items-center space-x-0.5 text-xs text-brand-orange font-black bg-orange-50 px-2.5 py-0.5 rounded-xl">
                  <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                  <span>{product.rating}</span>
                  <span className="text-neutral-400 font-bold font-mono">({product.reviewsCount})</span>
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#2D3436] tracking-tight">
                {product.name}
              </h2>
              <p className="text-sm font-extrabold text-neutral-500 italic mt-0.5">
                {product.localName}
              </p>
            </div>

            {/* Price Description Info */}
            <div className="bg-white p-4 rounded-3xl border-2 border-orange-100 mb-5 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-neutral-400 font-mono font-bold uppercase tracking-wide">Banderol</span>
                <p className="text-xl font-black text-brand-orange font-display">
                  {formatIDR(product.basePrice)} <span className="text-xs text-neutral-400 font-normal">/ pack</span>
                </p>
              </div>
              <button
                onClick={() => onToggleLike(product.id)}
                className={`p-2.5 rounded-xl border-2 transition-all ${
                  isLiked
                    ? 'bg-rose-50 border-rose-200 text-rose-500'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-400 hover:text-rose-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Product description */}
            <p className="text-xs text-neutral-600 leading-relaxed mb-5 font-semibold">
              {product.longDescription}
            </p>

            {/* Interactive Checkout Config Config Form */}
            <div className="space-y-4 border-t-2 border-dashed border-orange-100 pt-5">
              <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest font-mono mb-2 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange fill-current" />
                <span>Konfigurasi Pesanan Anda</span>
              </h4>

              {/* 1. Select Variant Rasa */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">Varian Rasa Utama</label>
                <select
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border-2 border-transparent focus:border-brand-orange rounded-xl text-xs font-bold text-neutral-800 outline-none cursor-pointer"
                >
                  {product.variants.map((v) => (
                    <option key={v.name} value={v.name}>
                      ✨ {v.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Select Packaging Size */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5">Ukuran Kemasan Premium</label>
                <div className="grid grid-cols-2 gap-2">
                  {product.packagingSizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2.5 rounded-xl text-[10px] font-black border-2 transition-all text-left flex flex-col justify-between ${
                          isSelected
                            ? 'border-brand-orange bg-orange-50 text-brand-orange'
                            : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <span className="truncate">{size.split(' ')[0]}</span>
                        <span className="text-[9px] text-neutral-400 font-mono mt-0.5 truncate">{size.split('(')[1]?.replace(')', '') || 'Pouch'}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Quantity counter */}
              <div className="flex items-center justify-between bg-white px-4 py-3 border-2 border-orange-50 rounded-3xl shadow-sm">
                <div>
                  <label className="block text-xs font-extrabold text-neutral-800">Kuantitas Pack</label>
                  <p className="text-[10px] text-neutral-400 font-black">Stok Ready: {product.stock} pcs</p>
                </div>
                <div className="flex items-center space-x-3.5">
                  <button
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(quantity - 1)}
                    className="w-8 h-8 rounded-full bg-orange-50 hover:bg-orange-100 disabled:opacity-50 font-black transition-all flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <span className="text-sm font-black font-mono text-neutral-900 w-5 text-center">{quantity}</span>
                  <button
                    disabled={quantity >= product.stock}
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-orange-50 hover:bg-orange-100 font-black transition-all flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer of panel: Subtotal and WhatsApp closing button */}
          <div className="mt-8 pt-5 border-t-2 border-orange-50 flex flex-col justify-end">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black text-neutral-500 uppercase font-mono">Subtotal Estimasi:</span>
              <span className="text-2xl font-black text-brand-orange font-display">
                {formatIDR(product.basePrice * quantity)}
              </span>
            </div>

            {/* Closing WhatsApp Action Button Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-4 bg-brand-teal hover:bg-brand-teal-dark text-white rounded-full text-sm font-black shadow-lg transition-all transform active:scale-95 flex items-center justify-center space-x-2.5 text-center cursor-pointer"
            >
              <MessageSquareCode className="w-5 h-5 fill-white" />
              <span>Pesan Instan via WhatsApp (Closing)</span>
            </a>
            
            <p className="text-[10px] text-center text-neutral-450 mt-2 font-bold">
              *Tautan redirect ke chat WhatsApp Snackly dengan teks pesanan terisi otomatis.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
