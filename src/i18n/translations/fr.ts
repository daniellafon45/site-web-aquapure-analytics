import type { Translations } from "../types";

export const fr: Translations = {
  meta: {
    homeTitle: "Aquapure Analytics, Maîtrisez vos opérations hydriques",
    homeDescription:
      "Optimisez la gestion de l'eau grâce à la donnée, l'IA et l'intelligence en temps réel. Réduisez vos coûts, atteignez vos objectifs ESG.",
    digitalTwinTitle: "Jumeau numérique, Aquapure Analytics",
    digitalTwinDescription:
      "Découvrez comment AquaPure connecte vos bases de données et exploite un agent IA auto-hébergé pour automatiser vos procédés industriels et optimiser le contrôle en temps réel.",
    blogTitle: "Blogue, Aquapure Analytics",
    blogDescription:
      "Actualités, analyses et expertise pour les gestionnaires d'eau municipale, miniers, papetiers et agroalimentaires au Québec.",
    notFoundTitle: "Page introuvable",
    notFoundBody: "La page que vous cherchez n'existe pas ou a été déplacée.",
    errorTitle: "Cette page n'a pas pu se charger",
    errorBody: "Un problème est survenu de notre côté.",
    backHome: "Retour à l'accueil",
    retry: "Réessayer",
  },
  nav: {
    sectors: "Nos secteurs",
    features: "Fonctionnalités",
    integrations: "Intégrations",
    digitalTwin: "Jumeau numérique",
    blog: "Blogue",
    contact: "Nous contacter",
    requestDemo: "Demander une démo",
    demoShort: "Démo",
    openMenu: "Ouvrir le menu",
    menu: "Menu",
    language: "Langue",
  },
  footer: {
    sectorsTitle: "Secteurs d'activité",
    companyTitle: "Entreprise",
    blog: "Blogue",
    linkedInAria: "AquaPure Analytics sur LinkedIn",
    sectors: [
      { label: "Eaux municipales", href: "/#eaux-municipales" },
      { label: "Mine", href: "/#mine" },
      { label: "Pâte et papier", href: "/#pate-et-papier" },
      { label: "Agroalimentaire", href: "/#agroalimentaire" },
    ],
  },
  home: {
    hero: {
      title: "Maîtrisez vos opérations hydriques grâce à la donnée et l'IA",
      subtitle:
        "Transformez vos données en décisions immédiates : moins de gaspillage, plus de contrôle, et une performance durable, sans bouleverser vos opérations actuelles.",
      hosting: "Vos données sont hébergées au Québec, chez vous.",
      contact: "Nous contacter",
      demo: "Demander une démo",
    },
    industries: {
      eyebrow: "Nos secteurs",
      title: "Conçu pour les environnements opérationnels complexes",
      description:
        "Transformez vos engagements ESG en résultats opérationnels concrets : réduisez la consommation d'eau, limitez votre empreinte carbone et documentez vos progrès avec une précision que vos équipes et vos parties prenantes peuvent défendre, grâce à l'analyse en temps réel et à l'IA, au cœur des industries québécoises.",
      scheduleMeeting: "Planifier une rencontre",
      items: [
        {
          id: "eaux-municipales",
          label: "EAUX MUNICIPALES",
          title: "Distribution efficace, eau de qualité.",
          desc: "Assurez une distribution efficace et la qualité de l'eau grâce à l'analyse en temps réel, prévenant les fuites et optimisant le traitement pour les communautés.",
        },
        {
          id: "mine",
          label: "MINE",
          title: "Extraction optimisée, impact maîtrisé.",
          desc: "Optimisez l'extraction et la gestion des ressources avec des modèles prédictifs robustes, garantissant la sécurité opérationnelle et réduisant l'impact environnemental.",
        },
        {
          id: "pate-et-papier",
          label: "PÂTE ET PAPIER",
          title: "Eau industrielle sous contrôle.",
          desc: "Réduisez la consommation d'eau et maîtrisez le traitement des effluents grâce à une supervision en temps réel et une maintenance prédictive de vos installations.",
        },
        {
          id: "agroalimentaire",
          label: "AGRO ALIMENTAIRE",
          title: "Qualité et conformité, en continu.",
          desc: "Sécurisez la qualité de l'eau dans vos procédés alimentaires avec une analyse intelligente, des alertes proactives et une traçabilité complète.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités",
      ergonomic:
        "L'interface est très ergonomique et pensée pour être très intuitive et facile à utiliser.",
      body: "Nous déployons des systèmes interopérables branchés sur votre infrastructure actuelle, puis adaptons chaque module à vos besoins réels, pour que la technologie accélère vos opérations, sans les complexifier.",
      learnMore: "En savoir plus",
      items: [
        {
          id: "connect-external-db",
          label: "Connexion BD externe",
          category: "Intégration des données\net connectivité",
          title: "Données capteurs en temps réel",
          description:
            "Visualisez chaque lecture, chaque équipement, chaque filière, et réagissez avant que le problème ne coûte cher.",
        },
        {
          id: "import",
          label: "Import",
          category: "Intégration des données\net connectivité",
          title: "Import et export",
          description:
            "Récupérez l'historique sur la période et le format qui comptent pour vos rapports, audits et décisions.",
        },
        {
          id: "invite-team",
          label: "Inviter l'équipe",
          category: "Collaboration",
          title: "Gestion d'équipe",
          description:
            "Centralisez rôles, activités terrain et suivi opérationnel, une seule source de vérité pour toute l'organisation.",
        },
        {
          id: "share-project",
          label: "Partager un projet",
          category: "Collaboration",
          title: "Éditeur de rapports",
          description:
            "Produisez des rapports clairs et partageables qui renforcent la confiance de vos parties prenantes.",
        },
        {
          id: "mission-scoot",
          label: "Mission Scoot",
          category: "Collaboration",
          title: "Missions terrain",
          description:
            "Envoyez vos techniciens au bon endroit, au bon moment, avec preuves photo, GPS et instructions précises.",
        },
        {
          id: "erd",
          label: "Schéma ERD",
          category: "Gestion des schémas",
          title: "Diagramme ERD",
          description:
            "Comprenez en un coup d'œil la structure de vos données et accélérez chaque intégration.",
        },
        {
          id: "apis",
          label: "APIs",
          category: "Intégrations\net automatisations",
          title: "Jumeau numérique et APIs",
          description:
            "Pilotez paramètres, seuils de sécurité et autorisations SCADA depuis une plateforme unifiée.",
        },
        {
          id: "automate",
          label: "Intégration automate facile",
          category: "Intégrations\net automatisations",
          title: "Connexions SCADA",
          description:
            "Branchez vos automates et systèmes industriels, PI, Ignition, Wonderware, sans repartir de zéro.",
        },
      ],
    },
    stats: {
      monitoring: "Pilotage intelligent de vos procédés industriels",
      energy: "Réduction mesurable de votre consommation énergétique",
      carbon: "Diminution concrète de votre empreinte carbone",
    },
    integrations: {
      title: "Compatible avec votre environnement de production",
      description:
        "Connectez-vous aux automates et protocoles que vous utilisez déjà, Modbus, OPC UA, Siemens, Schneider et plus, sans refonte de votre infrastructure.",
    },
    partners: {
      title: "Soutenu par l'écosystème d'innovation du Québec",
      description:
        "Une technologie éprouvée, portée par les leaders de l'innovation québécoise, pour accélérer votre transition numérique en toute confiance.",
    },
    contact: {
      title: "Parlons de votre projet",
      subtitle:
        "Découvrez comment Aquapure Analytics peut améliorer votre performance environnementale et économique, avec une stratégie sur mesure, adaptée à votre réalité opérationnelle.",
      formTitle: "Décrivez votre besoin",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Courriel",
      phone: "Téléphone",
      company: "Entreprise",
      website: "Site web",
      websitePlaceholder: "ex. aquapure-analytics.com",
      need: "Votre besoin",
      needPlaceholder:
        "Décrivez votre défi opérationnel, vos objectifs ESG ou le secteur visé…",
      submit: "Envoyer ma demande",
      submitting: "Envoi en cours…",
      successTitle: "Demande enregistrée avec succès",
      successBody:
        "Un membre de l'équipe AquaPure analysera votre besoin et vous contactera d'ici un à deux jours ouvrables pour convenir d'un échange ciblé sur vos opérations.",
      honeypot: "Ne pas remplir",
      errors: {
        lastName: "Le nom est requis.",
        firstName: "Le prénom est requis.",
        emailRequired: "Le courriel est requis.",
        emailInvalid: "Veuillez entrer une adresse courriel valide.",
        message: "Décrivez votre besoin.",
        messageTooLong: "Le message ne peut pas dépasser 5000 caractères.",
        emailTooLong: "Le courriel est trop long.",
      },
    },
  },
  digitalTwin: {
    title: "Comment fonctionne notre plateforme de jumeau numérique ?",
    subtitle:
      "Découvrez comment AquaPure connecte vos bases de données et exploite un agent IA auto-hébergé pour automatiser vos procédés industriels et optimiser le contrôle en temps réel.",
    diagram: {
      selfHostedDb: "Base AquaPure auto-hébergée",
      yourDatabase: "Votre propre base de données",
      connectedPlcs: "Branché à vos automates",
      externalSources: "Sources externes",
      controlPlatform: "Plateforme de contrôle AquaPure",
      intuitiveUi: "Interface intuitive",
      andMore: "Et plus encore !",
      localApi: "API et serveur locaux",
      queryAutomate: "Requête, automatiser le contrôle et visualiser les données",
      uiItems: ["Grille", "Moniteur", "Éditeur", "Formulaire"],
      apiItems: ["Web", "Applications tierces", "Mobile"],
      formatItems: ["JSON", "CSV", "Excel", "Airtable"],
    },
    whyTitle: "Pourquoi AquaPure ?",
    whySubtitle:
      "Automatisez le contrôle industriel, réduisez la consommation d'énergie et prenez des décisions fondées sur des données fiables, sans compromettre la sécurité ni la souveraineté de vos informations.",
    whyFeatures: [
      {
        title: "Optimisation des procédés par l'IA",
        desc: "Des modèles prédictifs qui ajustent vos paramètres en continu pour maximiser l'efficacité et réduire les pertes.",
      },
      {
        title: "Jumeaux numériques intelligents",
        desc: "Une réplique virtuelle de vos installations pour simuler, tester et valider vos décisions avant de les déployer.",
      },
      {
        title: "Contrôle automatisé en temps réel",
        desc: "Pilotez vos équipements avec des seuils de sécurité, des alertes proactives et une supervision centralisée.",
      },
      {
        title: "Intégration transparente",
        desc: "Branchez SCADA, automates et bases de données existantes sans refonte de votre infrastructure.",
      },
      {
        title: "Impact énergétique et environnemental",
        desc: "Réduisez la consommation d'eau et d'énergie tout en documentant vos progrès ESG avec précision.",
      },
      {
        title: "Souveraineté et sécurité des données",
        desc: "Hébergement au Québec, agent IA auto-hébergé, vos données restent sous votre contrôle, chez vous.",
      },
    ],
    partnersTitle: "Soutenu par l'écosystème d'innovation du Québec",
    partnersSubtitle:
      "Une technologie de pointe propulsée par des acteurs de confiance pour accélérer la transition numérique de votre industrie.",
    ctaTitle: "Quel est votre domaine ? Contactez-nous et parlons de votre projet !",
    municipal: "Pour les municipalités",
    industry: "Pour l'industrie",
    contactUs: "Contactez-nous",
  },
  blog: {
    eyebrow: "Blogue",
    title: "Le blogue AquaPure",
    subtitle:
      "Actualités, analyses et retours d'expérience sur la gestion de l'eau en milieu municipal et industriel, sans jargon inutile.",
    noImage: "Aucune image",
    readArticle: "Lire l'article",
    minRead: "min",
    minReadLong: "min de lecture",
    backToBlog: "Retour au blogue",
    topicCtaTitle: "Un sujet que vous aimeriez voir ici ?",
    topicCtaBody:
      "Parlons de votre réalité opérationnelle, nous vous montrons comment la donnée peut y répondre, sans bouleverser ce qui fonctionne déjà.",
    scheduleMeeting: "Planifier une rencontre",
    articleCtaTitle: "Ce sujet vous parle ?",
    articleCtaBody:
      "Découvrez comment AquaPure aide les équipes québécoises à reprendre le contrôle de leurs opérations hydriques.",
    requestDemo: "Demander une démo",
    digitalTwin: "Jumeau numérique",
    articleTitleSuffix: "Blogue AquaPure",
  },
  categories: {
    "Eaux municipales": "Eaux municipales",
    Mine: "Mine",
    "Pâte et papier": "Pâte et papier",
    Agroalimentaire: "Agroalimentaire",
    Opérations: "Opérations",
    Conformité: "Conformité",
  },
  seedPosts: [
    {
      id: "seed-mine",
      slug: "eau-procede-mine-optimiser-sans-compromettre",
      title: "Eau de procédé en mine : optimiser sans compromettre la conformité",
      excerpt:
        "Réutiliser, recycler, réduire, la pression est réelle des deux côtés. Sans visibilité continue, chaque ajustement ressemble à un pari que vos équipes hésitent à prendre.",
      category: "Mine",
      author: "Équipe AquaPure",
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
      category: "Eaux municipales",
      author: "Équipe AquaPure",
      content: `Dans une station de traitement des eaux usées, la marge d'erreur est mince. Un déséquilibre en aération, une montée de turbidité, une pompe qui dérive : les conséquences se mesurent en qualité de rejet, en énergie gaspillée et en heures supplémentaires pour l'équipe de quart.

Pourtant, la majorité des décisions reposent encore sur des instantanés, relevés de terrain, exports SCADA différés, réunions hebdomadaires pour « faire le point ». Entre deux vérifications, la réalité opérationnelle a déjà bougé.

Ce décalage crée un problème silencieux : vos opérateurs savent qu'une anomalie se profile, mais ils n'ont pas les outils pour la quantifier et la remonter avant qu'elle ne devienne un incident. Résultat : interventions en urgence, surfacturation énergétique et justification difficile devant le conseil municipal.

Une supervision en temps réel, corrélée à vos procédés réels, change la posture des équipes. Les alertes deviennent actionnables, les tendances visibles, les rapports ESG documentés automatiquement, sans reconstituer l'historique à la main chaque trimestre.

Chaque semaine sans visibilité continue, ce sont des coûts opérationnels et environnementaux qui s'accumulent sans apparaître dans vos tableaux de bord. La question n'est plus d'avoir plus de capteurs, c'est de transformer ce qu'ils mesurent déjà en décisions immédiates.`,
    },
  ],
};
