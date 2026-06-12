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

Dans **Workers & Pages** → **Create** → connecter le dépôt GitHub :

| Paramètre | Valeur |
|-----------|--------|
| Framework | None |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

## Formulaire de contact

Par défaut, le formulaire utilise FormSubmit depuis le navigateur vers `contact@aquapure-analytics.com`.  
Activez l'adresse une première fois via le courriel de confirmation FormSubmit.
