// Tarayıcı tarafı ölçüm yardımcısı. gtag, Layout.astro'daki Google etiketiyle
// tanımlanır; reklam engelleyici etiketi durdurursa olaylar sessizce düşer,
// sayfa davranışı etkilenmez.

export type TrackParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(name: string, params: TrackParams = {}) {
  window.gtag?.("event", name, params);
}
