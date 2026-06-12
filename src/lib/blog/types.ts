export type BlogCategory = string;

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  readMinutes: number;
};

export const DEFAULT_BLOG_CATEGORIES = [
  "Eaux municipales",
  "Mine",
  "Pâte et papier",
  "Agroalimentaire",
  "Opérations",
  "Conformité",
] as const;

/** @deprecated Utiliser getAllCategories() pour inclure les catégories personnalisées */
export const BLOG_CATEGORIES: BlogCategory[] = [...DEFAULT_BLOG_CATEGORIES];
