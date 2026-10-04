// Sitedeki tüm iletişim bağlantılarını, teklif butonlarını ve galeri
// tıklamalarını tek bir dinleyiciyle GA4'e olay olarak gönderir. Yeni bir
// WhatsApp/telefon bağlantısı eklemek için ek kod gerekmez; href yeterli.
//
// Olaylar (GA4 > Yönetici > Etkinlikler'de "key event" olarak işaretlenecek):
//   whatsapp_click, phone_click, email_click, instagram_click
//   cta_click      — data-cta işaretli "Teklif Al" / "İletişime Geç" butonları
//   gallery_click  — galeri ve öne çıkan işlerde görsel büyütme
// Ortak parametre link_location: header | footer | floating | content
import { track } from "./analytics";

function linkLocation(el: Element): string {
  const area = el.closest<HTMLElement>("[data-track-location]");
  if (area?.dataset.trackLocation) return area.dataset.trackLocation;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  return "content";
}

function contactEvent(href: string): string | null {
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return "whatsapp_click";
  if (/^https:\/\/(www\.)?instagram\.com\//.test(href)) return "instagram_click";
  return null;
}

// capture: sayfa script'leri olayı durdursa bile ölçüm kaçmasın
document.addEventListener(
  "click",
  (e) => {
    if (!(e.target instanceof Element)) return;

    const cta = e.target.closest<HTMLElement>("[data-cta]");
    if (cta) {
      track("cta_click", {
        cta_id: cta.dataset.cta,
        cta_text: cta.textContent?.trim().replace(/\s+/g, " "),
        link_location: linkLocation(cta),
      });
    }

    const link = e.target.closest<HTMLAnchorElement>("a[href]");
    const contact = link && contactEvent(link.href);
    if (link && contact) {
      // ?text= hazır mesajı atılır: GA4 parametre değerini 100 karakterde keser
      track(contact, { link_url: link.href.split("?")[0], link_location: linkLocation(link) });
    }

    const item = e.target.closest<HTMLElement>(".gallery-item, .feat-item");
    if (item) {
      track("gallery_click", {
        item_name: item.dataset.caption ?? item.dataset.alt,
        link_location: linkLocation(item),
      });
    }
  },
  { capture: true }
);
