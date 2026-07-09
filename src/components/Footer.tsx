/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cookie, ShieldAlert, Heart, Sparkles, MessageCircleMore } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-neutral-800/80">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4 col-span-1 md:col-span-1.5">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-neutral-800">
                <img
                  src="/assets/images/snackly_new_logo_1782877194521.jpg"
                  alt="Snackly Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                SNACKLY<span className="text-brand-orange font-mono">.ID</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              Mempelopori camilan keripik renyah dan molen pisang lumer bermutu higienis tinggi asli resep warisan nusantara. Kami menjamin keaslian cita rasa rempah lokal 100% aman dikonsumsi.
            </p>
            <div className="flex space-x-3.5">
              {['Instagram', 'TikTok', 'YouTube'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs text-neutral-500 hover:text-brand-orange font-bold transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links Columns */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono mb-3">Produk Unggulan</h4>
            <ul className="space-y-2 text-xs">
              {['Garlic Tempeh Crisps', 'Spicy Cassava Glaze', 'Golden Salted Egg Potato', 'Crispy Basreng'].map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-brand-orange transition-colors">
                    🍿 {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Secure Food Badges */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono mb-3">Sertifikasi & Kemananaan</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-brand-yellow/10 text-brand-yellow text-[10px] font-mono font-bold border border-brand-yellow/20">
                  HALAL ID
                </span>
                <span className="text-xs text-neutral-350 font-semibold">Resmi Terdaftar MUI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-brand-orange/10 text-brand-orange text-[10px] font-mono font-bold border border-brand-orange/20">
                  P-IRT NO
                </span>
                <span className="text-xs text-neutral-350 font-semibold">Dinas Kesehatan RI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-brand-teal/10 text-brand-teal text-[10px] font-mono font-bold border border-brand-teal/20">
                  GMP COMPLY
                </span>
                <span className="text-xs text-neutral-350 font-semibold font-sans">Higienitas Kelas Utama</span>
              </div>
            </div>
          </div>

          {/* Contact help line */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono mb-3">Customer Service</h4>
            <p className="text-xs leading-relaxed max-w-xs mb-3">
              Butuh panduan pengiriman cepat luar kota atau bantuan pendaftaran distributor? Hubungi CS kami:
            </p>
            <a
              href="https://wa.me/6281224212891"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-extrabold transition-all text-center shadow-lg"
            >
              <MessageCircleMore className="w-4 h-4" />
              <span>WhatsApp Admin (Tanya CS)</span>
            </a>
          </div>

        </div>

        {/* Closing details & credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 space-y-3 sm:space-y-0">
          <p>© 2026 PT Snackly Selera Indonesia. Seluruh hak cipta terlindungi.</p>
          <div className="flex items-center space-x-1">
            <span>Dibuat dengan penuh</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>untuk Penggemar Cemilan Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
