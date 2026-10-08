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
  {
    id: "duvar",
    label: { tr: "Duvar Resmi & Graffiti", en: "Murals & Graffiti", es: "Murales y grafiti", ar: "الجداريات والجرافيتي" },
  },
  {
    id: "portre",
    label: { tr: "Portre & İç Mekan", en: "Portraits & Interiors", es: "Retratos e interiores", ar: "البورتريه والمساحات الداخلية" },
  },
  {
    id: "sudeposu",
    label: { tr: "Su Deposu & Maskot", en: "Water Tanks & Mascots", es: "Depósitos de agua y mascotas", ar: "خزانات المياه والشخصيات الكرتونية" },
  },
  {
    id: "arac",
    label: { tr: "Araç & Airbrush", en: "Vehicles & Airbrush", es: "Vehículos y aerografía", ar: "المركبات والإيربرش" },
  },
];

// Sıra, cizgiartizm.com galeri sayfasıyla birebir aynıdır.
// src: sadece dosya adı — galeri sayfası bu adı kullanarak src/assets/images altındaki
// optimize edilmiş versiyonu thumbnail olarak, public/images altındaki orijinali lightbox için açar.
export const gallery: GalleryItem[] = [
  {
    src: "ucan-kaz-avm-duvar-resmi.png",
    category: "duvar",
    title: {
      tr: "Uçan Kaz — AVM",
      en: "Flying Goose — Shopping Mall",
      es: "Ganso volador — Centro comercial",
      ar: "الإوزة الطائرة — مركز تسوق",
    },
    alt: {
      tr: "AVM iç mekanında uçan kaz ve karakterler temalı turuncu duvar resmi",
      en: "Orange mural of a flying goose and cartoon characters inside a shopping mall",
      es: "Mural naranja con un ganso volador y personajes de dibujos animados en el interior de un centro comercial",
      ar: "جدارية برتقالية لإوزة طائرة وشخصيات كرتونية داخل مركز تسوق",
    },
  },
  {
    src: "truva-ati-bina-cephesi-yapim-asamasi.jpg",
    category: "duvar",
    title: {
      tr: "Truva Atı — Yapım Aşaması",
      en: "Trojan Horse — Work in Progress",
      es: "Caballo de Troya — En proceso",
      ar: "حصان طروادة — أثناء التنفيذ",
    },
    alt: {
      tr: "Truva atı temalı bina cephesi duvar resminin yapım aşaması",
      en: "Work in progress on a Trojan Horse–themed building facade mural",
      es: "Mural en proceso con temática del caballo de Troya en la fachada de un edificio",
      ar: "جدارية بموضوع حصان طروادة على واجهة مبنى أثناء التنفيذ",
    },
  },
  {
    src: "truva-ati-tramvay-bina-cephesi-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Truva Atı & Tramvay — Bina Cephesi",
      en: "Trojan Horse & Tram — Building Facade",
      es: "Caballo de Troya y tranvía — Fachada",
      ar: "حصان طروادة والترام — واجهة مبنى",
    },
    alt: {
      tr: "Bina cephesine yapılmış Truva atı, tramvay ve Brandenburg Kapısı temalı dev duvar resmi",
      en: "Giant building facade mural featuring the Trojan Horse, a tram and the Brandenburg Gate",
      es: "Mural gigante en la fachada de un edificio con el caballo de Troya, un tranvía y la Puerta de Brandeburgo",
      ar: "جدارية ضخمة على واجهة مبنى تضم حصان طروادة والترام وبوابة براندنبورغ",
    },
  },
  {
    src: "beyaz-kaplan-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Beyaz Kaplan",
      en: "White Tiger",
      es: "Tigre blanco",
      ar: "النمر الأبيض",
    },
    alt: {
      tr: "Duvara yapılmış gerçekçi beyaz kaplan duvar resmi",
      en: "Realistic white tiger mural painted on a wall",
      es: "Mural realista de un tigre blanco pintado en una pared",
      ar: "جدارية واقعية لنمر أبيض مرسومة على جدار",
    },
  },
  {
    src: "aydin-cine-jaguar-trafo-duvar-resmi.png",
    category: "duvar",
    title: {
      tr: "Jaguar — Aydın Çine Trafo",
      en: "Jaguar — Transformer Building, Çine",
      es: "Jaguar — Caseta eléctrica, Çine",
      ar: "الجاغوار — مبنى محولات في آيدين",
    },
    alt: {
      tr: "Aydın Çine'de trafo binasına yapılmış gerçekçi jaguar duvar resmi",
      en: "Realistic jaguar mural on a transformer building in Çine, Aydın",
      es: "Mural realista de un jaguar en una caseta eléctrica de Çine (Aydın)",
      ar: "جدارية واقعية لحيوان الجاغوار على مبنى محولات كهربائية في ولاية آيدين",
    },
  },
  {
    src: "sari-spor-araba-3kplus-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Sarı Spor Araba",
      en: "Yellow Sports Car",
      es: "Deportivo amarillo",
      ar: "السيارة الرياضية الصفراء",
    },
    alt: {
      tr: "İç mekanda duvardan fırlayan 3K PLUS plakalı sarı spor araba duvar resmi",
      en: "Indoor mural of a yellow sports car with a 3K PLUS license plate bursting out of the wall",
      es: "Mural interior de un deportivo amarillo con matrícula 3K PLUS que parece salir de la pared",
      ar: "جدارية داخلية لسيارة رياضية صفراء تحمل لوحة 3K PLUS وكأنها تخرج من الجدار",
    },
  },
  {
    src: "sosyal-medya-temali-renkli-ic-mekan-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Sosyal Medya Temalı Ofis Murali",
      en: "Social Media–Themed Office Mural",
      es: "Mural de oficina sobre redes sociales",
      ar: "جدارية مكتب بموضوع وسائل التواصل الاجتماعي",
    },
    alt: {
      tr: "Ofis iç mekanında sosyal medya temalı renkli mural",
      en: "Colorful social media–themed mural in an office interior",
      es: "Mural colorido sobre redes sociales en el interior de una oficina",
      ar: "جدارية ملونة بموضوع وسائل التواصل الاجتماعي داخل مكتب",
    },
  },
  {
    src: "frida-kahlo-portre-ic-mekan-duvar-resmi.jpg",
    category: "portre",
    title: {
      tr: "Frida Kahlo — Portre",
      en: "Frida Kahlo — Portrait",
      es: "Frida Kahlo — Retrato",
      ar: "فريدا كاهلو — بورتريه",
    },
    alt: {
      tr: "Turuncu zeminde güllerle çevrili Frida Kahlo portresi iç mekan duvar resmi",
      en: "Indoor mural of Frida Kahlo surrounded by roses on an orange background",
      es: "Mural interior de Frida Kahlo rodeada de rosas sobre fondo naranja",
      ar: "جدارية داخلية لفريدا كاهلو تحيط بها الورود على خلفية برتقالية",
    },
  },
  {
    src: "sapkali-kadin-kahve-cafe-duvar-resmi.jpg",
    category: "portre",
    title: {
      tr: "Şapkalı Kadın & Kahve — Cafe",
      en: "Woman in a Hat & Coffee — Café",
      es: "Mujer con sombrero y café — Cafetería",
      ar: "امرأة بقبعة وقهوة — مقهى",
    },
    alt: {
      tr: "Kafe duvarında şapkalı, elinde buharı tüten kahve tutan kadın portresi",
      en: "Café wall portrait of a woman in a hat holding a steaming cup of coffee",
      es: "Retrato en la pared de una cafetería de una mujer con sombrero que sostiene una taza de café humeante",
      ar: "بورتريه على جدار مقهى لامرأة ترتدي قبعة وتحمل فنجان قهوة يتصاعد منه البخار",
    },
  },
  {
    src: "zeus-poseidon-bina-cephesi-grafitti.jpg",
    category: "duvar",
    title: {
      tr: "Zeus & Poseidon — Bina Cephesi",
      en: "Zeus & Poseidon — Building Facade",
      es: "Zeus y Poseidón — Fachada",
      ar: "زيوس وبوسيدون — واجهة مبنى",
    },
    alt: {
      tr: "Bina cephesine yapılmış Zeus/Poseidon yüzü graffitisi",
      en: "Graffiti of Zeus/Poseidon's face on a building facade",
      es: "Grafiti del rostro de Zeus/Poseidón en la fachada de un edificio",
      ar: "جرافيتي لوجه زيوس/بوسيدون على واجهة مبنى",
    },
  },
  {
    src: "ejderha-ic-mekan-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Ejderha — İç Mekan",
      en: "Dragon — Interior",
      es: "Dragón — Interior",
      ar: "التنين — مساحة داخلية",
    },
    alt: {
      tr: "İç mekan duvarına yapılmış ateşli ejderha duvar resmi",
      en: "Fiery dragon mural painted on an interior wall",
      es: "Mural de un dragón que escupe fuego en una pared interior",
      ar: "جدارية لتنين ينفث النار على جدار داخلي",
    },
  },
  {
    src: "su-altinda-kiz-batik-gemi-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Su Altında — Kız & Batık Gemi",
      en: "Underwater — Girl & Shipwreck",
      es: "Bajo el agua — Niña y barco hundido",
      ar: "تحت الماء — فتاة وسفينة غارقة",
    },
    alt: {
      tr: "Su altında yüzen kız, deniz canlısı ve batık gemi temalı gerçekçi bahçe duvarı resmi",
      en: "Realistic garden wall mural of a girl swimming underwater with a sea creature and a sunken ship",
      es: "Mural realista en el muro de un jardín con una niña nadando bajo el agua, una criatura marina y un barco hundido",
      ar: "جدارية واقعية على سور حديقة لفتاة تسبح تحت الماء مع كائن بحري وسفينة غارقة",
    },
  },
  {
    src: "bina-cephesi-iskele-yapim-asamasi.png",
    category: "duvar",
    title: {
      tr: "Bina Cephesi — Yapım Aşaması",
      en: "Building Facade — Work in Progress",
      es: "Fachada — En proceso",
      ar: "واجهة مبنى — أثناء التنفيذ",
    },
    alt: {
      tr: "İskeleyle kaplı bina cephesinde duvar resminin yapım aşaması",
      en: "Mural in progress on a building facade covered with scaffolding",
      es: "Mural en proceso en la fachada de un edificio cubierta de andamios",
      ar: "جدارية أثناء التنفيذ على واجهة مبنى تغطيها السقالات",
    },
  },
  {
    src: "melek-heykeli-ofis-duvar-resmi.jpg",
    category: "portre",
    title: {
      tr: "Melek Heykeli — Ofis",
      en: "Angel Statue — Office",
      es: "Estatua de ángel — Oficina",
      ar: "تمثال الملاك — مكتب",
    },
    alt: {
      tr: "Ofis duvarına yapılmış kanatlı melek heykeli temalı gri tonlu duvar resmi",
      en: "Gray-toned mural of a winged angel statue on an office wall",
      es: "Mural en tonos grises de una estatua de ángel alado en la pared de una oficina",
      ar: "جدارية بدرجات الرمادي لتمثال ملاك مجنّح على جدار مكتب",
    },
  },
  {
    src: "renkli-kadin-portesi-grafitti.jpg",
    category: "portre",
    title: {
      tr: "Renkli Kadın Portresi",
      en: "Colorful Portrait of a Woman",
      es: "Retrato colorido de mujer",
      ar: "بورتريه ملوّن لامرأة",
    },
    alt: {
      tr: "Saçlarında boncuk olan renkli kadın yüzü graffitisi",
      en: "Colorful graffiti of a woman's face with beads in her hair",
      es: "Grafiti colorido del rostro de una mujer con cuentas en el pelo",
      ar: "جرافيتي ملوّن لوجه امرأة يزيّن الخرز شعرها",
    },
  },
  {
    src: "mickey-mouse-minibus-airbrush.jpg",
    category: "arac",
    title: {
      tr: "Mickey Mouse — Minibüs Airbrush",
      en: "Mickey Mouse — Minibus Airbrush",
      es: "Mickey Mouse — Aerografía en minibús",
      ar: "ميكي ماوس — إيربرش على حافلة صغيرة",
    },
    alt: {
      tr: "Minibüs yan yüzeyine airbrush ile yapılmış sörf yapan Mickey Mouse tasarımı",
      en: "Airbrushed design of Mickey Mouse surfing on the side of a minibus",
      es: "Diseño aerografiado de Mickey Mouse haciendo surf en el lateral de un minibús",
      ar: "تصميم بتقنية الإيربرش لميكي ماوس يركب الأمواج على جانب حافلة صغيرة",
    },
  },
  {
    src: "kalpakli-ataturk-portresi-yapim-asamasi.png",
    category: "portre",
    title: {
      tr: "Kalpaklı Atatürk Portresi — Yapım Aşaması",
      en: "Atatürk in Kalpak — Work in Progress",
      es: "Atatürk con kalpak — En proceso",
      ar: "أتاتورك بالقلبق — أثناء التنفيذ",
    },
    alt: {
      tr: "Sepetli vinçten çalışılan kalpaklı Atatürk portresi duvar resminin yapım aşaması",
      en: "Work in progress on a mural of Atatürk wearing a kalpak, painted from a bucket crane",
      es: "Mural en proceso de Atatürk con kalpak, pintado desde una plataforma elevadora",
      ar: "جدارية لأتاتورك مرتدياً القلبق (القبعة الفروية) أثناء رسمها من رافعة ذات سلة",
    },
  },
  {
    src: "ataturk-portresi-turk-bayragi-trafo-duvar-resmi.png",
    category: "portre",
    title: {
      tr: "Atatürk Portresi — Trafo",
      en: "Atatürk Portrait — Transformer Building",
      es: "Retrato de Atatürk — Caseta eléctrica",
      ar: "بورتريه أتاتورك — مبنى محولات",
    },
    alt: {
      tr: "Kırmızı zeminde Türk bayrağı önünde siyah-beyaz Atatürk portresi trafo binası duvar resmi",
      en: "Black-and-white portrait of Atatürk in front of the Turkish flag on a red background, painted on a transformer building",
      es: "Retrato en blanco y negro de Atatürk ante la bandera turca sobre fondo rojo, pintado en una caseta eléctrica",
      ar: "بورتريه بالأبيض والأسود لأتاتورك أمام العلم التركي على خلفية حمراء، مرسوم على مبنى محولات كهربائية",
    },
  },
  {
    src: "caliskan-anne-karikatur-ic-mekan-duvar-resmi.png",
    category: "duvar",
    title: {
      tr: "Çalışkan Anne — Karikatür",
      en: "Hardworking Mother — Cartoon",
      es: "Madre trabajadora — Caricatura",
      ar: "الأم المجتهدة — كاريكاتير",
    },
    alt: {
      tr: "Aynı anda yemek yapan, temizlik yapan ve bebek emziren çok kollu anne karikatürü duvar resmi",
      en: "Cartoon mural of a many-armed mother cooking, cleaning and nursing a baby at the same time",
      es: "Mural caricaturesco de una madre con muchos brazos que cocina, limpia y amamanta a su bebé a la vez",
      ar: "جدارية كاريكاتيرية لأم بأذرع كثيرة تطبخ وتنظّف وترضع طفلها في الوقت نفسه",
    },
  },
  {
    src: "bubbles-cafe-kedi-ic-mekan-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Bubbles Cafe — Gözlüklü Kedi",
      en: "Bubbles Cafe — Cat in Glasses",
      es: "Bubbles Cafe — Gato con gafas",
      ar: "Bubbles Cafe — قطة بنظارة",
    },
    alt: {
      tr: "Bubbles Cafe için gözlüklü kedi ve kabarcık tipografili iç mekan duvar resmi",
      en: "Indoor mural for Bubbles Cafe with a cat wearing glasses and bubble typography",
      es: "Mural interior para Bubbles Cafe con un gato con gafas y tipografía de burbujas",
      ar: "جدارية داخلية لمقهى Bubbles Cafe تضم قطة ترتدي نظارة وكتابة بحروف على شكل فقاعات",
    },
  },
  {
    src: "fahrettin-altay-metro-piramit-figurler-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Fahrettin Altay Metro — Figürler",
      en: "Fahrettin Altay Metro — Figures",
      es: "Metro Fahrettin Altay — Figuras",
      ar: "مترو فخر الدين ألتاي — شخصيات",
    },
    alt: {
      tr: "Fahrettin Altay Metro İstasyonu'nda piramit başlı figürlerden oluşan duvar resmi",
      en: "Mural of pyramid-headed figures at Fahrettin Altay Metro Station",
      es: "Mural de figuras con cabeza de pirámide en la estación de metro Fahrettin Altay",
      ar: "جدارية لشخصيات برؤوس هرمية في محطة مترو فخر الدين ألتاي",
    },
  },
  {
    src: "kestane-maskot-su-deposu-boyama.jpg",
    category: "sudeposu",
    title: {
      tr: "Kestane Maskot — Su Deposu",
      en: "Chestnut Mascot — Water Tank",
      es: "Mascota Castaña — Depósito de agua",
      ar: "شخصية الكستناء — خزان مياه",
    },
    alt: {
      tr: "Kestane rengi yüzlü karikatür su deposu boyaması",
      en: "Water tank painted as a cartoon character with a chestnut-brown face",
      es: "Depósito de agua pintado como un personaje de dibujos animados con cara de color castaño",
      ar: "خزان مياه مرسوم على شكل شخصية كرتونية بوجه بلون الكستناء",
    },
  },
  {
    src: "altay-futbolcu-su-deposu-airbrush.jpg",
    category: "sudeposu",
    title: {
      tr: "Altay SK — Su Deposu",
      en: "Altay SK — Water Tank",
      es: "Altay SK — Depósito de agua",
      ar: "Altay SK — خزان مياه",
    },
    alt: {
      tr: "Altay SK logolu ve futbolcu figürlü su deposu airbrush",
      en: "Airbrushed water tank with the Altay SK logo and a football player figure",
      es: "Depósito de agua aerografiado con el escudo del Altay SK y la figura de un futbolista",
      ar: "خزان مياه مرسوم بتقنية الإيربرش يحمل شعار نادي Altay SK وصورة لاعب كرة قدم",
    },
  },
  {
    src: "dalmacyali-kopek-duvar-resmi.png",
    category: "duvar",
    title: {
      tr: "Dalmaçyalı Köpek",
      en: "Dalmatian",
      es: "Dálmata",
      ar: "الكلب الدلماسي",
    },
    alt: {
      tr: "Turuncu zeminde dilini çıkarmış dalmaçyalı köpek duvar resmi",
      en: "Mural of a Dalmatian sticking its tongue out on an orange background",
      es: "Mural de un dálmata sacando la lengua sobre fondo naranja",
      ar: "جدارية لكلب دلماسي يُخرج لسانه على خلفية برتقالية",
    },
  },
  {
    src: "mavi-yilan-trafo-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Mavi Yılan — Trafo",
      en: "Blue Snake — Transformer Building",
      es: "Serpiente azul — Caseta eléctrica",
      ar: "الأفعى الزرقاء — مبنى محولات",
    },
    alt: {
      tr: "Trafo binasına yapılmış kırmızı gözlü gerçekçi mavi yılan duvar resmi",
      en: "Realistic red-eyed blue snake mural on a transformer building",
      es: "Mural realista de una serpiente azul de ojos rojos en una caseta eléctrica",
      ar: "جدارية واقعية لأفعى زرقاء بعيون حمراء على مبنى محولات كهربائية",
    },
  },
  {
    src: "rau-cafe-afrikan-kadin-portreleri-ic-mekan-tasarim.jpeg",
    category: "portre",
    title: {
      tr: "RAU Cafe — İç Mekan Tasarımı",
      en: "RAU Cafe — Interior Design",
      es: "RAU Cafe — Diseño interior",
      ar: "RAU Cafe — تصميم داخلي",
    },
    alt: {
      tr: "RAU Cafe için 3 Afrikalı kadın portresinden oluşan iç mekan duvar tasarımı",
      en: "Interior wall design for RAU Cafe featuring portraits of three African women",
      es: "Diseño mural interior para RAU Cafe con retratos de tres mujeres africanas",
      ar: "تصميم جداري داخلي لمقهى RAU Cafe يضم بورتريهات لثلاث نساء أفريقيات",
    },
  },
  {
    src: "cizgi-3d-tipografi-graffiti.jpg",
    category: "duvar",
    title: {
      tr: "ÇİZGİ — 3D Tipografi",
      en: "ÇİZGİ — 3D Typography",
      es: "ÇİZGİ — Tipografía 3D",
      ar: "ÇİZGİ — كتابة ثلاثية الأبعاد",
    },
    alt: {
      tr: "Beton duvara yapılmış üç boyutlu kırmızı ÇİZGİ tipografi graffitisi",
      en: "Three-dimensional red ÇİZGİ typography graffiti on a concrete wall",
      es: "Grafiti tipográfico tridimensional en rojo con la palabra ÇİZGİ sobre un muro de hormigón",
      ar: "جرافيتي بكتابة حمراء ثلاثية الأبعاد لكلمة ÇİZGİ على جدار خرساني",
    },
  },
  {
    src: "diz-cokmus-melek-portre-duvar-resmi.png",
    category: "portre",
    title: {
      tr: "Diz Çökmüş Melek",
      en: "Kneeling Angel",
      es: "Ángel arrodillado",
      ar: "الملاك الجاثي",
    },
    alt: {
      tr: "Kırmızı yapraklar arasında diz çökmüş melek heykeli temalı duvar resmi",
      en: "Mural of a kneeling angel statue among red leaves",
      es: "Mural de una estatua de ángel arrodillado entre hojas rojas",
      ar: "جدارية لتمثال ملاك جاثٍ على ركبتيه بين أوراق حمراء",
    },
  },
  {
    src: "izmir-sunger-kent-mavi-maskot-su-deposu-otobus-duragi.jpg",
    category: "sudeposu",
    title: {
      tr: "Sünger Kent İzmir — Maskot",
      en: "Sponge City İzmir — Mascot",
      es: "Esmirna Ciudad Esponja — Mascota",
      ar: "إزمير المدينة الإسفنجية — شخصية كرتونية",
    },
    alt: {
      tr: "Sünger Kent İzmir logolu mavi maskot su deposu, otobüs durağı",
      en: "Blue mascot water tank with the Sünger Kent İzmir (Sponge City İzmir) logo at a bus stop",
      es: "Depósito de agua con una mascota azul y el logotipo de Sünger Kent İzmir (Esmirna Ciudad Esponja) en una parada de autobús",
      ar: "خزان مياه بشخصية كرتونية زرقاء وشعار Sünger Kent İzmir (إزمير المدينة الإسفنجية) عند موقف حافلات",
    },
  },
  {
    src: "rakunlar-motosiklet-mavi-duvar-resmi.png",
    category: "duvar",
    title: {
      tr: "Motosikletli Rakunlar",
      en: "Raccoons on Motorcycles",
      es: "Mapaches en moto",
      ar: "حيوانات الراكون على الدراجات النارية",
    },
    alt: {
      tr: "Mavi duvarda motosiklet süren rakunlar ve kurt karakterleri duvar resmi",
      en: "Mural of raccoons riding motorcycles and a wolf character on a blue wall",
      es: "Mural de mapaches en moto y un personaje de lobo sobre una pared azul",
      ar: "جدارية لحيوانات راكون تقود دراجات نارية مع شخصية ذئب على جدار أزرق",
    },
  },
  {
    src: "izmir-buyuksehir-dunya-kure-maskot-su-deposu.jpg",
    category: "sudeposu",
    title: {
      tr: "İzmir Büyükşehir — Yeşil Küre Maskotu",
      en: "İzmir Metropolitan — Green Globe Mascot",
      es: "Esmirna Metropolitana — Mascota del globo verde",
      ar: "بلدية إزمير الكبرى — شخصية الكرة الأرضية الخضراء",
    },
    alt: {
      tr: "İzmir Büyükşehir için gülen yeşil dünya küresi maskot su deposu",
      en: "Water tank painted as a smiling green globe mascot for İzmir Metropolitan Municipality",
      es: "Depósito de agua pintado como un sonriente globo terráqueo verde para el Ayuntamiento Metropolitano de Esmirna",
      ar: "خزان مياه مرسوم على شكل كرة أرضية خضراء مبتسمة لصالح بلدية إزمير الكبرى",
    },
  },
  {
    src: "izmir-buyuksehir-mavi-kure-maskot-su-deposu.jpg",
    category: "sudeposu",
    title: {
      tr: "İzmir Büyükşehir — Mavi Küre Maskotu",
      en: "İzmir Metropolitan — Blue Globe Mascot",
      es: "Esmirna Metropolitana — Mascota del globo azul",
      ar: "بلدية إزمير الكبرى — شخصية الكرة الزرقاء",
    },
    alt: {
      tr: "İzmir Büyükşehir için mavi küre maskot su deposu",
      en: "Water tank painted as a blue globe mascot for İzmir Metropolitan Municipality",
      es: "Depósito de agua pintado como una mascota con forma de globo azul para el Ayuntamiento Metropolitano de Esmirna",
      ar: "خزان مياه مرسوم على شكل شخصية كروية زرقاء لصالح بلدية إزمير الكبرى",
    },
  },
  {
    src: "rakunlar-duvar-resmi-yapim-asamasi.png",
    category: "duvar",
    title: {
      tr: "Rakunlar — Yapım Aşaması",
      en: "Raccoons — Work in Progress",
      es: "Mapaches — En proceso",
      ar: "حيوانات الراكون — أثناء التنفيذ",
    },
    alt: {
      tr: "Rakun temalı duvar resminin siyah-beyaz yapım aşaması",
      en: "Black-and-white work-in-progress stage of a raccoon-themed mural",
      es: "Fase en blanco y negro de un mural de mapaches en proceso",
      ar: "مرحلة بالأبيض والأسود من جدارية بموضوع حيوانات الراكون أثناء التنفيذ",
    },
  },
  {
    src: "altinordu-spor-kulubu-logo-su-deposu.jpg",
    category: "sudeposu",
    title: {
      tr: "Altınordu FK — Su Deposu",
      en: "Altınordu FK — Water Tank",
      es: "Altınordu FK — Depósito de agua",
      ar: "Altınordu FK — خزان مياه",
    },
    alt: {
      tr: "Altınordu FK logosu boyalı beyaz su deposu",
      en: "White water tank painted with the Altınordu FK logo",
      es: "Depósito de agua blanco pintado con el escudo del Altınordu FK",
      ar: "خزان مياه أبيض مرسوم عليه شعار نادي Altınordu FK",
    },
  },
  {
    src: "cocuk-ve-kus-trafo-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Çocuk & Kuş — Trafo",
      en: "Child & Bird — Transformer Building",
      es: "Niño y pájaro — Caseta eléctrica",
      ar: "طفل وعصفور — مبنى محولات",
    },
    alt: {
      tr: "Sarı-yeşil trafo binasında kırmızı kazaklı çocuk ve mavi kuş duvar resmi",
      en: "Mural of a child in a red sweater and a blue bird on a yellow-green transformer building",
      es: "Mural de un niño con jersey rojo y un pájaro azul en una caseta eléctrica amarilla y verde",
      ar: "جدارية لطفل يرتدي كنزة حمراء وعصفور أزرق على مبنى محولات كهربائية باللونين الأصفر والأخضر",
    },
  },
  {
    src: "goril-grafitti-detay.jpg",
    category: "duvar",
    title: {
      tr: "Goril — Detay",
      en: "Gorilla — Detail",
      es: "Gorila — Detalle",
      ar: "الغوريلا — لقطة مقرّبة",
    },
    alt: {
      tr: "Yeşil gözlü, detaylı goril yüzü graffiti detay çekimi",
      en: "Close-up of a detailed, green-eyed gorilla face graffiti",
      es: "Detalle en primer plano de un grafiti del rostro de un gorila de ojos verdes",
      ar: "لقطة مقرّبة لجرافيتي مفصّل لوجه غوريلا بعيون خضراء",
    },
  },
  {
    src: "metro-istasyonu-karikatur-yolcular-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Metro İstasyonu Karikatürleri",
      en: "Metro Station Cartoons",
      es: "Caricaturas en la estación de metro",
      ar: "رسوم كاريكاتيرية في محطة المترو",
    },
    alt: {
      tr: "Metro istasyonunda karikatür yolcular duvar resmi",
      en: "Mural of cartoon passengers at a metro station",
      es: "Mural de pasajeros caricaturizados en una estación de metro",
      ar: "جدارية لركاب بأسلوب الكاريكاتير في محطة مترو",
    },
  },
  {
    src: "at-heykeli-melek-ic-mekan-yapim-asamasi.jpg",
    category: "portre",
    title: {
      tr: "At Heykeli & Melek — Yapım Aşaması",
      en: "Horse Statue & Angel — Work in Progress",
      es: "Estatua ecuestre y ángel — En proceso",
      ar: "تمثال الحصان والملاك — أثناء التنفيذ",
    },
    alt: {
      tr: "Şaha kalkan at heykeli ve melek temalı iç mekan duvar resminin yapım aşaması",
      en: "Work in progress on an indoor mural of a rearing horse statue and an angel",
      es: "Mural interior en proceso con la estatua de un caballo encabritado y un ángel",
      ar: "جدارية داخلية أثناء التنفيذ لتمثال حصان يقف على قائمتيه الخلفيتين وملاك",
    },
  },
  {
    src: "istanbul-temali-fabrika-cephesi-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "İstanbul Temalı Fabrika Cephesi",
      en: "Istanbul-Themed Factory Facade",
      es: "Fachada de fábrica con temática de Estambul",
      ar: "واجهة مصنع بموضوع إسطنبول",
    },
    alt: {
      tr: "İstanbul temalı duvar resimleriyle kaplı fabrika binası cephesi",
      en: "Factory building facade covered with Istanbul-themed murals",
      es: "Fachada de una fábrica cubierta de murales con temática de Estambul",
      ar: "واجهة مبنى مصنع مغطاة بجداريات مستوحاة من إسطنبول",
    },
  },
  {
    src: "karavan-doga-manzara-airbrush.png",
    category: "arac",
    title: {
      tr: "Karavan — Doğa Manzarası Airbrush",
      en: "Caravan — Landscape Airbrush",
      es: "Caravana — Paisaje aerografiado",
      ar: "كرفان — منظر طبيعي بالإيربرش",
    },
    alt: {
      tr: "Karavan yüzeyine airbrush ile yapılmış dağ ve göl manzarası tasarımı",
      en: "Mountain and lake landscape airbrushed on the side of a caravan",
      es: "Paisaje de montañas y lago aerografiado en el lateral de una caravana",
      ar: "منظر جبال وبحيرة مرسوم بتقنية الإيربرش على جانب كرفان",
    },
  },
  {
    src: "karsiyaka-spor-kulubu-ksk-su-deposu.jpg",
    category: "sudeposu",
    title: {
      tr: "Karşıyaka SK — Su Deposu",
      en: "Karşıyaka SK — Water Tank",
      es: "Karşıyaka SK — Depósito de agua",
      ar: "Karşıyaka SK — خزان مياه",
    },
    alt: {
      tr: "Karşıyaka SK (K.S.K. 1912) logosu boyalı kırmızı-yeşil su deposu",
      en: "Red-and-green water tank painted with the Karşıyaka SK (K.S.K. 1912) logo",
      es: "Depósito de agua rojo y verde pintado con el escudo del Karşıyaka SK (K.S.K. 1912)",
      ar: "خزان مياه باللونين الأحمر والأخضر مرسوم عليه شعار نادي Karşıyaka SK (K.S.K. 1912)",
    },
  },
  {
    src: "goztepe-spor-kulubu-su-deposu.png",
    category: "sudeposu",
    title: {
      tr: "Göztepe SK — Su Deposu",
      en: "Göztepe SK — Water Tank",
      es: "Göztepe SK — Depósito de agua",
      ar: "Göztepe SK — خزان مياه",
    },
    alt: {
      tr: "Göztepe SK logosu boyalı kırmızı-sarı su deposu",
      en: "Red-and-yellow water tank painted with the Göztepe SK logo",
      es: "Depósito de agua rojo y amarillo pintado con el escudo del Göztepe SK",
      ar: "خزان مياه باللونين الأحمر والأصفر مرسوم عليه شعار نادي Göztepe SK",
    },
  },
  {
    src: "tavsan-sincap-trafo-binasi-duvar-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Sincap & Tavşan — Trafo Binası",
      en: "Squirrel & Rabbit — Transformer Building",
      es: "Ardilla y conejo — Caseta eléctrica",
      ar: "سنجاب وأرنب — مبنى محولات",
    },
    alt: {
      tr: "Yeşil trafo binasında kahverengi sincap ve beyaz tavşan duvar resmi",
      en: "Mural of a brown squirrel and a white rabbit on a green transformer building",
      es: "Mural de una ardilla marrón y un conejo blanco en una caseta eléctrica verde",
      ar: "جدارية لسنجاب بني وأرنب أبيض على مبنى محولات كهربائية أخضر",
    },
  },
  {
    src: "barista-kiz-kahve-bufesi-boyama.jpg",
    category: "duvar",
    title: {
      tr: "Barista Kız — Kahve Büfesi",
      en: "Barista Girl — Coffee Kiosk",
      es: "Chica barista — Quiosco de café",
      ar: "فتاة الباريستا — كشك قهوة",
    },
    alt: {
      tr: "Kahve hazırlayan barista kız temalı büfe boyaması, park içi",
      en: "Kiosk in a park painted with a barista girl making coffee",
      es: "Quiosco de un parque pintado con una chica barista preparando café",
      ar: "كشك في حديقة عامة مرسوم عليه فتاة باريستا تحضّر القهوة",
    },
  },
  {
    src: "izmir-kirmizi-su-deposu-otobus-duragi.jpg",
    category: "sudeposu",
    title: {
      tr: "Kırmızı Su Deposu",
      en: "Red Water Tank",
      es: "Depósito de agua rojo",
      ar: "خزان المياه الأحمر",
    },
    alt: {
      tr: "Kırmızı su deposu, İzmir otobüs durağı",
      en: "Red water tank at a bus stop in İzmir",
      es: "Depósito de agua rojo en una parada de autobús de Esmirna",
      ar: "خزان مياه أحمر عند موقف حافلات في إزمير",
    },
  },
  {
    src: "duvar-resmi-yapim-asamasi-sanatci.png",
    category: "duvar",
    title: {
      tr: "Atölyeden — Yapım Aşaması",
      en: "Behind the Scenes — Work in Progress",
      es: "Entre bastidores — En proceso",
      ar: "من كواليس العمل — أثناء التنفيذ",
    },
    alt: {
      tr: "Sanatçının iskele üzerinde araç temalı duvar resmi çalışırken görüntüsü",
      en: "The artist on scaffolding, painting a vehicle-themed mural",
      es: "El artista sobre un andamio pintando un mural con temática de vehículos",
      ar: "الفنان على السقالة أثناء رسم جدارية بموضوع المركبات",
    },
  },
  {
    src: "istanbul-temali-bina-cephesi-hava-fotografi.jpg",
    category: "duvar",
    title: {
      tr: "İstanbul Temalı Bina Cephesi — Havadan",
      en: "Istanbul-Themed Building Facade — Aerial View",
      es: "Fachada con temática de Estambul — Vista aérea",
      ar: "واجهة بموضوع إسطنبول — من الجو",
    },
    alt: {
      tr: "İstanbul temalı duvar resimleriyle kaplı bina cephesinin havadan fotoğrafı",
      en: "Aerial photo of a building facade covered with Istanbul-themed murals",
      es: "Foto aérea de la fachada de un edificio cubierta de murales con temática de Estambul",
      ar: "صورة جوية لواجهة مبنى مغطاة بجداريات مستوحاة من إسطنبول",
    },
  },
  {
    src: "cocuk-kopek-aslan-bahce-duvari-resmi.jpg",
    category: "duvar",
    title: {
      tr: "Çocuk, Köpek & Aslan — Bahçe Duvarı",
      en: "Child, Dog & Lion — Garden Wall",
      es: "Niño, perro y león — Muro de jardín",
      ar: "طفل وكلب وأسد — سور حديقة",
    },
    alt: {
      tr: "Bahçe duvarında şapkalı çocuk, köpek ve aslan figürlü mural",
      en: "Garden wall mural featuring a child in a hat, a dog and a lion",
      es: "Mural en el muro de un jardín con un niño con sombrero, un perro y un león",
      ar: "جدارية على سور حديقة تضم طفلاً يرتدي قبعة وكلباً وأسداً",
    },
  },
];
