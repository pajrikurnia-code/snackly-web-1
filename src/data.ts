import { Product } from './types';

export const SNACKLY_PRODUCTS: Product[] = [
  {
    id: 'crispy-basreng',
    name: 'Crispy Basreng',
    localName: 'Bakso Goreng Crispy Daun Jeruk',
    category: 'Pedas',
    basePrice: 18000,
    packagingSizes: ['150gr', '300gr', '600gr'],
    stock: 310,
    isFeatured: true,
    description: 'Camilan khas sunda bakso ikan pilihan yang diiris memanjang korek api, digoreng garing renyah merata, serta ditumis dalam paduan cabai kering dan minyak jeruk.',
    longDescription: 'Snackly Basreng (Bakso Goreng) diproduksi dengan komitmen rasa ikan laut segar yang gurih tanpa bau amis berlebih. Proses pencucian ganda adonan bakso ikan tenggiri sebelum diiris sangat tipis menjamin tingkat kerenyahan mulus tanpa keras saat digigit. Bumbu tumis berminyak cabe rawit segar plus cincangan halus daun jeruk menambah nafsu makan seketika.',
    ingredients: ['Bakso Ikan Tenggiri Segar', 'Bawang Putih Goreng', 'Bubuk Cabe Merah Alami', 'Daun Jeruk Segar Cincang', 'Minyak Goreng Sawit', 'Garam Laut Rasa'],
    nutritionHighlights: [
      { label: 'Kandungan Ikan', value: '45% Daging Tenggiri Asli' },
      { label: 'Proses Goreng', value: 'Double Spinner Tanpa Minyak Berlebih' },
      { label: 'Kekerasan', value: 'Sangat Renyah, Tidak Keras' },
      { label: 'Protein Utama', value: '8g per porsi' }
    ],
    images: [
      '/src/assets/images/product_basreng_1782876606047.jpg'
    ],
    rating: 4.8,
    reviewsCount: 420,
    weightGrams: 250,
    variants: [
      {
        name: 'Signature Spicy Daun Jeruk',
        description: 'Level pedas moderat berlumur minyak cabai kering merah menyala dan wangi rona jeruk nipis.',
        tag: 'Paling Laris',
        image: '/src/assets/images/product_basreng_1782876606047.jpg'
      },
      {
        name: 'Salty & Savory Daun Jeruk',
        description: 'Rasa gurih alami ikan tenggiri dipadu luluran daun jeruk segar tanpa rasa pedas berlebih.',
        tag: 'Cocok untuk Anak',
        image: '/src/assets/images/product_basreng_1782876606047.jpg'
      },
      {
        name: 'Hellfire Spicy Extra (Level 10)',
        description: 'Khusus penggila pedas sejati, racikan cabai setan tumbuk kasar yang menyengat nikmat!',
        tag: 'Sangat Pedas',
        image: '/src/assets/images/product_basreng_1782876606047.jpg'
      }
    ],
    reviews: [
      { name: 'Diki Alamsyah', rating: 5, date: '10 Juni 2026', comment: 'Garingnya pas banget, beda sama basreng pinggir jalan yang suka bikin rahang capek, ini kriuk renyah kayak kerupuk!' },
      { name: 'Indah Kusuma', rating: 4.6, date: '05 Juni 2026', comment: 'Rasa ikannya ga pelit, bau tenggirinya dapet, daun jeruknya wangi semerbak melimpah.' }
    ]
  },
  {
    id: 'makaroni-pedas',
    name: 'Makaroni Pedas Setan',
    localName: 'Makaroni Ulir Pedas Daun Jeruk',
    category: 'Pedas',
    basePrice: 15000,
    packagingSizes: ['150gr', '300gr', '600gr'],
    stock: 198,
    isFeatured: true,
    description: 'Makaroni ulir gandum premium pilihan yang digoreng garing renyah, dibalur bubuk cabai merah setan melimpah dan minyak aromatik daun jeruk purut segar.',
    longDescription: 'Makaroni Pedas Setan dari Snackly dibuat menggunakan tepung gandum berkualitas tinggi untuk menghasilkan tekstur bantet renyah yang pas, tidak keras, dan berongga optimal. Dibalut dengan kombinasi bumbu bubuk cabai merah asli kering dan tumisan daun jeruk purut segar yang harum semerbak, memberikan ledakan cita rasa pedas gurih di setiap gigitan.',
    ingredients: ['Makaroni Gandum Premium', 'Minyak Cabai Alami', 'Bubuk Cabe Rawit Merah', 'Daun Jeruk Purut', 'Bawang Merah & Putih', 'Penyedap Rasa Alami'],
    nutritionHighlights: [
      { label: 'Energi Total', value: '145 Kkal / Saji' },
      { label: 'Bubuk Cabai', value: '100% Alami Non-Sintetis' },
      { label: 'Tekstur', value: 'Sangat Renyah & Gurih' },
      { label: 'Bahan Kimia', value: '0% Pengawet Tambahan' }
    ],
    images: [
      '/src/assets/images/product_makaroni_pedas_1782876620313.jpg'
    ],
    rating: 4.9,
    reviewsCount: 312,
    weightGrams: 300,
    variants: [
      {
        name: 'Pedas Manis Balado',
        description: 'Paduan rasa dominan manis legit aren berpadu pedas santun cabai merah keriting.',
        tag: 'Favorit',
        image: '/src/assets/images/product_makaroni_pedas_1782876620313.jpg'
      },
      {
        name: 'Pedas Asin Gurih',
        description: 'Sensasi asin gurih tradisional Jawa Barat yang gurih nagih dengan aroma daun jeruk kencang.',
        tag: 'Pilihan Populer',
        image: '/src/assets/images/product_makaroni_pedas_1782876620313.jpg'
      },
      {
        name: 'Pedas Gila Level 15',
        description: 'Komposisi cabai setan kering pilihan khusus untuk pencari tantangan rasa pedas ekstrem.',
        tag: 'Pedas Ekstrem',
        image: '/src/assets/images/product_makaroni_pedas_1782876620313.jpg'
      }
    ],
    reviews: [
      { name: 'Aditya Pratama', rating: 5, date: '18 Juni 2026', comment: 'Ini makaroni pedas daun jeruk terenak! Pedasnya beneran nagih, wangi jeruknya bikin gak bisa berhenti ngemil!' },
      { name: 'Siti Rahma', rating: 4.8, date: '15 Juni 2026', comment: 'Renyah banget, nggak keras sama sekali pas digigit. Sukses terus Snackly!' }
    ]
  },
  {
    id: 'keripik-tempe-premium',
    name: 'Garlic Tempeh Crisps',
    localName: 'Keripik Tempe Premium Bawang',
    category: 'Gurih',
    basePrice: 16500,
    packagingSizes: ['150gr', '300gr', '600gr'],
    stock: 245,
    isFeatured: true,
    description: 'Bahan tempe kedelai non-GMO berkualitas tinggi yang diiris tipis secara presisi, lalu dipanggang matang dengan taburan bumbu bawang putih khas dan daun jeruk wangi berkualitas tinggi.',
    longDescription: 'Garlic Tempeh Crisps dari Snackly menghadirkan cara baru menikmati protein nabati terbaik asli Indonesia. Dibuat dengan metode pemotongan mikro untuk menjamin keawetan rasa gurih alami kedelai dan dipanggang secara higienis menggunakan minyak kelapa kelapa sawit bersertifikasi ramah lingkungan. Setiap keping keripik dibalur bumbu racikan tradisional khas Snackly tanpa menggunakan pengawet kimia.',
    ingredients: ['Kedelai Pilihan Non-GMO', 'Tepung Sagu Premium', 'Bawang Putih Nusantara', 'Daun Jeruk Purut', 'Garam Laut Sehat', 'Minyak Nabati Rendah Kolesterol'],
    nutritionHighlights: [
      { label: 'Energi Total', value: '140 Kkal / Saji' },
      { label: 'Protein Kedelai', value: '6g per porsi' },
      { label: 'Serat Pangan', value: '3g per porsi' },
      { label: 'Bahan Kimia', value: '0% Tanpa MSG Buatan' }
    ],
    images: [
      '/src/assets/images/product_keripik_tempe_1782876636073.jpg'
    ],
    rating: 4.9,
    reviewsCount: 182,
    weightGrams: 250,
    variants: [
      {
        name: 'Original Classic Savory',
        description: 'Sentuhan klasik gurih murni bawang ketumbar tradisional yang digemari seluruh keluarga.',
        tag: 'Terlaris',
        image: '/src/assets/images/product_keripik_tempe_1782876636073.jpg'
      },
      {
        name: 'Aromatic Spicy Lime Leaf',
        description: 'Paduan kehangatan cabe rawit merah asli dan kesegaran daun jeruk purut yang harum semerbak.',
        tag: 'Rekomendasi Chef',
        image: '/src/assets/images/product_keripik_tempe_1782876636073.jpg'
      },
      {
        name: 'Smoked Seaweed Umami',
        description: 'Sensasi gurih rumput laut organik panggang berpadu aroma asap kayu beechwood yang menggoda.',
        tag: 'Favorit Baru',
        image: '/src/assets/images/product_keripik_tempe_1782876636073.jpg'
      }
    ],
    reviews: [
      { name: 'Siti Rahma', rating: 5, date: '12 Juni 2026', comment: 'Rasa mentega dan bawang putihnya sangat meresap, dan garingnya tahan lama bahkan setelah bungkus dibuka!' },
      { name: 'Diana Lestari', rating: 4.8, date: '29 Mei 2026', comment: 'Suka sekali dengan teksturnya yang super tipis dan gampang digigit. Anak-anak saya paling doyan rasa Seaweed.' }
    ]
  },
  {
    id: 'keripik-pisang-caramel',
    name: 'Sweet Banana Crisps',
    localName: 'Keripik Pisang Karamel Madu',
    category: 'Manis',
    basePrice: 18500,
    packagingSizes: ['150gr', '300gr', '600gr'],
    stock: 150,
    isFeatured: true,
    description: 'Irisan pisang raja lokal pilihan yang diolah renyah, lalu dibalut glaze karamel gula aren cair legendaris dan madu hutan murni yang legit melimpah.',
    longDescription: 'Sweet Banana Crisps menghadirkan perpaduan manis eksotis khas nusantara. Kami menyeleksi pisang raja matang pohon terbaik dari perkebunan lokal, mengirisnya dengan presisi tinggi, serta mengaramelkannya secara slow-cooking menggunakan gula aren organik Jawa Barat dan madu hutan murni yang menghasilkan sensasi kriuk manis alami berkelas.',
    ingredients: ['Pisang Raja Matang Pilihan', 'Madu Hutan Alami', 'Gula Merah Aren Murni', 'Minyak Kelapa Alami', 'Garam Laut Sehat'],
    nutritionHighlights: [
      { label: 'Energi Total', value: '130 Kkal / Saji' },
      { label: 'Karamel Glaze', value: '100% Gula Aren Organik' },
      { label: 'Lemak Trans', value: '0% Bebas Kolesterol' },
      { label: 'Vitamin & Serat', value: 'Tinggi Kalium Alami' }
    ],
    images: [
      '/src/assets/images/product_keripik_pisang_1782876650549.jpg'
    ],
    rating: 4.9,
    reviewsCount: 165,
    weightGrams: 300,
    variants: [
      {
        name: 'Golden Sweet Caramel',
        description: 'Cita rasa manis karamel gula aren klasik yang manis legit nan elegan.',
        tag: 'Gourmet Choice',
        image: '/src/assets/images/product_keripik_pisang_1782876650549.jpg'
      },
      {
        name: 'Chocolate Glazed Sweet',
        description: 'Paduan saus cokelat Belgian premium tebal berpadu pisang renyah yang memanjakan lidah.',
        tag: 'Favorit Baru',
        image: '/src/assets/images/product_keripik_pisang_1782876650549.jpg'
      },
      {
        name: 'Milky Cheese Delight',
        description: 'Sensasi manis pisang karamel berselimut bubuk susu dan keju cheddar parut asin gurih.',
        tag: 'Rekomendasi',
        image: '/src/assets/images/product_keripik_pisang_1782876650549.jpg'
      }
    ],
    reviews: [
      { name: 'Fitriani', rating: 5, date: '24 Juni 2026', comment: 'Keripik pisangnya renyah banget, manis karamelnya pas nggak bikin eneg. Sangat direkomendasikan!' },
      { name: 'Kurnia Mega', rating: 4.9, date: '20 Juni 2026', comment: 'Cokelat glaze nya melimpah banget, rasanya bener-bener kayak dessert hotel bintang lima.' }
    ]
  },
  {
    id: 'pilus-cikur-kencur',
    name: 'Crunchy Pilus Cikur',
    localName: 'Pilus Kencur Gurih Renyah',
    category: 'Gurih',
    basePrice: 13000,
    packagingSizes: ['150gr', '300gr', '600gr'],
    stock: 180,
    isFeatured: true,
    description: 'Pilus bulat renyah beraroma cikur (kencur) segar yang khas sunda, dibumbui bawang putih gurih dan seledri cincang yang nikmat tiada tara.',
    longDescription: 'Crunchy Pilus Cikur dari Snackly menyajikan cita rasa cemilan legendaris dengan teknik modern. Dibuat menggunakan tepung tapioka pilihan beraroma kencur segar dan bawang putih nusantara berkualitas tinggi, digoreng dengan metode triple-spin untuk membuang kelebihan minyak, menghasilkan pilus yang super renyah, wangi, dan tidak keras saat dikunyah.',
    ingredients: ['Tepung Tapioka Pilihan', 'Kencur (Cikur) Segar', 'Bawang Putih Nusantara', 'Daun Seledri Cincang', 'Garam Laut Sehat', 'Penyedap Rasa Alami'],
    nutritionHighlights: [
      { label: 'Kalori Pilus', value: '110 Kkal / Saji' },
      { label: 'Bahan Pengawet', value: '100% Bebas Pengawet' },
      { label: 'Kandungan Serat', value: 'Pati Alami Tapioka' },
      { label: 'Sifat Tekstur', value: 'Super Garing & Ringan' }
    ],
    images: [
      '/src/assets/images/product_pilus_1782876663261.jpg'
    ],
    rating: 4.7,
    reviewsCount: 142,
    weightGrams: 200,
    variants: [
      {
        name: 'Original Cikur Savory',
        description: 'Rasa cikur kencur orisinal yang sangat khas sunda, harum, gurih, dan super renyah.',
        tag: 'Orisinal Khas',
        image: '/src/assets/images/product_pilus_1782876663261.jpg'
      },
      {
        name: 'Spicy Cikur Volcano',
        description: 'Tambahan sengatan bubuk cabai merah setan kering yang membakar semangat penikmat pedas.',
        tag: 'Pedas Nagih',
        image: '/src/assets/images/product_pilus_1782876663261.jpg'
      },
      {
        name: 'Cheese Powder Splash',
        description: 'Paduan aroma cikur klasik dengan siraman keju bubuk gurih asin yang modern.',
        tag: 'Kombinasi Baru',
        image: '/src/assets/images/product_pilus_1782876663261.jpg'
      }
    ],
    reviews: [
      { name: 'Rian Hidayat', rating: 5, date: '12 Juni 2026', comment: 'Pilusnya renyah garing gak bikin sakit gigi. Aroma cikurnya dapet banget, kencang dan wangi!' },
      { name: 'Sonia Putri', rating: 4.6, date: '08 Juni 2026', comment: 'Enak banget dicampur kuah bakso atau mie instan. Auto repurchase!' }
    ]
  }
];

