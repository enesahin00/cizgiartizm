// Google Ads dönüşümleri: olay adı → dönüşüm etiketinin "send_to" değeri.
//
// Değer, Google Ads > Hedefler > Dönüşümler > ilgili eylem > Etiket kurulumu >
// "Google etiketini kendiniz kurun" ekranındaki snippet'te yer alan
// send_to: 'AW-16646268606/xxxxxxxxxxxx' metninin tamamıdır.
//
// Boş bırakılan olay Ads'e dönüşüm olarak gitmez (GA4'e yine gider).
// DİKKAT: Aynı aksiyonu GA4 key event'i olarak Ads'e içe aktarıyorsanız burayı
// boş bırakın; ikisi birden açık olursa dönüşüm iki kez sayılır.
export const ADS_CONVERSIONS: Record<string, string> = {
  whatsapp_click: "",
  phone_click: "",
  generate_lead: "",
};
