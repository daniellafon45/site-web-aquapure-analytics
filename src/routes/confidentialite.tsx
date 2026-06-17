import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import { PageMeta } from "@/components/site/page-meta";
import { getPrivacyPolicy } from "@/content/legal/privacy-policy";
import { useLocale } from "@/i18n/context";
import { buildPageHead } from "@/lib/seo/site-config";

export const Route = createFileRoute("/confidentialite")({
  head: () => {
    const policy = getPrivacyPolicy("fr");
    return buildPageHead({
      title: `${policy.title} — AquaPure Analytics`,
      description: policy.metaDescription,
      path: "/confidentialite",
    });
  },
  component: ConfidentialitePage,
});

function ConfidentialitePage() {
  const { locale } = useLocale();
  const policy = getPrivacyPolicy(locale);

  return (
    <main className="bg-background min-h-screen">
      <PageMeta title={policy.title} description={policy.metaDescription} />
      <SiteNav />

      <article className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm text-muted-foreground">{policy.lastUpdated}</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-black leading-tight">{policy.title}</h1>

          <div className="mt-10 space-y-8">
            {policy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-navy">{section.title}</h2>
                <p className="mt-3 text-base text-navy/85 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
