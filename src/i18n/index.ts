// Site iki dilli. Türkçe varsayılan ve kökte yayınlanır (mevcut URL'ler, Google
// indeksi ve reklam hedef sayfaları aynen kalır); İngilizce /en/ altında, kendi
// slug'larıyla. Sayfa şablonları src/views altında, iki dil aynı şablonu kullanır.

export const langs = ["tr", "en"] as const;
export type Lang = (typeof langs)[number];

export const routes = {
  home: { tr: "/", en: "/en/" },
  services: { tr: "/hizmetler", en: "/en/services" },
  gallery: { tr: "/galeri", en: "/en/gallery" },
  blog: { tr: "/blog", en: "/en/blog" },
  contact: { tr: "/iletisim", en: "/en/contact" },
  privacy: { tr: "/gizlilik-politikasi", en: "/en/privacy-policy" },
} satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Aynı sayfanın her dildeki adresi; çevirisi olmayan dil eksik kalır. */
export type Alternates = Partial<Record<Lang, string>>;

export const ui = {
  tr: {
    langName: "Türkçe",
    htmlLang: "tr",
    ogLocale: "tr_TR",
    dateLocale: "tr-TR",
    defaultTitle: "Çizgi Artizm — Duvar Resmi & Graffiti Sanatı",
    defaultDescription:
      "Türkiye genelinde profesyonel duvar resmi, graffiti, portre çizim ve araç airbrush boyama. Çizgi Artizm ile mekanlarınızı sanata çevirin.",
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
      tagline: "Duvar resmi, graffiti, portre çizim ve araç airbrush boyama. Türkiye geneli hizmet.",
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
    ogLocale: "en_US",
    dateLocale: "en-US",
    defaultTitle: "Çizgi Artizm — Mural & Graffiti Art",
    defaultDescription:
      "Professional murals, graffiti, portrait drawing and vehicle airbrush painting across Türkiye. Turn your spaces into art with Çizgi Artizm.",
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
      tagline: "Murals, graffiti, portrait drawing and vehicle airbrush painting. Serving all of Türkiye.",
      contact: "Contact",
      pages: "Pages",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
    },
    phones: ["+90 539 618 37 67", "+90 535 774 60 12"],
    lightbox: "Image viewer",
    close: "Close",
  },
} satisfies Record<Lang, unknown>;

export const navRoutes: RouteKey[] = ["home", "services", "gallery", "blog", "contact"];
