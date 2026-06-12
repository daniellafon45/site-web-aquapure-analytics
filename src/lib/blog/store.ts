import { contentToPlainText } from "./content";
import { SEED_POSTS } from "./seed-posts";
import type { BlogPost } from "./types";

const STORAGE_KEY = "aquapure-blog-custom";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function readCustomPosts(): BlogPost[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as BlogPost[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((p) => ({ ...p, coverImage: p.coverImage ?? "" }));
  } catch {
    return [];
  }
}

function writeCustomPosts(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function getSeedPosts(): BlogPost[] {
  return SEED_POSTS;
}

export function getAllPosts(): BlogPost[] {
  const seedSlugs = new Set(SEED_POSTS.map((p) => p.slug));
  const custom = readCustomPosts().filter((p) => !seedSlugs.has(p.slug));
  return [...SEED_POSTS, ...custom].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function addCustomPost(
  input: Omit<BlogPost, "id" | "slug" | "readMinutes"> & { slug?: string },
): BlogPost {
  const slug = input.slug?.trim() || slugify(input.title);
  const words = contentToPlainText(input.content).split(/\s+/).filter(Boolean).length;
  const post: BlogPost = {
    id: `custom-${Date.now()}`,
    slug,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    coverImage: input.coverImage.trim(),
    category: input.category,
    author: input.author.trim() || "Équipe AquaPure",
    publishedAt: input.publishedAt,
    readMinutes: Math.max(1, Math.ceil(words / 200)),
  };

  const existing = readCustomPosts();
  if (existing.some((p) => p.slug === post.slug) || SEED_POSTS.some((p) => p.slug === post.slug)) {
    throw new Error("Un article avec ce slug existe déjà.");
  }

  writeCustomPosts([post, ...existing]);
  return post;
}

export function deleteCustomPost(id: string) {
  const filtered = readCustomPosts().filter((p) => p.id !== id);
  writeCustomPosts(filtered);
}

export function estimateReadMinutes(content: string): number {
  const words = contentToPlainText(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
