// Hizmet açılış sayfaları (/okul-duvar-resmi, /trafo-boyama ...). Her biri
// src/views/ServiceLanding.astro şablonuyla üretilir ve sitemap'e kendiliğinden girer.
// Bu dosya Türkçe asıl; çeviriler serviceLandings.<dil>.ts'te Türkçe slug'la
// eşleşir (dil bağlantıları için bkz. src/i18n/landings.ts).
//
// İçerik kuralı: sayfalar birbirinin kopyası olmamalı; her müşteri grubunun
// kendi sorusu, kendi süreci var. Fiyat, süre ya da garanti gibi sitede
// doğrulanmamış sayısal iddialar yazılmaz.
//
// heroImage ve works: src/assets/images altındaki dosya adları. works yalnız
// gallery.ts'te kayıtlı gerçek işlerden seçilir (başlık ve alt metin oradan gelir).

export interface ServiceLanding {
  slug: string;
  /** Kısa ad: kartlar ve "diğer hizmetler" bağlantıları */
  name: string;
  /** <title> */
  title: string;
  /** meta description */
  description: string;
  /** Hero'daki etiket */
  label: string;
  h1: string;
  /** Hero arkasındaki dev silik yazı */
  watermark: string;
  lead: string;
  heroImage: string;
  /** Hizmetler sayfasındaki kart açıklaması */
  cardText: string;
  introTitle: string;
  intro: string[];
  pointsTitle: string;
  points: { t: string; d: string }[];
  worksTitle: string;
  works: string[];
  processTitle?: string;
  process: { t: string; d: string }[];
  faq: { q: string; a: string }[];
  /** WhatsApp'ta hazır gelen mesaj */
  whatsappText: string;
}

