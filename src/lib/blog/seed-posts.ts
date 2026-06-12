import coverMine from "@/assets/blog/article-mine.png";
import coverStation from "@/assets/blog/article-station-depuration.png";
import type { BlogPost } from "./types";

export const SEED_POSTS: BlogPost[] = [
  {
    id: "seed-mine",
    slug: "eau-procede-mine-optimiser-sans-compromettre",
    title: "Eau de procédé en mine : optimiser sans compromettre la conformité",
    excerpt:
      "Réutiliser, recycler, réduire, la pression est réelle des deux côtés. Sans visibilité continue, chaque ajustement ressemble à un pari que vos équipes hésitent à prendre.",
    coverImage: coverMine,
    category: "Mine",
    author: "Équipe AquaPure",
    publishedAt: "2026-06-01",
    readMinutes: 6,
    content: `En milieu minier, chaque mètre cube d'eau compte doublement : coût d'approvisionnement d'un côté, obligation réglementaire sur les rejets de l'autre. Les équipes sont prises en étau entre la demande de production et la surveillance accrue des impacts hydriques.

Sans visibilité continue sur la qualité et les volumes, toute optimisation ressemble à un pari. On réduit un débit ici, on découvre un écart de conformité là. La prudence l'emporte, et l'eau continue de couler, chaque jour un peu plus que nécessaire.

Les relevés manuels et les rapports mensuels arrivent trop tard. Quand l'écart apparaît dans un tableau Excel, des milliers de mètres cubes ont déjà été traités ou rejetés dans des conditions sous-optimales. Vos ingénieurs passent alors des heures à reconstituer l'historique au lieu de corriger la source.

Des modèles prédictifs branchés sur vos capteurs terrain permettent d'anticiper les dérives avant qu'elles ne deviennent des incidents. Vous optimisez les boucles de recyclage en confiance, avec une traçabilité que les auditeurs peuvent suivre ligne par ligne.

L'enjeu n'est pas de choisir entre productivité et environnement. C'est de cesser de piloter l'un sans l'autre, et d'arrêter de payer le coût de l'attente.`,
  },
  {
    id: "seed-municipal",
    slug: "station-depuration-pilotage-temps-reel",
    title: "Station de dépuration : reprendre le contrôle quand chaque minute compte",
    excerpt:
      "Débits, boues, qualité de rejet, une station municipale génère des milliers de points de données par jour. Le problème n'est pas le manque d'information, c'est le délai pour agir.",
    coverImage: coverStation,
    category: "Eaux municipales",
    author: "Équipe AquaPure",
    publishedAt: "2026-05-20",
    readMinutes: 5,
    content: `Dans une station de traitement des eaux usées, la marge d'erreur est mince. Un déséquilibre en aération, une montée de turbidité, une pompe qui dérive : les conséquences se mesurent en qualité de rejet, en énergie gaspillée et en heures supplémentaires pour l'équipe de quart.

Pourtant, la majorité des décisions reposent encore sur des instantanés, relevés de terrain, exports SCADA différés, réunions hebdomadaires pour « faire le point ». Entre deux vérifications, la réalité opérationnelle a déjà bougé.

Ce décalage crée un problème silencieux : vos opérateurs savent qu'une anomalie se profile, mais ils n'ont pas les outils pour la quantifier et la remonter avant qu'elle ne devienne un incident. Résultat : interventions en urgence, surfacturation énergétique et justification difficile devant le conseil municipal.

Une supervision en temps réel, corrélée à vos procédés réels, change la posture des équipes. Les alertes deviennent actionnables, les tendances visibles, les rapports ESG documentés automatiquement, sans reconstituer l'historique à la main chaque trimestre.

Chaque semaine sans visibilité continue, ce sont des coûts opérationnels et environnementaux qui s'accumulent sans apparaître dans vos tableaux de bord. La question n'est plus d'avoir plus de capteurs, c'est de transformer ce qu'ils mesurent déjà en décisions immédiates.`,
  },
];
