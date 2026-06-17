import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/use-blog-posts";
import { useLocale } from "@/i18n/context";
import { getPostById } from "@/lib/blog/store";

const SEED_RELATED_IDS: Record<string, string[]> = {
  "seed-mine": ["seed-heavy-metals", "seed-municipal"],
  "seed-municipal": ["seed-mine", "seed-heavy-metals"],
  "seed-heavy-metals": ["seed-mine", "seed-municipal"],
};

type BlogArticleLinksProps = {
  currentPostId: string;
};

export function BlogArticleLinks({ currentPostId }: BlogArticleLinksProps) {
  const { posts } = useBlogPosts();
  const { locale, t } = useLocale();

  const relatedPosts = posts.filter((p) => p.id !== currentPostId);
  const seedRelatedIds = SEED_RELATED_IDS[currentPostId];
  const seedRelated = seedRelatedIds
    ?.map((id) => getPostById(id, locale))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (relatedPosts.length === 0) return null;

  return (
    <nav aria-label={t.blog.relatedAria} className="mt-12 max-w-3xl border-t border-border/60 pt-10">
      {seedRelated && seedRelated.length > 0 && (
        <p className="text-base text-navy/85 leading-relaxed">
          {t.blog.seeAlso}{" "}
          {seedRelated.map((post, index) => (
            <span key={post.id}>
              {index > 0 && (index === seedRelated.length - 1 ? ` ${t.blog.and} ` : ", ")}
              <Link
                to="/blogue/$slug"
                params={{ slug: post.slug }}
                className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
              >
                {post.title}
              </Link>
            </span>
          ))}
          .
        </p>
      )}

      <h2 className="mt-8 text-lg font-bold text-navy">{t.blog.relatedTitle}</h2>
      <ul className="mt-4 space-y-3">
        {relatedPosts.map((post) => (
          <li key={post.id}>
            <Link
              to="/blogue/$slug"
              params={{ slug: post.slug }}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/30 hover:bg-soft/50 transition-colors"
            >
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground">{post.category}</span>
                <span className="block text-sm font-semibold text-navy group-hover:text-primary transition-colors">
                  {post.title}
                </span>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary mt-1" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <Link to="/blogue" className="font-medium text-primary hover:underline">
          {t.blog.allArticles}
        </Link>
        <span className="text-muted-foreground" aria-hidden>
          ·
        </span>
        <Link to="/jumeau-numerique" className="font-medium text-primary hover:underline">
          {t.blog.digitalTwin}
        </Link>
        <span className="text-muted-foreground" aria-hidden>
          ·
        </span>
        <a href="/#contact" className="font-medium text-primary hover:underline">
          {t.blog.requestDemo}
        </a>
        <span className="text-muted-foreground" aria-hidden>
          ·
        </span>
        <Link to="/confidentialite" className="font-medium text-primary hover:underline">
          {t.blog.privacyPolicy}
        </Link>
      </div>
    </nav>
  );
}
