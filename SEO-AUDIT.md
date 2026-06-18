# SEO / GEO Audit — AquaPure Analytics

**URL :** https://aquapure-analytics.com  
**Date :** 18 juin 2026  
**Type :** SaaS B2B industriel — traitement des eaux, jumeau numérique, Québec

---

## Executive Summary

| Score global | 82/100 |
|--------------|--------|

**Forces :** meta SSR via TanStack `head`, canonical + Open Graph sur toutes les routes publiques, FAQPage JSON-LD sur `/jumeau-numerique`, Article JSON-LD sur les articles blogue, `robots.txt` et `sitemap.xml` à jour, `llms.txt` pour la visibilité IA, données structurées Organization + WebSite.

**Priorités restantes :** image OG dédiée 1200×630 (actuellement icône), hreflang absent (locale client-side sans URLs distinctes), soumettre le sitemap dans Search Console si pas déjà fait.

---

## Scores par catégorie

| Catégorie | Poids | Score | Notes |
|-----------|-------|-------|-------|
| Crawlabilité & indexation | 20 % | 88 | robots.txt, sitemap, lastmod, adminblog noindex |
| On-page SEO | 25 % | 84 | Titres, meta descriptions, H1/H2, copy ESG raccourci |
| Contenu / E-E-A-T | 20 % | 83 | FAQ 10 Q/R, blog 3 articles, citations autoritaires |
| Technique & schema | 15 % | 80 | Organization, WebSite, FAQPage, Article |
| GEO / moteurs IA | 10 % | 78 | llms.txt, bots IA autorisés, answer-first FAQ |
| Internationalisation | 10 % | 72 | FR/EN/ES/ZH sans hreflang (limitation architecture) |

---

## Crawlabilité & indexation

| Élément | Statut | Détail |
|---------|--------|--------|
| robots.txt | OK | `Allow: /`, `Disallow: /adminblog`, sitemap référencé |
| Bots IA (GEO) | OK | PerplexityBot, ChatGPT-User, GPTBot, ClaudeBot, Bingbot explicitement autorisés |
| sitemap.xml | OK | 7 URLs publiques + `lastmod` |
| Canonical | OK | `buildPageHead()` sur chaque route |
| adminblog | OK | `noindex, nofollow` |

---

## On-page — pages clés

| Page | Title (FR) | Meta description | Schema |
|------|------------|------------------|--------|
| `/` | AquaPure Analytics — Réduisez vos coûts… | Chimie, énergie, analyses labo… | Organization, WebSite |
| `/jumeau-numerique` | Jumeau numérique, Aquapure Analytics | SCADA, automates, modèles mathématiques… | FAQPage (10 Q/R) |
| `/blogue` | Blogue, Aquapure Analytics | Expertise secteurs Québec | — |
| `/blogue/*` | [Titre] — Blogue AquaPure Analytics | Excerpt article | Article |
| `/confidentialite` | Politique — AquaPure Analytics | Meta policy | — |

---

## FAQ Jumeau numérique (GEO)

- 10 questions ciblant : jumeau numérique, SCADA, BIM vs procédé, souveraineté, Directive 019, capteurs virtuels, pilote
- Liens sortants vérifiés (SUEZ, INMQ, MELCCFP, Xylem, DHI, Prevu3D) — tous HTTP 200
- `answerPlain` aligné avec le rendu visuel (sans tirets longs)
- Ancre FAQ : `#digital-twin-faq-title` référencée dans `llms.txt`

---

## Optimisations appliquées (cette livraison)

1. `public/robots.txt` — règles explicites pour crawlers IA
2. `public/llms.txt` — FAQ, articles blogue, mots-clés
3. `public/sitemap.xml` — balises `lastmod`
4. `site-config.ts` — `contactPoint`, `knowsAbout`, `articleJsonLd()`
5. `blogue/$slug.tsx` — schéma Article par article
6. Meta `digitalTwinDescription` enrichie (FR/EN/ES/ZH)
7. Copy section Industries ESG raccourci (gains mesurables)
8. Copy sous-titre jumeau numérique (automates, modèles mathématiques)

---

## Recommandations priorisées

### Haute priorité

1. **Search Console** — soumettre `https://aquapure-analytics.com/sitemap.xml`
2. **Image OG** — créer `/og-image.png` 1200×630 et l'utiliser dans `buildPageHead`
3. **Rich Results Test** — valider FAQPage et Article en production

### Moyenne priorité

1. Publier 1–2 articles : « jumeau numérique vs BIM » et « capteur virtuel STEP »
2. Backlinks depuis INMQ, ÉTS, AquaHacking vers `/jumeau-numerique`
3. Traduire les corps de réponse FAQ EN pour ES/ZH (questions déjà localisées)

### Basse priorité

1. Page comparative `/alternatives/suez-jumeau-numerique`
2. Hreflang si migration vers URLs par locale (`/fr/`, `/en/`)

---

## Vérification post-déploiement

- [ ] https://search.google.com/test/rich-results?url=https%3A%2F%2Faquapure-analytics.com%2Fjumeau-numerique
- [ ] https://search.google.com/test/rich-results?url=https%3A%2F%2Faquapure-analytics.com%2Fblogue%2Fmetaux-lourds-prediction-ia-capteurs-mine
- [ ] `curl -s https://aquapure-analytics.com/robots.txt`
- [ ] `curl -s https://aquapure-analytics.com/llms.txt`

---

## Fichiers SEO du projet

- `src/lib/seo/site-config.ts` — canonical, OG, JSON-LD
- `src/i18n/digital-twin-faq-content.ts` — contenu FAQ + plain text schema
- `src/routes/__root.tsx` — Organization + WebSite
- `src/routes/jumeau-numerique.tsx` — FAQPage head
- `src/routes/blogue/$slug.tsx` — Article head
- `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`
