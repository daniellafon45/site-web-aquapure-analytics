/** Canonical production origin — used for canonical URLs, Open Graph and JSON-LD. */
export const SITE_URL = "https://aquapure-analytics.com";

export const SITE_NAME = "AquaPure Analytics";

export const DEFAULT_DESCRIPTION =
  "Chimie, énergie, analyses labo : pilotez vos effluents en temps réel avec vos capteurs et l'IA. Données hébergées au Québec.";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/aquapure-analytics/?viewAsMember=true";

export const PUBLIC_PATHS = [
  "/",
  "/jumeau-numerique",
  "/blogue",
  "/blogue/eau-procede-mine-optimiser-sans-compromettre",
  "/blogue/station-depuration-pilotage-temps-reel",
  "/blogue/metaux-lourds-prediction-ia-capteurs-mine",
  "/confidentialite",
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["AquaPure", "Aquapure Analytics"],
        url: SITE_URL,
        logo: absoluteUrl("/apple-touch-icon.png"),
        email: "contact@aquapure-analytics.com",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "contact@aquapure-analytics.com",
          areaServed: "CA-QC",
          availableLanguage: ["French", "English"],
        },
        sameAs: [LINKEDIN_URL],
        description: DEFAULT_DESCRIPTION,
        knowsAbout: [
          "jumeau numérique traitement des eaux",
          "SCADA",
          "capteurs virtuels",
          "Directive 019",
          "métaux lourds mine",
          "station d'épuration",
        ],
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Quebec, Canada",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["fr-CA", "en-CA"],
      },
    ],
  };
}

type PageHeadInput = {
  title: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

type ArticleJsonLdInput = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author?: string;
};

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  author = SITE_NAME,
}: ArticleJsonLdInput) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: SITE_URL,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "fr-CA",
  };
}

export function faqPageJsonLd(items: { question: string; answerPlain: string }[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answerPlain,
      },
    })),
    url: pageUrl,
  };
}

export function buildPageHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
}: PageHeadInput) {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl("/apple-touch-icon.png");

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "application-name", content: SITE_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "fr_CA" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
