import type { DigitalTwinFaqContent } from "./types";

/** FAQ jumeau numérique — contenu structuré par locale (segments + texte plain pour JSON-LD). */
export const digitalTwinFaqFr: DigitalTwinFaqContent = {
  title: "Foire aux questions",
  subtitle:
    "Réponses sur le jumeau numérique pour le traitement des eaux municipales et industrielles au Québec.",
  items: [
    {
      question: "Qu'est-ce qu'un jumeau numérique pour le traitement des eaux ?",
      answerPlain:
        "Un jumeau numérique pour le traitement des eaux est une réplique virtuelle dynamique de votre station ou de votre procédé, alimentée en temps réel par vos capteurs, SCADA et historiques. Il permet de visualiser l'état actuel, de simuler des scénarios et d'anticiper la performance avant d'agir sur le terrain. AquaPure combine cette approche avec un agent IA auto-hébergé pour automatiser le pilotage et documenter vos décisions.",
      segments: [
        {
          type: "text",
          value:
            "Un jumeau numérique pour le traitement des eaux est une réplique virtuelle dynamique de votre station ou de votre procédé, alimentée en temps réel par vos capteurs, SCADA et historiques. Il permet de visualiser l'état actuel, de simuler des scénarios et d'anticiper la performance avant d'agir sur le terrain.",
        },
        {
          type: "text",
          value:
            " Cette approche est largement documentée dans le secteur de l'eau : ",
        },
        {
          type: "link",
          label: "SUEZ, jumeau numérique pour usines d'eau",
          href: "https://www.suez.com/fr/eau/preserver-eau/usines-eau/jumeau-numerique",
          external: true,
        },
        {
          type: "text",
          value:
            ". AquaPure combine cette logique avec un agent IA auto-hébergé pour automatiser le pilotage et documenter vos décisions, voir notre ",
        },
        { type: "link", label: "page d'accueil", href: "/" },
        { type: "text", value: "." },
      ],
    },
    {
      question: "Jumeau numérique, maquette 3D ou BIM : quelle différence ?",
      answerPlain:
        "Le BIM sert à concevoir et documenter un bâtiment ou une usine en phase projet. Une maquette 3D ou un jumeau laser (comme chez Agropur avec Prevu3D) représente surtout la géométrie physique pour l'ingénierie. Le jumeau numérique AquaPure modélise le comportement opérationnel du procédé : débits, charges, aération, chimie, conformité, à partir de données SCADA et capteurs, pas seulement d'un modèle 3D statique.",
      segments: [
        {
          type: "text",
          value:
            "Le BIM sert à concevoir et documenter un bâtiment ou une usine en phase projet. Une maquette 3D ou un jumeau laser représente surtout la géométrie physique pour l'ingénierie, comme l'illustre l'",
        },
        {
          type: "link",
          label: "étude de cas Agropur avec Prevu3D",
          href: "https://www.prevu3d.com/fr/etudes-cas-jumeau-numerique/agropur/",
          external: true,
        },
        {
          type: "text",
          value:
            ". Le jumeau numérique orienté procédé, tel que ",
        },
        {
          type: "link",
          label: "décrit par SUEZ",
          href: "https://www.suez.com/fr/eau/preserver-eau/usines-eau/jumeau-numerique",
          external: true,
        },
        {
          type: "text",
          value:
            ", modélise le comportement opérationnel : débits, charges, aération, chimie et conformité, à partir de données SCADA et capteurs, pas d'un modèle 3D statique seul.",
        },
      ],
    },
    {
      question: "Comment le jumeau numérique se connecte-t-il à mon SCADA et à mes automates ?",
      answerPlain:
        "AquaPure se branche sur vos automates, SCADA et bases de données existantes (PostgreSQL, MongoDB, SQL, exports CSV/JSON) sans refonte complète. Les protocoles industriels courants (OPC-UA, MQTT) permettent d'alimenter le jumeau en temps réel, comme dans les architectures décrites pour Ignition SCADA. Vos opérateurs conservent leurs outils ; la plateforme ajoute prédiction, alertes et automatisation locale.",
      segments: [
        {
          type: "text",
          value:
            "AquaPure se branche sur vos automates, SCADA et bases de données existantes (PostgreSQL, MongoDB, SQL, exports CSV/JSON) sans refonte complète. Les protocoles industriels courants (OPC-UA, MQTT) alimentent le jumeau en temps réel, une architecture comparable à celle décrite pour ",
        },
        {
          type: "link",
          label: "les jumeaux numériques avec Ignition SCADA",
          href: "https://www.operametrix.com/fr/blog/digital-twin-ignition-scada/",
          external: true,
        },
        {
          type: "text",
          value:
            ". Vos opérateurs conservent leurs outils ; la plateforme ajoute prédiction, alertes et automatisation locale sur votre infrastructure.",
        },
      ],
    },
    {
      question: "Peut-on déployer un jumeau numérique sans envoyer nos données dans le cloud ?",
      answerPlain:
        "Oui. AquaPure est conçu pour un déploiement auto-hébergé au Québec : base de données, agent IA et API restent sur votre réseau ou celui d'un hébergeur canadien de votre choix. Vos données opérationnelles ne transitent pas par un cloud public étranger. Consultez notre politique de confidentialité et les exigences sectorielles du MELCCFP pour la traçabilité des effluents.",
      segments: [
        {
          type: "text",
          value:
            "Oui. AquaPure est conçu pour un déploiement auto-hébergé au Québec : base de données, agent IA et API restent sur votre réseau ou celui d'un hébergeur canadien de votre choix. Vos données opérationnelles ne transitent pas par un cloud public étranger.",
        },
        {
          type: "text",
          value: " Détails : ",
        },
        { type: "link", label: "politique de confidentialité AquaPure", href: "/confidentialite" },
        {
          type: "text",
          value: ". Pour les effluents miniers, la traçabilité s'inscrit dans le cadre de la ",
        },
        {
          type: "link",
          label: "Directive 019, MELCCFP",
          href: "https://www.environnement.gouv.qc.ca/milieu_ind/directive019/index.htm",
          external: true,
        },
        { type: "text", value: "." },
      ],
    },
    {
      question: "Comment réduire l'énergie et les produits chimiques grâce au jumeau numérique ?",
      answerPlain:
        "En prédisant la charge entrante et en ajustant l'aération, la recirculation ou le dosage chimique avant une dérive, le jumeau numérique stabilise le procédé et limite la surconsommation. Des déploiements documentés montrent jusqu'à 10 % d'économie d'énergie sur l'aération. AquaPure vise le même type d'optimisation continue, adapté à votre station municipale ou industrielle.",
      segments: [
        {
          type: "text",
          value:
            "En prédisant la charge entrante et en ajustant l'aération, la recirculation ou le dosage chimique avant une dérive, le jumeau numérique stabilise le procédé et limite la surconsommation.",
        },
        {
          type: "text",
          value: " À titre de référence sectorielle, ",
        },
        {
          type: "link",
          label: "Xylem rapporte jusqu'à 10 % d'économie d'énergie sur l'aération",
          href: "https://www.xylem.com/fr-fr/making-waves/water-utilities-news/digital-twin-helps-wastewater-treatment-plant-reduce-aeration-energy-by-10/",
          external: true,
        },
        {
          type: "text",
          value: " grâce à l'optimisation par modèle. Lisez aussi notre article sur le ",
        },
        {
          type: "link",
          label: "pilotage temps réel des stations d'épuration",
          href: "/blogue/station-depuration-pilotage-temps-reel",
        },
        { type: "text", value: "." },
      ],
    },
    {
      question: "Comment anticiper la conformité (Directive 019, métaux lourds) ?",
      answerPlain:
        "Le jumeau numérique croise en continu les données de capteurs, analyses labo et seuils réglementaires pour signaler une dérive avant le rejet. Pour les mines québécoises, la Directive 019 encadre la qualité des effluents et la documentation exigée. AquaPure aide à surveiller les métaux lourds et à tracer les interventions, réduisant le risque d'écarts et le stress des équipes en astreinte.",
      segments: [
        {
          type: "text",
          value:
            "Le jumeau numérique croise en continu capteurs, analyses labo et seuils réglementaires pour signaler une dérive avant le rejet. Au Québec, la ",
        },
        {
          type: "link",
          label: "Directive 019 sur l'industrie minière",
          href: "https://www.environnement.gouv.qc.ca/milieu_ind/directive019/index.htm",
          external: true,
        },
        {
          type: "text",
          value:
            " encadre la qualité des effluents et la documentation exigée. L'INMQ souligne par ailleurs l'importance des outils numériques pour la ",
        },
        {
          type: "link",
          label: "mine intelligente et le jumeau numérique",
          href: "https://inmq.gouv.qc.ca/publication/57/jumeau_numerique",
          external: true,
        },
        {
          type: "text",
          value: ". Voir notre article : ",
        },
        {
          type: "link",
          label: "prédiction des métaux lourds par IA et capteurs",
          href: "/blogue/metaux-lourds-prediction-ia-capteurs-mine",
        },
        { type: "text", value: "." },
      ],
    },
    {
      question: "Qu'est-ce qu'un capteur virtuel (NH₄, DCO, redox) ?",
      answerPlain:
        "Un capteur virtuel est un modèle mathématique ou IA qui estime un paramètre difficile à mesurer en continu (ammonium, DCO, redox) à partir d'autres signaux disponibles. Les solutions Aquadvanced de SUEZ et les approches prédictives du marché utilisent cette logique pour anticiper NH₄ ou O₂. AquaPure reconstruit ces grandeurs, prédit leur évolution sur 24 h et peut envoyer des consignes à vos équipements.",
      segments: [
        {
          type: "text",
          value:
            "Un capteur virtuel est un modèle mathématique ou IA qui estime un paramètre difficile à mesurer en continu (NH₄, DCO, redox) à partir d'autres signaux disponibles.",
        },
        {
          type: "text",
          value: " Des références sectorielles comme ",
        },
        {
          type: "link",
          label: "Aquadvanced Plant (SUEZ)",
          href: "https://www.suez.com/fr/eau/preserver-eau/reseau-eau/aquadvanced/plant",
          external: true,
        },
        {
          type: "text",
          value: " et le projet ",
        },
        {
          type: "link",
          label: "TwinPlant DHI à Bresso-Niguarda",
          href: "https://www.dhigroup.com/fr/projets/un-jumeau-numerique-au-service-des-operations-de-la-station-depuration-des-eaux-usees-de-bresso-niguarda",
          external: true,
        },
        {
          type: "text",
          value:
            " illustrent la prédiction sur 24 h à partir du SCADA. AquaPure reconstruit ces grandeurs et peut envoyer des consignes à vos équipements.",
        },
      ],
    },
    {
      question: "Combien de temps faut-il pour déployer un jumeau numérique sur un site existant ?",
      answerPlain:
        "Un pilote typique démarre en quelques semaines : connexion aux sources de données prioritaires, configuration des tableaux de bord et validation avec vos opérateurs. L'intégration sans refonte SCADA accélère le calendrier. La durée complète dépend du nombre de procédés, de la qualité des historiques et des objectifs (supervision, prédiction ou automatisation). Contactez-nous pour un plan adapté à votre site.",
      segments: [
        {
          type: "text",
          value:
            "Un pilote typique démarre en quelques semaines : connexion aux sources de données prioritaires, configuration des tableaux de bord et validation avec vos opérateurs. L'intégration sans refonte SCADA accélère le calendrier.",
        },
        {
          type: "text",
          value:
            " La durée complète dépend du nombre de procédés, de la qualité des historiques et des objectifs (supervision, prédiction ou automatisation). ",
        },
        { type: "link", label: "Contactez-nous pour un plan sur mesure", href: "/#contact" },
        { type: "text", value: "." },
      ],
    },
    {
      question: "Quels secteurs au Québec bénéficient le plus du jumeau numérique ?",
      answerPlain:
        "Les municipalités (STEP et réseaux), les mines soumises à la Directive 019, la pâte et papier (eaux de procédé, biodigestion) et l'agroalimentaire (eaux usées à charge variable) sont les secteurs où le ROI est le plus rapide. AquaPure accompagne déjà des acteurs de l'écosystème québécois de l'innovation en eau.",
      segments: [
        {
          type: "text",
          value:
            "Les municipalités (STEP), les mines soumises à la Directive 019, la pâte et papier et l'agroalimentaire sont les secteurs où le retour sur investissement est souvent le plus rapide. Explorez nos retours d'expérience : ",
        },
        {
          type: "link",
          label: "station d'épuration en temps réel",
          href: "/blogue/station-depuration-pilotage-temps-reel",
        },
        { type: "text", value: ", " },
        {
          type: "link",
          label: "eau de procédé en mine",
          href: "/blogue/eau-procede-mine-optimiser-sans-compromettre",
        },
        { type: "text", value: " et " },
        {
          type: "link",
          label: "métaux lourds et capteurs",
          href: "/blogue/metaux-lourds-prediction-ia-capteurs-mine",
        },
        { type: "text", value: "." },
      ],
    },
    {
      question: "Comment démarrer un pilote avec AquaPure Analytics ?",
      answerPlain:
        "Identifiez un procédé prioritaire (aération, clarification, traitement minier), partagez vos sources de données et fixez un objectif mesurable : énergie, chimie ou conformité. Nous proposons une démo, un pilote encadré et un accompagnement avec vos opérateurs. Prenez contact via le formulaire du site ou par courriel à contact@aquapure-analytics.com.",
      segments: [
        {
          type: "text",
          value:
            "Identifiez un procédé prioritaire (aération, clarification, traitement minier), partagez vos sources de données et fixez un objectif mesurable : énergie, chimie ou conformité. Nous proposons une démo, un pilote encadré et un accompagnement avec vos opérateurs.",
        },
        { type: "text", value: " " },
        { type: "link", label: "Formulaire de contact", href: "/#contact" },
        { type: "text", value: " · " },
        {
          type: "link",
          label: "contact@aquapure-analytics.com",
          href: "mailto:contact@aquapure-analytics.com",
        },
        { type: "text", value: "." },
      ],
    },
  ],
};

