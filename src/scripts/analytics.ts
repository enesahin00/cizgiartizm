// Tarayıcı tarafı ölçüm yardımcısı. gtag, Layout.astro'daki Google etiketiyle
// tanımlanır; reklam engelleyici etiketi durdurursa olaylar sessizce düşer,
// sayfa davranışı etkilenmez.
import { ADS_CONVERSIONS } from "../config/tracking";

export type TrackParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(name: string, params: TrackParams = {}) {
  window.gtag?.("event", name, params);

  // Etiketi tanımlı olaylar ayrıca Google Ads dönüşümü olarak gider
  const sendTo = ADS_CONVERSIONS[name];
  if (sendTo) window.gtag?.("event", "conversion", { send_to: sendTo });

  // Clarity'de oturum kayıtlarını bu olaya göre süzebilmek için
  // ("WhatsApp'a tıklayanların kayıtları" gibi)
  window.clarity?.("event", name);
}
