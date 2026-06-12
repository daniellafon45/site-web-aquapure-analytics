import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import { Reveal } from "@/components/site/reveal";
import { useBlogPosts } from "@/hooks/use-blog-posts";
import { useLocale } from "@/i18n/context";
import { PageMeta } from "@/components/site/page-meta";

export const Route = createFileRoute("/blogue/")({
  component: BloguePage,
});

const CATEGORY_COLORS: Record<string, string> = {
  "Eaux municipales": "bg-primary/10 text-primary",
  Mine: "bg-amber-500/10 text-amber-700",
  "Pâte et papier": "bg-emerald-500/10 text-emerald-700",
  Agroalimentaire: "bg-orange-500/10 text-orange-700",
  Opérations: "bg-violet-500/10 text-violet-700",
  Conformité: "bg-rose-500/10 text-rose-700",
};

function BloguePage() {
  const { posts } = useBlogPosts();
  const { t, formatDate, translateCategory } = useLocale();

  return (
    <main className="bg-background overflow-hidden min-h-screen">
      <PageMeta title={t.meta.blogTitle} description={t.meta.blogDescription} />
      <SiteNav active="blogue" />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">{t.blog.eyebrow}</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-black leading-tight">{t.blog.title}</h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.blog.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 80}>
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card hover-lift h-full">
                <Link to="/blogue/$slug" params={{ slug: post.slug }} className="block relative aspect-[16/10] overflow-hidden bg-muted">
                  {post.coverImage ? (
                    <img src={post.coverImage} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-soft to-muted flex items-center justify-center text-sm text-muted-foreground">{t.blog.noImage}</div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  <span className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${CATEGORY_COLORS[post.category] || "bg-primary/10 text-primary"}`}>
                    {translateCategory(post.category)}
                  </span>
                </Link>

                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {post.readMinutes} {t.blog.minRead}
                    </span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy leading-snug group-hover:text-primary transition-colors">
                    <Link to="/blogue/$slug" params={{ slug: post.slug }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                  <Link to="/blogue/$slug" params={{ slug: post.slug }} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                    {t.blog.readArticle} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-navy text-navy-foreground p-8 md:p-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold">{t.blog.topicCtaTitle}</h2>
          <p className="mt-3 text-sm text-white/75 leading-relaxed">{t.blog.topicCtaBody}</p>
          <a href="/#contact" className="mt-6 inline-flex rounded-md bg-white text-navy px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
            {t.blog.scheduleMeeting}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
