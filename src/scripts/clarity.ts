// Microsoft Clarity: ısı haritası ve anonim oturum kaydı. Resmi snippet'in
// paketlenmiş hali; satır içi script olmadığı için CSP'ye hash eklemek
// gerekmez, yalnız alan adları (astro.config.mjs) yeterli.
import { CLARITY_PROJECT_ID } from "../config/tracking";

declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

if (CLARITY_PROJECT_ID) {
  // Script inene kadar çağrılar kuyrukta bekler (resmi snippet ile aynı)
  window.clarity ??= Object.assign(
    (...args: unknown[]) => {
      (window.clarity!.q ??= []).push(args);
    },
    { q: [] as unknown[][] }
  );
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  document.head.appendChild(s);
}
