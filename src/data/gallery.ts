import type { Lang } from "../i18n";

export type GalleryCategory = "duvar" | "portre" | "sudeposu" | "arac";

type Localized = Record<Lang, string>;

export interface GalleryItem {
  src: string;
  category: GalleryCategory;
  title: Localized;
  alt: Localized;
}

export const categories: { id: GalleryCategory; label: Localized }[] = [
  { id: "duvar", label: { tr: "Duvar Resmi & Graffiti", en: "Murals & Graffiti" } },
  { id: "portre", label: { tr: "Portre & İç Mekan", en: "Portraits & Interiors" } },
  { id: "sudeposu", label: { tr: "Su Deposu & Maskot", en: "Water Tanks & Mascots" } },
  { id: "arac", label: { tr: "Araç & Airbrush", en: "Vehicles & Airbrush" } },
];

// Sıra, cizgiartizm.com galeri sayfasıyla birebir aynıdır.
// src: sadece dosya adı — galeri sayfası bu adı kullanarak src/assets/images altındaki
// optimize edilmiş versiyonu thumbnail olarak, public/images altındaki orijinali lightbox için açar.
export const gallery: GalleryItem[] = [
  {
    src: "ucan-kaz-avm-duvar-resmi.png",
    category: "duvar",
    title: { tr: "Uçan Kaz — AVM", en: "Flying Goose — Shopping Mall" },
    alt: {
      tr: "AVM iç mekanında uçan kaz ve karakterler temalı turuncu duvar resmi",
      en: "Orange mural of a flying goose and cartoon characters inside a shopping mall",
    },
  },
  {
    src: "truva-ati-bina-cephesi-yapim-asamasi.jpg",
    category: "duvar",
    title: { tr: "Truva Atı — Yapım Aşaması", en: "Trojan Horse — Work in Progress" },
    alt: {
      tr: "Truva atı temalı bina cephesi duvar resminin yapım aşaması",
      en: "Work in progress on a Trojan Horse–themed building facade mural",
    },
  },
  {
    src: "truva-ati-tramvay-bina-cephesi-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Truva Atı & Tramvay — Bina Cephesi", en: "Trojan Horse & Tram — Building Facade" },
    alt: {
      tr: "Bina cephesine yapılmış Truva atı, tramvay ve Brandenburg Kapısı temalı dev duvar resmi",
      en: "Giant building facade mural featuring the Trojan Horse, a tram and the Brandenburg Gate",
    },
  },
  {
    src: "beyaz-kaplan-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Beyaz Kaplan", en: "White Tiger" },
    alt: {
      tr: "Duvara yapılmış gerçekçi beyaz kaplan duvar resmi",
      en: "Realistic white tiger mural painted on a wall",
    },
  },
  {
    src: "aydin-cine-jaguar-trafo-duvar-resmi.png",
    category: "duvar",
    title: { tr: "Jaguar — Aydın Çine Trafo", en: "Jaguar — Transformer Building, Çine" },
    alt: {
      tr: "Aydın Çine'de trafo binasına yapılmış gerçekçi jaguar duvar resmi",
      en: "Realistic jaguar mural on a transformer building in Çine, Aydın",
    },
  },
  {
    src: "sari-spor-araba-3kplus-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Sarı Spor Araba", en: "Yellow Sports Car" },
    alt: {
      tr: "İç mekanda duvardan fırlayan 3K PLUS plakalı sarı spor araba duvar resmi",
      en: "Indoor mural of a yellow sports car with a 3K PLUS license plate bursting out of the wall",
    },
  },
  {
    src: "sosyal-medya-temali-renkli-ic-mekan-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Sosyal Medya Temalı Ofis Murali", en: "Social Media–Themed Office Mural" },
    alt: {
      tr: "Ofis iç mekanında sosyal medya temalı renkli mural",
      en: "Colorful social media–themed mural in an office interior",
    },
  },
  {
    src: "frida-kahlo-portre-ic-mekan-duvar-resmi.jpg",
    category: "portre",
    title: { tr: "Frida Kahlo — Portre", en: "Frida Kahlo — Portrait" },
    alt: {
      tr: "Turuncu zeminde güllerle çevrili Frida Kahlo portresi iç mekan duvar resmi",
      en: "Indoor mural of Frida Kahlo surrounded by roses on an orange background",
    },
  },
  {
    src: "sapkali-kadin-kahve-cafe-duvar-resmi.jpg",
    category: "portre",
    title: { tr: "Şapkalı Kadın & Kahve — Cafe", en: "Woman in a Hat & Coffee — Café" },
    alt: {
      tr: "Kafe duvarında şapkalı, elinde buharı tüten kahve tutan kadın portresi",
      en: "Café wall portrait of a woman in a hat holding a steaming cup of coffee",
    },
  },
  {
    src: "zeus-poseidon-bina-cephesi-grafitti.jpg",
    category: "duvar",
    title: { tr: "Zeus & Poseidon — Bina Cephesi", en: "Zeus & Poseidon — Building Facade" },
    alt: {
      tr: "Bina cephesine yapılmış Zeus/Poseidon yüzü graffitisi",
      en: "Graffiti of Zeus/Poseidon's face on a building facade",
    },
  },
  {
    src: "ejderha-ic-mekan-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Ejderha — İç Mekan", en: "Dragon — Interior" },
    alt: {
      tr: "İç mekan duvarına yapılmış ateşli ejderha duvar resmi",
      en: "Fiery dragon mural painted on an interior wall",
    },
  },
  {
    src: "su-altinda-kiz-batik-gemi-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Su Altında — Kız & Batık Gemi", en: "Underwater — Girl & Shipwreck" },
    alt: {
      tr: "Su altında yüzen kız, deniz canlısı ve batık gemi temalı gerçekçi bahçe duvarı resmi",
      en: "Realistic garden wall mural of a girl swimming underwater with a sea creature and a sunken ship",
    },
  },
  {
    src: "bina-cephesi-iskele-yapim-asamasi.png",
    category: "duvar",
    title: { tr: "Bina Cephesi — Yapım Aşaması", en: "Building Facade — Work in Progress" },
    alt: {
      tr: "İskeleyle kaplı bina cephesinde duvar resminin yapım aşaması",
      en: "Mural in progress on a building facade covered with scaffolding",
    },
  },
  {
    src: "melek-heykeli-ofis-duvar-resmi.jpg",
    category: "portre",
    title: { tr: "Melek Heykeli — Ofis", en: "Angel Statue — Office" },
    alt: {
      tr: "Ofis duvarına yapılmış kanatlı melek heykeli temalı gri tonlu duvar resmi",
      en: "Gray-toned mural of a winged angel statue on an office wall",
    },
  },
  {
    src: "renkli-kadin-portesi-grafitti.jpg",
    category: "portre",
    title: { tr: "Renkli Kadın Portresi", en: "Colorful Portrait of a Woman" },
    alt: {
      tr: "Saçlarında boncuk olan renkli kadın yüzü graffitisi",
      en: "Colorful graffiti of a woman's face with beads in her hair",
    },
  },
  {
    src: "mickey-mouse-minibus-airbrush.jpg",
    category: "arac",
    title: { tr: "Mickey Mouse — Minibüs Airbrush", en: "Mickey Mouse — Minibus Airbrush" },
    alt: {
      tr: "Minibüs yan yüzeyine airbrush ile yapılmış sörf yapan Mickey Mouse tasarımı",
      en: "Airbrushed design of Mickey Mouse surfing on the side of a minibus",
    },
  },
  {
    src: "kalpakli-ataturk-portresi-yapim-asamasi.png",
    category: "portre",
    title: { tr: "Kalpaklı Atatürk Portresi — Yapım Aşaması", en: "Atatürk in Kalpak — Work in Progress" },
    alt: {
      tr: "Sepetli vinçten çalışılan kalpaklı Atatürk portresi duvar resminin yapım aşaması",
      en: "Work in progress on a mural of Atatürk wearing a kalpak, painted from a bucket crane",
    },
  },
  {
    src: "ataturk-portresi-turk-bayragi-trafo-duvar-resmi.png",
    category: "portre",
    title: { tr: "Atatürk Portresi — Trafo", en: "Atatürk Portrait — Transformer Building" },
    alt: {
      tr: "Kırmızı zeminde Türk bayrağı önünde siyah-beyaz Atatürk portresi trafo binası duvar resmi",
      en: "Black-and-white portrait of Atatürk in front of the Turkish flag on a red background, painted on a transformer building",
    },
  },
  {
    src: "caliskan-anne-karikatur-ic-mekan-duvar-resmi.png",
    category: "duvar",
    title: { tr: "Çalışkan Anne — Karikatür", en: "Hardworking Mother — Cartoon" },
    alt: {
      tr: "Aynı anda yemek yapan, temizlik yapan ve bebek emziren çok kollu anne karikatürü duvar resmi",
      en: "Cartoon mural of a many-armed mother cooking, cleaning and nursing a baby at the same time",
    },
  },
  {
    src: "bubbles-cafe-kedi-ic-mekan-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Bubbles Cafe — Gözlüklü Kedi", en: "Bubbles Cafe — Cat in Glasses" },
    alt: {
      tr: "Bubbles Cafe için gözlüklü kedi ve kabarcık tipografili iç mekan duvar resmi",
      en: "Indoor mural for Bubbles Cafe with a cat wearing glasses and bubble typography",
    },
  },
  {
    src: "fahrettin-altay-metro-piramit-figurler-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Fahrettin Altay Metro — Figürler", en: "Fahrettin Altay Metro — Figures" },
    alt: {
      tr: "Fahrettin Altay Metro İstasyonu'nda piramit başlı figürlerden oluşan duvar resmi",
      en: "Mural of pyramid-headed figures at Fahrettin Altay Metro Station",
    },
  },
  {
    src: "kestane-maskot-su-deposu-boyama.jpg",
    category: "sudeposu",
    title: { tr: "Kestane Maskot — Su Deposu", en: "Chestnut Mascot — Water Tank" },
    alt: {
      tr: "Kestane rengi yüzlü karikatür su deposu boyaması",
      en: "Water tank painted as a cartoon character with a chestnut-brown face",
    },
  },
  {
    src: "altay-futbolcu-su-deposu-airbrush.jpg",
    category: "sudeposu",
    title: { tr: "Altay SK — Su Deposu", en: "Altay SK — Water Tank" },
    alt: {
      tr: "Altay SK logolu ve futbolcu figürlü su deposu airbrush",
      en: "Airbrushed water tank with the Altay SK logo and a football player figure",
    },
  },
  {
    src: "dalmacyali-kopek-duvar-resmi.png",
    category: "duvar",
    title: { tr: "Dalmaçyalı Köpek", en: "Dalmatian" },
    alt: {
      tr: "Turuncu zeminde dilini çıkarmış dalmaçyalı köpek duvar resmi",
      en: "Mural of a Dalmatian sticking its tongue out on an orange background",
    },
  },
  {
    src: "mavi-yilan-trafo-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Mavi Yılan — Trafo", en: "Blue Snake — Transformer Building" },
    alt: {
      tr: "Trafo binasına yapılmış kırmızı gözlü gerçekçi mavi yılan duvar resmi",
      en: "Realistic red-eyed blue snake mural on a transformer building",
    },
  },
  {
    src: "rau-cafe-afrikan-kadin-portreleri-ic-mekan-tasarim.jpeg",
    category: "portre",
    title: { tr: "RAU Cafe — İç Mekan Tasarımı", en: "RAU Cafe — Interior Design" },
    alt: {
      tr: "RAU Cafe için 3 Afrikalı kadın portresinden oluşan iç mekan duvar tasarımı",
      en: "Interior wall design for RAU Cafe featuring portraits of three African women",
    },
  },
  {
    src: "cizgi-3d-tipografi-graffiti.jpg",
    category: "duvar",
    title: { tr: "ÇİZGİ — 3D Tipografi", en: "ÇİZGİ — 3D Typography" },
    alt: {
      tr: "Beton duvara yapılmış üç boyutlu kırmızı ÇİZGİ tipografi graffitisi",
      en: "Three-dimensional red ÇİZGİ typography graffiti on a concrete wall",
    },
  },
  {
    src: "diz-cokmus-melek-portre-duvar-resmi.png",
    category: "portre",
    title: { tr: "Diz Çökmüş Melek", en: "Kneeling Angel" },
    alt: {
      tr: "Kırmızı yapraklar arasında diz çökmüş melek heykeli temalı duvar resmi",
      en: "Mural of a kneeling angel statue among red leaves",
    },
  },
  {
    src: "izmir-sunger-kent-mavi-maskot-su-deposu-otobus-duragi.jpg",
    category: "sudeposu",
    title: { tr: "Sünger Kent İzmir — Maskot", en: "Sponge City İzmir — Mascot" },
    alt: {
      tr: "Sünger Kent İzmir logolu mavi maskot su deposu, otobüs durağı",
      en: "Blue mascot water tank with the Sünger Kent İzmir (Sponge City İzmir) logo at a bus stop",
    },
  },
  {
    src: "rakunlar-motosiklet-mavi-duvar-resmi.png",
    category: "duvar",
    title: { tr: "Motosikletli Rakunlar", en: "Raccoons on Motorcycles" },
    alt: {
      tr: "Mavi duvarda motosiklet süren rakunlar ve kurt karakterleri duvar resmi",
      en: "Mural of raccoons riding motorcycles and a wolf character on a blue wall",
    },
  },
  {
    src: "izmir-buyuksehir-dunya-kure-maskot-su-deposu.jpg",
    category: "sudeposu",
    title: { tr: "İzmir Büyükşehir — Yeşil Küre Maskotu", en: "İzmir Metropolitan — Green Globe Mascot" },
    alt: {
      tr: "İzmir Büyükşehir için gülen yeşil dünya küresi maskot su deposu",
      en: "Water tank painted as a smiling green globe mascot for İzmir Metropolitan Municipality",
    },
  },
  {
    src: "izmir-buyuksehir-mavi-kure-maskot-su-deposu.jpg",
    category: "sudeposu",
    title: { tr: "İzmir Büyükşehir — Mavi Küre Maskotu", en: "İzmir Metropolitan — Blue Globe Mascot" },
    alt: {
      tr: "İzmir Büyükşehir için mavi küre maskot su deposu",
      en: "Water tank painted as a blue globe mascot for İzmir Metropolitan Municipality",
    },
  },
  {
    src: "rakunlar-duvar-resmi-yapim-asamasi.png",
    category: "duvar",
    title: { tr: "Rakunlar — Yapım Aşaması", en: "Raccoons — Work in Progress" },
    alt: {
      tr: "Rakun temalı duvar resminin siyah-beyaz yapım aşaması",
      en: "Black-and-white work-in-progress stage of a raccoon-themed mural",
    },
  },
  {
    src: "altinordu-spor-kulubu-logo-su-deposu.jpg",
    category: "sudeposu",
    title: { tr: "Altınordu FK — Su Deposu", en: "Altınordu FK — Water Tank" },
    alt: {
      tr: "Altınordu FK logosu boyalı beyaz su deposu",
      en: "White water tank painted with the Altınordu FK logo",
    },
  },
  {
    src: "cocuk-ve-kus-trafo-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Çocuk & Kuş — Trafo", en: "Child & Bird — Transformer Building" },
    alt: {
      tr: "Sarı-yeşil trafo binasında kırmızı kazaklı çocuk ve mavi kuş duvar resmi",
      en: "Mural of a child in a red sweater and a blue bird on a yellow-green transformer building",
    },
  },
  {
    src: "goril-grafitti-detay.jpg",
    category: "duvar",
    title: { tr: "Goril — Detay", en: "Gorilla — Detail" },
    alt: {
      tr: "Yeşil gözlü, detaylı goril yüzü graffiti detay çekimi",
      en: "Close-up of a detailed, green-eyed gorilla face graffiti",
    },
  },
  {
    src: "metro-istasyonu-karikatur-yolcular-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Metro İstasyonu Karikatürleri", en: "Metro Station Cartoons" },
    alt: {
      tr: "Metro istasyonunda karikatür yolcular duvar resmi",
      en: "Mural of cartoon passengers at a metro station",
    },
  },
  {
    src: "at-heykeli-melek-ic-mekan-yapim-asamasi.jpg",
    category: "portre",
    title: { tr: "At Heykeli & Melek — Yapım Aşaması", en: "Horse Statue & Angel — Work in Progress" },
    alt: {
      tr: "Şaha kalkan at heykeli ve melek temalı iç mekan duvar resminin yapım aşaması",
      en: "Work in progress on an indoor mural of a rearing horse statue and an angel",
    },
  },
  {
    src: "istanbul-temali-fabrika-cephesi-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "İstanbul Temalı Fabrika Cephesi", en: "Istanbul-Themed Factory Facade" },
    alt: {
      tr: "İstanbul temalı duvar resimleriyle kaplı fabrika binası cephesi",
      en: "Factory building facade covered with Istanbul-themed murals",
    },
  },
  {
    src: "karavan-doga-manzara-airbrush.png",
    category: "arac",
    title: { tr: "Karavan — Doğa Manzarası Airbrush", en: "Caravan — Landscape Airbrush" },
    alt: {
      tr: "Karavan yüzeyine airbrush ile yapılmış dağ ve göl manzarası tasarımı",
      en: "Mountain and lake landscape airbrushed on the side of a caravan",
    },
  },
  {
    src: "karsiyaka-spor-kulubu-ksk-su-deposu.jpg",
    category: "sudeposu",
    title: { tr: "Karşıyaka SK — Su Deposu", en: "Karşıyaka SK — Water Tank" },
    alt: {
      tr: "Karşıyaka SK (K.S.K. 1912) logosu boyalı kırmızı-yeşil su deposu",
      en: "Red-and-green water tank painted with the Karşıyaka SK (K.S.K. 1912) logo",
    },
  },
  {
    src: "goztepe-spor-kulubu-su-deposu.png",
    category: "sudeposu",
    title: { tr: "Göztepe SK — Su Deposu", en: "Göztepe SK — Water Tank" },
    alt: {
      tr: "Göztepe SK logosu boyalı kırmızı-sarı su deposu",
      en: "Red-and-yellow water tank painted with the Göztepe SK logo",
    },
  },
  {
    src: "tavsan-sincap-trafo-binasi-duvar-resmi.jpg",
    category: "duvar",
    title: { tr: "Sincap & Tavşan — Trafo Binası", en: "Squirrel & Rabbit — Transformer Building" },
    alt: {
      tr: "Yeşil trafo binasında kahverengi sincap ve beyaz tavşan duvar resmi",
      en: "Mural of a brown squirrel and a white rabbit on a green transformer building",
    },
  },
  {
    src: "barista-kiz-kahve-bufesi-boyama.jpg",
    category: "duvar",
    title: { tr: "Barista Kız — Kahve Büfesi", en: "Barista Girl — Coffee Kiosk" },
    alt: {
      tr: "Kahve hazırlayan barista kız temalı büfe boyaması, park içi",
      en: "Kiosk in a park painted with a barista girl making coffee",
    },
  },
  {
    src: "izmir-kirmizi-su-deposu-otobus-duragi.jpg",
    category: "sudeposu",
    title: { tr: "Kırmızı Su Deposu", en: "Red Water Tank" },
    alt: {
      tr: "Kırmızı su deposu, İzmir otobüs durağı",
      en: "Red water tank at a bus stop in İzmir",
    },
  },
  {
    src: "duvar-resmi-yapim-asamasi-sanatci.png",
    category: "duvar",
    title: { tr: "Atölyeden — Yapım Aşaması", en: "Behind the Scenes — Work in Progress" },
    alt: {
      tr: "Sanatçının iskele üzerinde araç temalı duvar resmi çalışırken görüntüsü",
      en: "The artist on scaffolding, painting a vehicle-themed mural",
    },
  },
  {
    src: "istanbul-temali-bina-cephesi-hava-fotografi.jpg",
    category: "duvar",
    title: { tr: "İstanbul Temalı Bina Cephesi — Havadan", en: "Istanbul-Themed Building Facade — Aerial View" },
    alt: {
      tr: "İstanbul temalı duvar resimleriyle kaplı bina cephesinin havadan fotoğrafı",
      en: "Aerial photo of a building facade covered with Istanbul-themed murals",
    },
  },
  {
    src: "cocuk-kopek-aslan-bahce-duvari-resmi.jpg",
    category: "duvar",
    title: { tr: "Çocuk, Köpek & Aslan — Bahçe Duvarı", en: "Child, Dog & Lion — Garden Wall" },
    alt: {
      tr: "Bahçe duvarında şapkalı çocuk, köpek ve aslan figürlü mural",
      en: "Garden wall mural featuring a child in a hat, a dog and a lion",
    },
  },
];
