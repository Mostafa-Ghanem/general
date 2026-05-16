// src/i18n/ui.ts — full translation strings AR/EN.
// Type-safe with `as const` so route keys are inferred.

export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export const defaultLang = 'en';
export const showDefaultLang = false;

export type Lang = keyof typeof languages;

// Map route IDs to URL segments per locale.
// Note: AR slugs are kept as URL-encoded Arabic in routes — Astro handles this via filename.
export const routes = {
  en: {
    home: '',
    about: 'about',
    services: 'services',
    projects: 'projects',
    contact: 'contact',
  },
  ar: {
    home: '',
    about: 'من-نحن',
    services: 'services',
    projects: 'projects',
    contact: 'تواصل-معانا',
  },
} as const;

// Product slugs (filesystem-safe, used in services/[slug])
export const productSlugs = [
  'flanges',
  'pipes',
  'plates',
  'tees',
  'hydraulic',
  'valves',
  'flex',
  'gaskets',
  'fasteners',
] as const;

export type ProductSlug = (typeof productSlugs)[number];

// Display names + descriptions
export const productInfo: Record<
  ProductSlug,
  { ar: { name: string; desc: string }; en: { name: string; desc: string } }
> = {
  flanges:    { ar: { name: 'فلانشات',        desc: 'فلانشات منزلقة ومسبوكة ولحام بمعايير ASTM و DIN' }, en: { name: 'Flanges',            desc: 'Slip-on, welded and forged flanges to ASTM and DIN standards' } },
  pipes:      { ar: { name: 'مواسير',          desc: 'مواسير كربون وستانلس مسبوكة وملحومة بأقطار من ½″ حتى ٢٤″' }, en: { name: 'Pipes',              desc: 'Carbon and stainless pipes, seamless and welded, from ½″ to 24″' } },
  plates:     { ar: { name: 'ألواح وعمدان',    desc: 'ألواح صلب وعمدان للإنشاءات الميكانيكية والهياكل' }, en: { name: 'Plates & Columns',   desc: 'Steel plates and columns for mechanical construction' } },
  tees:       { ar: { name: 'تيهات وكيعان',    desc: 'كيعان ٤٥ و ٩٠ درجة، تيهات، وأغطية لجميع أنظمة المواسير' }, en: { name: 'Tees & Caps',        desc: '45° and 90° elbows, tees and caps for all pipework systems' } },
  hydraulic:  { ar: { name: 'وصلات هيدروليك',  desc: 'وصلات هيدروليكية لضغوط عالية، JIC و BSP و SAE' }, en: { name: 'Hydraulic Fittings', desc: 'High-pressure hydraulic couplings — JIC, BSP, SAE' } },
  valves:     { ar: { name: 'محابس',           desc: 'محابس بوابة، كرة، فراشة، وتشيك من ١″ حتى ٢٤″' }, en: { name: 'Valves',             desc: 'Gate, ball, butterfly and check valves from 1″ to 24″' } },
  flex:       { ar: { name: 'وصلات مرنة',      desc: 'وصلات مرنة لامتصاص الاهتزازات والتمدد الحراري' }, en: { name: 'Flexible Couplings', desc: 'Flexible couplings for vibration and thermal expansion' } },
  gaskets:    { ar: { name: 'جوانات',          desc: 'جوانات سبيرال، RTJ، جرافيت، ومطاط لكل تطبيقات الفلانشات' }, en: { name: 'Gaskets',            desc: 'Spiral wound, RTJ, graphite and rubber gaskets for all flange duties' } },
  fasteners:  { ar: { name: 'أدوات ربط',       desc: 'مسامير، صواميل، وردات ستد بمواصفات A193 B7 و A194 2H' }, en: { name: 'Fasteners',          desc: 'Bolts, nuts, studs and washers — A193 B7 and A194 2H grade' } },
};

// ---------- UI strings ----------

