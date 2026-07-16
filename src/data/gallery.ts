export type GalleryCategory = "duvar" | "portre" | "sudeposu" | "arac";

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
}

export const categories: { id: GalleryCategory; label: string }[] = [
  { id: "duvar", label: "Duvar Resmi & Graffiti" },
  { id: "portre", label: "Portre & İç Mekan" },
  { id: "sudeposu", label: "Su Deposu & Maskot" },
  { id: "arac", label: "Araç & Airbrush" },
];

// Sıra, cizgiartizm.com galeri sayfasıyla birebir aynıdır.
// src: sadece dosya adı — galeri sayfası bu adı kullanarak src/assets/images altındaki
// optimize edilmiş versiyonu thumbnail olarak, public/images altındaki orijinali lightbox için açar.
export const gallery: GalleryItem[] = [
  { src: "ucan-kaz-avm-duvar-resmi.png", alt: "AVM iç mekanında uçan kaz ve karakterler temalı turuncu duvar resmi", title: "Uçan Kaz — AVM", category: "duvar" },
  { src: "truva-ati-bina-cephesi-yapim-asamasi.jpg", alt: "Truva atı temalı bina cephesi duvar resminin yapım aşaması", title: "Truva Atı — Yapım Aşaması", category: "duvar" },
  { src: "truva-ati-tramvay-bina-cephesi-duvar-resmi.jpg", alt: "Bina cephesine yapılmış Truva atı, tramvay ve Brandenburg Kapısı temalı dev duvar resmi", title: "Truva Atı & Tramvay — Bina Cephesi", category: "duvar" },
  { src: "beyaz-kaplan-duvar-resmi.jpg", alt: "Duvara yapılmış gerçekçi beyaz kaplan duvar resmi", title: "Beyaz Kaplan", category: "duvar" },
  { src: "aydin-cine-jaguar-trafo-duvar-resmi.png", alt: "Aydın Çine'de trafo binasına yapılmış gerçekçi jaguar duvar resmi", title: "Jaguar — Aydın Çine Trafo", category: "duvar" },
  { src: "sari-spor-araba-3kplus-duvar-resmi.jpg", alt: "İç mekanda duvardan fırlayan 3K PLUS plakalı sarı spor araba duvar resmi", title: "Sarı Spor Araba", category: "duvar" },
  { src: "sosyal-medya-temali-renkli-ic-mekan-duvar-resmi.jpg", alt: "Ofis iç mekanında sosyal medya temalı renkli mural", title: "Sosyal Medya Temalı Ofis Murali", category: "duvar" },
  { src: "frida-kahlo-portre-ic-mekan-duvar-resmi.jpg", alt: "Turuncu zeminde güllerle çevrili Frida Kahlo portresi iç mekan duvar resmi", title: "Frida Kahlo — Portre", category: "portre" },
  { src: "sapkali-kadin-kahve-cafe-duvar-resmi.jpg", alt: "Kafe duvarında şapkalı, elinde buharı tüten kahve tutan kadın portresi", title: "Şapkalı Kadın & Kahve — Cafe", category: "portre" },
  { src: "zeus-poseidon-bina-cephesi-grafitti.jpg", alt: "Bina cephesine yapılmış Zeus/Poseidon yüzü graffitisi", title: "Zeus & Poseidon — Bina Cephesi", category: "duvar" },
  { src: "ejderha-ic-mekan-duvar-resmi.jpg", alt: "İç mekan duvarına yapılmış ateşli ejderha duvar resmi", title: "Ejderha — İç Mekan", category: "duvar" },
  { src: "su-altinda-kiz-batik-gemi-duvar-resmi.jpg", alt: "Su altında yüzen kız, deniz canlısı ve batık gemi temalı gerçekçi bahçe duvarı resmi", title: "Su Altında — Kız & Batık Gemi", category: "duvar" },
  { src: "bina-cephesi-iskele-yapim-asamasi.png", alt: "İskeleyle kaplı bina cephesinde duvar resminin yapım aşaması", title: "Bina Cephesi — Yapım Aşaması", category: "duvar" },
  { src: "melek-heykeli-ofis-duvar-resmi.jpg", alt: "Ofis duvarına yapılmış kanatlı melek heykeli temalı gri tonlu duvar resmi", title: "Melek Heykeli — Ofis", category: "portre" },
  { src: "renkli-kadin-portesi-grafitti.jpg", alt: "Saçlarında boncuk olan renkli kadın yüzü graffitisi", title: "Renkli Kadın Portresi", category: "portre" },
  { src: "mickey-mouse-minibus-airbrush.jpg", alt: "Minibüs yan yüzeyine airbrush ile yapılmış sörf yapan Mickey Mouse tasarımı", title: "Mickey Mouse — Minibüs Airbrush", category: "arac" },
  { src: "kalpakli-ataturk-portresi-yapim-asamasi.png", alt: "Sepetli vinçten çalışılan kalpaklı Atatürk portresi duvar resminin yapım aşaması", title: "Kalpaklı Atatürk Portresi — Yapım Aşaması", category: "portre" },
  { src: "ataturk-portresi-turk-bayragi-trafo-duvar-resmi.png", alt: "Kırmızı zeminde Türk bayrağı önünde siyah-beyaz Atatürk portresi trafo binası duvar resmi", title: "Atatürk Portresi — Trafo", category: "portre" },
  { src: "caliskan-anne-karikatur-ic-mekan-duvar-resmi.png", alt: "Aynı anda yemek yapan, temizlik yapan ve bebek emziren çok kollu anne karikatürü duvar resmi", title: "Çalışkan Anne — Karikatür", category: "duvar" },
  { src: "bubbles-cafe-kedi-ic-mekan-duvar-resmi.jpg", alt: "Bubbles Cafe için gözlüklü kedi ve kabarcık tipografili iç mekan duvar resmi", title: "Bubbles Cafe — Gözlüklü Kedi", category: "duvar" },
  { src: "fahrettin-altay-metro-piramit-figurler-duvar-resmi.jpg", alt: "Fahrettin Altay Metro İstasyonu'nda piramit başlı figürlerden oluşan duvar resmi", title: "Fahrettin Altay Metro — Figürler", category: "duvar" },
  { src: "kestane-maskot-su-deposu-boyama.jpg", alt: "Kestane rengi yüzlü karikatür su deposu boyaması", title: "Kestane Maskot — Su Deposu", category: "sudeposu" },
  { src: "altay-futbolcu-su-deposu-airbrush.jpg", alt: "Altay SK logolu ve futbolcu figürlü su deposu airbrush", title: "Altay SK — Su Deposu", category: "sudeposu" },
  { src: "dalmacyali-kopek-duvar-resmi.png", alt: "Turuncu zeminde dilini çıkarmış dalmaçyalı köpek duvar resmi", title: "Dalmaçyalı Köpek", category: "duvar" },
  { src: "mavi-yilan-trafo-duvar-resmi.jpg", alt: "Trafo binasına yapılmış kırmızı gözlü gerçekçi mavi yılan duvar resmi", title: "Mavi Yılan — Trafo", category: "duvar" },
  { src: "rau-cafe-afrikan-kadin-portreleri-ic-mekan-tasarim.jpeg", alt: "RAU Cafe için 3 Afrikalı kadın portresinden oluşan iç mekan duvar tasarımı", title: "RAU Cafe — İç Mekan Tasarımı", category: "portre" },
  { src: "cizgi-3d-tipografi-graffiti.jpg", alt: "Beton duvara yapılmış üç boyutlu kırmızı ÇİZGİ tipografi graffitisi", title: "ÇİZGİ — 3D Tipografi", category: "duvar" },
  { src: "diz-cokmus-melek-portre-duvar-resmi.png", alt: "Kırmızı yapraklar arasında diz çökmüş melek heykeli temalı duvar resmi", title: "Diz Çökmüş Melek", category: "portre" },
  { src: "izmir-sunger-kent-mavi-maskot-su-deposu-otobus-duragi.jpg", alt: "Sünger Kent İzmir logolu mavi maskot su deposu, otobüs durağı", title: "Sünger Kent İzmir — Maskot", category: "sudeposu" },
  { src: "rakunlar-motosiklet-mavi-duvar-resmi.png", alt: "Mavi duvarda motosiklet süren rakunlar ve kurt karakterleri duvar resmi", title: "Motosikletli Rakunlar", category: "duvar" },
  { src: "izmir-buyuksehir-dunya-kure-maskot-su-deposu.jpg", alt: "İzmir Büyükşehir için gülen yeşil dünya küresi maskot su deposu", title: "İzmir Büyükşehir — Yeşil Küre Maskotu", category: "sudeposu" },
  { src: "izmir-buyuksehir-mavi-kure-maskot-su-deposu.jpg", alt: "İzmir Büyükşehir için mavi küre maskot su deposu", title: "İzmir Büyükşehir — Mavi Küre Maskotu", category: "sudeposu" },
  { src: "rakunlar-duvar-resmi-yapim-asamasi.png", alt: "Rakun temalı duvar resminin siyah-beyaz yapım aşaması", title: "Rakunlar — Yapım Aşaması", category: "duvar" },
  { src: "altinordu-spor-kulubu-logo-su-deposu.jpg", alt: "Altınordu FK logosu boyalı beyaz su deposu", title: "Altınordu FK — Su Deposu", category: "sudeposu" },
  { src: "cocuk-ve-kus-trafo-duvar-resmi.jpg", alt: "Sarı-yeşil trafo binasında kırmızı kazaklı çocuk ve mavi kuş duvar resmi", title: "Çocuk & Kuş — Trafo", category: "duvar" },
  { src: "goril-grafitti-detay.jpg", alt: "Yeşil gözlü, detaylı goril yüzü graffiti detay çekimi", title: "Goril — Detay", category: "duvar" },
  { src: "metro-istasyonu-karikatur-yolcular-duvar-resmi.jpg", alt: "Metro istasyonunda karikatür yolcular duvar resmi", title: "Metro İstasyonu Karikatürleri", category: "duvar" },
  { src: "at-heykeli-melek-ic-mekan-yapim-asamasi.jpg", alt: "Şaha kalkan at heykeli ve melek temalı iç mekan duvar resminin yapım aşaması", title: "At Heykeli & Melek — Yapım Aşaması", category: "portre" },
  { src: "istanbul-temali-fabrika-cephesi-duvar-resmi.jpg", alt: "İstanbul temalı duvar resimleriyle kaplı fabrika binası cephesi", title: "İstanbul Temalı Fabrika Cephesi", category: "duvar" },
  { src: "karavan-doga-manzara-airbrush.png", alt: "Karavan yüzeyine airbrush ile yapılmış dağ ve göl manzarası tasarımı", title: "Karavan — Doğa Manzarası Airbrush", category: "arac" },
  { src: "karsiyaka-spor-kulubu-ksk-su-deposu.jpg", alt: "Karşıyaka SK (K.S.K. 1912) logosu boyalı kırmızı-yeşil su deposu", title: "Karşıyaka SK — Su Deposu", category: "sudeposu" },
  { src: "goztepe-spor-kulubu-su-deposu.png", alt: "Göztepe SK logosu boyalı kırmızı-sarı su deposu", title: "Göztepe SK — Su Deposu", category: "sudeposu" },
  { src: "tavsan-sincap-trafo-binasi-duvar-resmi.jpg", alt: "Yeşil trafo binasında kahverengi sincap ve beyaz tavşan duvar resmi", title: "Sincap & Tavşan — Trafo Binası", category: "duvar" },
  { src: "barista-kiz-kahve-bufesi-boyama.jpg", alt: "Kahve hazırlayan barista kız temalı büfe boyaması, park içi", title: "Barista Kız — Kahve Büfesi", category: "duvar" },
  { src: "izmir-kirmizi-su-deposu-otobus-duragi.jpg", alt: "Kırmızı su deposu, İzmir otobüs durağı", title: "Kırmızı Su Deposu", category: "sudeposu" },
  { src: "duvar-resmi-yapim-asamasi-sanatci.png", alt: "Sanatçının iskele üzerinde araç temalı duvar resmi çalışırken görüntüsü", title: "Atölyeden — Yapım Aşaması", category: "duvar" },
  { src: "istanbul-temali-bina-cephesi-hava-fotografi.jpg", alt: "İstanbul temalı duvar resimleriyle kaplı bina cephesinin havadan fotoğrafı", title: "İstanbul Temalı Bina Cephesi — Havadan", category: "duvar" },
  { src: "cocuk-kopek-aslan-bahce-duvari-resmi.jpg", alt: "Bahçe duvarında şapkalı çocuk, köpek ve aslan figürlü mural", title: "Çocuk, Köpek & Aslan — Bahçe Duvarı", category: "duvar" },
];