export const SNACKLY_OFFICES = [
  {
    city: 'Jakarta Selatan (Headquarters & Kemang Kitchen)',
    address: 'Cakrawala University – Kemang Campus, Jl. Kemang Timur No.1, RT.14/RW.8, Pejaten Bar., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510',
    gmapsLink: 'https://maps.google.com/?q=Cakrawala+University+Kemang+Campus',
    phone: '+62 812-2421-2891',
    whatsapp: '6281224212891',
    email: 'pajri.kurnia@cakrawala.ac.id',
    hours: 'Setiap Hari (08:00 - 21:00 WIB)'
  },
  {
    city: 'Bandung Outlet (Distribution Point)',
    address: 'Ruko Dago Creative Park, Jl. Ir. H. Juanda No. 120, Coblong, Bandung 40135',
    gmapsLink: 'https://maps.google.com/?q=Dago+Bandung',
    phone: '+62 812-2421-2891',
    whatsapp: '6281224212891',
    email: 'pajri.kurnia@cakrawala.ac.id',
    hours: 'Setiap Hari (09:00 - 20:00 WIB)'
  },
  {
    city: 'Surabaya Hub (Warehouse & Shipping)',
    address: 'Komersial Darmo Square Blok C-12, Jl. Raya Darmo No. 88, Tegalsari, Surabaya 60264',
    gmapsLink: 'https://maps.google.com/?q=Raya+Darmo+Surabaya',
    phone: '+62 812-2421-2891',
    whatsapp: '6281224212891',
    email: 'pajri.kurnia@cakrawala.ac.id',
    hours: 'Senin - Sabtu (08:00 - 18:00 WIB)'
  }
];

