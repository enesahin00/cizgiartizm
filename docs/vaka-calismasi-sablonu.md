# Vaka çalışması nasıl eklenir

Vaka çalışması, frontmatter'ında `proje` alanı olan sıradan bir blog yazısıdır.
Bu alan doluysa:

- yazının başında "Vaka Çalışması" etiketi ve **Proje Künyesi** kutusu çıkar,
- blog listesinde kartın üstünde "Vaka Çalışması" etiketi görünür,
- yazı, `hizmet` alanında yazan hizmet sayfasının (ör. `/trafo-boyama/`)
  "Vaka Çalışmaları" bölümünde listelenir.

## 1. Fotoğrafları ekle

Her fotoğraf iki yere, aynı dosya adıyla kopyalanır:

- `src/assets/images/` → sitede optimize edilmiş (WebP) halini göstermek için
- `public/images/` → frontmatter'daki `image` yolu için

Dosya adı içeriği anlatsın: `aydin-cine-jaguar-trafo-duvar-resmi.png` gibi.
Türkçe karakter ve boşluk kullanma.

Projeyi galeride de göstermek istiyorsan `src/data/gallery.ts` listesine
başlık ve alt metinle ekle. Hizmet sayfasının "işlerimizden" bölümü yalnız
galeride kayıtlı fotoğrafları kabul eder.

## 2. Yazıyı oluştur

`src/content/blog/<adres>.md` dosyası aç. Dosya adı, yazının adresi olur:
`trafo-boyama-aydin-cine.md` → `/blog/trafo-boyama-aydin-cine/`

Aşağıdaki örnekte başlık, tarih ve künye değerleri yer tutucudur; kendi
projenin gerçek bilgileriyle değiştir.

```markdown
---
title: "Aydın Çine'de Trafo Binasını Jaguar Duvar Resmine Dönüştürdük"
date: 2026-10-01
description: "Arama sonucunda görünecek 140-160 karakterlik özet: nerede, kim için, ne yapıldı."
image: "/images/aydin-cine-jaguar-trafo-duvar-resmi.png"
proje:
  hizmet: "trafo-boyama"          # zorunlu, aşağıdaki listeden biri
  musteri: "Kurum ya da işletme adı" # isteğe bağlı
  konum: "Çine, Aydın"            # isteğe bağlı
  yil: 2025                       # isteğe bağlı, sayı
  alan: "4 cephe, yaklaşık 60 m²" # isteğe bağlı, serbest metin
  sure: "6 gün"                   # isteğe bağlı, serbest metin
---

## İhtiyaç

Müşteri neden bize geldi? Duvarın önceki hali, beklenti, kısıtlar
(izin, takvim, yükseklik).

## Tasarım

Tema nasıl seçildi, kaç taslak çıktı, neden bu renkler.

## Uygulama

Yüzey hazırlığı, kullanılan malzeme, iskele/vinç, kaç gün sürdü.
Yapım aşaması fotoğrafları buraya:

![Trafo binasının boyama öncesi hali](/images/dosya-adi.jpg)

## Sonuç

Teslim sonrası tepki, müşteri yorumu (izin alındıysa), mahalleye etkisi.
```

`hizmet` için geçerli değerler (`src/data/serviceLandings.ts`):

| Değer | Sayfa |
| --- | --- |
| `okul-duvar-resmi` | /okul-duvar-resmi/ |
| `fabrika-duvar-resmi` | /fabrika-duvar-resmi/ |
| `kafe-restoran-duvar-resmi` | /kafe-restoran-duvar-resmi/ |
| `avm-duvar-resmi` | /avm-duvar-resmi/ |
| `ofis-duvar-resmi` | /ofis-duvar-resmi/ |
| `bina-cephe-duvar-resmi` | /bina-cephe-duvar-resmi/ |
| `belediye-duvar-resmi` | /belediye-duvar-resmi/ |
| `trafo-boyama` | /trafo-boyama/ |
| `duvar-resmi-fiyatlari` | /duvar-resmi-fiyatlari/ |

Listede olmayan bir değer yazılırsa `npm run build` hata verir ve hangi
değerlerin geçerli olduğunu söyler.

## 3. Yazarken

- Künyeye yalnız doğru bildiğin bilgiyi yaz. Emin olmadığın alanı boş bırak;
  kutuda görünmez.
- Müşteri adını yazmadan önce müşterinin iznini al.
- Başlıkta hizmeti ve şehri geçir ("Bursa'da fabrika cephesi duvar resmi").
  Bu sayfalar o aramada çıkmak için var.
- `npm run build` ile kontrol et, sonra yayınla. Yeni yazı sitemap'e
  kendiliğinden girer.