export const ui = {
  en: {
    'site.dir': 'ltr',
    'site.lang': 'en',
    'site.company': 'General Factory Equipment',
    'site.companyShort': 'GFE',
    'site.tagline': 'The supplier Egyptian factories rely on',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'cta.contact': 'Contact us',
    'cta.whatsapp': 'WhatsApp',
    'cta.viewAll': 'View all',
    'cta.requestQuote': 'Request quote',
    'cta.explore': 'View product',
    'cta.backToProducts': 'Back to products',
    'cta.callNow': 'Call now',
    'cta.directions': 'Directions',

    'hero.eyebrow': 'Industrial suppliers since 1998',
    'hero.title': 'Factory equipment\nEgyptian industry\nrelies on.',
    'hero.lede': 'Flanges, pipes, hydraulic fittings, valves and gaskets — in stock, ready to ship to your facility in any governorate.',
    'hero.primary': 'Explore catalog',
    'hero.secondary': 'Talk to a sales engineer',
    'hero.metric.years.v': '27',
    'hero.metric.years.l': 'years in market',
    'hero.metric.clients.v': '2,000+',
    'hero.metric.clients.l': 'industrial facilities served',
    'hero.metric.sku.v': '9,500+',
    'hero.metric.sku.l': 'SKUs in stock',
    'hero.metric.delivery.v': '24/48',
    'hero.metric.delivery.l': 'hr delivery — Greater Cairo',

    'products.eyebrow': 'Nine core categories',
    'products.title': 'Everything your\nproduction line needs.',
    'products.lede': 'Flanges, pipes, fasteners and valves to ASTM, DIN, and BS specs — in the size you need.',

    'why.eyebrow': 'Industrial trust',
    'why.title': 'The speed, stock, and expertise\nengineers ask for.',

    'projects.eyebrow': 'Reference supplies',
    'projects.title': 'Projects we delivered\nfor factories that count on us.',
    'projects.seeAll': 'All projects',

    'contactCta.eyebrow': 'Your sales engineer is on standby',
    'contactCta.title': 'Get a quote\nwithin two business hours.',
    'contactCta.lede': 'Send your requirements via WhatsApp or call directly — our team responds to engineers fast.',

    'footer.address': 'Cairo, Egypt — 10th of Ramadan, Industrial Zone',
    'footer.phone': '+20 10 1626 5762',
    'footer.email': 'sales@generalea.com',
    'footer.hours': 'Sat — Thu · 9 AM — 6 PM',
    'footer.rights': '© 2026 General Factory Equipment Co. All rights reserved.',
    'footer.navTitle': 'Site',
    'footer.productsTitle': 'Products',
    'footer.contactTitle': 'Contact',

    'about.eyebrow': 'Founded 1998',
    'about.title': 'Twenty-seven years\nsupplying Egyptian industry.',
    'about.intro1': 'General Factory Equipment began as a specialist flange and pipe distributor in Cairo, and grew gradually into one of Egypt\'s largest suppliers of mechanical construction equipment.',
    'about.intro2': 'Today we serve more than 2,000 industrial facilities across petrochemicals, cement, food, pharmaceuticals, and water utilities — with a stockholding of 9,500+ SKUs to international quality standards.',
    'about.milestonesTitle': 'Milestones',
    'about.valuesTitle': 'How we work',

    'contact.eyebrow': 'Sales team standing by',
    'contact.title': 'Call, WhatsApp,\nor visit our warehouse.',
    'contact.hoursTitle': 'Hours',
    'contact.addressTitle': 'Address',
    'contact.contactTitle': 'Get in touch',
    'contact.branchesTitle': 'Branches',

    'projectsPage.eyebrow': 'Reference supplies',
    'projectsPage.title': 'Projects\ndelivered on time.',
    'projectsPage.lede': 'A selection of supplies we\'ve delivered to factories and industrial projects across Egypt.',
    'projectsPage.filter.all': 'All',
    'projectsPage.filter.cement': 'Cement',
    'projectsPage.filter.petro': 'Oil & Gas',
    'projectsPage.filter.food': 'Food',
    'projectsPage.filter.water': 'Water',

    'product.specs': 'Specifications',
    'product.sizes': 'Available sizes',
    'product.materials': 'Materials',
    'product.standards': 'Standards',
    'product.applications': 'Applications',
    'product.related': 'Related products',
    'product.quoteCta': 'Request a quote for this product',
    'product.datasheet': 'Download datasheet',
  },

  ar: {
    'site.dir': 'rtl',
    'site.lang': 'ar',
    'site.company': 'العامة لمهمات المصانع',
    'site.companyShort': 'العامة',
    'site.tagline': 'مورد المصانع المصرية الموثوق',

    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.projects': 'المشروعات',
    'nav.contact': 'تواصل معانا',

    'cta.contact': 'تواصل معانا',
    'cta.whatsapp': 'واتساب',
    'cta.viewAll': 'استعرض الكل',
    'cta.requestQuote': 'اطلب عرض سعر',
    'cta.explore': 'استعراض المنتج',
    'cta.backToProducts': 'رجوع للمنتجات',
    'cta.callNow': 'اتصل الآن',
    'cta.directions': 'الاتجاهات',

    'hero.eyebrow': 'موردون صناعيون منذ ١٩٩٨',
    'hero.title': 'مهمات المصانع\nالتي تعتمد عليها\nالصناعة المصرية.',
    'hero.lede': 'فلانشات، مواسير، وصلات هيدروليك، محابس، وجوانات — متوفرة في المخزن وجاهزة للشحن إلى مصانعك في أي محافظة.',
    'hero.primary': 'استعرض المنتجات',
    'hero.secondary': 'تحدث مع مهندس مبيعات',
    'hero.metric.years.v': '٢٧',
    'hero.metric.years.l': 'سنة في السوق',
    'hero.metric.clients.v': '+٢٫٠٠٠',
    'hero.metric.clients.l': 'منشأة صناعية تخدمها الشركة',
    'hero.metric.sku.v': '+٩٫٥٠٠',
    'hero.metric.sku.l': 'كود منتج في المخزون',
    'hero.metric.delivery.v': '٢٤/٤٨',
    'hero.metric.delivery.l': 'ساعة لتسليم القاهرة الكبرى',

    'products.eyebrow': 'تسع فئات أساسية',
    'products.title': 'كل ما تحتاجه\nخطوط الإنتاج لديك.',
    'products.lede': 'فلانشات، مواسير، أدوات ربط، ومحابس بمعايير ASTM و DIN و BS — متوفرة في الحجم الذي تطلبه.',

    'why.eyebrow': 'الثقة الصناعية',
    'why.title': 'السرعة، المخزون، والخبرة\nالتي يطلبها المهندس.',

    'projects.eyebrow': 'توريدات مرجعية',
    'projects.title': 'مشروعات سلمناها\nلمصانع تعتمد علينا.',
    'projects.seeAll': 'كل المشروعات',

    'contactCta.eyebrow': 'مهندس مبيعاتك بانتظارك',
    'contactCta.title': 'احصل على عرض السعر\nخلال ساعتين عمل.',
    'contactCta.lede': 'أرسل قائمة احتياجاتك واتساب أو اتصل مباشرة — فريقنا يرد على المهندسين بكل سرعة.',

    'footer.address': 'القاهرة، مصر — العاشر من رمضان، المنطقة الصناعية',
    'footer.phone': '+٢٠ ١٠ ١٦٢٦ ٥٧٦٢',
    'footer.email': 'sales@generalea.com',
    'footer.hours': 'السبت — الخميس · ٩ صباحاً — ٦ مساءً',
    'footer.rights': '© ٢٠٢٦ العامة لمهمات المصانع. جميع الحقوق محفوظة.',
    'footer.navTitle': 'الموقع',
    'footer.productsTitle': 'المنتجات',
    'footer.contactTitle': 'تواصل',

    'about.eyebrow': 'تأسست ١٩٩٨',
    'about.title': 'سبعة وعشرون عاماً\nمن توريد الصناعة المصرية.',
    'about.intro1': 'بدأت "العامة لمهمات المصانع" كموزع متخصص في الفلانشات والمواسير في القاهرة، وتوسعت تدريجياً لتصبح أحد أكبر موردي مهمات الإنشاءات الميكانيكية في مصر.',
    'about.intro2': 'نخدم اليوم أكثر من ٢٠٠٠ منشأة صناعية في قطاعات البتروكيماويات، الإسمنت، الأغذية، الأدوية، ومحطات المياه — بمخزون يتجاوز ٩٫٥٠٠ كود منتج ومعايير جودة دولية.',
    'about.milestonesTitle': 'محطات',
    'about.valuesTitle': 'مبادئ نعمل بها',

    'contact.eyebrow': 'فريق المبيعات في خدمتك',
    'contact.title': 'اتصل، أرسل واتساب،\nأو زرنا في المخزن.',
    'contact.hoursTitle': 'ساعات العمل',
    'contact.addressTitle': 'العنوان',
    'contact.contactTitle': 'وسائل التواصل',
    'contact.branchesTitle': 'الفروع',

    'projectsPage.eyebrow': 'توريدات مرجعية',
    'projectsPage.title': 'مشروعات\nسلمناها على الوقت.',
    'projectsPage.lede': 'مختارات من توريداتنا للمصانع والمشروعات الصناعية في مصر.',
    'projectsPage.filter.all': 'الكل',
    'projectsPage.filter.cement': 'إسمنت',
    'projectsPage.filter.petro': 'بترول وغاز',
    'projectsPage.filter.food': 'أغذية',
    'projectsPage.filter.water': 'مياه',

    'product.specs': 'المواصفات',
    'product.sizes': 'الأقطار المتوفرة',
    'product.materials': 'المواد',
    'product.standards': 'المعايير',
    'product.applications': 'التطبيقات',
    'product.related': 'منتجات ذات صلة',
    'product.quoteCta': 'اطلب عرض سعر لهذا المنتج',
    'product.datasheet': 'تحميل ورقة المواصفات',
  },
} as const;

