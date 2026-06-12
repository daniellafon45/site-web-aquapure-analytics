# site-web-aquapure-analytics

Site vitrine AquaPure Analytics (TanStack Start + React + Tailwind), prêt pour Cloudflare Workers.

## Développement local

```bash
npm install
npm run dev
```

Application : http://localhost:8080

## Build de production

```bash
npm run build
```

Le build Nitro génère les artefacts dans `.output/` (worker + assets statiques).

## Déploiement Cloudflare

### Prérequis

1. Compte [Cloudflare](https://dash.cloudflare.com/)
2. [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) connecté : `npx wrangler login`
3. Variables d'environnement (optionnel) dans le dashboard Cloudflare Workers :
   - `RESEND_API_KEY` — pour l'envoi courriel serveur
   - `CONTACT_FROM_EMAIL` — expéditeur Resend

### Déploiement manuel

```bash
npm run deploy
```

### Déploiement automatique (GitHub Actions)

1. Créez un token API Cloudflare avec permission **Workers Scripts Edit** et **Account Settings Read**
2. Ajoutez ces secrets au dépôt GitHub :
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Chaque push sur `main` déclenche le workflow `.github/workflows/deploy-cloudflare.yml`

### Cloudflare Dashboard (alternative)

Ce site est une application **SSR (TanStack Start + Worker)** — pas un site statique Vite.

Dans **Workers & Pages** → connecter le dépôt GitHub, utilisez **Worker** (pas Pages statique) :

| Paramètre | Valeur |
|-----------|--------|
| Type | **Pages** (avec Functions / Worker intégré) |
| Production branch | `main` |
| Framework preset | **None** |
| Build command | `npm run build` |
| Build output directory | **`dist`** |
| Deploy command | *(laisser vide — Cloudflare utilise `dist/_worker.js/wrangler.json`)* |

Sur Cloudflare Pages, le build génère `dist/` (assets + `dist/_worker.js/`). Ne déclarez pas de binding `ASSETS` dans `wrangler.toml` : il est réservé et injecté automatiquement par Pages.

Pour un déploiement **Worker** via GitHub Actions ou en local : `npm run deploy` (utilise `.output/server/wrangler.json` après build).

## Formulaire de contact

Le formulaire envoie les messages **côté serveur** (Worker Cloudflare). Configurez au moins une variable d'environnement dans Cloudflare Pages → **Settings** → **Environment variables** :

| Variable | Service | Configuration |
|----------|---------|---------------|
| `RESEND_API_KEY` | [Resend](https://resend.com) | Domaine vérifié + clé API |
| `WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com) | Clé d'accès gratuite (alternative rapide) |

En local, copiez `.env.example` vers `.dev.vars` pour Wrangler ou `.env` pour le dev Vite.

## Référencement (Google / AI)

Le site canonique est **https://aquapure-analytics.com** (sans `www`).

### Actions requises côté DNS / Cloudflare

1. **Rediriger `www` vers le domaine nu** — aujourd'hui `www.aquapure-analytics.com` pointe encore vers une page Hostinger « domaine parqué », ce qui empêche Google d'associer la marque au bon site. Dans Cloudflare : règle de redirection `www.aquapure-analytics.com/*` → `https://aquapure-analytics.com/$1` (301).
2. **Google Search Console** — ajoutez la propriété `https://aquapure-analytics.com`, vérifiez le domaine, puis soumettez le sitemap : `https://aquapure-analytics.com/sitemap.xml`.
3. **Bing Webmaster Tools** — même sitemap pour Microsoft Copilot / Bing.
4. **Robots Cloudflare (optionnel AI SEO)** — le robots.txt géré par Cloudflare peut bloquer `GPTBot`, `ClaudeBot`, etc. Pour la visibilité dans ChatGPT/Perplexity, autorisez au minimum `PerplexityBot` et `ChatGPT-User` dans le tableau de bord Cloudflare (Scrape Shield / AI bots).

### Fichiers SEO livrés

- `public/sitemap.xml` — plan du site pour l'indexation
- `public/robots.txt` — autorise l'indexation (sauf `/adminblog`)
- `public/llms.txt` — contexte pour les moteurs IA
- JSON-LD `Organization` + `WebSite` injecté dans le HTML (SSR)
- URL canonique et balises Open Graph sur chaque page publique

## Sécurité et production

- En-têtes HTTP de sécurité appliqués par le worker (`X-Frame-Options`, `X-Content-Type-Options`, etc.)
- Fichiers statiques : `public/_headers` (cache assets + en-têtes)
- `public/robots.txt` : la page `/adminblog` est exclue de l'indexation
- Contenu HTML du blogue assaini avant affichage (scripts et attributs dangereux retirés)
- L'administration du blogue (`/adminblog`) est une interface locale (localStorage) : en production, protégez-la avec [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/policies/access/) ou retirez l'accès public si elle n'est pas nécessaire