export const SNACK_TIPS_FAQ = [
  {
    q: 'Apakah semua cemilan Snackly bersertifikat Halal dan terdaftar di P-IRT/BPOM?',
    a: 'Tentu saja! Keamanan pangan adalah prioritas Snackly. Seluruh produk kami diproduksi di dapur higienis berstandar GMP dan memiliki sertifikat Halal resmi dari MUI/BPJPH serta nomor registrasi P-IRT Dinas Kesehatan yang dicantumkan pada bagian belakang kemasan.'
  },
  {
    q: 'Berapa lama daya tahan simpan produk cemilan Snackly?',
    a: 'Produk keripik (Garlic Tempeh, Makaroni Pedas, Pisang Karamel, Pilus Cikur, dan Basreng) memiliki daya tahan 6 hingga 9 bulan di suhu ruangan dalam kemasan tersegel aluminium.'
  },
  {
    q: 'Bagaimana cara mendaftar sebagai Reseller, Agen, atau Distributor Snackly?',
    a: 'Kami membuka kerja sama kemitraan di seluruh kota besar Indonesia! Silakan isi Formulir Pertanyaan Prospek di menu kontak, atau hubungi langsung WhatsApp bisnis tim kemitraan kami dengan diskon pembelian grosir premium hingga 35%.'
  },
  {
    q: 'Apakah bisa mengirim ke luar kota atau luar pulau secara aman?',
    a: 'Ya! Seluruh pesanan luar kota dikemas rapat menggunakan Bubble Wrap tebal dan kardus double-wall berkualitas tinggi secara gratis tanpa biaya tambahan untuk meminimalisir risiko remuk di perjalanan hingga tiba dengan garing sempurna di tangan Anda.'
  }
];
