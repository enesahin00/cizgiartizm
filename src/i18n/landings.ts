import { langs, routes, type Lang } from ".";
import { serviceLandings, type ServiceLanding, type ServiceLandingText } from "../data/serviceLandings";
import { en } from "../data/serviceLandings.en";
import { es } from "../data/serviceLandings.es";
import { ar } from "../data/serviceLandings.ar";

// Hizmet açılış sayfaları dört dilde. Türkçe kayıt asıldır: slug'ı sayfanın dilden
// bağımsız anahtarıdır (GA4 service parametresi, blog proje.hizmet); görselleri ve
// işleri çevirilerde de kullanılır. Türkçe sayfalar kökte (/okul-duvar-resmi/),
// çeviriler dil önekinin altında (/en/school-murals/).

export interface Landing extends ServiceLanding {
  /** Türkçe slug: dilden bağımsız anahtar */
  key: string;
  lang: Lang;
}

const translations: Record<Exclude<Lang, "tr">, Record<string, ServiceLandingText>> = { en, es, ar };

// Derleme sırasında yakalansın: eksik ya da fazla çeviri, Rich.astro'nun [etiket](/yol/)
// biçiminin tanımadığı slug (yalnız a-z, 0-9, -)
for (const [lang, entries] of Object.entries(translations)) {
  for (const s of serviceLandings) {
    if (!entries[s.slug]) throw new Error(`${s.slug}: ${lang} çevirisi yok`);
  }
  for (const [key, t] of Object.entries(entries)) {
    if (!serviceLandings.some((s) => s.slug === key)) throw new Error(`${lang}: Türkçe karşılığı olmayan çeviri: ${key}`);
    if (!/^[a-z0-9-]+$/.test(t.slug)) throw new Error(`${lang}: geçersiz slug: ${t.slug}`);
  }
}

export function getLandings(lang: Lang): Landing[] {
  return serviceLandings.map((s) =>
    lang === "tr" ? { ...s, key: s.slug, lang } : { ...s, ...translations[lang][s.slug], key: s.slug, lang }
  );
}

export const landingPath = (l: Landing) => `${routes.home[l.lang]}${l.slug}/`;

/** Aynı hizmet sayfasının her dildeki adresi (hreflang, dil kutucukları). */
export function landingAlternates(key: string): Record<Lang, string> {
  return Object.fromEntries(
    langs.map((lang) => [lang, landingPath(getLandings(lang).find((l) => l.key === key)!)])
  ) as Record<Lang, string>;
}
