import type { Translations } from "../types";

export const fr: Translations = {
  meta: {
    homeTitle: "AquaPure Analytics — Réduisez vos coûts de traitement d'effluents",
    homeDescription:
      "Chimie, énergie, analyses labo : pilotez vos effluents en temps réel avec vos capteurs et l'IA. Données hébergées au Québec.",
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
    privacy: "Politique de confidentialité",
    linkedInAria: "AquaPure Analytics sur LinkedIn",
    sectors: [
      { label: "Eaux municipales", href: "/#eaux-municipales" },
      { label: "Mine", href: "/#mine" },
      { label: "Pâte et papier", href: "/#pate-et-papier" },
      { label: "Agroalimentaire", href: "/#agroalimentaire" },
    ],
  },
  consent: {
    ariaLabel: "Consentement à la collecte de données",
    message:
      "Nous utilisons des témoins essentiels pour mémoriser vos préférences et pouvons activer des outils d'analyse uniquement avec votre consentement, conformément à la Loi 25 et à la LPRPDE.",
    accept: "Accepter",
    reject: "Refuser",
    learnMore: "Politique de confidentialité",
  },
  home: {
    hero: {
      title: "Réduisez vos coûts de traitement d'effluents, avant que la facture ne s'accumule",
      subtitle:
        "Transformez vos données en décisions immédiates : moins de gaspillage, plus de contrôle, et une performance durable, sans bouleverser vos opérations actuelles.",
      hosting: "Vos données restent au Québec, hébergées chez vous.",
      contact: "Voir comment réduire vos coûts",
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
          title: "Traitement optimisé, coûts et impact maîtrisés.",
          desc: "Pilotez vos opérations de traitement d'eau en temps réel pour réduire les coûts de produits chimiques et d'énergie, stabiliser vos procédés et diminuer l'impact environnemental de votre station municipale.",
        },
        {
          id: "mine",
          label: "MINE",
          title: "Renforcez votre veille de la conformité à la Directive 019.",
          desc: "Surveillez en temps réel la qualité de vos effluents miniers et le respect des seuils réglementaires, notamment pour les métaux lourds : anticipez les écarts, documentez votre conformité et réduisez les risques environnementaux.",
        },
        {
          id: "pate-et-papier",
          label: "PÂTE ET PAPIER",
          title: "Eaux de procédé pilotées, biodigestion renforcée.",
          desc: "Pilotez la gestion des eaux issues de vos opérations et optimisez la biodigestion de vos effluents en temps réel : stabilisez vos procédés, améliorez le rendement biologique et réduisez vos coûts de traitement.",
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
        "Nos interfaces sont très ergonomiques et pensées pour être très intuitives et faciles à utiliser.",
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
          label: "Mission Scout",
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
      privacyConsentBefore: "J'accepte que mes renseignements soient traités conformément à la ",
      privacyConsentLink: "politique de confidentialité",
      privacyConsentAfter: ".",
      errors: {
        lastName: "Le nom est requis.",
        firstName: "Le prénom est requis.",
        emailRequired: "Le courriel est requis.",
        emailInvalid: "Veuillez entrer une adresse courriel valide.",
        message: "Décrivez votre besoin.",
        messageTooLong: "Le message ne peut pas dépasser 5000 caractères.",
        emailTooLong: "Le courriel est trop long.",
        consentRequired: "Vous devez accepter la politique de confidentialité pour envoyer votre demande.",
      },
    },
  },
  digitalTwin: {
    title: "Comment fonctionnent nos plateformes de jumeau numérique ?",
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
    relatedAria: "Articles connexes et pages du site",
    relatedTitle: "Autres articles publiés",
    seeAlso: "Voir aussi :",
    and: "et",
    allArticles: "Tous les articles",
    privacyPolicy: "Politique de confidentialité",
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
    {
      id: "seed-heavy-metals",
      slug: "metaux-lourds-prediction-ia-capteurs-mine",
      title: "Métaux lourds en mine : pourquoi vos capteurs ne suffisent pas — et comment l'IA comble l'écart",
      excerpt:
        "Cuivre, nickel, zinc : les analyses labo arrivent trop tard. Les gestionnaires corrèlent turbidité et pH par régression — AquaPure automatise cette logique avec l'IA et vos capteurs existants.",
      category: "Mine",
      author: "Équipe AquaPure",
      content: `<p><strong>Les métaux lourds en effluent minier</strong> désignent des éléments traces (cuivre, nickel, zinc, plomb, fer) dont les concentrations réglementaires sont strictement encadrées au Québec, notamment sous la <a href="https://www.environnement.gouv.qc.ca/mines/effluents/directive019.htm" rel="noopener noreferrer" target="_blank">Directive 019</a>. Le problème n'est pas de savoir s'il faut les mesurer — c'est de les voir <em>à temps</em> pour agir.</p>

<h2>Pourquoi le suivi des métaux lourds reste un angle mort</h2>

<p>La plupart des sites miniers disposent déjà de capteurs en continu : pH, turbidité, conductivité (EC), oxygène dissous (DO), carbone organique dissous (DOC/DCO). Ces instruments excellent pour piloter le procédé. Ils ne mesurent toutefois pas directement le cuivre, le nickel ou le zinc.</p>

<p>Pour les métaux lourds, la référence reste l'<strong>échantillonnage manuel</strong> suivi d'analyses en laboratoire accrédité. Délai typique : 3 à 10 jours ouvrables entre le prélèvement et le résultat. Pendant ce laps, des milliers de mètres cubes peuvent être rejetés ou recyclés sans que personne ne connaisse la concentration réelle en cuivre (Cu) ou en nickel (Ni).</p>

<p>Les sondes ICP ou les analyseurs métaux en ligne existent, mais leur coût d'acquisition, de calibration et de maintenance les réserve souvent à un ou deux points de mesure. Elles ne couvrent pas l'ensemble du parc de capteurs déjà déployé sur les bassins, les clarificateurs et les stations de neutralisation.</p>

<h2>Ce que font déjà vos collègues : régression et corrélations</h2>

<p>Face à ce décalage, les ingénieurs et gestionnaires environnementaux en mine font ce que les données leur permettent : ils construisent des <strong>courbes de régression</strong> entre des paramètres faciles à mesurer en continu et les concentrations de métaux obtenues au labo.</p>

<p>La turbidité, par exemple, corrèle souvent avec les fractions colloïdales qui transportent le cuivre et le fer. Le pH influence la solubilité des hydroxydes métalliques. Le DOC et le DO modulent la complexation et l'oxydoréduction. Sur des mois de données, une équipe peut établir qu'une hausse de turbidité de 20 NTU précède régulièrement un dépassement du seuil de Cu — mais le calcul reste manuel, mis à jour trimestriellement, et fragile dès que le procédé change.</p>

<figure>
<img src="/blog/article-regression-loupe.png" alt="Loupe sur un graphique de régression illustrant la corrélation entre variables de procédé et concentrations de métaux lourds" width="800" height="450" loading="lazy" />
<figcaption>La régression manuelle entre turbidité, pH ou DOC et les métaux lourds est une pratique courante — mais elle peine à suivre le rythme opérationnel.</figcaption>
</figure>

<h2>Variables corrélées vs métaux cibles en contexte minier</h2>

<table>
<thead><tr><th>Capteur en continu</th><th>Métal(s) souvent corrélés</th><th>Limite de l'approche manuelle</th></tr></thead>
<tbody>
<tr><td>Turbidité</td><td>Cu, Fe, Zn (phase particulaire)</td><td>Dérive saisonnière non captée</td></tr>
<tr><td>pH</td><td>Cu, Ni, Zn (solubilité)</td><td>Effet non linéaire selon le procédé</td></tr>
<tr><td>DOC / DCO</td><td>Cu, Ni (complexation)</td><td>Matrice eau changeante</td></tr>
<tr><td>DO</td><td>Fe, autres métaux redox</td><td>Retard entre mesure et impact</td></tr>
<tr><td>Conductivité (EC)</td><td>Indicateur global de charge ionique</td><td>Peu spécifique par métal</td></tr>
</tbody>
</table>

<h2>Cinq métaux prioritaires pour les mines québécoises</h2>

<p>Selon les profils d'effluents visés par la Directive 019 et les pratiques courantes en Abitibi-Témiscamingue, au Nord-du-Québec et en Côte-Nord, cinq métaux reviennent systématiquement dans les plans de surveillance :</p>

<ul>
<li><strong>Cuivre (Cu)</strong> — lié aux circuits de flottation et aux résidus miniers</li>
<li><strong>Nickel (Ni)</strong> — mines de Ni-Cu et effluents de concentration</li>
<li><strong>Zinc (Zn)</strong> — drainage minier acide et neutralisation</li>
<li><strong>Plomb (Pb)</strong> — traces dans certains gisements polymétalliques</li>
<li><strong>Fer (Fe)</strong> — indicateur de précipitation et de transport colloïdal</li>
</ul>

<p>Ces cinq éléments ne représentent pas l'intégralité des obligations réglementaires (l'arsenic ou le cadmium peuvent aussi s'appliquer selon le certificat d'autorisation), mais ils concentrent l'essentiel des efforts de corrélation terrain.</p>

<h2>Comment AquaPure transforme vos capteurs en prédicteurs de métaux</h2>

<p>AquaPure Analytics applique des <strong>modèles d'intelligence artificielle</strong> entraînés sur l'historique de <em>vos</em> capteurs et <em>vos</em> résultats de laboratoire. Plutôt que d'acheter de nouvelles sondes métalliques, la plateforme exploite le signal déjà présent dans le pH, la turbidité, le DOC, le DO et la conductivité pour estimer en continu les concentrations de Cu, Ni, Zn, Pb et Fe.</p>

<ol>
<li><strong>Calibration initiale</strong> — croisement des séries capteurs et analyses labo sur une période représentative</li>
<li><strong>Prédiction en temps réel</strong> — estimation des concentrations métalliques à chaque pas de temps capteur</li>
<li><strong>Alertes avant dépassement</strong> — notification lorsque la trajectoire approche un seuil réglementaire</li>
<li><strong>Rapports auditables</strong> — traçabilité pour les inspections et les rapports au MELCCFP</li>
</ol>

<p>Contrairement à une feuille Excel mise à jour tous les trimestres, le modèle se réajuste lorsque le procédé évolue — nouvelle charge, saison, modification de chaux ou de polymère — tout en conservant la logique de régression que vos équipes connaissent déjà.</p>

<h2>Moins de coûts, moins de stress lors des visites du MELCCFP</h2>

<p>Chaque analyse labo accréditée pour un panel métaux coûte entre 80 $ et 250 $ par échantillon, selon la matrice et le nombre d'éléments. Multipliez par la fréquence de prélèvement sur un site — souvent plusieurs points par semaine — et le poste dépasse facilement des dizaines de milliers de dollars par année, sans compter le temps terrain.</p>

<p>La prédiction continue ne remplace pas les analyses de référence exigées par le certificat d'autorisation. Elle permet de <strong>concentrer les prélèvements</strong> là où le modèle signale une anomalie, de réduire les campagnes « à l'aveugle » et d'arriver préparé lors d'une visite inopinée du <strong>Ministère de l'Environnement, de la Lutte contre les changements climatiques, de la Faune et des Parcs</strong> (MELCCFP).</p>

<blockquote>Quand un inspecteur demande « qu'avez-vous fait entre le prélèvement du 3 et le dépassement du 12 ? », une courbe de prédiction horaire vaut mieux qu'une supposition.</blockquote>

<p>Les équipes passent moins de nuits à reconstituer l'historique dans Excel et plus de temps à corriger la cause — dosage de chaux, recirculation, arrêt temporaire d'une ligne de rejet.</p>

<p>Pour aller plus loin sur le pilotage hydrique : <a href="/blogue/eau-procede-mine-optimiser-sans-compromettre" rel="noopener noreferrer">eau de procédé en mine</a> et <a href="/blogue/station-depuration-pilotage-temps-reel" rel="noopener noreferrer">station de dépuration en temps réel</a>.</p>

<h2>Questions fréquentes</h2>

<h3>Les capteurs de pH et turbidité peuvent-ils vraiment prédire le cuivre ?</h3>
<p>Oui, dans la mesure où un lien statistique stable existe entre vos paramètres de procédé et vos analyses labo. C'est exactement ce que font déjà vos ingénieurs par régression — l'IA industrialise et actualise cette logique en continu.</p>

<h3>La prédiction IA remplace-t-elle les analyses accréditées ?</h3>
<p>Non. Elle complète la surveillance réglementaire en offrant une visibilité entre deux prélèvements officiels et en ciblant les campagnes labo là où le risque est le plus élevé.</p>

<h3>Quels capteurs AquaPure utilise-t-il ?</h3>
<p>Les capteurs déjà installés sur votre site : pH, turbidité, conductivité, oxygène dissous (DO), carbone organique dissous (DOC/DCO), et d'autres signaux de procédé disponibles via SCADA ou API.</p>

<h3>Combien de métaux la plateforme prédit-elle ?</h3>
<p>Cinq métaux prioritaires en contexte minier québécois : cuivre (Cu), nickel (Ni), zinc (Zn), plomb (Pb) et fer (Fe). D'autres paramètres peuvent être ajoutés selon votre certificat d'autorisation.</p>

<p><em>Dernière mise à jour : juin 2026.</em></p>`,
    },
  ],
};