const EN_FAQ: Pick<DigitalTwinFaqContent["items"][number], "question" | "answerPlain" | "segments">[] = [
  {
    question: "What is a digital twin for water treatment?",
    answerPlain:
      "A water treatment digital twin is a dynamic virtual replica of your plant or process, fed in real time by sensors, SCADA and historical data. It visualizes current state, simulates scenarios and anticipates performance before field action. AquaPure combines this with a self-hosted AI agent to automate control and document decisions.",
    segments: [
      {
        type: "text",
        value:
          "A water treatment digital twin is a dynamic virtual replica of your plant or process, fed in real time by sensors, SCADA and historical data. It visualizes current state, simulates scenarios and anticipates performance before field action.",
      },
      { type: "text", value: " See also " },
      {
        type: "link",
        label: "SUEZ, digital twin for water plants",
        href: "https://www.suez.com/fr/eau/preserver-eau/usines-eau/jumeau-numerique",
        external: true,
      },
      {
        type: "text",
        value: ". AquaPure adds a self-hosted AI agent, ",
      },
      { type: "link", label: "homepage", href: "/" },
      { type: "text", value: "." },
    ],
  },
  {
    question: "Digital twin vs. 3D model or BIM: what's the difference?",
    answerPlain:
      "BIM supports design and documentation during projects. A 3D or laser twin (e.g. Agropur with Prevu3D) mainly represents physical geometry for engineering. AquaPure's process digital twin models operational behaviour, flows, loads, aeration, chemistry, compliance, from SCADA and sensor data.",
    segments: [
      { type: "text", value: "BIM supports design during projects. A 3D twin focuses on geometry, see " },
      {
        type: "link",
        label: "Agropur / Prevu3D case study",
        href: "https://www.prevu3d.com/fr/etudes-cas-jumeau-numerique/agropur/",
        external: true,
      },
      { type: "text", value: ". A process twin (" },
      {
        type: "link",
        label: "SUEZ overview",
        href: "https://www.suez.com/fr/eau/preserver-eau/usines-eau/jumeau-numerique",
        external: true,
      },
      {
        type: "text",
        value: ") models operational behaviour from live SCADA and sensor data.",
      },
    ],
  },
  {
    question: "How does it connect to my SCADA and PLCs?",
    answerPlain:
      "AquaPure connects to existing PLCs, SCADA and databases without a full overhaul. Standard industrial protocols (OPC-UA, MQTT) feed the twin in real time. Operators keep their tools; the platform adds prediction, alerts and local automation.",
    segments: [
      {
        type: "text",
        value:
          "AquaPure connects to existing PLCs, SCADA and databases (PostgreSQL, MongoDB, SQL, CSV/JSON) without a full overhaul. See ",
      },
      {
        type: "link",
        label: "digital twins with Ignition SCADA",
        href: "https://www.operametrix.com/fr/blog/digital-twin-ignition-scada/",
        external: true,
      },
      {
        type: "text",
        value: " for a comparable architecture. The platform adds prediction and local automation.",
      },
    ],
  },
  {
    question: "Can we deploy without sending data to the public cloud?",
    answerPlain:
      "Yes. AquaPure is designed for self-hosted deployment in Quebec: database, AI agent and API stay on your network or a Canadian host you choose. See our privacy policy and MELCCFP Directive 019 framework for effluent traceability.",
    segments: [
      {
        type: "text",
        value: "Yes. Self-hosted in Quebec, data stays on your network. ",
      },
      { type: "link", label: "Privacy policy", href: "/confidentialite" },
      { type: "text", value: ". Mining effluents: " },
      {
        type: "link",
        label: "Directive 019, MELCCFP",
        href: "https://www.environnement.gouv.qc.ca/milieu_ind/directive019/index.htm",
        external: true,
      },
      { type: "text", value: "." },
    ],
  },
  {
    question: "How can a digital twin reduce energy and chemical use?",
    answerPlain:
      "By predicting incoming load and adjusting aeration, recirculation or dosing before drift, the twin stabilizes the process. Documented deployments report up to 10% aeration energy savings. AquaPure targets the same continuous optimization for your plant.",
    segments: [
      { type: "text", value: "Predictive control stabilizes the process and limits over-consumption. " },
      {
        type: "link",
        label: "Xylem, up to 10% aeration energy reduction",
        href: "https://www.xylem.com/fr-fr/making-waves/water-utilities-news/digital-twin-helps-wastewater-treatment-plant-reduce-aeration-energy-by-10/",
        external: true,
      },
      { type: "text", value: ". Read " },
      {
        type: "link",
        label: "real-time WWTP control",
        href: "/blogue/station-depuration-pilotage-temps-reel",
      },
      { type: "text", value: "." },
    ],
  },
  {
    question: "How to anticipate compliance (Directive 019, heavy metals)?",
    answerPlain:
      "The twin continuously cross-checks sensors, lab results and regulatory limits. Directive 019 governs mining effluents in Quebec. AquaPure helps monitor heavy metals and trace interventions.",
    segments: [
      { type: "text", value: "Continuous cross-check of sensors and limits. " },
      {
        type: "link",
        label: "Directive 019",
        href: "https://www.environnement.gouv.qc.ca/milieu_ind/directive019/index.htm",
        external: true,
      },
      { type: "text", value: ", " },
      {
        type: "link",
        label: "INMQ, mining digital twin",
        href: "https://inmq.gouv.qc.ca/publication/57/jumeau_numerique",
        external: true,
      },
      { type: "text", value: ", " },
      {
        type: "link",
        label: "heavy metals & AI",
        href: "/blogue/metaux-lourds-prediction-ia-capteurs-mine",
      },
      { type: "text", value: "." },
    ],
  },
  {
    question: "What is a virtual sensor (NH₄, COD, redox)?",
    answerPlain:
      "A virtual sensor is a model that estimates hard-to-measure parameters from available signals. SUEZ Aquadvanced and DHI TwinPlant illustrate 24h SCADA-based prediction. AquaPure reconstructs these values and can send setpoints to equipment.",
    segments: [
      { type: "text", value: "Models estimate NH₄, COD or redox from available signals. See " },
      {
        type: "link",
        label: "Aquadvanced Plant",
        href: "https://www.suez.com/fr/eau/preserver-eau/reseau-eau/aquadvanced/plant",
        external: true,
      },
      { type: "text", value: " and " },
      {
        type: "link",
        label: "DHI TwinPlant",
        href: "https://www.dhigroup.com/fr/projets/un-jumeau-numerique-au-service-des-operations-de-la-station-depuration-des-eaux-usees-de-bresso-niguarda",
        external: true,
      },
      { type: "text", value: "." },
    ],
  },
  {
    question: "How long does deployment take on an existing site?",
    answerPlain:
      "A typical pilot starts in a few weeks: connect priority data sources, configure dashboards and validate with operators. Contact us for a site-specific plan.",
    segments: [
      {
        type: "text",
        value: "A pilot often starts in a few weeks without SCADA overhaul. ",
      },
      { type: "link", label: "Contact us", href: "/#contact" },
      { type: "text", value: "." },
    ],
  },
  {
    question: "Which Quebec sectors benefit most?",
    answerPlain:
      "Municipal WWTPs, mining (Directive 019), pulp & paper and agri-food see the fastest ROI. See our blog articles on WWTP control, mine process water and heavy metals.",
    segments: [
      { type: "text", value: "Municipal, mining, pulp & paper and agri-food. " },
      {
        type: "link",
        label: "WWTP real-time control",
        href: "/blogue/station-depuration-pilotage-temps-reel",
      },
      { type: "text", value: ", " },
      {
        type: "link",
        label: "mine process water",
        href: "/blogue/eau-procede-mine-optimiser-sans-compromettre",
      },
      { type: "text", value: ", " },
      {
        type: "link",
        label: "heavy metals",
        href: "/blogue/metaux-lourds-prediction-ia-capteurs-mine",
      },
      { type: "text", value: "." },
    ],
  },
  {
    question: "How to start a pilot with AquaPure Analytics?",
    answerPlain:
      "Pick a priority process, share data sources and set a measurable goal. We offer a demo and guided pilot. Contact form or email at contact@aquapure-analytics.com.",
    segments: [
      { type: "text", value: "Pick a process, share data, set a goal. " },
      { type: "link", label: "Contact form", href: "/#contact" },
      { type: "text", value: " · " },
      {
        type: "link",
        label: "contact@aquapure-analytics.com",
        href: "mailto:contact@aquapure-analytics.com",
      },
      { type: "text", value: "." },
    ],
  },
];

