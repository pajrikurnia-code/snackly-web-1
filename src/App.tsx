/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import { SNACKLY_PRODUCTS } from './data';
import { Product, LeadForm } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShoppingBag, Send, Phone, ArrowUpRight, Flame, Heart, Store } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [likedProductIds, setLikedProductIds] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  // Filter dashboard state
  const [filters, setFilters] = useState({
    searchQuery: '',
    category: '',
    maxPrice: 25000,
    packagingSize: '',
  });

  const categories = ['Gurih', 'Pedas', 'Manis', 'Manis & Gurih'];
  const packagingSizes = ['Medium', 'Zipper', 'Family'];

  // Toggle liking a product
  const handleToggleLike = (id: string) => {
    setLikedProductIds((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id]
    );
  };

  // Submission of prospect leads form
  const handleLeadSubmit = (form: LeadForm) => {
    console.log('Lead submitted successfully:', form);
    
    // Auto add a customizable notification/state change
    setFormSuccess(true);
    
    // Autoscroll back to success panel if needed
    const element = document.getElementById('leads-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Perform multi-dimensional filter matching
  const filteredProducts = SNACKLY_PRODUCTS.filter((product) => {
    // 1. Text Search Query Match
    const searchLower = filters.searchQuery.toLowerCase();
    const matchesSearch =
      !filters.searchQuery ||
      product.name.toLowerCase().includes(searchLower) ||
      product.localName.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower);

    // 2. Category Match
    const matchesCategory = !filters.category || product.category === filters.category;

    // 3. Price Limit Match
    const matchesPrice = product.basePrice <= filters.maxPrice;

    // 4. Packaging size substring match
    const matchesSize =
      !filters.packagingSize ||
      product.packagingSizes.some((size) =>
        size.toLowerCase().includes(filters.packagingSize.toLowerCase())
      );

    return matchesSearch && matchesCategory && matchesPrice && matchesSize;
  });

  // Safe callback of selected details
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-neutral-800 font-sans flex flex-col justify-between">
      <div>
        {/* Navigation Bar Header component */}
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          likedCount={likedProductIds.length}
        />

        {/* Section 1: Beranda & Hero Slider */}
        <div id="home">
          <LandingHero
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            packagingSizes={packagingSizes}
          />
        </div>

        {/* Section 2: Catalog Grid listing */}
        <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full text-[10px] font-black bg-brand-orange text-white mb-2 shadow-sm">
                <Store className="w-3.5 h-3.5 text-white" />
                <span>Katalog Penuh Kerenyahan</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-[#2D3436] tracking-tight leading-none">
                Eksplorasi Varian Rasa Snackly
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-semibold">
                Pilihlah cita rasa premium yang memanjakan harimu. Klik detail untuk mengatur jumlah pesanan Anda.
              </p>
            </div>
            {filteredProducts.length > 0 && (
              <span className="text-xs font-mono font-bold bg-white px-3 py-1.5 rounded-lg border-2 border-orange-100 text-neutral-400 mt-2 md:mt-0 shadow-sm">
                MENAMPILKAN: <span className="text-brand-orange font-black">{filteredProducts.length} DARI {SNACKLY_PRODUCTS.length} PRODUK</span>
              </span>
            )}
          </div>

          <ProductGrid
            products={filteredProducts}
            onSelectProduct={handleSelectProduct}
            likedProductIds={likedProductIds}
            onToggleLike={handleToggleLike}
          />
        </section>

        {/* Section 3: About Us & Contact Inquiry prospect form */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t-2 border-dashed border-orange-100">
          <AboutContact
            productsList={SNACKLY_PRODUCTS.map((p) => ({ name: p.name, localName: p.localName }))}
            onSubmitForm={handleLeadSubmit}
            formSuccess={formSuccess}
            setFormSuccess={setFormSuccess}
          />
        </section>
      </div>

      {/* Dynamic Overlay Detail Drawer Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            likedProductIds={likedProductIds}
            onToggleLike={handleToggleLike}
          />
        )}
      </AnimatePresence>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
