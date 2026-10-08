import { getCollection, type CollectionEntry } from "astro:content";
import { langs, routes, type Alternates, type Lang } from ".";

type Post = CollectionEntry<"blog">;

// Türkçe yazılar src/content/blog kökünde, çeviriler src/content/blog/<dil> altında
// (id'leri "<dil>/<slug>"). Çeviri bağı, çevirinin translationOf alanında Türkçe
// aslının id'sidir.
const prefix = new RegExp(`^(${langs.filter((l) => l !== "tr").join("|")})/`);

export const postLang = (post: Post): Lang => (post.id.match(prefix)?.[1] as Lang | undefined) ?? "tr";
export const postSlug = (post: Post) => post.id.replace(prefix, "");
export const postPath = (post: Post) => `${routes.blog[postLang(post)]}${postSlug(post)}/`;
/** Kart ve listelerdeki bağlantı: dış habere yönlenen yazılar kendi adresine gider. */
export const postHref = (post: Post) => post.data.externalUrl ?? postPath(post);

export async function getPosts(lang: Lang) {
  return (await getCollection("blog", (p) => postLang(p) === lang)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export async function postAlternates(post: Post): Promise<Alternates> {
  const all = await getCollection("blog");
  const originalId = postLang(post) === "tr" ? post.id : post.data.translationOf;
  return Object.fromEntries(
    langs.map((l) => {
      const match =
        l === "tr"
          ? all.find((p) => p.id === originalId)
          : all.find((p) => postLang(p) === l && p.data.translationOf === originalId);
      return [l, match && postPath(match)];
    })
  );
}