export const digitalTwinFaqEn: DigitalTwinFaqContent = {
  title: "Frequently asked questions",
  subtitle:
    "Answers about digital twins for municipal and industrial water treatment in Quebec.",
  items: EN_FAQ as DigitalTwinFaqContent["items"],
};

const ES_QUESTIONS = [
  "¿Qué es un gemelo digital para el tratamiento de aguas?",
  "¿Gemelo digital, maqueta 3D o BIM: cuál es la diferencia?",
  "¿Cómo se conecta a mi SCADA y automatización?",
  "¿Se puede desplegar sin enviar datos a la nube pública?",
  "¿Cómo reducir energía y productos químicos?",
  "¿Cómo anticipar el cumplimiento (Directiva 019, metales pesados)?",
  "¿Qué es un sensor virtual (NH₄, DQO, redox)?",
  "¿Cuánto tiempo lleva el despliegue en un sitio existente?",
  "¿Qué sectores en Québec se benefician más?",
  "¿Cómo iniciar un piloto con AquaPure Analytics?",
];

export const digitalTwinFaqEs: DigitalTwinFaqContent = {
  title: "Preguntas frecuentes",
  subtitle:
    "Respuestas sobre el gemelo digital para el tratamiento de aguas municipales e industriales en Québec.",
  items: EN_FAQ.map((en, i) => ({
    question: ES_QUESTIONS[i] ?? en.question,
    answerPlain: en.answerPlain,
    segments: en.segments,
  })),
};

const ZH_QUESTIONS = [
  "水处理数字孪生是什么？",
  "数字孪生、3D 模型与 BIM 有何区别？",
  "如何与现有 SCADA 和 PLC 连接？",
  "能否在不将数据发送至公有云的情况下部署？",
  "数字孪生如何降低能耗和药剂消耗？",
  "如何预判合规（019 指令、重金属）？",
  "什么是虚拟传感器（NH₄、COD、氧化还原）？",
  "在现有站点部署需要多长时间？",
  "魁北克哪些行业受益最大？",
  "如何与 AquaPure Analytics 启动试点？",
];

export const digitalTwinFaqZh: DigitalTwinFaqContent = {
  title: "常见问题",
  subtitle: "关于魁北克市政与工业水处理数字孪生的解答。",
  items: EN_FAQ.map((en, i) => ({
    question: ZH_QUESTIONS[i] ?? en.question,
    answerPlain: en.answerPlain,
    segments: en.segments,
  })),
};
