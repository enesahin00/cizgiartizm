import { getCollection, type CollectionEntry } from "astro:content";
import { routes, type Alternates, type Lang } from ".";

type Post = CollectionEntry<"blog">;

// Türkçe yazılar src/content/blog kökünde, İngilizceler src/content/blog/en altında
// (id'leri "en/<slug>"). Çeviri bağı İngilizce yazının translationOf alanındadır.
export const postLang = (post: Post): Lang => (post.id.startsWith("en/") ? "en" : "tr");
export const postSlug = (post: Post) => post.id.replace(/^en\//, "");
export const postPath = (post: Post) => `${routes.blog[postLang(post)]}/${postSlug(post)}/`;
/** Kart ve listelerdeki bağlantı: dış habere yönlenen yazılar kendi adresine gider. */
export const postHref = (post: Post) => post.data.externalUrl ?? postPath(post);

export async function getPosts(lang: Lang) {
  return (await getCollection("blog", (p) => postLang(p) === lang)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export async function postAlternates(post: Post): Promise<Alternates> {
  const all = await getCollection("blog");
  const tr = postLang(post) === "tr" ? post : all.find((p) => p.id === post.data.translationOf);
  const en = postLang(post) === "en" ? post : all.find((p) => p.data.translationOf === post.id);
  return { tr: tr && postPath(tr), en: en && postPath(en) };
}
