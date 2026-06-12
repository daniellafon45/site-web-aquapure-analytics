import coverHeavyMetals from "@/assets/blog/article-metaux-lourds.png";
import coverMine from "@/assets/blog/article-mine.png";
import coverStation from "@/assets/blog/article-station-depuration.png";
import { getTranslations } from "@/i18n/translations";
import type { Locale } from "@/i18n/types";
import type { BlogPost } from "./types";

const COVERS: Record<string, string> = {
  "seed-mine": coverMine,
  "seed-municipal": coverStation,
  "seed-heavy-metals": coverHeavyMetals,
};

const DATES: Record<string, string> = {
  "seed-mine": "2026-06-01",
  "seed-municipal": "2026-05-20",
  "seed-heavy-metals": "2026-06-12",
};

const READ_MINUTES: Record<string, number> = {
  "seed-mine": 6,
  "seed-municipal": 5,
  "seed-heavy-metals": 9,
};

export function getSeedPostsForLocale(locale: Locale): BlogPost[] {
  return getTranslations(locale).seedPosts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    author: post.author,
    coverImage: COVERS[post.id] ?? "",
    publishedAt: DATES[post.id] ?? new Date().toISOString().slice(0, 10),
    readMinutes: READ_MINUTES[post.id] ?? 5,
  }));
}

/** @deprecated Use getSeedPostsForLocale */
export const SEED_POSTS: BlogPost[] = getSeedPostsForLocale("fr");
