// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cizgiartizm.com',
  integrations: [sitemap()],
  // CSP'yi Astro yönetir: kendi ürettiği satır içi (inline) script ve style'lar için
  // otomatik sha256 hash üretip <meta> CSP olarak ekler. Böylece Cloudflare'de de
  // lightbox/menü script'leri çalışır. Diğer güvenlik başlıkları public/_headers'ta.
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        // Fontlar artık self-host (@fontsource) — dış font kaynağı yok
        "font-src 'self'",
        "connect-src 'self' https://api.web3forms.com",
        "form-action 'self' https://api.web3forms.com",
        "base-uri 'self'",
        "object-src 'none'",
        // frame-ancestors <meta> CSP'de geçersiz (tarayıcı yok sayar + konsol hatası);
        // clickjacking koruması public/_headers'taki X-Frame-Options: DENY ile sağlanıyor.
        "upgrade-insecure-requests",
      ],
      styleDirective: {
        resources: ["'self'"],
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
