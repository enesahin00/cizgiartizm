import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { serviceLandings } from "./data/serviceLandings";

const serviceSlugs = serviceLandings.map((s) => s.slug) as [string, ...string[]];

// Vaka çalışması künyesi. Dolu olan yazı "Vaka Çalışması" etiketi alır, yazıda
// künye kutusu çıkar ve hizmet açılış sayfasında listelenir.
// Şablon ve yazım rehberi: docs/vaka-calismasi-sablonu.md
const proje = z.object({
  /** İlgili hizmet sayfası (serviceLandings slug'ı) */
  hizmet: z.enum(serviceSlugs),
  musteri: z.string().optional(),
  konum: z.string().optional(),
  yil: z.number().int().optional(),
  /** Serbest metin: "120 m²", "4 cephe" gibi */
  alan: z.string().optional(),
  /** Serbest metin: "5 gün" gibi */
  sure: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    author: z.string().default("Çizgi Artizm"),
    image: z.string().optional(),
    externalUrl: z.string().url().optional(),
    proje: proje.optional(),
    // Yalnız İngilizce yazılarda (src/content/blog/en): Türkçe aslının id'si
    translationOf: z.string().optional(),
  }),
});

export const collections = { blog };
