import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import { BlogContent } from "@/components/blog/blog-content";
import { getPostBySlug, getSeedPosts } from "@/lib/blog/store";
import type { BlogPost } from "@/lib/blog/types";

export const Route = createFileRoute("/blogue/$slug")({
  head: ({ params }) => {
    const post = getSeedPosts().find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: post ? `${post.title}, Blogue AquaPure` : "Article, Blogue AquaPure" },
        { name: "description", content: post?.excerpt ?? "" },
      ],
    };
  },
  component: BlogArticlePage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<BlogPost | undefined>(() =>
    getSeedPosts().find((p) => p.slug === slug),
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const found = getPostBySlug(slug);
    setPost(found);
    setReady(true);
  }, [slug]);

  if (ready && !post) {
    throw notFound();
  }

  if (!post) {
    return (
      <main className="bg-background min-h-screen">
        <SiteNav active="blogue" />
        <div className="pt-24 sm:pt-32 px-4 sm:px-6 pb-20 mx-auto max-w-3xl animate-pulse space-y-4">
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="aspect-[21/9] bg-muted rounded-2xl" />
          <div className="h-10 bg-muted rounded w-3/4" />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background overflow-hidden min-h-screen">
      <SiteNav active="blogue" />

      <article className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            to="/blogue"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-4" />
            Retour au blogue
          </Link>

          {post.coverImage && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 aspect-[21/9] bg-muted">
              <img
                src={post.coverImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />
              {post.readMinutes} min de lecture
            </span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>· {post.author}</span>
          </div>

          <h1 className="mt-6 text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-black leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-5">
            {post.excerpt}
          </p>

          <BlogContent content={post.content} />

          <div className="mt-14 rounded-2xl bg-soft border border-border/60 p-8 text-center max-w-3xl">
            <h2 className="text-lg font-bold text-navy">Ce sujet vous parle ?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Découvrez comment AquaPure aide les équipes québécoises à reprendre le contrôle de
              leurs opérations hydriques.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="/#contact"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Demander une démo
              </a>
              <Link
                to="/jumeau-numerique"
                className="rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
              >
                Jumeau numérique
              </Link>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
