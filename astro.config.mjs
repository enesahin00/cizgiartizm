// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages + özel alan adı: site kökten yayınlanır, base path gerekmez.
  site: 'https://cizgiartizm.com',
  integrations: [sitemap()],
  // Eski WordPress URL'leri (Google indeksi, reklam hedef sayfaları) yeni sayfalara gitsin.
  // Statik çıktıda her biri meta refresh + canonical içeren küçük bir HTML sayfası olur.
  redirects: {
    '/hizmetlerimiz': '/hizmetler',
    '/portre-cizim-fiyat-listesi': '/hizmetler',
    '/graffiti-duvar-resimleri': '/galeri?kategori=duvar',
    '/gallery/graffiti-duvar-resimleri': '/galeri?kategori=duvar',
    '/kisiye-ozel-portre-cizimleri': '/galeri?kategori=portre',
    '/kisiye-ozel-portre-cizim': '/galeri?kategori=portre',
    '/halida-portre-cizimleri': '/galeri?kategori=portre',
    '/sanatsal-graffiti-ve-arac-cizim-projeleri': '/galeri?kategori=arac',
    '/portfolio': '/galeri',
    '/portfolio/852': '/galeri',
    '/gallery/1039-2': '/galeri',
    '/gallery/1043-2': '/galeri',
    '/contact': '/iletisim',
    '/sample-page': '/',
    '/category/uncategorized': '/blog',
    '/lorem-ipsum': '/blog',
    '/lorem-ipsum-2': '/blog',
    '/lorem-ipsum-3': '/blog',
    '/blog-gonderisi-basligi': '/blog',
    '/graffiti-duvar-resmi': '/blog/bursa-graffiti-festivali',
    '/duvar-resmi-graffiti-cizim': '/blog/duvar-resmi-sanati',
    '/lnik': '/blog/profesyonel-graffiti-duvar-resmi-nasil-yapilir',
    '/kadina-yonelik-siddete-dikkat-cekmek-icin-ucyol-metro-istasyonunda-farkindalik-alani-acildi':
      '/blog/ucyol-metro-kadina-yonelik-siddet-farkindalik',
  },
  // CSP'yi Astro yönetir: kendi ürettiği satır içi (inline) script ve style'lar için
  // otomatik sha256 hash üretip <meta> CSP olarak ekler. Böylece Cloudflare'de de
  // lightbox/menü script'leri çalışır. Diğer güvenlik başlıkları public/_headers'ta.
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        // Google etiketi (GA4 + Ads) alan adları: Google'ın CSP rehberindeki liste
        "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com https://*.google.com.tr",
        // Fontlar artık self-host (@fontsource) — dış font kaynağı yok
        "font-src 'self'",
        "connect-src 'self' https://api.web3forms.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com https://*.google.com.tr https://pagead2.googlesyndication.com https://www.googleadservices.com",
        "frame-src https://td.doubleclick.net https://www.googletagmanager.com",
        "form-action 'self' https://api.web3forms.com",
        "base-uri 'self'",
        "object-src 'none'",
        // frame-ancestors <meta> CSP'de geçersiz (tarayıcı yok sayar + konsol hatası);
        // clickjacking koruması public/_headers'taki X-Frame-Options: DENY ile sağlanıyor.
        "upgrade-insecure-requests",
      ],
      scriptDirective: {
        resources: [
          "'self'",
          "https://www.googletagmanager.com",
          "https://www.googleadservices.com",
          "https://googleads.g.doubleclick.net",
          "https://www.google.com",
        ],
      },
      styleDirective: {
        resources: ["'self'"],
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
