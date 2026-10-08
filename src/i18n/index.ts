// Site çok dilli. Türkçe varsayılan ve kökte yayınlanır (mevcut URL'ler, Google
// indeksi ve reklam hedef sayfaları aynen kalır); diğer diller /en/, /es/, /ar/
// altında. Sayfa şablonları src/views altında, tüm diller aynı şablonu kullanır.
// Otomatik varsayılan yalnız TR/EN arasında seçer (bkz. Layout); ES ve AR yalnız
// dil kutucuğuyla ya da doğrudan bağlantıyla açılır.

export const langs = ["tr", "en", "es", "ar"] as const;
export type Lang = (typeof langs)[number];

export const routes = {
  home: { tr: "/", en: "/en/", es: "/es/", ar: "/ar/" },
  services: { tr: "/hizmetler", en: "/en/services", es: "/es/servicios", ar: "/ar/services" },
  gallery: { tr: "/galeri", en: "/en/gallery", es: "/es/galeria", ar: "/ar/gallery" },
  blog: { tr: "/blog", en: "/en/blog", es: "/es/blog", ar: "/ar/blog" },
  contact: { tr: "/iletisim", en: "/en/contact", es: "/es/contacto", ar: "/ar/contact" },
  privacy: {
    tr: "/gizlilik-politikasi",
    en: "/en/privacy-policy",
    es: "/es/politica-de-privacidad",
    ar: "/ar/privacy-policy",
  },
} satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Aynı sayfanın her dildeki adresi; çevirisi olmayan dil eksik kalır. */
export type Alternates = Partial<Record<Lang, string>>;

export const ui = {
  tr: {
    langName: "Türkçe",
    htmlLang: "tr",
    dir: "ltr",
    ogLocale: "tr_TR",
    dateLocale: "tr-TR",
    defaultTitle: "Çizgi Artizm — Duvar Resmi & Graffiti Sanatı",
    defaultDescription:
      "Dünyanın her yerinde profesyonel duvar resmi, graffiti, portre çizim ve araç airbrush boyama. Çizgi Artizm ile mekanlarınızı sanata çevirin.",
    knowsAbout: ["Graffiti", "Duvar Resmi", "Mural", "Airbrush", "Portre Çizim"],
    nav: {
      home: "Anasayfa",
      services: "Hizmetler",
      gallery: "Galeri",
      blog: "Blog",
      contact: "İletişim",
    },
    quote: "Teklif Al",
    langSwitch: "Dil seçimi",
    menu: "Menü",
    whatsapp: "WhatsApp ile yazın",
    footer: {
      tagline: "Duvar resmi, graffiti, portre çizim ve araç airbrush boyama. Dünya genelinde hizmet.",
      contact: "İletişim",
      pages: "Sayfalar",
      rights: "Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
    },
    phones: ["0539 618 37 67", "0535 774 60 12"],
    lightbox: "Görüntü görüntüleyici",
    close: "Kapat",
  },
  en: {
    langName: "English",
    htmlLang: "en",
    dir: "ltr",
    ogLocale: "en_US",
    dateLocale: "en-US",
    defaultTitle: "Çizgi Artizm — Mural & Graffiti Art",
    defaultDescription:
      "Professional murals, graffiti, portrait drawing and vehicle airbrush painting worldwide. Turn your spaces into art with Çizgi Artizm.",
    knowsAbout: ["Graffiti", "Murals", "Street Art", "Airbrush", "Portrait Drawing"],
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      blog: "Blog",
      contact: "Contact",
    },
    quote: "Get a Quote",
    langSwitch: "Language",
    menu: "Menu",
    whatsapp: "Message us on WhatsApp",
    footer: {
      tagline: "Murals, graffiti, portrait drawing and vehicle airbrush painting. Serving clients worldwide.",
      contact: "Contact",
      pages: "Pages",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
    },
    phones: ["+90 539 618 37 67", "+90 535 774 60 12"],
    lightbox: "Image viewer",
    close: "Close",
  },
  es: {
    langName: "Español",
    htmlLang: "es",
    dir: "ltr",
    ogLocale: "es_ES",
    dateLocale: "es-ES",
    defaultTitle: "Çizgi Artizm — Murales y arte grafiti",
    defaultDescription:
      "Murales, grafiti, retratos y aerografía para vehículos realizados por profesionales en todo el mundo. Convierta sus espacios en arte con Çizgi Artizm.",
    knowsAbout: ["Grafiti", "Murales", "Arte urbano", "Aerografía", "Retratos"],
    nav: {
      home: "Inicio",
      services: "Servicios",
      gallery: "Galería",
      blog: "Blog",
      contact: "Contacto",
    },
    quote: "Pedir presupuesto",
    langSwitch: "Idioma",
    menu: "Menú",
    whatsapp: "Escríbanos por WhatsApp",
    footer: {
      tagline: "Murales, grafiti, retratos y aerografía para vehículos. Servicio en todo el mundo.",
      contact: "Contacto",
      pages: "Páginas",
      rights: "Todos los derechos reservados.",
      privacy: "Política de privacidad",
    },
    phones: ["+90 539 618 37 67", "+90 535 774 60 12"],
    lightbox: "Visor de imágenes",
    close: "Cerrar",
  },
  // Arapça: Körfez (Dubai) kitlesi için Modern Standart Arapça. Terimler BAE basını
  // ve yerel hizmet sitelerinden: جدارية (mural), الجرافيتي, معاينة مجانية, عرض سعر.
  ar: {
    langName: "العربية",
    htmlLang: "ar",
    dir: "rtl",
    ogLocale: "ar_AE",
    dateLocale: "ar-AE",
    defaultTitle: "Çizgi Artizm — فن الجداريات والجرافيتي",
    defaultDescription:
      "رسم جداريات وجرافيتي ولوحات بورتريه ورسم بتقنية الإيربرش على المركبات بأيدي فريق محترف في جميع أنحاء العالم. حوّل مساحتك إلى عمل فني مع Çizgi Artizm.",
    knowsAbout: ["الجرافيتي", "الجداريات", "فن الشارع", "الإيربرش", "رسم البورتريه"],
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      gallery: "أعمالنا",
      blog: "المدونة",
      contact: "تواصل معنا",
    },
    quote: "اطلب عرض سعر",
    langSwitch: "اللغة",
    menu: "القائمة",
    whatsapp: "راسلنا عبر واتساب",
    footer: {
      tagline: "رسم الجداريات والجرافيتي ولوحات البورتريه والإيربرش على المركبات. نخدم عملاءنا حول العالم.",
      contact: "تواصل معنا",
      pages: "الصفحات",
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
    },
    phones: ["+90 539 618 37 67", "+90 535 774 60 12"],
    lightbox: "عارض الصور",
    close: "إغلاق",
  },
} satisfies Record<Lang, unknown>;

export const navRoutes: RouteKey[] = ["home", "services", "gallery", "blog", "contact"];
