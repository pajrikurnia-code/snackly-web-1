/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';
import { Heart, ShieldCheck, Flame, Layers, Inbox, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  likedProductIds: string[];
  onToggleLike: (productId: string) => void;
}

export default function ProductGrid({ products, onSelectProduct, likedProductIds, onToggleLike }: ProductGridProps) {
  
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-orange-200 max-w-lg mx-auto px-4 mt-8">
        <Inbox className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
        <h3 className="font-display text-lg font-black text-[#2D3436]">Rasa Tidak Ditemukan</h3>
        <p className="text-sm text-neutral-500 mt-1">
          Maaf, tidak ada varian cemilan Snackly yang cocok dengan kriteria filter pencarian Anda saat ini.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full text-xs font-bold shadow-md transition-all"
        >
          Muat Ulang Katalog
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => {
        const isLiked = likedProductIds.includes(product.id);
        
        return (
          <motion.div
            key={product.id}
            id={`product-card-${product.id}`}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden border-2 border-orange-100 shadow-sm hover:shadow-xl hover:border-brand-orange transition-all duration-300 flex flex-col h-full"
          >
            {/* Image Wrapper */}
            <div className="relative pt-[70%] bg-orange-50/30 overflow-hidden">
              {/* Product Badge */}
              <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1">
                <span className="px-3 py-1 rounded-lg text-[10px] font-black bg-brand-teal text-white backdrop-blur-sm tracking-wider uppercase">
                  {product.category}
                </span>
                {product.isFeatured && (
                  <span className="inline-flex items-center space-x-0.5 px-3 py-1 rounded-lg text-[10px] font-extrabold bg-brand-yellow text-white shadow-sm uppercase">
                    <Flame className="w-3 h-3 fill-white" />
                    <span>Terlaris</span>
                  </span>
                )}
              </div>

              {/* Like Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleLike(product.id);
                }}
                className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
                  isLiked
                    ? 'bg-rose-500 text-white scale-110 shadow-sm'
                    : 'bg-white/90 text-neutral-600 hover:bg-white hover:text-rose-500 shadow-sm'
                }`}
                title={isLiked ? 'Menyukai' : 'Sukai Rasa Ini'}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>

              {/* Product Image */}
              <img
                src={product.images[0]}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Body */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                {/* Titles */}
                <div className="border-b-2 border-orange-50 pb-3 mb-3">
                  <h3 className="font-display text-xl font-black text-[#2D3436] tracking-tight group-hover:text-brand-orange transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-extrabold italic mt-0.5">
                    {product.localName}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-neutral-400 font-black uppercase tracking-wider font-mono">Banderol</span>
                  <span className="text-xl font-black text-brand-orange font-display">
                    {formatIDR(product.basePrice)} <span className="text-[10px] text-neutral-400 font-bold">/ pack</span>
                  </span>
                </div>

                {/* Specs Specifications */}
                <div className="bg-orange-50/40 rounded-2xl p-4 space-y-2.5 border-2 border-transparent hover:border-orange-100/50 transition-all text-xs text-neutral-600 font-bold mb-4">
                  {/* Spec 1: Varian Rasa Count */}
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 flex items-center space-x-1.5">
                      <Layers className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Jumlah Varian Rasa</span>
                    </span>
                    <span className="font-extrabold text-[#2D3436]">{product.variants.length} Varian</span>
                  </div>

                  {/* Spec 2: Stock status */}
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Ketersediaan</span>
                    </span>
                    <span className={`font-black px-2 py-0.5 rounded-lg text-[10px] ${
                      product.stock > 100 
                        ? 'bg-emerald-50 text-emerald-700' 
                        : 'bg-orange-100 text-brand-orange'
                    }`}>
                      Ready ({product.stock} Pcs)
                    </span>
                  </div>

                  {/* Spec 3: Package size */}
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 flex items-center space-x-1.5">
                      <Eye className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Kemasan Tersedia</span>
                    </span>
                    <span className="font-extrabold text-[#2D3436] truncate max-w-[130px]" title={product.packagingSizes.join(', ')}>
                      {product.packagingSizes[0].split(' ')[0]} - {product.packagingSizes[product.packagingSizes.length - 1].split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Brief description */}
                <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => onSelectProduct(product)}
                className="w-full bg-[#2D3436] text-white text-xs font-black py-3.5 px-4 rounded-xl hover:bg-brand-orange group-hover:bg-brand-orange transition-all duration-300 shadow-md flex items-center justify-center space-x-1.5 transform active:scale-95 cursor-pointer"
              >
                <span>Lihat Detail Varian</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
