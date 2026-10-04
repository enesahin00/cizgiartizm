import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    author: z.string().default("Çizgi Artizm"),
    image: z.string().optional(),
    externalUrl: z.string().url().optional(),
    // Yalnız İngilizce yazılarda (src/content/blog/en): Türkçe aslının id'si
    translationOf: z.string().optional(),
  }),
});

export const collections = { blog };