/** Çeviri kaydı: kendi slug'ı ve metinleri; görseller ve işler Türkçe kayıttan gelir. */
export type ServiceLandingText = Omit<ServiceLanding, "heroImage" | "works">;

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "okul-duvar-resmi",
    name: "Okul Duvar Resmi",
    title: "Okul Duvar Resmi — Bahçe, Koridor, Sınıf | Çizgi Artizm",
    description:
      "Okul bahçesi, koridor, anasınıfı ve kantin duvarlarına eğitici, renkli duvar resimleri. Dünya genelinde uygulama, ücretsiz keşif ve fiyat teklifi.",
    label: "Okullar için",
    h1: "Okul Duvar Resmi",
    watermark: "OKUL",
    lead:
      "Okul bahçesini, koridorları ve sınıfları öğrencilerin her gün severek baktığı, öğreten ve ilham veren alanlara dönüştürüyoruz.",
    heroImage: "cocuk-kopek-aslan-bahce-duvari-resmi.jpg",
    cardText: "Bahçe, koridor ve anasınıfı duvarlarına eğitici, renkli resimler.",
    introTitle: "Okul duvarları neden önemli?",
    intro: [
      "Öğrenciler günlerinin büyük kısmını okulda geçirir. Gri bir bahçe duvarı ya da boş bir koridor, doğru tasarımla okulun kimliğini taşıyan, merak uyandıran ve öğrenmeyi destekleyen bir yüzeye dönüşür.",
      "Tasarımı okul yönetimi ve öğretmenlerle birlikte, yaş grubuna ve okulun değerlerine göre hazırlıyoruz. Masal kahramanlarından bilim temalarına, Atatürk köşelerinden doğa ve hayvan figürlerine kadar her konu çalışılabilir.",
    ],
    pointsTitle: "Okullarda uyguladığımız alanlar",
    points: [
      { t: "Bahçe ve çevre duvarları", d: "Öğrencilerin teneffüste vakit geçirdiği alanlarda büyük, renkli ve hikayeli kompozisyonlar." },
      { t: "Koridor ve merdivenler", d: "Katları renk ve temayla ayıran, okulun içinde yön bulmayı kolaylaştıran uygulamalar." },
      { t: "Anasınıfı ve oyun alanları", d: "Küçük yaş grubuna uygun sevimli karakterler ve eğitici figürler." },
      { t: "Kütüphane, kantin ve spor salonu", d: "Mekanın işlevini anlatan, okul kimliğiyle uyumlu temalar." },
      { t: "Okul ortamına uygun malzeme", d: "İç mekanda kokusu düşük, su bazlı akrilik; dış mekanda UV ve hava koşullarına dayanıklı boyalar." },
    ],
    worksTitle: "Çocuklara hitap eden işlerimizden",
    works: [
      "cocuk-kopek-aslan-bahce-duvari-resmi.jpg",
      "cocuk-ve-kus-trafo-duvar-resmi.jpg",
      "tavsan-sincap-trafo-binasi-duvar-resmi.jpg",
      "su-altinda-kiz-batik-gemi-duvar-resmi.jpg",
      "rakunlar-motosiklet-mavi-duvar-resmi.png",
      "dalmacyali-kopek-duvar-resmi.png",
    ],
    process: [
      { t: "Tema belirleme", d: "Okul yönetimiyle duvarları birlikte geziyor, yaş grubuna ve okulun değerlerine uygun konuyu seçiyoruz." },
      { t: "Taslak ve onay", d: "Duvarın gerçek ölçülerine göre renkli taslak hazırlıyor, onay alana kadar üzerinde çalışıyoruz." },
      { t: "Takvime uygun uygulama", d: "Uygulama günlerini ders düzenini aksatmayacak şekilde birlikte planlıyoruz; hafta sonu ve tatil dönemleri bunun için uygun." },
      { t: "Teslim", d: "Alanı temiz bırakıp duvarı birlikte gözden geçiriyor, işi eksiksiz teslim ediyoruz." },
    ],
    faq: [
      {
        q: "Okul duvar resminde kullanılan boyalar öğrenciler için uygun mu?",
        a: "İç mekanda kokusu düşük, su bazlı akrilik boyalar kullanıyoruz. Dış mekanda ise UV ve hava koşullarına dayanıklı boyalar tercih ediyoruz. Malzemeyi duvarın konumuna göre keşifte netleştiriyoruz.",
      },
      {
        q: "Tasarımı kim belirliyor?",
        a: "Tasarım okulla birlikte belirlenir. Fikirlerinizi ve okulun ihtiyaçlarını dinleyip size özel bir taslak hazırlıyoruz; onayınız olmadan uygulamaya geçmiyoruz.",
      },
      {
        q: "Çalışma sırasında ders düzeni aksar mı?",
        a: "Uygulama günlerini okul yönetimiyle birlikte planlıyoruz. Bahçe ve koridor gibi alanlarda çalışma ders saatleri dışına, hafta sonuna ya da tatil dönemine denk getirilebilir.",
      },
      {
        q: "Okul duvar resminin fiyatı nasıl hesaplanır?",
        a: "Fiyat metrekare bazlıdır; duvarın büyüklüğü, yüzeyin durumu ve tasarımın detayına göre değişir. Duvarın fotoğrafını ve yaklaşık ölçüsünü gönderin, ücretsiz fiyat teklifi hazırlayalım.",
      },
      {
        q: "Hangi şehir ve ülkelerdeki okullara hizmet veriyorsunuz?",
        a: "Dünyanın her yerinde çalışıyoruz. İlk değerlendirmeyi gönderdiğiniz fotoğraf ve ölçülerle uzaktan yapıyor, gerektiğinde yerinde keşfe geliyoruz.",
      },
    ],
    whatsappText:
      "Merhaba, okulumuz için duvar resmi teklifi almak istiyorum. Duvarın fotoğrafını ve yaklaşık ölçüsünü gönderiyorum.",
  },
  {
    slug: "fabrika-duvar-resmi",
    name: "Fabrika Duvar Resmi",
    title: "Fabrika ve Sanayi Tesisi Duvar Resmi | Çizgi Artizm",
    description:
      "Fabrika cephesi, çevre duvarı ve yemekhanelere marka kimliğini yansıtan büyük ölçekli duvar resimleri. İskele ve vinçle uygulama, ücretsiz keşif ve teklif.",
    label: "Fabrikalar için",
    h1: "Fabrika Duvar Resmi",
    watermark: "FABRİKA",
    lead:
      "Fabrika cephelerini, çevre duvarlarını ve çalışma alanlarını markanızı anlatan, uzaktan fark edilen büyük ölçekli eserlere dönüştürüyoruz.",
    heroImage: "istanbul-temali-fabrika-cephesi-duvar-resmi.jpg",
    cardText: "Cephe, çevre duvarı ve yemekhanede marka kimliğini taşıyan büyük işler.",
    introTitle: "Sanayi yapısına kimlik kazandırın",
    intro: [
      "Fabrika binaları genellikle geniş, düz ve tek renk yüzeylerdir. Bu yüzeyler, yoldan geçenin aklında kalan bir marka imzasına dönüşmek için en uygun tuvallerdir.",
      "Logonuzu, ürününüzü, kuruluş hikayenizi ya da bulunduğunuz şehrin simgelerini tasarıma taşıyoruz. İç mekanda ise yemekhane, dinlenme alanı ve koridorlarda çalışanların gününe renk katan uygulamalar yapıyoruz.",
    ],
    pointsTitle: "Fabrikalarda neler yapıyoruz",
    points: [
      { t: "Cephe ve çevre duvarı", d: "Ana yoldan görünen yüzeylerde marka ve şehir temalı büyük ölçekli kompozisyonlar." },
      { t: "Logo ve tipografi", d: "Kurumsal logonun ve sloganın duvara ölçekli, net ve dayanıklı biçimde aktarılması." },
      { t: "Yemekhane ve sosyal alanlar", d: "Çalışanların vakit geçirdiği alanlara enerji katan iç mekan duvar resimleri." },
      { t: "Yüksekte çalışma", d: "Vinç, iskele ve yüksekte çalışma dahil uygulamanın tamamını kendi ekibimizle yürütüyoruz." },
    ],
    worksTitle: "Büyük ölçekli işlerimizden",
    works: [
      "istanbul-temali-fabrika-cephesi-duvar-resmi.jpg",
      "istanbul-temali-bina-cephesi-hava-fotografi.jpg",
      "bina-cephesi-iskele-yapim-asamasi.png",
      "cizgi-3d-tipografi-graffiti.jpg",
      "goztepe-spor-kulubu-su-deposu.png",
      "altinordu-spor-kulubu-logo-su-deposu.jpg",
    ],
    process: [
      { t: "Keşif ve ölçü", d: "Cephenin ölçüsünü, yüzeyin durumunu ve iskele ya da vinç ihtiyacını değerlendiriyoruz." },
      { t: "Marka uyumlu tasarım", d: "Kurumsal renklerinize ve kimliğinize uygun taslağı hazırlayıp onayınıza sunuyoruz." },
      { t: "Hazırlık ve uygulama", d: "Gevşek sıvayı temizleyip astar atıyor, tasarımı projeksiyon ya da ızgara yöntemiyle ölçekli aktarıyoruz." },
      { t: "Koruma ve teslim", d: "Uygun yüzeylerde koruyucu vernikle işi tamamlayıp teslim ediyoruz." },
    ],
    faq: [
      {
        q: "Fabrika çalışırken uygulama yapılabilir mi?",
        a: "Evet. Çalışma alanını üretim ve sevkiyat akışını aksatmayacak şekilde sizinle birlikte planlıyor, iskele ve vinç konumlarını keşifte belirliyoruz.",
      },
      {
        q: "Büyük bir cephe ne kadar sürede biter?",
        a: "Süre; yüzeyin büyüklüğüne, tasarımın detayına, hava koşullarına ve erişim yöntemine göre değişir. Teklifle birlikte tahmini çalışma takvimini de paylaşıyoruz.",
      },
      {
        q: "Dış cephede boya ne kadar dayanır?",
        a: "Dış cephede UV ve hava koşullarına dayanıklı akrilik ve sprey boyalar kullanıyor, uygun yüzeylerde koruyucu vernikle eserin ömrünü uzatıyoruz. Doğru hazırlanmış bir zeminde duvar resmi uzun yıllar canlılığını korur.",
      },
      {
        q: "Logomuzu birebir uygulayabilir misiniz?",
        a: "Evet. Kurumsal logonuzu ve renk kodlarınızı alıp duvarın ölçüsüne göre ölçekliyor, net çizgilerle uyguluyoruz.",
      },
      {
        q: "Fiyat teklifi için ne göndermeliyim?",
        a: "Cephenin karşıdan çekilmiş birkaç fotoğrafı, yaklaşık en ve yükseklik ölçüsü ve tesisin bulunduğu şehir ilk teklif için yeterli.",
      },
    ],
    whatsappText:
      "Merhaba, fabrikamız için duvar resmi teklifi almak istiyorum. Cephenin fotoğrafını ve yaklaşık ölçüsünü gönderiyorum.",
  },
  {
    slug: "kafe-restoran-duvar-resmi",
    name: "Kafe & Restoran Duvar Resmi",
    title: "Kafe ve Restoran Duvar Resmi | Çizgi Artizm",
    description:
      "Kafe, restoran ve büfe duvarlarına konsepte özel, misafirlerin fotoğrafladığı duvar resimleri. Bubbles Cafe ve RAU Cafe işlerimizi inceleyin, teklif alın.",
    label: "Kafe & restoranlar için",
    h1: "Kafe ve Restoran Duvar Resmi",
    watermark: "KAFE",
    lead:
      "Misafirlerinizin fotoğrafını çekip paylaştığı, mekanınızı akılda tutan, konseptinize özel duvar resimleri tasarlıyor ve uyguluyoruz.",
    heroImage: "rau-cafe-afrikan-kadin-portreleri-ic-mekan-tasarim.jpeg",
    cardText: "Konsepte özel, misafirlerin fotoğrafladığı iç ve dış mekan duvarları.",
    introTitle: "Duvarınız menünüz kadar konuşsun",
    intro: [
      "Bir kafenin ya da restoranın atmosferini ilk belirleyen şeylerden biri duvarlarıdır. İyi tasarlanmış bir duvar resmi mekanın tarzını tek bakışta anlatır ve misafirlerin sosyal medyada paylaştığı bir köşeye dönüşür.",
      "Mekanınızın adını, menünüzü, konseptinizi ve misafir profilinizi dinleyerek tasarlıyoruz. Portre, tipografi, karakter ya da soyut kompozisyon; iç mekandan dış cepheye kadar her yüzeyde çalışıyoruz.",
    ],
    pointsTitle: "Kafe ve restoranlarda uyguladıklarımız",
    points: [
      { t: "Fotoğraf köşesi", d: "Misafirlerin önünde fotoğraf çektirdiği, mekanın adını taşıyan dikkat çekici duvarlar." },
      { t: "Konsept duvarları", d: "Kahve, mutfak kültürü, şehir ya da tamamen size özel bir hikaye üzerine kompozisyonlar." },
      { t: "Dış cephe ve giriş", d: "Mekanın adını ve logosunu sokaktan fark edilen sanatsal bir uygulamayla cepheye taşıma." },
      { t: "Büfe ve kiosk boyama", d: "Park içi büfe ve küçük satış noktalarının baştan sona boyanarak markaya dönüşmesi." },
    ],
    worksTitle: "Kafe ve restoran işlerimizden",
    works: [
      "bubbles-cafe-kedi-ic-mekan-duvar-resmi.jpg",
      "rau-cafe-afrikan-kadin-portreleri-ic-mekan-tasarim.jpeg",
      "sapkali-kadin-kahve-cafe-duvar-resmi.jpg",
      "barista-kiz-kahve-bufesi-boyama.jpg",
      "frida-kahlo-portre-ic-mekan-duvar-resmi.jpg",
      "ejderha-ic-mekan-duvar-resmi.jpg",
    ],
    process: [
      { t: "Konsepti dinleme", d: "Mekanınızın tarzını, menüsünü ve misafir profilini konuşup duvarın anlatacağı hikayeyi belirliyoruz." },
      { t: "Taslak", d: "Mekanın ışığına ve mobilyalarına uygun renklerle taslak hazırlıyor, onayınızı alıyoruz." },
      { t: "Uygulama", d: "Çalışma saatlerini işletmenizin düzenine göre sizinle birlikte planlıyoruz." },
      { t: "Fotoğraflanmaya hazır teslim", d: "Alanı temiz bırakıp duvarı misafirlerinizi karşılamaya hazır halde teslim ediyoruz." },
    ],
    faq: [
      {
        q: "Mekan kapalıyken mi çalışıyorsunuz?",
        a: "Uygulama saatlerini sizinle birlikte planlıyoruz. Mekanın kapalı olduğu saatlerde ya da misafir yoğunluğunun düşük olduğu günlerde çalışmak mümkün.",
      },
      {
        q: "Boya kokusu misafirleri rahatsız eder mi?",
        a: "İç mekanda kokusu düşük, su bazlı akrilik boyalar kullanıyoruz. Bu sayede uygulamadan sonra mekan kısa sürede normal düzenine döner.",
      },
      {
        q: "Yoğun kullanılan alanlarda duvar resmi dayanıklı olur mu?",
        a: "Sık temizlenmesi gereken yüzeylerde uygulamanın üzerine koruyucu vernik atarak duvarın silinebilir ve uzun ömürlü olmasını sağlıyoruz.",
      },
      {
        q: "Logomuzu ve mekan adımızı da kullanabilir misiniz?",
        a: "Evet. Logonuzu, mekan adınızı ya da menünüzden bir öğeyi tasarıma dahil ederek duvarı markanızın bir parçası haline getiriyoruz.",
      },
      {
        q: "Fiyat nasıl belirleniyor?",
        a: "Duvarın metrekaresine, tasarımın detayına ve iç ya da dış mekan oluşuna göre belirleniyor. Duvarın fotoğrafını ve ölçüsünü gönderin, ücretsiz teklif hazırlayalım.",
      },
    ],
    whatsappText:
      "Merhaba, mekanımız için duvar resmi teklifi almak istiyorum. Duvarın fotoğrafını ve yaklaşık ölçüsünü gönderiyorum.",
  },
  {
    slug: "avm-duvar-resmi",
    name: "AVM Duvar Resmi",
    title: "AVM Duvar Resmi ve Mural Uygulaması | Çizgi Artizm",
    description:
      "Alışveriş merkezlerinin ortak alanlarına, çocuk oyun alanlarına ve otoparklarına dikkat çeken, fotoğraflanan duvar resimleri. Ücretsiz keşif ve fiyat teklifi.",
    label: "Alışveriş merkezleri için",
    h1: "AVM Duvar Resmi",
    watermark: "AVM",
    lead:
      "Yoğun ziyaretçi trafiği olan alanlarda dikkat çeken, yön gösteren ve fotoğraflanan duvar resimleriyle alışveriş merkezinize kimlik kazandırıyoruz.",
    heroImage: "ucan-kaz-avm-duvar-resmi.png",
    cardText: "Ortak alan, çocuk oyun alanı ve otoparkta dikkat çeken büyük işler.",
    introTitle: "Kalabalığın içinde fark edilen duvarlar",
    intro: [
      "Alışveriş merkezlerinde her gün binlerce kişi aynı koridorlardan geçer. Doğru yerde, doğru ölçekte bir duvar resmi ziyaretçinin durup baktığı, fotoğraf çektiği ve buluşma noktası olarak kullandığı bir alana dönüşür.",
      "AVM'nin genel konseptine, çocuk alanlarına ya da dönemsel etkinliklere göre tasarım hazırlıyoruz. Ortak alanlardan otopark katlarına kadar farklı yüzeylerde çalışıyoruz.",
    ],
    pointsTitle: "AVM'lerde uygulama alanları",
    points: [
      { t: "Ortak alan ve koridorlar", d: "Ziyaretçiyi karşılayan, AVM'nin konseptini anlatan büyük kompozisyonlar." },
      { t: "Çocuk oyun alanları", d: "Karakterler ve hikayelerle çocuklara hitap eden renkli duvarlar." },
      { t: "Otopark ve yön bulma", d: "Katları ve bölgeleri renk ve figürlerle ayıran, akılda kalan yön işaretleri." },
      { t: "Etkinlik ve kampanya duvarları", d: "Dönemsel etkinliklere özel, fotoğraf köşesi olarak kurgulanan uygulamalar." },
    ],
    worksTitle: "AVM ve kalabalık iç mekan işlerimizden",
    works: [
      "ucan-kaz-avm-duvar-resmi.png",
      "fahrettin-altay-metro-piramit-figurler-duvar-resmi.jpg",
      "metro-istasyonu-karikatur-yolcular-duvar-resmi.jpg",
      "sari-spor-araba-3kplus-duvar-resmi.jpg",
      "caliskan-anne-karikatur-ic-mekan-duvar-resmi.png",
      "at-heykeli-melek-ic-mekan-yapim-asamasi.jpg",
    ],
    process: [
      { t: "Alan analizi", d: "Ziyaretçi akışını, görüş açılarını ve duvarın hangi mesafeden görüleceğini birlikte değerlendiriyoruz." },
      { t: "Konsept ve taslak", d: "AVM'nin kimliğine ve hedef kitlesine uygun tasarımı hazırlayıp yönetimin onayına sunuyoruz." },
      { t: "Güvenli uygulama", d: "Çalışma alanını ziyaretçi güvenliği için çevreliyor, uygulamayı yönetimle belirlenen saatlerde yapıyoruz." },
      { t: "Teslim", d: "Alanı temiz bırakıp işi yönetimle birlikte gözden geçirerek teslim ediyoruz." },
    ],
    faq: [
      {
        q: "AVM açıkken çalışabiliyor musunuz?",
        a: "Çalışma saatlerini AVM yönetimiyle birlikte belirliyoruz. Gerektiğinde kapanıştan sonra ya da sabah erken saatlerde çalışıyor, çalışma alanını ziyaretçi güvenliği için çevreliyoruz.",
      },
      {
        q: "Yüksek tavanlı alanlarda uygulama yapıyor musunuz?",
        a: "Evet. İskele ve yüksekte çalışma gerektiren uygulamaları kendi ekibimizle yürütüyoruz; erişim ihtiyacını keşifte belirliyoruz.",
      },
      {
        q: "Tasarım kurumsal kimlik kurallarımıza uyar mı?",
        a: "Tasarımı marka kılavuzunuzdaki renk ve tipografi kurallarına göre hazırlıyor, yönetimin onayı olmadan uygulamaya geçmiyoruz.",
      },
      {
        q: "Dönemsel bir etkinlik için de duvar resmi yapıyor musunuz?",
        a: "Evet. Dönemsel etkinlikler ve kampanyalar için de tasarım hazırlıyoruz; yüzey ve malzeme seçimini duvarın ne kadar süre kalacağına göre birlikte belirliyoruz.",
      },
      {
        q: "Teklif için hangi bilgiler gerekli?",
        a: "Alanın fotoğrafı, yaklaşık ölçüsü, AVM'nin bulunduğu şehir ve varsa konsept fikriniz ilk teklif için yeterli.",
      },
    ],
    whatsappText:
      "Merhaba, alışveriş merkezimiz için duvar resmi teklifi almak istiyorum. Alanın fotoğrafını ve yaklaşık ölçüsünü gönderiyorum.",
  },
  {
    slug: "ofis-duvar-resmi",
    name: "Ofis Duvar Resmi",
    title: "Ofis Duvar Resmi ve Kurumsal Mural | Çizgi Artizm",
    description:
      "Ofis, toplantı odası ve ortak çalışma alanlarına şirket kültürünüzü yansıtan duvar resimleri. Logo, slogan ve marka renkleriyle özel tasarım, ücretsiz teklif.",
    label: "Ofisler için",
    h1: "Ofis Duvar Resmi",
    watermark: "OFİS",
    lead:
      "Şirket kültürünüzü, değerlerinizi ve markanızı duvarlara taşıyarak çalışanların ve misafirlerin aklında kalan bir ofis yaratıyoruz.",
    heroImage: "sosyal-medya-temali-renkli-ic-mekan-duvar-resmi.jpg",
    cardText: "Şirket kültürünü ve markayı yansıtan toplantı odası ve ortak alan duvarları.",
    introTitle: "Markanız ofisinizde de görünsün",
    intro: [
      "Ofis duvarları, şirketin kim olduğunu ilk anlatan yüzeylerdir. Resepsiyonda karşılayan bir logo uygulaması, toplantı odasında şirket değerlerini anlatan bir kompozisyon ya da mutfakta enerji veren renkli bir duvar çalışma ortamını değiştirir.",
      "Marka renklerinizi, sloganınızı ve ekibinizin dilini kullanarak tasarlıyoruz. Temiz ve düzenli çalışarak ofis düzeninizi en az etkileyecek şekilde uyguluyoruz.",
    ],
    pointsTitle: "Ofislerde uyguladıklarımız",
    points: [
      { t: "Resepsiyon ve giriş", d: "Misafirleri karşılayan, logo ve marka kimliğini öne çıkaran uygulamalar." },
      { t: "Toplantı odaları", d: "Şirket değerlerini, vizyonunu ya da sektörünüzü anlatan kompozisyonlar." },
      { t: "Ortak alan ve mutfak", d: "Ekibin vakit geçirdiği alanlara enerji katan renkli duvarlar." },
      { t: "Tipografi ve slogan duvarları", d: "Şirket sloganınızın ya da motivasyon cümlelerinizin graffiti tipografisiyle uygulanması." },
    ],
    worksTitle: "Ofis ve kurumsal işlerimizden",
    works: [
      "sosyal-medya-temali-renkli-ic-mekan-duvar-resmi.jpg",
      "melek-heykeli-ofis-duvar-resmi.jpg",
      "cizgi-3d-tipografi-graffiti.jpg",
      "sari-spor-araba-3kplus-duvar-resmi.jpg",
      "diz-cokmus-melek-portre-duvar-resmi.png",
      "goril-grafitti-detay.jpg",
    ],
    process: [
      { t: "Brief", d: "Şirketinizi, ekibinizi ve duvarın anlatmasını istediğiniz mesajı dinliyoruz." },
      { t: "Marka uyumlu taslak", d: "Kurumsal renk ve tipografinize uygun taslağı hazırlayıp onayınıza sunuyoruz." },
      { t: "Planlı uygulama", d: "Çalışma günlerini ofis düzeninizi en az etkileyecek şekilde, gerekirse mesai dışına planlıyoruz." },
      { t: "Teslim", d: "Alanı temiz bırakıp işi birlikte gözden geçirerek teslim ediyoruz." },
    ],
    faq: [
      {
        q: "Ofis çalışırken uygulama yapabilir misiniz?",
        a: "Uygulama günlerini sizinle birlikte planlıyoruz. Toplantı odası gibi kapatılabilen alanlarda mesai içinde, açık ofis alanlarında ise mesai dışında ya da hafta sonu çalışabiliyoruz.",
      },
      {
        q: "Boya kokusu çalışmayı etkiler mi?",
        a: "İç mekanda kokusu düşük, su bazlı akrilik boyalar kullanıyoruz; bu sayede alan kısa sürede kullanıma döner.",
      },
      {
        q: "Logomuzu duvara uygulayabilir misiniz?",
        a: "Evet. Logonuzu ve kurumsal renk kodlarınızı alıp duvarın ölçüsüne göre ölçekliyor, net çizgilerle uyguluyoruz. Logoyu sanatsal bir kompozisyonun parçası yapan tasarımlar da hazırlıyoruz.",
      },
      {
        q: "Farklı şehir ve ülkelerdeki ofislerimize aynı konsepti uygular mısınız?",
        a: "Evet. Dünya genelinde çalıştığımız için farklı şehir ve ülkelerdeki ofislerinize aynı konsepti, her mekana göre uyarlayarak uygulayabiliyoruz.",
      },
      {
        q: "Fiyat teklifi nasıl alırım?",
        a: "Duvarın fotoğrafını, yaklaşık ölçüsünü ve varsa logo ya da tasarım fikrinizi WhatsApp'tan gönderin; ücretsiz fiyat teklifi hazırlayalım.",
      },
    ],
    whatsappText:
      "Merhaba, ofisimiz için duvar resmi teklifi almak istiyorum. Duvarın fotoğrafını ve yaklaşık ölçüsünü gönderiyorum.",
  },
  {
    slug: "bina-cephe-duvar-resmi",
    name: "Bina Cephe Duvar Resmi",
    title: "Bina Cephesi Duvar Resmi ve Dev Mural | Çizgi Artizm",
    description:
      "Apartman, site ve iş yeri cephelerine iskele ve vinçle dev duvar resimleri. UV ve hava koşullarına dayanıklı boya, ücretsiz keşif ve metrekare bazlı teklif.",
    label: "Bina cepheleri için",
    h1: "Bina Cephe Duvar Resmi",
    watermark: "CEPHE",
    lead:
      "Apartman, site ve iş yeri cephelerini iskele ve vinçle, sokağın simgesi haline gelen dev duvar resimlerine dönüştürüyoruz.",
    heroImage: "truva-ati-tramvay-bina-cephesi-duvar-resmi.jpg",
    cardText: "Apartman, site ve iş yeri cephelerine iskele ve vinçle dev muraller.",
    introTitle: "Sokağın simgesi olan cepheler",
    intro: [
      "Boş bir yan cephe, şehrin en büyük tuvallerinden biridir. Doğru tasarlanmış bir mural binaya kimlik kazandırır ve sokağın simgesi haline gelir.",
      "Cephe işlerinde başarı, tasarım kadar hazırlığa ve doğru malzemeye bağlıdır. Yüzeyi onarıp astarlıyor, tasarımı ölçekli aktarıyor ve UV ile hava koşullarına dayanıklı boyalarla uyguluyoruz.",
    ],
    pointsTitle: "Cephe işlerinde neler yapıyoruz",
    points: [
      { t: "Yan cephe ve kalkan duvarları", d: "Penceresiz geniş yüzeylerde şehir, tarih ya da doğa temalı dev kompozisyonlar." },
      { t: "Site ve apartman girişleri", d: "Bina sakinlerinin her gün gördüğü giriş ve bahçe duvarları." },
      { t: "İskele ve vinçle çalışma", d: "Yüksekte çalışma dahil uygulamanın tamamını kendi ekibimizle yürütüyoruz." },
      { t: "Yüzey hazırlığı", d: "Gevşek sıvanın temizlenmesi, hasarların onarılması ve astarlama ile kalıcı bir zemin." },
    ],
    worksTitle: "Cephe işlerimizden",
    works: [
      "truva-ati-tramvay-bina-cephesi-duvar-resmi.jpg",
      "truva-ati-bina-cephesi-yapim-asamasi.jpg",
      "zeus-poseidon-bina-cephesi-grafitti.jpg",
      "istanbul-temali-bina-cephesi-hava-fotografi.jpg",
      "kalpakli-ataturk-portresi-yapim-asamasi.png",
      "bina-cephesi-iskele-yapim-asamasi.png",
    ],
    process: [
      { t: "Keşif", d: "Cephenin ölçüsünü, yüzey durumunu ve iskele ya da vinç ihtiyacını değerlendiriyoruz." },
      { t: "Tasarım ve onay", d: "Binanın mimarisine ve çevresine uyumlu taslağı hazırlayıp yönetimin ya da bina sahibinin onayına sunuyoruz." },
      { t: "Hazırlık ve ölçekleme", d: "Yüzeyi onarıp astarlıyor, tasarımı projeksiyon ya da ızgara yöntemiyle duvara aktarıyoruz." },
      { t: "Uygulama ve koruma", d: "Katmanlar halinde çalışıyor, uygun yüzeylerde koruyucu vernikle eserin ömrünü uzatıyoruz." },
    ],
    faq: [
      {
        q: "Apartman cephesine duvar resmi için onay gerekir mi?",
        a: "Cephe ortak alan olduğu için uygulamadan önce bina yönetiminin onayı ve belediyenizin kuralına göre gerekli izinler alınmış olmalı. Keşif sırasında bu adımı da birlikte netleştiriyoruz.",
      },
      {
        q: "Cephe duvar resmi ne kadar dayanır?",
        a: "Dış cephede UV ve hava koşullarına dayanıklı boyalar kullanıyor, yüzeyi doğru hazırlıyor ve uygun yüzeylerde koruyucu vernik uyguluyoruz. Doğru hazırlanmış bir cephede duvar resmi uzun yıllar canlılığını korur.",
      },
      {
        q: "Yüksek binalarda nasıl çalışıyorsunuz?",
        a: "Binanın yüksekliğine ve erişim koşullarına göre iskele ya da sepetli vinç kullanıyoruz. Yüksekte çalışma dahil uygulamanın tamamını kendi ekibimiz yürütüyor.",
      },
      {
        q: "Hava koşulları çalışmayı etkiler mi?",
        a: "Yağmurlu ve çok soğuk havalarda dış cephe boyası uygulanmaz. Takvimi hava durumuna göre esnek planlıyor, teklifle birlikte tahmini çalışma süresini paylaşıyoruz.",
      },
      {
        q: "Cephe fiyatı nasıl hesaplanır?",
        a: "Metrekare bazlıdır; cephenin büyüklüğü, yüzeyin durumu, tasarımın detayı ve iskele ya da vinç ihtiyacı fiyatı belirler. Fotoğraf ve ölçüyle ücretsiz teklif hazırlıyoruz.",
      },
    ],
    whatsappText:
      "Merhaba, bina cephesi için duvar resmi teklifi almak istiyorum. Cephenin fotoğrafını ve yaklaşık ölçüsünü gönderiyorum.",
  },
  {
    slug: "belediye-duvar-resmi",
    name: "Belediye Duvar Resmi",
    title: "Belediye ve Kamusal Alan Duvar Resmi | Çizgi Artizm",
    description:
      "Belediyeler için kent duvarları, metro istasyonları, su depoları ve farkındalık alanları. İzmir Büyükşehir Belediyesi ve Metro İzmir için tamamlanan işler.",
    label: "Belediyeler için",
    h1: "Belediye Duvar Resmi",
    watermark: "KENT",
    lead:
      "Kent duvarlarını, istasyonları, su depolarını ve parkları şehrin hikayesini anlatan, toplumsal mesaj veren kamusal sanat eserlerine dönüştürüyoruz.",
    heroImage: "fahrettin-altay-metro-piramit-figurler-duvar-resmi.jpg",
    cardText: "Kent duvarı, metro istasyonu, su deposu ve farkındalık projeleri.",
    introTitle: "Şehre değer katan kamusal sanat",
    intro: [
      "Kamusal alandaki bir duvar resmi her gün binlerce kişiye ulaşır. Şehrin kimliğini güçlendirir, ihmal edilmiş alanları canlandırır ve toplumsal konularda farkındalık yaratır.",
      "İzmir Büyükşehir Belediyesi ve Metro İzmir için su deposu maskotlarından metro istasyonlarına kadar farklı ölçeklerde projeler tamamladık. Üçyol Metro İstasyonu'ndaki kadına yönelik şiddete karşı farkındalık alanının duvar resmi de bu işlerden biri.",
    ],
    pointsTitle: "Belediyeler için uygulama alanları",
    points: [
      { t: "Metro ve toplu taşıma alanları", d: "İstasyon, durak ve alt geçitlerde yolcuları karşılayan duvar resimleri." },
      { t: "Su deposu ve maskot boyama", d: "Su depolarını kent maskotlarına ve kurumsal kimliğe dönüştüren uygulamalar." },
      { t: "Farkındalık alanları", d: "Toplumsal mesaj taşıyan, belirli gün ve haftalara özel kamusal eserler." },
      { t: "Park, okul ve trafo binaları", d: "Kent mobilyası ve teknik yapıların çevreyle uyumlu sanat eserlerine dönüşmesi." },
    ],
    worksTitle: "Kamusal alan işlerimizden",
    works: [
      "fahrettin-altay-metro-piramit-figurler-duvar-resmi.jpg",
      "metro-istasyonu-karikatur-yolcular-duvar-resmi.jpg",
      "izmir-buyuksehir-dunya-kure-maskot-su-deposu.jpg",
      "izmir-buyuksehir-mavi-kure-maskot-su-deposu.jpg",
      "izmir-sunger-kent-mavi-maskot-su-deposu-otobus-duragi.jpg",
      "kalpakli-ataturk-portresi-yapim-asamasi.png",
    ],
    process: [
      { t: "Proje ve şartlar", d: "Alanı, projenin amacını ve kurumun teknik şartlarını birlikte değerlendiriyoruz." },
      { t: "Tasarım ve sunum", d: "Kurum kimliğine ve mesaja uygun taslakları hazırlayıp ilgili birimlerin onayına sunuyoruz." },
      { t: "Güvenli uygulama", d: "Çalışma alanını yaya trafiğinden ayırıyor, iskele ve vinç gerektiren işleri kendi ekibimizle yürütüyoruz." },
      { t: "Teslim", d: "İşi kurumun yetkilileriyle birlikte gözden geçirip eksiksiz teslim ediyoruz." },
    ],
    faq: [
      {
        q: "Hangi kurumlar için çalıştınız?",
        a: "İzmir Büyükşehir Belediyesi için su deposu maskotlarını, Metro İzmir istasyonlarında ise Fahrettin Altay ve Üçyol'daki duvar resimlerini gerçekleştirdik. Bu işlerin fotoğraflarını galerimizde görebilirsiniz.",
      },
      {
        q: "Hazır bir eseri ya da yarışma çizimini duvara uyarlayabilir misiniz?",
        a: "Evet. Tasarımı kurumun mesajına göre biz hazırlayabiliyor ya da Üçyol Metro projesinde olduğu gibi seçilmiş bir çizimi duvar ölçeğine uyarlayabiliyoruz.",
      },
      {
        q: "Su deposu boyama yapıyor musunuz?",
        a: "Evet. Su depolarını kurumsal renklere ya da kent maskotlarına dönüştüren uygulamalar yapıyoruz; İzmir Büyükşehir Belediyesi için tamamladığımız küre maskotlar bunlara örnek.",
      },
      {
        q: "Kamusal alanda çalışırken güvenlik nasıl sağlanıyor?",
        a: "Çalışma alanını yaya trafiğinden ayırıyor, yüksekte çalışma gerektiren işlerde iskele ya da sepetli vinç kullanıyoruz. Uygulama saatlerini kurumla birlikte planlıyoruz.",
      },
      {
        q: "Farklı şehir ve ülkelerdeki belediyelere hizmet veriyor musunuz?",
        a: "Evet, dünyanın her yerinde çalışıyoruz. İlk değerlendirmeyi fotoğraf ve ölçülerle uzaktan yapıp gerektiğinde yerinde keşfe geliyoruz.",
      },
    ],
    whatsappText:
      "Merhaba, kurumumuz için duvar resmi projesi hakkında bilgi ve teklif almak istiyorum.",
  },
  {
    slug: "trafo-boyama",
    name: "Trafo Boyama",
    title: "Trafo Boyama ve Trafo Binası Duvar Resmi | Çizgi Artizm",
    description:
      "Trafo binalarını mahallenin sevdiği renkli duvar resimlerine dönüştürüyoruz. Aydın Çine'den gerçek işler, dış mekana dayanıklı boya, ücretsiz teklif.",
    label: "Trafo binaları için",
    h1: "Trafo Boyama",
    watermark: "TRAFO",
    lead:
      "Gri ve dikkat çekmeyen trafo binalarını, mahallenin sevdiği ve fotoğrafını çektiği renkli duvar resimlerine dönüştürüyoruz.",
    heroImage: "aydin-cine-jaguar-trafo-duvar-resmi.png",
    cardText: "Trafo binalarını mahallenin sevdiği renkli eserlere dönüştürme.",
    introTitle: "Trafo binaları neden boyanır?",
    intro: [
      "Trafo binaları her mahallede bulunur ama çoğu zaman gri, yazılarla kirlenmiş ve dikkat çekmeyen yapılardır. Boyanan bir trafo çevrenin görüntüsünü değiştirir ve izinsiz yazı ile afişlere karşı da caydırıcı olur.",
      "Gerçekçi hayvan figürlerinden Atatürk portrelerine, çocuklara hitap eden karakterlerden bölgenin simgelerine kadar farklı temalarda trafo binası boyadık. Tasarımı binanın biçimine göre, dört cepheyi bir bütün olarak düşünerek hazırlıyoruz.",
    ],
    pointsTitle: "Trafo boyamada neler yapıyoruz",
    points: [
      { t: "Dört cephe bütün tasarım", d: "Binanın her yüzünü birbirine bağlayan, her açıdan bakıldığında anlam taşıyan kompozisyonlar." },
      { t: "Gerçekçi figürler", d: "Jaguar, yılan, kuş gibi gerçekçi hayvan çizimleri ve portreler." },
      { t: "Dış mekana dayanıklı malzeme", d: "UV ve hava koşullarına dayanıklı boyalar; uygun yüzeylerde koruyucu vernik." },
      { t: "Yalnız dış yüzeyde çalışma", d: "Boyama binanın dış duvarlarında yapılır; enerji ekipmanına müdahale edilmez." },
    ],
    worksTitle: "Trafo işlerimizden",
    works: [
      "aydin-cine-jaguar-trafo-duvar-resmi.png",
      "mavi-yilan-trafo-duvar-resmi.jpg",
      "ataturk-portresi-turk-bayragi-trafo-duvar-resmi.png",
      "cocuk-ve-kus-trafo-duvar-resmi.jpg",
      "tavsan-sincap-trafo-binasi-duvar-resmi.jpg",
    ],
    process: [
      { t: "İzin ve keşif", d: "Uygulama izninin durumunu ve binanın yüzeyini birlikte değerlendiriyoruz." },
      { t: "Tema ve taslak", d: "Bölgenin karakterine uygun temayı seçip dört cepheyi kapsayan taslak hazırlıyoruz." },
      { t: "Yüzey hazırlığı", d: "Eski yazı ve afişleri temizleyip yüzeyi onarıyor ve astarlıyoruz." },
      { t: "Uygulama ve koruma", d: "Dış mekana dayanıklı boyalarla uygulayıp uygun yüzeylerde vernikle koruyoruz." },
    ],
    faq: [
      {
        q: "Trafo boyamak için izin gerekir mi?",
        a: "Trafo binaları ilgili elektrik dağıtım şirketinin sorumluluğundadır; uygulamadan önce gerekli iznin alınmış olması gerekir. Belediye ya da kurumla projeyi planlarken bu adımı baştan konuşuyoruz.",
      },
      {
        q: "Boyama sırasında elektrik kesintisi olur mu?",
        a: "Boyama yalnız binanın dış duvarlarında yapılır ve enerji ekipmanına müdahale edilmez; bu yüzden çalışma elektrik dağıtımını etkilemez.",
      },
      {
        q: "Boyanan trafo ne kadar dayanır?",
        a: "UV ve hava koşullarına dayanıklı boyalar kullanıyor, yüzeyi doğru hazırlıyoruz. Uygun yüzeylerde koruyucu vernik eserin ömrünü uzatır.",
      },
      {
        q: "Birden fazla trafo için toplu teklif verebilir misiniz?",
        a: "Evet. Bir ilçedeki ya da mahalledeki trafo binalarını ortak bir tema altında planlayıp toplu teklif hazırlayabiliyoruz.",
      },
      {
        q: "Trafo boyama fiyatı nasıl belirlenir?",
        a: "Binanın boyutu, yüzeyin durumu ve tasarımın detayı fiyatı belirler. Binanın her cephesinden birer fotoğraf gönderin, ücretsiz teklif hazırlayalım.",
      },
    ],
    whatsappText:
      "Merhaba, trafo boyama için teklif almak istiyorum. Trafo binasının fotoğraflarını gönderiyorum.",
  },
  {
    slug: "duvar-resmi-fiyatlari",
    name: "Duvar Resmi Fiyatları",
    title: "Duvar Resmi Fiyatları: Fiyatı Neler Belirler? | Çizgi Artizm",
    description:
      "Duvar resmi fiyatları metrekare bazlı hesaplanır. Fiyatı belirleyen etkenleri öğrenin; duvarın fotoğrafını gönderin, ücretsiz teklif alın.",
    label: "Fiyatlandırma",
    h1: "Duvar Resmi Fiyatları",
    watermark: "FİYAT",
    lead:
      "Her duvar farklıdır; bu yüzden sabit bir liste yerine projeye özel, ücretsiz fiyat teklifi hazırlıyoruz. Fiyatı neyin belirlediğini aşağıda anlattık.",
    heroImage: "bina-cephesi-iskele-yapim-asamasi.png",
    cardText: "Fiyatı belirleyen etkenler ve teklif için gereken bilgiler.",
    introTitle: "Duvar resmi fiyatı nasıl hesaplanır?",
    intro: [
      "Duvar resmi fiyatları metrekare bazlı hesaplanır. Ancak aynı büyüklükteki iki duvarın fiyatı; yüzeyin durumuna, tasarımın detayına, yüksekliğe ve kullanılacak malzemeye göre farklı olabilir.",
      "Bu yüzden tek bir metrekare fiyatı çoğu zaman gerçeği yansıtmaz. Duvarınızın fotoğrafını ve yaklaşık ölçüsünü gönderdiğinizde size özel, ücretsiz bir teklif hazırlıyoruz.",
    ],
    pointsTitle: "Fiyatı belirleyen etkenler",
    points: [
      { t: "Metrekare", d: "Boyanacak toplam alan fiyatın temelidir." },
      { t: "Tasarımın detayı", d: "Gerçekçi portre ve figürler, düz renkli grafik tasarımlara göre daha fazla işçilik ister." },
      { t: "Yükseklik ve erişim", d: "İskele ya da sepetli vinç gerektiren cephe işlerinde erişim ihtiyacı teklife yansır." },
      { t: "Yüzeyin durumu", d: "Sıva onarımı, temizlik ve astar gibi hazırlık ihtiyacı yüzeyden yüzeye değişir." },
      { t: "İç ya da dış mekan", d: "Dış mekanda UV ve hava koşullarına dayanıklı boya ve gerektiğinde koruyucu vernik kullanılır." },
      { t: "Konum", d: "Dünya genelinde çalışıyoruz; yolculuk gerektiren projelerde ulaşım ve konaklama teklif hazırlanırken hesaba katılır." },
    ],
    worksTitle: "Farklı ölçeklerden işlerimiz",
    works: [
      "bubbles-cafe-kedi-ic-mekan-duvar-resmi.jpg",
      "sosyal-medya-temali-renkli-ic-mekan-duvar-resmi.jpg",
      "aydin-cine-jaguar-trafo-duvar-resmi.png",
      "izmir-buyuksehir-dunya-kure-maskot-su-deposu.jpg",
      "truva-ati-tramvay-bina-cephesi-duvar-resmi.jpg",
      "kalpakli-ataturk-portresi-yapim-asamasi.png",
    ],
    processTitle: "Teklif Nasıl Hazırlanıyor",
    process: [
      { t: "Fotoğraf ve ölçü", d: "Duvarın karşıdan çekilmiş fotoğrafını ve yaklaşık en ve yükseklik ölçüsünü gönderiyorsunuz." },
      { t: "Ön değerlendirme", d: "Yüzeyi, erişim ihtiyacını ve tasarım fikrinizi değerlendirip varsa sorularımızı iletiyoruz." },
      { t: "Teklif", d: "Projeye özel fiyatı ve tahmini çalışma takvimini paylaşıyoruz; gerektiğinde yerinde ücretsiz keşif yapıyoruz." },
      { t: "Tasarım ve uygulama", d: "Onayınızla tasarımı hazırlıyor, taslak onaylandıktan sonra uygulamaya geçiyoruz." },
    ],
    faq: [
      {
        q: "Duvar resminin metrekare fiyatı ne kadar?",
        a: "Sabit bir metrekare fiyatımız yok; çünkü tasarımın detayı, yükseklik ve yüzeyin durumu fiyatı doğrudan değiştirir. Duvarınızın fotoğrafı ve ölçüsüyle size özel teklifi hazırlıyoruz.",
      },
      {
        q: "Fiyat teklifi almak ücretli mi?",
        a: "Hayır. Fiyat teklifi ve keşif ücretsizdir; teklifi aldıktan sonra karar vermek tamamen size kalır.",
      },
      {
        q: "Teklif için hangi bilgileri göndermeliyim?",
        a: "Duvarın karşıdan çekilmiş bir fotoğrafı, yaklaşık en ve yükseklik ölçüsü, iç ya da dış mekan olduğu, şehir bilgisi ve varsa tasarım fikriniz ya da örnek görseller yeterli.",
      },
      {
        q: "Küçük bir duvar için de çalışıyor musunuz?",
        a: "Evet. Bir kafe köşesinden dev bir bina cephesine kadar her ölçekte proje yapıyoruz.",
      },
      {
        q: "Başka şehir ve ülkelerdeki projelerde fiyat nasıl belirleniyor?",
        a: "Dünya genelinde çalışıyoruz. Yolculuk gerektiren projelerde ulaşım ve konaklama, teklif hazırlanırken hesaba katılır.",
      },
    ],
    whatsappText:
      "Merhaba, duvar resmi için fiyat teklifi almak istiyorum. Duvarın fotoğrafını ve yaklaşık ölçüsünü gönderiyorum.",
  },
];