// "Why us" points, milestones and values structured as arrays
export const whyPoints = {
  en: [
    { n: '01', t: 'Deep inventory',  d: '9,500+ SKUs across standard sizes and pressure ratings — available now, no overseas wait.' },
    { n: '02', t: 'Spec-compliant',  d: 'Material certificates and test reports with every shipment — ASTM A105, A234, A182, DIN, BS.' },
    { n: '03', t: 'Fast delivery',   d: 'In-house fleet covers Greater Cairo in 24–48h, and other governorates within 72h.' },
    { n: '04', t: 'Engineer support', d: 'Our sales engineers help you spec the right size and material for your application.' },
  ],
  ar: [
    { n: '01', t: 'مخزون عميق',       d: 'أكثر من ٩٫٥٠٠ كود منتج بأقطار وضغوط معيارية متاحة فوراً، بدون انتظار توريد خارجي.' },
    { n: '02', t: 'مطابقة للمواصفات', d: 'شهادات مادة وكتب اختبار مع كل شحنة — ASTM A105, A234, A182 و DIN و BS.' },
    { n: '03', t: 'تسليم سريع',        d: 'أسطول داخلي يغطي القاهرة الكبرى خلال ٢٤–٤٨ ساعة، ومحافظات الجمهورية في ٧٢ ساعة.' },
    { n: '04', t: 'دعم فني',           d: 'مهندسو مبيعات يساعدونك في اختيار المقاس والمادة المناسبة لتطبيقك.' },
  ],
} as const;

