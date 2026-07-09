/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, CheckCircle, Navigation, Send, Award, Heart, HelpCircle, Sparkles } from 'lucide-react';
import { SNACK_TIPS_FAQ, SNACKLY_OFFICES } from '../data';
import { LeadForm } from '../types';
import { motion } from 'motion/react';

interface AboutContactProps {
  productsList: { name: string; localName: string }[];
  onSubmitForm: (form: LeadForm) => void;
  formSuccess: boolean;
  setFormSuccess: (val: boolean) => void;
}

export default function AboutContact({ productsList, onSubmitForm, formSuccess, setFormSuccess }: AboutContactProps) {
  const [selectedOfficeIdx, setSelectedOfficeIdx] = useState(0);
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(0);
  
  // Lead form state
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    phone: '',
    product: productsList[0]?.name || 'Garlic Tempeh Crisps',
    variant: 'Original',
    size: 'Medium Pack',
    quantity: 1,
    notes: ''
  });

  const activeOffice = SNACKLY_OFFICES[selectedOfficeIdx];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'quantity' ? Math.max(1, Number(value)) : value
    });
  };

  const getLeadWhatsAppLink = () => {
    const csPhone = '6281224212891';
    const message = `Halo Kak Mimin Snackly! 👋

Saya mau mengirimkan Formulir Prospek Kemitraan / Grosir:

👤 *Nama:* ${formData.name}
📞 *No. WhatsApp:* ${formData.phone}
🍿 *Produk Terkait:* ${formData.product}
📦 *Ukuran Kemasan:* ${formData.size}
🔢 *Estimasi Kuantitas:* ${formData.quantity} Pack
📝 *Catatan/Pertanyaan:* ${formData.notes || '-'}

Mohon info lebih lanjut ya kak. Terima kasih!`;

    return `https://api.whatsapp.com/send?phone=${csPhone}&text=${encodeURIComponent(message)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Mohon lengkapi Nama dan Nomor WhatsApp Anda.');
      return;
    }
    
    // Auto redirect to WhatsApp CS API
    const waUrl = getLeadWhatsAppLink();
    window.open(waUrl, '_blank');
    
    onSubmitForm(formData);
  };

  // Google Maps Iframe URLs corresponding to the selected office
  const getMapsIframeUrl = (idx: number) => {
    switch (idx) {
      case 0: // Jakarta Selatan - Kemang Campus
        return "https://maps.google.com/maps?q=Cakrawala%20University%20%E2%80%93%20Kemang%20Campus%20Jl.%20Kemang%20Timur%20No.1,%20RT.14/RW.8,%20Pejaten%20Barat,%20Ps.%20Minggu,%20Kota%20Jakarta%20Selatan&t=&z=16&ie=UTF8&iwloc=&output=embed";
      case 1: // Bandung Dago
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.8341620353!2d107.61803735!3d-6.8906233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6573c09191d%3A0x334bfebef97cbb19!2sDago%2C%20Coblong%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000001";
      case 2: // Surabaya Raya Darmo
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.407786445353!2d112.7371587!3d-7.285934449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd0f3f61e8083bf%3A0x1ef979dd58be0e5f!2sJl.%20Raya%20Darmo%2C%20Surabaya%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1700000000002";
      default:
        return "https://maps.google.com/maps?q=Cakrawala%20University%20%E2%80%93%20Kemang%20Campus%20Jl.%20Kemang%20Timur%20No.1,%20RT.14/RW.8,%20Pejaten%20Barat,%20Ps.%20Minggu,%20Kota%20Jakarta%20Selatan&t=&z=16&ie=UTF8&iwloc=&output=embed";
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. About Us: Company Profile (Profil Perusahaan) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-[2.5rem] p-6 sm:p-8 border-2 border-orange-100 shadow-sm">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-orange-50 text-brand-orange border border-orange-100">
            <Award className="w-3.5 h-3.5" />
            <span>Kisah Rasa & Mutu Snackly</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-black text-[#2D3436] tracking-tight leading-none">
            Eksplorasi Kelezatan Sehat <br />
            Kreativitas <span className="text-brand-orange">Camilan Negeri</span>
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Didirikan pada awal 2026, <strong className="text-brand-orange">Snackly</strong> terlahir dari rasa cinta kami terhadap jajanan tradisional pasar Indonesia yang begitu kaya akan keunikan rasa. Namun, kami sering melihat jajanan lezat ini diproduksi dengan penggunaan pengawet tebal dan bumbu buatan yang berlebihan.
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Oleh sebab itu, kami berkomitmen merombak kemasan rasa jajanan khas daerah menjadi lebih bergengsi dengan standar kehigienisan dapur modern (GMP), tanpa MSG sintetis kimiawi, dan bersumber langsung dari hasil panen petani singkong dan kedelai binaan daerah Jawa Barat dan Jawa Timur.
          </p>
          
          {/* Key Advantages list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {[
              { title: '100% Produk Halal Kaliber', desc: 'Diawetkan alami tanpa campuran kimiawi' },
              { title: 'Bina Tani Berkelanjutan', desc: 'Mensejahterakan produsen singkong daerah' },
              { title: 'Minim Minyak & Sangat Kriuk', desc: 'Proses pengeringan double-spinner mutakhir' },
              { title: 'Topping Saus Autentik', desc: 'Resep karamel gula aren cair legendaris' },
            ].map((adv, idx) => (
              <div key={idx} className="flex space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-neutral-800 leading-tight">{adv.title}</h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5 leading-snug">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic graphics card */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative pt-[80%] rounded-[2rem] overflow-hidden shadow-lg border-2 border-brand-orange/20">
            <img
              src="/assets/images/product_makaroni_pedas_1782876620313.jpg"
              alt="Makaroni Pedas Snackly"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/70 via-transparent to-transparent flex items-end p-5">
              <div className="text-white space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-yellow font-mono">Cemilan Premium Kami</span>
                <p className="text-base font-bold font-display">Makaroni Pedas Setan Daun Jeruk</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-brand-yellow text-white p-4 rounded-xl shadow-md hidden sm:block">
            <p className="text-2xl font-black font-display text-center leading-none">100%</p>
            <p className="text-[9px] font-bold uppercase tracking-wider text-center mt-1 text-black">Nusantara Natural</p>
          </div>
        </div>
      </div>

      {/* 2. Store Profil Usaha & Office Locations (Peta Lokasi Google Maps) */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border-2 border-orange-100 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-orange-50 text-brand-orange border border-orange-100 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Peta Lokasi & Distribusi Outlet</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-[#2D3436] tracking-tight leading-none">
            Jaringan Kantor & Cabang Snackly
          </h3>
          <p className="text-xs text-neutral-500 mt-2">
            Pilihlah cabang terdekat Anda untuk mampir berbelanja langsung atau menghemat penyesuaian biaya kurir ekspedisi.
          </p>
        </div>

        {/* Office Switch Select Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 border-b-2 border-orange-50 pb-5 max-w-xl mx-auto">
          {SNACKLY_OFFICES.map((office, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOfficeIdx(idx)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                idx === selectedOfficeIdx
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'bg-orange-50 text-neutral-600 hover:bg-orange-15'
              }`}
            >
              📍 {office.city.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Map, Info & Contacts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Outlet details Card */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 bg-orange-50/15 p-5 sm:p-7 rounded-3xl border-2 border-orange-100/50">
            <div className="space-y-4 text-xs font-bold text-neutral-600">
              <h4 className="font-display font-black text-lg text-[#2D3436] border-b-2 border-orange-50 pb-2">
                {activeOffice.city}
              </h4>
              
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-neutral-800">Alamat Lengkap Usaha</p>
                  <p className="text-neutral-600 mt-1 leading-relaxed font-semibold">{activeOffice.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-neutral-800">Jam Operasional Layanan</p>
                  <p className="text-neutral-600 mt-0.5 leading-relaxed font-semibold">{activeOffice.hours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Phone className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-neutral-800">Saluran Telepon & WhatsApp</p>
                  <p className="text-neutral-600 mt-0.5 font-bold text-emerald-700">{activeOffice.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-neutral-800">Surat Elektronik (Email)</p>
                  <p className="text-neutral-600 mt-0.5 font-mono font-semibold">{activeOffice.email}</p>
                </div>
              </div>
            </div>

            {/* Direct Directions Integration Button Button */}
            <a
              href={activeOffice.gmapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full py-3.5 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl text-xs font-bold shadow-md transition-all text-center cursor-pointer"
            >
              <Navigation className="w-4 h-4 fill-white" />
              <span>Buka Petunjuk Google Maps</span>
            </a>
          </div>

          {/* Interactive Google Map embed component (Satisfies Key Feature 3 Maps integration) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border-2 border-orange-100 min-h-[300px] h-full relative bg-neutral-100 shadow-sm flex flex-col justify-between">
            <iframe
              title={`Maps ${activeOffice.city}`}
              src={getMapsIframeUrl(selectedOfficeIdx)}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* 3. Lead Prospect Form (Formulir Pertanyaan Prospek) */}
      <div id="leads-form-section" className="bg-gradient-to-tr from-brand-orange/5 to-brand-yellow/5 rounded-[2.5rem] p-6 sm:p-10 border-2 border-orange-100 shadow-sm">
        <div className="max-w-3xl mx-auto">
          {formSuccess ? (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-[2rem] p-8 border-2 border-orange-100 text-center space-y-4 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="font-display text-2xl font-black text-[#2D3436]">Pertanyaan Terkirim Sukses!</h4>
              <p className="text-sm text-neutral-500 max-w-md mx-auto">
                Terima kasih atas minat Anda! Kami telah menyiapkan rincian formulir kemitraan Anda untuk dikirimkan langsung ke CS kami di WhatsApp. Jika aplikasi/halaman WhatsApp tidak terbuka otomatis, silakan klik tombol di bawah ini:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
                <a
                  href={getLeadWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-brand-teal hover:bg-brand-teal-dark text-white rounded-full text-xs font-bold shadow-md transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Hubungi WhatsApp CS Sekarang</span>
                </a>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-xs font-bold shadow-sm transition-all"
                >
                  Kirim Pertanyaan Baru
                </button>
              </div>
            </motion.div>
          ) : (
            <div>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-[10px] font-black bg-brand-orange text-white mb-2 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>Kemitraan, Grosir, & Reseller</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#2D3436] tracking-tight leading-none">
                  Kirim Pertanyaan Hubungi Kami
                </h3>
                <p className="text-xs text-neutral-500 mt-2 font-semibold">
                  Tertarik menjadi Agen Grosir berdiskon tinggi atau butuh pesanan skala besar (Custom Catering/Gift Box)? Isi data Anda di bawah ini!
                </p>
              </div>

              {/* Form elements */}
              <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-5 sm:p-8 rounded-3xl border-2 border-orange-100 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Nama Lengkap Anda</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Masukkan nama lengkap..."
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-orange-50 border-2 border-transparent focus:border-brand-orange focus:bg-white rounded-xl text-xs font-bold text-neutral-800 outline-none transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Nomor WhatsApp Aktif</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="Contoh: 081234567890..."
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-orange-50 border-2 border-transparent focus:border-brand-orange focus:bg-white rounded-xl text-xs font-bold text-neutral-800 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Product field */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Produk Terkait</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-orange-50 border-2 border-transparent focus:border-brand-orange rounded-xl text-xs font-bold text-neutral-700 outline-none cursor-pointer"
                    >
                      {productsList.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Size select */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Ukuran Kemasan</label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-orange-50 border-2 border-transparent focus:border-brand-orange rounded-xl text-xs font-bold text-neutral-700 outline-none cursor-pointer"
                    >
                      <option value="Medium Pack">Medium Pack</option>
                      <option value="Zipper Pouch">Premium Stand Up Zipper</option>
                      <option value="Family sharing / Jar">Family Size / Jar</option>
                    </select>
                  </div>

                  {/* Quantity select */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Estimasi Kuantitas (Pack)</label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-orange-50 border-2 border-transparent focus:border-brand-orange rounded-xl text-xs font-bold text-neutral-800 outline-none"
                    />
                  </div>
                </div>

                {/* Notes box */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 font-sans">Pertanyaan / Pesan Tambahan</label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Tuliskan spesifikasi detail pesanan atau pertanyaan kemitraan Anda di sini..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-orange-50 border-2 border-transparent focus:border-brand-orange focus:bg-white rounded-xl text-xs font-bold text-neutral-805 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submission CTA button */}
                <button
                  type="submit"
                  className="w-full py-4 px-4 bg-brand-teal hover:bg-brand-teal-dark text-white rounded-full text-xs font-black shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer transform active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Kirim Formulir Prospek (Closing Kemitraan)</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* 4. Snack Tips & FAQ */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border-2 border-orange-100 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2.5 rounded-xl bg-brand-orange text-white shadow-sm">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-black text-xl text-[#2D3436] leading-tight">FAQ Layanan Snackly</h3>
            <p className="text-[10px] text-neutral-450 font-bold uppercase tracking-wider font-mono">Seputar Produk & Pengiriman</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SNACK_TIPS_FAQ.map((faq, idx) => {
            const isOpen = faqOpenIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-orange-50/20 border-2 border-orange-100/40 p-4 sm:p-5 rounded-2xl hover:bg-orange-50/40 transition-all duration-200 cursor-pointer"
                onClick={() => setFaqOpenIdx(isOpen ? null : idx)}
              >
                <div className="flex justify-between items-start space-x-3">
                  <h4 className="text-xs font-black text-[#2D3436] leading-relaxed font-sans">{faq.q}</h4>
                  <span className="text-brand-orange text-lg font-black font-mono leading-none">{isOpen ? '-' : '+'}</span>
                </div>
                {isOpen && (
                  <p className="text-[11px] text-neutral-600 leading-relaxed mt-2.5 border-t border-orange-100/50 pt-2.5">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