export const milestones = {
  en: [
    { y: '1998', t: 'Founded',                  d: 'First warehouse opens in Cairo with two core lines: flanges and pipes.' },
    { y: '2005', t: 'Expansion',                d: 'Hydraulic fittings and valves added; second branch opens in 10th of Ramadan.' },
    { y: '2012', t: 'International accreditation', d: 'ISO 9001 certified, and we begin supplying oil & gas projects.' },
    { y: '2019', t: 'Digital',                  d: 'Launched the digital catalog and WhatsApp quote service.' },
    { y: '2026', t: 'Today',                    d: '9,500+ SKUs, 45 employees, branches in 3 governorates.' },
  ],
  ar: [
    { y: '١٩٩٨', t: 'التأسيس',         d: 'افتتاح أول مخزن في القاهرة بمنتجين أساسيين: فلانشات ومواسير.' },
    { y: '٢٠٠٥', t: 'التوسع',           d: 'إضافة خطوط الوصلات الهيدروليكية والمحابس، وفتح فرع العاشر من رمضان.' },
    { y: '٢٠١٢', t: 'الاعتماد الدولي',  d: 'الحصول على ISO 9001 وبدء التوريد لمشروعات البترول والغاز.' },
    { y: '٢٠١٩', t: 'الرقمنة',          d: 'إطلاق منصة الكتالوج الإلكتروني وخدمة طلب عروض الأسعار عبر الواتساب.' },
    { y: '٢٠٢٦', t: 'اليوم',            d: '+٩٫٥٠٠ كود منتج، ٤٥ موظفاً، وفروع في ٣ محافظات.' },
  ],
} as const;

export const values = {
  en: [
    { t: 'Inventory, not promises',       d: "We don't sell what we don't own. Every item on our site is physically in stock." },
    { t: 'Certification before delivery', d: 'Material certificates and test reports ship with every order, to the spec you require.' },
    { t: 'Transparent pricing',           d: 'Written quote within two business hours. No hidden costs.' },
  ],
  ar: [
    { t: 'مخزون، مش وعود',     d: 'لا نبيع ما لا نملك. كل صنف في موقعنا متاح فعلياً في المخزن.' },
    { t: 'الشهادة قبل التسليم', d: 'مع كل شحنة شهادة مادة وكتب اختبار وفقاً للمواصفة المطلوبة.' },
    { t: 'السعر الواضح',         d: 'عرض سعر مكتوب خلال ساعتين، بدون تكاليف خفية.' },
  ],
} as const;

export const branches = {
  en: [
    { n: 'Head office — 10th of Ramadan', a: 'Industrial Zone A4, Street 6', p: '+20 10 1626 5762' },
    { n: 'Cairo — Nasr City',             a: '7 Abbas El-Akkad St, 2nd floor', p: '+20 10 1626 5762' },
    { n: 'Alexandria — Ameriya',          a: 'Industrial Zone, Alex Desert Road', p: '+20 10 1626 5762' },
  ],
  ar: [
    { n: 'الفرع الرئيسي — العاشر من رمضان', a: 'المنطقة الصناعية أ٤، شارع ٦',  p: '+٢٠ ١٠ ١٦٢٦ ٥٧٦٢' },
    { n: 'القاهرة — مدينة نصر',                a: '٧ شارع عباس العقاد، الدور الثاني', p: '+٢٠ ١٠ ١٦٢٦ ٥٧٦٢' },
    { n: 'الإسكندرية — العامرية',              a: 'المنطقة الصناعية، طريق الإسكندرية الصحراوي', p: '+٢٠ ١٠ ١٦٢٦ ٥٧٦٢' },
  ],
} as const;

export type UIKey = keyof (typeof ui)['en'];
